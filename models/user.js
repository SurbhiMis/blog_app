const pool = require('./../db')
const User = {}


User.createUser = async (name,email,password)=>{
    const query = "insert into users(name,email,password) values(?,?,?)";
    const params = [name,email,password];
    const result =await pool.makeQuery(query,params);
    return result;
}

User.getUserByEmail = async (email,password)=>{
    const query = `SELECT * FROM USERS WHERE email=?`;
    const params = [email];
    const result =await pool.makeQuery(query,params);
    return result[0];
}

module.exports = User;