const express = require('express');
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get('/', (req, res) => {
    res.render('index', {
        title : "Mini Message Board",
        messages
    })
});

indexRouter.get('/:user/:text', (req, res) => {
    const {user, text} = req.params;
    const message = messages.find( (message) => (message.text === text) && (message.user === user) )
    if (!message) {
        throw new Error("Some mistake is made in the param's section");
    }
    res.render('messageDetails', {
        user : message.user,
        text : message.text,
        added : message.added
    });
})

function addNewMessage(message) {
    messages.push(message);
}

module.exports = {indexRouter, addNewMessage};