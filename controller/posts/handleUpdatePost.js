const { updatePost } = require("../../models/postModel");


async function handleUpdatePost (req,res,next){
    const {title,content} = req.body;
    const id = parseInt(req.params.id);

    const adminid = req.id;
    //res.send({decode});
    if(adminid !== 0){
        try{
            const result = await updatePost(title,content,id);
            
                res.send({
                    success:true,
                    message: id + " Updated..."
                })
        }
        catch(e){
            res.status(500).send({
                success:false,
                error: e
            });
        }
    }
    else{
        res.status(401).send({
            success:false,
            error: "Unauthorized"
        });
    }
}

module.exports = handleUpdatePost;