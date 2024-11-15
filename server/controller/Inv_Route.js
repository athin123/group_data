const mongoose = require("mongoose");

const express = require("express");
const Inv_Route = express.Router();

const OrderSchema = require("../models/OrderSchema");


Inv_Route.post("/create-order",(req,res)=>{
    OrderSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

Inv_Route.get("/",(req,res)=>{
    OrderSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

Inv_Route.get("/count",(req,res)=>{
    OrderSchema.find({}).count()
    if(err)
        return err;
    else
        res.json(data);
})

Inv_Route.route("/update-order/:id")
.get((req,res)=>{
    OrderSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    OrderSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

Inv_Route.delete("/delete-order/:id",(req,res)=>{
    OrderSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = Inv_Route;
