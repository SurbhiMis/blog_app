const isEmail = require('isemail');

function isValidate(user){
   const {name,email,password} = user;

   if(!isEmail.validate(email)){
    return {
        success:false,
        error : "Invalid Email"
    }
}
if(name.length < 3){
    return {
        success: false,
        error:"Name must be atleast 3 letter long"
    }
}

if(password.length < 8){
    return {
        success: false,
        error:"Password must be atleast 8 letter long"
    }
}

return { 
    success:true
}
}

// const isvalidate = {}

// isvalidate.email = ({email})=>{
//     if(!isEmail.validate(email)){
//         return {
//             success:false,
//             error : "Invalid Email"
//         }
//     }

//     return {
//         success:true
//     }
// }

// isvalidate.name = ({name})=>{
//     if(name.length < 3){
//         return {
//             success: false,
//             error:"Name must be atleast 3 letter long"
//         }
//     }
//     return {
//         success:true
//     }
// }

// isvalidate.password = ({password})=>{
//     if(password.length < 8){
//         return {
//             success: false,
//             error:"Password must be atleast 8 letter long"
//         }
//     }
//     return {
//         success:true
//     }
    
    
// }



module.exports = isValidate;