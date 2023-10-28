const Hapi = require('@hapi/hapi');

const init = async () => {
const server = Hapi.server({
port: 3000,
host: '0.0.0.0',
});

server.route({
method: 'GET',
path: '/add/{a}/{b}',
handler: (request, h) => {
const { a, b } = request.params;
if (isNaN(a) || isNaN(b)) {
return { error: 'Некорректный ввод' };
}
const result = parseFloat(a) + parseFloat(b);
return { result };
},
});

server.route({
method: 'GET',
path: '/subtract/{a}/{b}',
handler: (request, h) => {
const { a, b } = request.params;
if (isNaN(a) || isNaN(b)) {
return { error: 'Некорректный ввод' };
}
const result = parseFloat(a) - parseFloat(b);
return { result };
},
});

server.route({
method: 'GET',
path: '/multiply/{a}/{b}',
handler: (request, h) => {
const { a, b } = request.params;
if (isNaN(a) || isNaN(b)) {
return { error: 'Некорректный ввод' };
}
const result = parseFloat(a) * parseFloat(b);
return { result };
},
});

server.route({
method: 'GET',
path: '/divide/{a}/{b}',
handler: (request, h) => {
const { a, b } = request.params;
if (isNaN(a) || isNaN(b)) {
return { error: 'Некорректный ввод' };
}
if (parseFloat(b) === 0) {
return { error: 'Деление на ноль недопустимо' };
}
const result = parseFloat(a) / parseFloat(b);
return { result };
},
});

await server.start();
console.log('Сервер запущен на', server.info.uri);
};

init();
