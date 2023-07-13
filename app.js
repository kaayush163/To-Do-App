const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(express.static(path.join(__dirname,"./views")));
app.use(bodyParser.json());
app.use(cors());

//res.sendFile(path.join(__dirname,'views'));

//const errorController = require('./controllers/error');


const todoRoutes = require('./routes/todos');
const todoCompleted = require('./routes/todoscompleted');
app.use('/todo',todoRoutes);
app.use('/todocompleted',todoCompleted);
const sequelize = require('./util/database');      // to use this automaticaally crete tables for you
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(errorController.get404);

sequelize.sync()               //here the table will create by sync with model user.js .define
.then(() => {
    //console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});
