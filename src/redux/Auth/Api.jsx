import axios from "axios";
import { Active_Mode, BaseUrl } from "../../../config";
 

export const LoginAuth = async (data) => {

    try {
        const resoponse = await axios.post(`${BaseUrl}/User/login?mode=${Active_Mode}`,data)
      
       
        return resoponse
    } catch (error) {
      console.log(error)
      throw error;    
    }
  };



export const CreateAuth = async (data) => {

  try {
      const resoponse = await axios.post(`${BaseUrl}/User/create`,data)
    
     
      return resoponse
  } catch (error) {
    console.log(error)
    throw error;    
  }
};


export const updateUser = async (data) => {
  const { editId, values } = data;
  const options = {
    method:'PUT',
    headers: {
      'content-type':'application/json',
    
    },
    body: JSON.stringify(values),
  };
  try {
    const response = await fetch(
      `${BaseUrl}User/update/${editId}`,
      options
    );
    return response.data; // Fixed the variable name here
  } catch (error) {
    console.error(error);
    throw error;
  }
};