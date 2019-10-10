const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let sanphamSchema = new Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    image:String,
    price:String,
    descript:String
});

var Sanpham=mongoose.model('Sanpham',sanphamSchema,'sanpham');
module.exports=Sanpham;