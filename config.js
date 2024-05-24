
const IsLogin =JSON.parse(localStorage.getItem('IsLoginData'))

const config = {
    userProfile : [{
      username: "john_doe",
      name: "John Doe",
      email: "john@gmail.com",
      password: "john@123",
      profilePic: "https://example.com/profilepic.jpg",
      phoneNumber: "+1234567890",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "State",
        country: "Country",
        zipCode: "12345",
      },
      role:'user'
    },
    {
      username: "broker_doe",
      name: "broker Doe",
      email: "broker@gmail.com",
      password: "broker@123",
      profilePic: "https://example.com/profilepic.jpg",
      phoneNumber: "+1234567890",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "State",
        country: "Country",
        zipCode: "12345",
      },
      role:'broker'
    }],
      IsLogin:IsLogin 



  };
  

export const ISloginRole =JSON.parse(localStorage.getItem('role'))
 export const GetKey  =  ISloginRole?.name|| ''
 

 

 export const BaseUrl = "https://listingapi.meander.software/"
 export const Active_Mode = '66474b721397b888844c7748'
 export const User_roleID = '66474d051397b888844c774e'

 
  export default config;