const express = require('express');
const newRouter = express.Router();

const {addNewMessage : addMessage} = require('./indexRouter');

newRouter.get('/', (req, res) => {
    res.render('formViews');
})

newRouter.post('/', (req, res)=> {
    const {message, name} = req.body;
    addMessage({text : message, user : name, added : new Date()});
    res.redirect('/');
})

module.exports = newRouter;