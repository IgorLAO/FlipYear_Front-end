import axios from "axios";

const serverP = axios.create({
    baseURL: "http://localhost:5000"
});

export async function GetSearchProd(infos){
    const res = await serverP.get(`/produto/busca?search=${infos}`);
    return res
}
export async function ConsultarProdPorId(id){
    const resp = await serverP.get(`http://localhost:5000/produtos/${id}`);
    return resp;    
}
