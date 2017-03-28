var express=require('express')
var app = express();
app.set('port',process.env.PORT || 80);
app.get('/',function(req,res){
    res.render('/templates/index')
})
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
app.use(express.static(__dirname+'/static'))


app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';press ctrl\+c to terminate')
})