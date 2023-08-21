const express = require("express");
const router = express.Router();
const todoController = require('../controllers/todos');
const userAuthenticate=require('../middleware/auth');

router.get('/get-todo', userAuthenticate.authenticate,todoController.getTodo);
router.post('/post-todo', userAuthenticate.authenticate,todoController.postTodo);
router.get('/delete-todo/:todoId', userAuthenticate.authenticate,todoController.deleteTodo);
module.exports = router;
