const express = require("express");
const router = express.Router();
const todoController = require('../controllers/todos');
//const completed = require('../controllers/completed');

router.get('/get-todo', todoController.getTodo);

// router.get('/get-completed', completed.getCompleted);
// router.post('/post-completed', completed.postCompleted);
// router.post('/edit-completed/:completedId', completed.editCompleted);
// router.get('/delete-completed/:completedId', completed.deleteCompleted);

router.post('/post-todo', todoController.postTodo);

router.get('/delete-todo/:todoId', todoController.deleteTodo);

//router.post('/edit-user/:userId', userController.postEdit);

module.exports = router;