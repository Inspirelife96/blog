var http = require('http')
var exec = require('child_process').exec
 
http.Server(function (req, res) {
if(req.url === '/webhooks/push/123456'){
exec('sh ./deploy.sh')
}
res.end()
}).listen(4002)
