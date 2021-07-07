const handlePostCreate = require('./../controller/posts/handlePostCreate');
const fetchAllPost = require('./../controller/posts/fetchAllPost')
const handleUpdatePost = require('./../controller/posts/handleUpdatePost')
const handleDeletePost = require('./../controller/posts/handleDeletePost')
const fetchAPost = require('./../controller/posts/fetchAPost')

const router = require('express').Router();


router.post('/', handlePostCreate);

router.get('/', fetchAllPost);

router.put('/:id', handleUpdatePost)

router.delete('/:id', handleDeletePost)

router.get('/:id', fetchAPost)


module.exports = router;
