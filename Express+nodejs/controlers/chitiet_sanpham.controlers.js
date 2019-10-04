var Chitiet_sanpham = require('../models/chitiet_sanpham.model');

module.exports.index=function(req,res){
 
    Chitiet_sanpham.find().then(function(chitiet_sanpham){
    res.render('sanpham/sanpham',{   
        chitiet_sanpham:chitiet_sanpham     
    });
    
});

}