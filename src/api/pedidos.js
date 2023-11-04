import server from "./server";

export async function GetAllPedidos() {
    const res = await server.get('/pedidos');
    return res
}

export async function PutPedidos(id, situacao) {
    let resp = await server.put(`/pedidos/${id}`, situacao);
    return resp.data
}