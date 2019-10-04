const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let sanphamSchema = new Schema({
    name:String,
    image:String,
    price:String
});

var Sanpham=mongoose.model('Sanpham',sanphamSchema,'sanpham');
module.exports=Sanpham;