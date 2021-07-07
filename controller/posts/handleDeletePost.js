const { deletePost } = require("../../models/postModel");



async function handleDeletePost (req,res,next){
    const id = parseInt(req.params.id);
    const adminid = req.id;
    //res.send({decode});
    if(adminid !== 0){

        const result = await deletePost(id);
        if(result.affectedRows >= 1){
            res.send({
                success:true,
                message: id + "deleted"
            })
        }
        else{
            res.status(500).send({
                success:false
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

module.exports = handleDeletePost;