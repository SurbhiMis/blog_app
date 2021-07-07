const { createPost } = require("../../models/postModel");


async function handlePostCreate (req,res,next){
    const post = req.body;
    const id = req.id;
    //res.send({decode});
    const result = await createPost({...post,created_by:id});
    res.send({
        success:true
    })

}

module.exports = handlePostCreate;