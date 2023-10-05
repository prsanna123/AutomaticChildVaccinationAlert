const express=require('express');
const mongoose=require('mongoose')
const router=express.Router();
const Child=require('../modals/User');


const twilio = require('twilio');
const nodemailer = require('nodemailer');
// Twilio API credentials
const accountSid = 'AC14c3738989716815241cede315cdea0d';
const authToken = '9702cb99cfc9623818b50406d647920a';
const twilioNumber = '+16053706224';
const client = twilio(accountSid, authToken);

router.get('/getchilddata',async (req,res)=>{
    try{
        const child= await Child.find();
        const currentDate = new Date();
        const threeDaysAgo = new Date(currentDate);
        threeDaysAgo.setDate(currentDate.getDate() - 3);
        const data=await Child.find({
            birth_date: {
              $lt: currentDate,      // Match dates that are less than the current date
              $gte: threeDaysAgo     // Match dates greater than or equal to 3 days ago
            }
          }
        //   ,{
        //     phone_num:1,_id:0,parent_name:1,name:1
        // }
        );
        console.log(currentDate);
        console.log(threeDaysAgo)
        // const child=await Child.find();
        // console.log(data)
        let dat=child
        
        // dat.push({phone_num:"6304307125",parent_name:"ramesh",name:"aruna"})
        async function myfunc(){
            for(let i=0;i<dat.length;i++){
                console.log(dat[i].get('name'))
            const mobileNumber="+91"+dat[i].get('phone_num');
            const parent=dat[i].get('parent_name');
            const child=dat[i].get('name');
            const messageContent="Dear "+parent+" Your daughter "+child+" has vaccination scheduled on "+currentDate
            console.log(mobileNumber+messageContent)
            const message=""
            try {
                console.log(mobileNumber)

            message = await  client.messages.create({
                body: messageContent,
                from: twilioNumber,
                to: mobileNumber,
                });
                res.json({ success: true, messageSid: message.sid });
               
        }
        catch(error){
            console.error('Failed to send message:', error);
            // Return error response
            res.status(500).json({ success: false, error: error.message });
        }
    }
    // res.json({ success: true, messageSid: message.sid });
        
        
        }
        console.log("calling async");
        myfunc();
        console.log("done with messaging");
        // res.send({info:child});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
module.exports=router