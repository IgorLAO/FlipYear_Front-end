import axios from "axios";


const serverP = axios.create({
    //baseURL: "http://129.148.42.252:5010"
   baseURL: "http://localhost:5000"
});

export async function GetSearchProd(infos) {
    const res = await serverP.get(`/produto/busca?search=${infos}`);
    return res;
}
export async function ConsultarProdPorId(id) {
    const resp = await serverP.get(`http://localhost:5000/produtos/${id}`);
    return resp.data[0];
}

export async function GetAllProd() {
    const resp = await serverP.get(`/produtos`);
    return resp
}

export async function GetAllProdDestaque() {
    const resp = await serverP.get(`/produtosAllDestaque`);
    return resp
}

export async function GetPagProdDestaque(pageDestaqueNum) {
    const resp = await serverP.get('/produtosDestaque?pagina=' + pageDestaqueNum);
    return resp
}

export async function GetOthersProd(pageProducts) {
    const resp = await serverP.get('/outrosprodutos?pagina=' + pageProducts);
    return resp
}

export async function GetBusca() {
    const resp = await serverP.get('/produtos/busca');
    return resp
}

export async function GetAllCmts(){
    const resp = await serverP.get(`/AllComentarios`);
    return resp
}

export async function GetCmtsPage() {
    const resp = await serverP.get(`/comentarios?pagina`)
    return resp
}


