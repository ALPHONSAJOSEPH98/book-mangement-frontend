import React, { useContext, useEffect, useState } from 'react'
import {  deleteBookApi, getBooks } from '../Services/allApi'
import { addContextResponse, editContextResponse } from '../ContextShare/ContextApi'

import EditBook from './EditBook'

function ViewBooks() {
    const [books ,setBooks] = useState([])
    const {addRes ,setAddRes}=useContext(addContextResponse)
    const {editRes ,setEditRes}=useContext(editContextResponse)
    const fetchBooks=async()=>{
        try{
          const response= await getBooks()
           console.log(response)
           if(response.status==200){
               setBooks(response.data)
           }
        }
        catch(error){
           console.log(error);
           
        }
       }

       // delete

       

       useEffect(()=>{
        fetchBooks()
       },[addRes,editRes])

       const handleDelete = async(id)=>{
         
        try{ 
        
          const response = await deleteBookApi(id)
          console.log(response)
          
           
            if(response.status==200){
             console.log("Book deleted successfully")
             alert('deleted')
             fetchBooks()
            }
            else{
             console.log('cant delete');
             alert('cant delete')
            }
          }
          catch(error){
           console.log(error);
           
          }
       }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  {books.length > 0 ? (
    books.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
      >
        <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-600 mb-2 text-center">{item.author}</p>
        <p className="text-gray-700 text-sm mb-4 text-center">{item.description}</p>
        <div className="flex justify-center space-x-2">
          <EditBook item={item} />
          <button onClick={()=>{handleDelete(item._id)}} className="border border-gray-600 text-gray-600 font-semibold py-1 px-2 rounded hover:bg-blue-600 hover:text-white transition duration-200">
            Delete Book
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center col-span-full">No books to show</p>
  )}
</div>

  )
}

export default ViewBooks