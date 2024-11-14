import React from 'react'
import AddBooks from '../Components/AddBooks'
import ViewBooks from '../Components/ViewBooks'

function DashBoard() {
  return (
    <div className='mb-5 pb-5'>
        <h1 className='text-center font-bold text-3xl'>Find Your Books</h1>
       <div className='d-flex'>
       <ViewBooks/>
       </div>
      <div>
       <AddBooks/>
        </div>
    </div>
  )
}

export default DashBoard