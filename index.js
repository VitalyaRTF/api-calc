const Hapi = require('hapi');
const host = 'localhost';
const port = 8000;
const server = Hapi.Server({
host: host,
port: port
});
const init = async () => {
await server.start();
console.log("Server podnyalsya na porty: " + port);
}
require('./routes/routes')(server);
init();
server.route ({
    method: 'GET',
    path: '/',
    handler: function (request, h) {

        var data = {
            msg: 'Vitalin API Calculator'
        };

        return data;
    }
});
