import { commonAPI } from "./commonApi";
import { serverURL } from "./serverUrl";

export const postBooks =async(reqbody)=>{
 return await commonAPI('post',`${serverURL}/addBook` ,reqbody,"" )
}

export const getBooks =async()=>{
    return await commonAPI('get',`${serverURL}/addBook` ,"","" )
}

export const deleteBookApi = async(bid)=>{
    return await commonAPI('delete',`${serverURL}/addBook/${bid}`)
}
export const editBooks =async(id,reqbody)=>{
    return await commonAPI('put',`${serverURL}/addBook/${id}` ,reqbody,"" )
   }