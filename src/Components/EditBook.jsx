import React, { useState } from 'react'
import { useContext } from 'react';
import { editContextResponse } from '../ContextShare/ContextApi';
import { editBooks } from '../Services/allApi';

function EditBook({item}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const {editRes ,setEditRes}=useContext(editContextResponse)
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [errors, setErrors] = useState({})

    const[books,setBooks] =useState({
        id:item._id,
        title:item.title,
        author:item.author,
        description:item.description
      })
      
      
      const handleSumbit=async(id)=>{
        const{title,author,description} = books
        if(!title||!author||!description){
          alert('please fill form')
          setErrors({
            title: !title ? "Title is required" : "",
            author: !author ? "Author is required" : "",
            description: !description ? "Description is required" : ""
          })
        }
        else{ 
        const reqBody = new FormData
        reqBody.append("title",title)
        reqBody.append("author",author)
        reqBody.append("description",description)
        
        try{
          const response = await editBooks(id,reqBody)
          console.log(response)
          if(response.status==200){
            alert('book Edited successfully')
            setEditRes(response.data)
            setIsModalOpen(false)

            setErrors({})
          }
          else{
            alert(response.data)
          }
          
        }
        catch(error){
          console.log(error);
          
        }
        }
      }
  return (
    <div>
       <button onClick={openModal} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-2 rounded shadow-md transition duration-200">
            Edit Book
          </button>

        {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✖️
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Book</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Title</label>
                <input
                onChange={(e)=>setBooks({...books ,title:e.target.value})}
                  type="text"
                  value={books.title}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter book title"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Author</label>
                <input
                  onChange={(e)=>setBooks({...books ,author:e.target.value})}
                  type="text"
                  value={books.author}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter author name"
                />
                {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                 value={books.description}
                onChange={(e)=>setBooks({...books ,description:e.target.value})}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter book description"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>
              
            </form>
            <button
                onClick={()=>{handleSumbit(item._id)}}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
              >
                Edit Book
              </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditBook