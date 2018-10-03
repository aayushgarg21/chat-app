var express = require ('express');
//importing socket.rio
var socket = require('socket.io');
// App setting up
var app = express ();
var server = app.listen(4000,function()
{
console.log("listening to request on port 4000");
});
// render root
app.get('/',function(req,res)
{
res.sendFile('/home/aayush/socket/index.html');
});
//setting up socket 
var io = socket(server);
io.on('connection', function(socket){
console.log("server coonection established",socket.id);
socket.on('chat',function(data){
socket.broadcast.emit ('chat',data);

});
});
