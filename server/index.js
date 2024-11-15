const express = require("express")
const mongoose=require("mongoose")
const collection = require("./models/User")

const Inv_Route = require("./controller/Inv_Route")
const Stocks_Route = require("./controller/Stocks_Route")


const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


mongoose.connect("mongodb://localhost:27017/admin")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

app.post("/",async(req,res)=>{
    const{name,email,password}=req.body

    try{
        const check=await collection.findOne({email:email})
        .then(user =>{
            if(user){
                if(user.password === password){
                    res.json("exist")
                }else{
                    res.json("invalid")
                }     
            }else{
                res.json("notexist")
            }
        })
    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup",async(req,res)=>{
    const{name,email,password}=req.body

    const data={
        name:name,
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.use("/Inv_Route",Inv_Route)
app.use("/Stocks_Route",Stocks_Route)



app.listen(8000,()=>{
    console.log("port connected");
})

