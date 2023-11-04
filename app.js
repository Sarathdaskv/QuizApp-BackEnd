const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors = require('cors')
const morgan=require('morgan')
const dbConnect=require('./dbConnection')
const app=new express();
app.use(cors())
dotenv.config({path:'config.env'});

dbConnect()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT=process.env.PORT||8080;
app.use(morgan('tiny')); 

app.use('/',require('./routes/userRouter'))

app.listen(PORT,()=>{
    console.log(` Server listening at ${PORT}`);
})
