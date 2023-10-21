import axios from "axios";
const server = axios.create({
    // baseURL: "http://129.148.42.252:5010"
    baseURL: "http://localhost:5000"
});

export async function Login2(email, senha) {
    const r = await server.post("/usuarios/login", {
        Email: email,
        Senha: senha
    });
    console.log(r)
    return r
}

export async function GetUserById(id) {
    const resp = await server.get(`/usuario/${id}`);
    return resp
}

export async function EnviarImagem(id, Profile) {
    const formData = new FormData();
    formData.append('profile', Profile);

    const res = await server.put(`/usuario/${id}/images`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    }).then((res) =>console.log(res))
    
    return res;
}


export function  GetImage(imagem) {
    // console.log(`${server.getUri()}/${imagem}`)
    return `${server.getUri()}/${imagem}`
}