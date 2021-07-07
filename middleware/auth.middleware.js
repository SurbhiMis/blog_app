const e = require('express');
const jwt =  require('jsonwebtoken');
const isAuthorized = require('../utils/permission');

const authMiddleware = (req,res,next)=>{
    const token = req.headers['authentication'];
    //console.log( req.originalUrl.split('/'));
    if(!token) return res.status(401).send('Token Missing..')
    try{
        const decoded = jwt.verify(token,'Secret');
        const role = decoded.role;
        const id = decoded.id;
        //console.log(role , id)
        if(isAuthorized(role , req.originalUrl.split('/')[1] , req.method) ){
            req.id = id;
            next();
        }
        else{
            res.status(401).send('Unauthorized Access')
        }
    }
    catch(err){
        res.send({
            success: false,
            error: "Unauthorized "
        })
    }
}

module.exports = authMiddleware;