module.exports = function(server) {
server.route({
method: 'GET',
path: '/calculator/summa/{num1}/{num2}',
handler: function (pedido) {
const num1 = parseInt(pedido.params.num1);
const num2 = parseInt(pedido.params.num2);
var data = {
resultat: num1 + num2
};
return data;
}
});
server.route({
method: 'GET',
path: '/calculator/minus/{num1}/{num2}',
handler: function (pedido){
const num1 = parseInt(pedido.params.num1);
const num2 = parseInt(pedido.params.num2);
var data = {
resultat: num1 - num2
};
return data;
}
});
server.route({
method: 'GET',
path: '/calculator/umnojenie/{num1}/{num2}',
handler: function (pedido){
const num1 = parseInt(pedido.params.num1);
const num2 = parseInt(pedido.params.num2);
var data = {
resultat: num1 * num2
};
return data;
}
});
server.route({
method: 'GET',
path: '/calculator/delenie/{num1}/{num2}',
handler: function (pedido){
const num1 = parseInt(pedido.params.num1);
const num2 = parseInt(pedido.params.num2);
var data = {
resultat: num1 / num2
};
return data;
}
});
}
