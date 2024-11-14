import React, { useContext, useState } from 'react'
import { postBooks } from '../Services/allApi';
import { addContextResponse } from '../ContextShare/ContextApi';

function AddBooks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {addRes ,setAddRes}=useContext(addContextResponse)
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [errors, setErrors] = useState({})

    const[books,setBooks] =useState({
        title:"",
        author:"",
        description:""
      })
      
      
      const handleSumbit=async()=>{
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
           
            
          const response = await postBooks(reqBody)
          console.log(response.data)
          if(response.status==200){
            alert('book added successfully')
            setAddRes(response.data)
            setIsModalOpen(false)

            setBooks({
                title:"",
        author:"",
        description:""
            })
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
    <div className='text-center'>
        <button onClick={openModal} className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'>
         Add Books
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

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Book</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Title</label>
                <input
                onChange={(e)=>setBooks({...books ,title:e.target.value})}
                  type="text"
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
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter author name"
                />
                {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                onChange={(e)=>setBooks({...books ,description:e.target.value})}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter book description"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
              </div>
              
            </form>
            <button
                onClick={handleSumbit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
              >
                Save Book
              </button>
          </div>
        </div>
      )}


     

    </div>
  )
}

export default AddBooks