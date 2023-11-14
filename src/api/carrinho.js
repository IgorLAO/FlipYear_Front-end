import server from "./server";

export async function ConsultaCarrinho(){
    const resp = await server.get(`http://localhost:5000/carrinho/${1}`);
    return resp.data
}

export async function ExcluirProduto(id){
    const resp = await server.delete();
    return resp
}

export async function InserirProdutoNoCarrinho(){
    const resp = await server.post(`http://localhost:5000/carrinho`)
    return resp
}