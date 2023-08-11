const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname,"./views")));
app.use(bodyParser.json());
app.use(cors());

//res.sendFile(path.join(__dirname,'views'));

//const errorController = require('./controllers/error');

const userRouter = require('./routes/signup');
const todoRoutes = require('./routes/todos');
const todoCompleted = require('./routes/todoscompleted');

app.use('/users',userRouter);
app.use('/todo',todoRoutes);
app.use('/todocompleted',todoCompleted);
const sequelize = require('./util/database');      // to use this automaticaally crete tables for you
//app.use(errorController.get404);


const User=require('./models/signup');
const Completed=require('./models/completed');
const Todo=require('./models/todos');

User.hasMany(Completed);
Completed.belongsTo(User);

User.hasMany(Todo);
Todo.belongsTo(User);

sequelize.sync()               //here the table will create by sync all the things html controller with model user.js .define
.then(() => {
    //console.log(result);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});
