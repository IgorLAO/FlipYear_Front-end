import axios from "axios";
import { Profiler } from "react";
const server = axios.create({
    baseURL: "http://localhost:5000"
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
            "Content-Typr": "multipart/form-data"
        },
    });
    return res.status;
}

export async function GetUserById(UserId) {
    const resp = await server.get(`/usuario/${UserId}`)
    return resp.data
}

export function GetImage(imagem) {
    return `${server.getUri()}/${imagem}`
}