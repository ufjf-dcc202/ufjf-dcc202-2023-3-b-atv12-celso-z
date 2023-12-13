function fruta(tipo, quantidade){
    this.tipo = tipo;
    this.quantidade = quantidade;
}

let joao = {
    "maca" : new fruta("maca", 1),
    "banana" : new fruta("banana", 1),
}

let maria = {
    "maca" : new fruta("maca", 2),
    "banana" : new fruta("banana", 2),
}

let pomar = {
    "maca" : new fruta("maca", 0),
    "banana" : new fruta("banana", 0),
}

let estoque = {
    "joao" : joao,
    "maria" : maria,
    "pomar" : pomar
};



export function getEstoque(){
    return estoque;
}

export function transacaoNoEstoque(fornecedor, recebedor, fruta, quantidade){
    estoqueFornecedor = estoque[fornecedor];
    estoqueRecebedor = estoque[recebedor];
    estoqueFornecedor[fruta] -= quantidade;
    estoqueRecebedor[fruta] += quantidade;
}

export function limpaEstoque(){
    estoque[0][0].quantidade = 0;
    estoque[0][1].quantidade = 0;
    estoque[1][0].quantidade = 0;
    estoque[1][1].quantidade = 0;
    estoque[2][0].quantidade = 0;
    estoque[2][1].quantidade = 0;
}