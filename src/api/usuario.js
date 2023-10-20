import axios from "axios";
const server = axios.create({
    baseURL: "http://129.148.42.252:5010"
});

export async function Login2(email, senha) {
    const r = await server.post("/usuarios/login", {
        Email: email,
        Senha: senha
    });
    return r
}

export async function EnviarImagem(id, Profile) {
    const formData = new FormData();
    formData.append('profile', Profile);

    const res = await server.put(`/usuario/${id}/images`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return res.status;
}

export async function GetUserById(UserId) {
    const resp = await server.get(`/usuario/${UserId}`)
    return resp
}

export function GetImage(imagem) {
    console.log(`${server.getUri()}/${imagem}`)
    return `${server.getUri()}/${imagem}`
}