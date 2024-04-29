
const User = require('../models/user.model.js');
 const addData=async (req,res,next)=>{
    console.log(req.body);
       const { email,contact,name,plan}=req.body;
      // console.log("Received data:", { email, contact, name, plan });
       const newUser=new User({email,contact,name,plan});
       console.log(newUser);
       try {
          await newUser.save();
          res.status(201).json("User Created Succesfully");
       } catch (error) {
            console.log(error);
            console.log("Cant able to add");
       }
};
module.exports = {
    addData,
  };