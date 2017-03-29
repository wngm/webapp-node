var express=require('express')
var app = express();
app.set('port',process.env.PORT || 80);
// app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname+'/templates'));
app.get('',function(req,res){
    res.type('text/html');
    console.log(111)
    console.log(req.headers);
    res.render('/templates/index.html')
});

app.use(function(req,res,next){
    res.type('text/plain');
    res.status(404);
    res.send('404-Not Found')
} );
app.use(function(req,res,next){
    res.type('text/plain');
    res.status(500);
    res.send('500-Server Error')
} )



app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';press ctrl\+c to terminate')
})