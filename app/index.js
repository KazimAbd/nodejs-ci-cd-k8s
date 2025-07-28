const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Salam DevOps!');
}).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
