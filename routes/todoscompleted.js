const express = require("express");
const router = express.Router();
const completed = require('../controllers/completed');

router.get('/get-completed', completed.getCompleted);
router.post('/post-completed', completed.postCompleted);
router.post('/edit-completed/:completedId', completed.editCompleted);
router.get('/delete-completed/:completedId', completed.deleteCompleted);

module.exports = router;