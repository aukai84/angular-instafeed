const PORT = process.env.PORT || 3000;
const server = require('./server');

server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});