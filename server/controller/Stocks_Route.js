const mongoose = require("mongoose");

const express = require("express");
const Stocks_Route = express.Router();

const StockSchema = require("../models/StockSchema");


Stocks_Route.post("/create-stock",(req,res)=>{
    StockSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

Stocks_Route.get("/",(req,res)=>{
    StockSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

Stocks_Route.route("/update-stock/:id")
.get((req,res)=>{
    StockSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    StockSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

Stocks_Route.delete("/delete-stock/:id",(req,res)=>{
    StockSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = Stocks_Route;
