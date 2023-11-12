import server from "./server";

export async function ConsultaCarrinho(){
    const resp = await server.get(`http://localhost:5000/carrinho/${1}`);
    return resp
}