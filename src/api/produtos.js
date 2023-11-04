import axios from "axios";


export async function GetSearchProd(infos) {
    const res = await server.get(`/produto/busca?search=${infos}`);
    return res;
}
export async function ConsultarProdPorId(id) {
    const resp = await server.get(`http://localhost:5000/produtos/${id}`);
    return resp.data[0];
}

export async function GetAllProd() {
    const resp = await server.get(`/produtos`);
    return resp
}

export async function GetAllProdDestaque() {
    const resp = await server.get(`/produtosAllDestaque`);
    return resp
}

export async function GetPagProdDestaque(pageDestaqueNum) {
    const resp = await server.get('/produtosDestaque?pagina=' + pageDestaqueNum);
    return resp
}

export async function GetOthersProd(pageProducts) {
    const resp = await server.get('/outrosprodutos?pagina=' + pageProducts);
    return resp
}

export async function GetBusca() {
    const resp = await server.get('/produtos/busca');
    return resp
}

export async function GetAllCmts(){
    const resp = await server.get(`/AllComentarios`);
    return resp
}

export async function GetCmtsPage(pageComments) {
    const resp = await serverP.get(`/comentarios?pagina=${pageComments}`)
    return resp
}


