const { getAPost } = require("../../models/postModel");


async function fetchAPost(req,res,next){
   
    const id = parseInt(req.params.id);
    const result = await getAPost(id);
    res.send(result)
}

module.exports = fetchAPost;