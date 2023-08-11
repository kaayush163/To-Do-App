const express = require("express");
const router = express.Router();
const todoController = require('../controllers/todos');
//const completed = require('../controllers/completed');
const userAuthenticate=require('../middleware/auth');


router.get('/get-todo', userAuthenticate.authenticate,todoController.getTodo);

// router.get('/get-completed', completed.getCompleted);
// router.post('/post-completed', completed.postCompleted);
// router.post('/edit-completed/:completedId', completed.editCompleted);
// router.get('/delete-completed/:completedId', completed.deleteCompleted);

router.post('/post-todo', userAuthenticate.authenticate,todoController.postTodo);

router.get('/delete-todo/:todoId', userAuthenticate.authenticate,todoController.deleteTodo);

//router.post('/edit-user/:userId', userController.postEdit);

module.exports = router;