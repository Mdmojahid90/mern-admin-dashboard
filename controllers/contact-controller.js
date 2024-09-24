const Contact = require("../models/contact-model")

const contactForm = async(req,res)=>{
  try{
    const contactCreated= await new Contact({
      username:req.body.username,
      email:req.body.email,
      message:req.body.message
    })

    await contactCreated.save()
    return res.status(201).json({message:"Message Send Successfully"})
  }catch(err){
    return res.status(400).json({message:"Message is Not Send"})
  }
}

module.exports={contactForm}