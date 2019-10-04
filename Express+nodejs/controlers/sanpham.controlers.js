var Sanpham = require('../models/sanpham.model');

module.exports.index=function(req,res){
Sanpham.find().then(function(sanpham){
    
    Sanpham.findById()
    res.render('index',{
        sanpham:sanpham
    });
});

}