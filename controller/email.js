const emailModel=require('../models/email')
const nodemailer=require('nodemailer')

const email=async(req,res)=>{
    const {email}=req.body
    const {user}=await emailModel.create({user:email})
   
    let transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'soorajsurendran8196@gmail.com',
            pass:'Soorajptk@upaobca011'
        }        
    })
    var mailOptions = {
     from: "soorajsurendran8196@gmail.com",
    to: user,
    subject:'ictak coding challenge',
    text:`your email is ${user}`
    };

   const result=await transporter.sendMail(mailOptions)
    if(result.rejected.length !== 0){
      console.log("something went wrong")  
    }
    let obj={result:result.response,email:user}
    console.log(obj)
    res.render('result',{obj})
}

module.exports={email}