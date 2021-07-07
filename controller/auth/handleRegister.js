const e = require('express');
const {createUser} = require('./../../models/user');
const isValidate = require('./validate');
const crypto = require('crypto');

async function handleRegister(req,res,next){
    const user = req.body;
    const validate = isValidate(user);
    if(!validate.success){
        return res.status(400).send(validate);
    }
    try{
        const hashedPwd = crypto.createHash('sha512').update(user.password).digest('hex');
        const result = await createUser(user.name,user.email,hashedPwd);
        if(result && result.insertId){
            res.send({
                success: true
            })
        }else{
            res.status(500).send({
                success: false,
                error:"Something went wrong..."
            })
        }
        
    }catch(e){
        let msg = e.message;
        if(e.code ==='ER_DUP_ENTRY'){
            msg = "Email id already exist";
        }
        res.status(401).send({
            success:false,
            error: msg
        });
    }
    

}

// const validateEmail = email(user);
//     const validateName = email(user);
//     const validatePassword = email(user);

//     if(validateEmail.success){
//         return res.status(400).send(validateEmail);
//     }
//     if(validateName.success){
//         return res.status(400).send(validateName);
//     }
//     if(validatePassword.success){
//         return res.status(400).send(validatePassword);
//     }

module.exports= handleRegister;