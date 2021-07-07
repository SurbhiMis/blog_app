const express =  require('express');
const postRouter = require('./routes/postsRouter')
const authrouter = require('./routes/auth');
const authMiddleware = require('./middleware/auth.middleware');

const app = express();

app.use(express.json());

app.use('/auth',authrouter);

app.use('/posts',authMiddleware, postRouter);

app.listen(4000 , () =>console.log('App is running...'));