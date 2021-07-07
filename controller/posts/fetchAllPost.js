const { getPosts } = require("../../models/postModel");


async function fetchAllPost(req,res,next){
    try{
        const result = await getPosts();
        res.send(result)
    }
    catch(e){
        res.status(500).send({
            success:false,
            error: e.message
        })
    }
}

module.exports = fetchAllPost;
