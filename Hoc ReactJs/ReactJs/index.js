const express=require('express');
const app = express();

var port= 3000;
//
app.use(express.static('public'));

//
app.set('view engine','ejs');

//
app.set("views","./views");

// app.get("/",function(req,res){
//    res.render("trangchu");
// });

app.get('/',(req,res)=>{
res.render("trangchu");
});

app.listen(port);

