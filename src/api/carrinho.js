import server from "./server";

export async function ConsultaCarrinho(){
    const resp = await server.get(`http://localhost:5000/carrinho/${1}`);
    return resp.data
}

export async function InserirProdutoNoCarrinho(idProduto, idUser, qtdProduto){
    const resp = await server.post(`http://localhost:5000/carrinho/`, {
        idProduto:idProduto,
        idUser:idUser,
        qtdProduto:qtdProduto
    }); 

    return resp;
}