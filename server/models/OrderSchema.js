const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    "order_detail": {type:String},
    "ppu":{type:Number},
    "quantity": {type:Number},
    "total":{type:Number},
    "__v":{type:Number}
},{
    collection: "orders"
})

module.exports = mongoose.model("OrderSchema",OrderSchema);
