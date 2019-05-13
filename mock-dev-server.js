const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    const regurl = pathname.replace(/(\/api)(\/\w+)(\.ajax)/i, function(match, p1, p2, p3, offset, string){
        return [p2,'.json'].join('');
    })
    const mockPath = path.join('mock', regurl);
    
    if (fs.existsSync(mockPath)) {
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        });
        // 模拟200ms的网络延迟
        setTimeout(function () {
            fs.createReadStream(mockPath, {
                autoClose: true
            }).pipe(res);
        }, 10);
    } else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        // res.write(`no mock at ${mockPath}`);
        // res.end();
    }
});
server.listen(4000);