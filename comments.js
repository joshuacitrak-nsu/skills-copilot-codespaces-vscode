// Create web server
const express = require('express');
const Router = express.Router();
const commentController = require('../controllers/commentController');

Router.get('/', commentController.getAllComments);
Router.get('/:id', commentController.getCommentById);
Router.post('/', commentController.createComment);
Router.put('/:id', commentController.updateComment);
Router.delete('/:id', commentController.deleteComment);


