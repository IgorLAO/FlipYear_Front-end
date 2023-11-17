import server from "./server";

export async function GetSearchProd(infos) {
    let res = '';
    try {
        res = await server.get(`/produto/busca?search=${infos}`);
    } catch (error) {
        res = 'nada';
    }
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

export async function GetAllCmts() {
    const resp = await server.get(`/AllComentarios`);
    return resp
}

export async function GetCmtsPage(pageComments) {
    const resp = await server.get(`/comentarios?pagina=${pageComments}`)
    return resp
}

export async function InsertProdImages(i) {
    const formData = new FormData();
    formData.append('Frente', i.Frente);
    formData.append('LadoEsq', i.LadoDir);
    formData.append('LadoDir', i.LadoDir);
    formData.append('Tras', i.Tras);

    const resp = await server.post(`/produtos/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resp
}


export async function InsertProd(i) {
    const resp = await server.post('/produtos', i);
    
    return resp
}

export async function Getcatego() {
    const resp = await server.get('/categoria');
    return resp
}