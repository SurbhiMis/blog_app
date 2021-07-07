const { getUserByEmail } = require("../../models/user");
const jwt = require('jsonwebtoken')
const isValidate = require('./validate')
const crypto = require('crypto');


async function handleLogin(req,res,next){
    const user = req.body;
    const validate = isValidate(user);
    if(!validate.success){
        return res.status(400).send(validate);
    }

    try{
        const existedUser = await getUserByEmail(user.email)
        
        if(existedUser){
            
            const hashedPwd = crypto.createHash('sha512').update(user.password).digest('hex');
            if(existedUser.password === hashedPwd){
                const token = jwt.sign({
                    id : existedUser.id,
                    role: existedUser.role
                },'Secret',{
                    expiresIn : '1d'
                });
                res.send({
                    success: true,
                    token : token
                })
            }
            else{
                res.status(400).send({
                    success:false,
                    error: "Password and Username are incorrect.."
                })
            }
        }else{
            res.status(404).send({
                success:false,
                error: "User not found"
            })
        }
        res.send(result);
        
    }catch(e){
        res.status(500).send({
            success:false,
            error: "Something went wrong...."
        })
    }
    
    
}

module.exports= handleLogin;