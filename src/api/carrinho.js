import server from "./server";

export async function ConsultaCarrinho(idUser){
    const resp = await server.get(`http://129.148.42.252:5010/carrinho/${idUser}`);
    return resp.data
}

export async function InserirProdutoNoCarrinho(idProduto, idUser, qtdProduto){
    const resp = await server.post(`http://129.148.42.252:5010/carrinho/`, {
        idProduto:idProduto,
        idUser:idUser,
        qtdProduto:qtdProduto
    }); 

    return resp;
}