console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro= `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Cruritiba`); // adicionando um item na lista
console.log("Destinos possíveis:");
// console.log(salavador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // removendo item 
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); // exibe só elemento pedido 