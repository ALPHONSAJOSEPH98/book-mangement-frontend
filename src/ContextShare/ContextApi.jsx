import React, { createContext, useState } from 'react'

export const addContextResponse= createContext()
export const editContextResponse= createContext()
function ContextApi({children}) {
    const [addRes ,setAddRes]=useState('')
    const [editRes ,setEditRes]=useState('')
  return (
    <div>
         <addContextResponse.Provider value={{addRes ,setAddRes}} >
         <editContextResponse.Provider value={{editRes ,setEditRes}} >
         {children}
         </editContextResponse.Provider>
        </addContextResponse.Provider>
    </div>
  )
}

export default ContextApi