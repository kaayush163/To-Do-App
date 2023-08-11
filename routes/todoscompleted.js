const express = require("express");
const router = express.Router();
const completed = require('../controllers/completed');
const userAuthenticate=require('../middleware/auth');

router.get('/get-completed',userAuthenticate.authenticate, completed.getCompleted);
router.post('/post-completed', userAuthenticate.authenticate,completed.postCompleted);
router.post('/edit-completed/:completedId',userAuthenticate.authenticate, completed.editCompleted);
router.get('/delete-completed/:completedId', userAuthenticate.authenticate,completed.deleteCompleted);

module.exports = router;