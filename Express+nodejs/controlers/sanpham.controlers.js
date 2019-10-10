var Sanpham = require('../models/sanpham.model');

module.exports.index=function(req,res){
    
Sanpham.find().then(function(sanpham){
    res.render('index',{
        sanpham:sanpham
        
    });
    
});

}