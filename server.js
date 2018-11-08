const {createServer} = require('http');

const STATUS_CODE = parseInt(process.env.STATUS_CODE, 10) || 301;
const PORT = parseInt(process.env.PORT, 10) || 80;

createServer((req, res) => {
  if (!/^www\./.test(req.headers.host)) {
    res.writeHead(STATUS_CODE, {'Location': 'https://www.' + req.headers.host + req.url});
  }
  res.end();
}).listen(PORT, () => console.log('Listening on port %d', PORT));
