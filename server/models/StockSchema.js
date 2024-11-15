const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    "stock_detail": {type:String},
    "ppu":{type:Number},
    "quantity": {type:Number},
    "total":{type:Number},
    "__v":{type:Number}
},{
    collection: "stocks"
})

module.exports = mongoose.model("StockSchema",StockSchema);
