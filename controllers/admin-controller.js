const User = require("../models/user-model")
const Contact = require("../models/contact-model")

const getAllUsers = async(req,res)=>{
  try{
      const users = await User.find().select({password:0})
      return res.status(200).json(users)
  }catch(err){
    return res.status(400).json({message:"Cannot Fetch All Users Data"})
  }
}


// Delete User By Id
const deleteUserById = async(req,res)=>{
 try{
    const id = req.params.id;
    if(!id){
      return console.log("Did Not Get User Id")
    }
    const deletedUser = await User.deleteOne({_id:id})
   return res.status(200).json({message:"User Deleted Successfully",deletedUser})
 }catch(err){
  return res.status(400).json({message:"User Not Deleted"})
 }
}

//  Get user by id logic
const getUserById =async(req,res)=>{
  try{
    const id = req.params.id;
    if(!id){
      return console.log("Did Not Get User Id")
    }
    const userData = await User.findOne({_id:id}).select({password:0})
    return res.status(200).json(userData)
  }catch(err){
    return res.status(400).json({message: "Did Not Get User Data"})
  }
}

//Update User By Id Logic

const updateUserById = async(req,res)=>{
  try{
    const id = req.params.id;
    const updateUserData = req.body;
    const updatedUser= await User.updateOne({_id:id},{$set:updateUserData})

    return res.status(200).json({message:"User Updated Successfully",updatedUser})
  }catch(err){
    return res.status(400).json({message:"User Not Updated"})
  }
}

// Get All contacts Logic
const getAllcontacts = async (req,res)=>{
   try{
     const contacts = await Contact.find()
     return res.status(200).json(contacts)
   }catch(err){
    return res.status(400).json({message:"Cannot Fetch All Contacts Data"})
   }
}

// Delete contact By Id
const deleteContactById = async (req,res)=>{
  try{
     const id = req.params.id
     if(!id){
      return console.log("Did Not Get Contact Id")
     }
     const deletedContact = await Contact.deleteOne({_id:id})
     return res.status(200).json({message:"Contact Deleted Successfully",deletedContact})
  }catch(err){
    return res.status(200).json({message:"Contact Not Deleted"})
  }
}


//Get contact by id
const getContactById = async(req,res)=>{
  const id= req.params.id;
  try{
    if(!id){
      return console.log("Did Not Get Contact Id")
    }
    const contactData = await Contact.findOne({_id:id})
    return res.status(200).json(contactData)
  }catch(err){
    return res.status(400).json({message:"Did Not Get Contact Id or Operatin have some problem"})
  }
}

//Update Contact by id
const updateContactById = async(req,res)=>{
  const id = req.params.id;
  const contactUpdateData= req.body
try{
   const updatedContact=await Contact.updateOne({_id:id},{$set:contactUpdateData})
   return res.status(200).json({message:"Contact Updated Successfully",updatedContact})

}catch(err){
  return res.status(400).json({message:"Contact Not Updated"})
}
}


module.exports = {getAllUsers,deleteUserById,getUserById,updateUserById,getAllcontacts,deleteContactById,getContactById,updateContactById}