const Todo = require("../models/todos");

exports.getTodo = async (req, res, next) => {
  
   try{
    const result = await Todo.findAll({ where:{ userId:req.user.id }});
      res.status(200).json(result);
   }catch(err) {
      console.log(err);
      //res.status(500).json({err:err})
    };
};

exports.postTodo = async (req, res, next) => {
  try {
    const text = req.body.text;  //same as provided in html id whatever IMP!!!
    // const email = req.body.email;
    // const mobile = req.body.mobile;
    const data = await Todo.create({
      text:text,
      userId:req.user.id
    });
    res.status(201).json(data);
    // res.status(201).json({ newUserDetail: data });
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todoId = req.params.todoId;
    console.log(todoId);
    const todoField = await Todo.findByPk(todoId);
    await todoField.destroy({where:{userId:req.user.id}});
    res.status(201).json({ delete: todoField });
  } catch (err) {
    console.error(err);
  }
};
