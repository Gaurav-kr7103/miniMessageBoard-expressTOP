const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const path = require('path');
const {indexRouter} = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));//to parse the received data

app.use('/', indexRouter);
app.use('/new', newRouter);

const port = process.env.PORT || 5178;
app.listen(port, (err) => {
    if (err)
        throw err;
    console.log(`Server listening on port ${port}`);
})