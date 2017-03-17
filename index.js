const PORT = process.env.PORT || 9000;
const server = require('./server');

server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});