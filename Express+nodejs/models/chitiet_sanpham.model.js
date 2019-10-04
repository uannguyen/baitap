const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let chitiet_sanphamSchema = new Schema({
    name:String,
    image:String,
    price:String,
    descript:String
});

var Chitiet_sanpham=mongoose.model('Chitiet_sanpham',chitiet_sanphamSchema,'chitiet_sanpham');
module.exports=Chitiet_sanpham;