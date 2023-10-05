const mongoose=require('mongoose');
const {Schema}=mongoose;
const ChildSchema=new Schema({
    parent_name:{
        type:String,
        required:true
    },
    phone_num:{
        type:String,
        required:true
    },
    birth_date:{
        type:Date,
        required:true
    },
        name:{
            type:String,
            required:true
        },
        bloodgroup:{
            type:String,
            required:true
        },
        weight:{
            type:String,
            required:true
        },
        email:{
            type:String
        },
        address:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        surname:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        }

},{versionKey:false});
const myModel=mongoose.model("NEWCOL",ChildSchema)
module.exports=myModel;

// const mongoose=require('mongoose');
// const {Schema}=mongoose;

// const sch=new Schema({
//     name:String,
//     class:String,
//     section:String,
//     branch:String
// },{versionKey:false})
// const myModel=mongoose.model("NEWCOL",sch)
// module.exports=myModel;