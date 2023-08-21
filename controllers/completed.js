const CompletedTodo = require("../models/completed");

exports.getCompleted = async (req, res, next) => {
  
   try{
    const result = await CompletedTodo.findAll({ where:{ userId:req.user.id }});
      res.status(200).json(result);
   }catch(err) {
      // console.log(err);
      res.status(500).json({err:err})
    };
};


exports.postCompleted = async (req, res, next) => {
    try {
      const text = req.body.text;
      // const email = req.body.email;
      // const mobile = req.body.mobile;
      const data = await CompletedTodo.create({
        text:text,
        userId:req.user.id
      });
      res.status(201).json(data);
      // res.status(201).json({ newUserDetail: data });
    } catch (err) {
      res.status(404).json({ error: err });
    }
  };

exports.deleteCompleted = async (req, res, next) => {
    try {
      const completedId = req.params.completedId;
      console.log(completedId);
      const todoField = await CompletedTodo.findByPk(completedId);
      await todoField.destroy({where: {userId:req.user.id}});
      res.status(201).json({ delete: todoField });
    } catch (err) {
      console.error(err);
    }
  };
  
