const pool = require('../db')
const posts = {}

posts.createPost = async ({title,content,created_by})=>{
    // console.log(created_by);
    const query = "insert into posts (title,content, created_by) values(?,?,?)";
    const params = [title,content,created_by];
    const result = await pool.makeQuery(query,params);
    return result;
}

posts.getPosts = async ()=>{
    const query = "select * from posts";
    const result = await pool.makeQuery(query);
    return result;
}


posts.getAPost = async (id)=>{
    const query = "select * from posts where id = ?"
    const params = [id];
    const result = await pool.makeQuery(query,params);
    return result[0];
}

posts.updatePost = async (title,content,id)=>{
    const query = "update posts set title = ?,content=? where id = ?"
    const params = [title,content,id];
    const result = await pool.makeQuery(query,params);
    return result;
}

posts.deletePost = async (id)=>{
    const query = "delete from posts where id = ?"
    const params = [id];
    const result = await pool.makeQuery(query,params);
    return result;

}

module.exports = posts; 

