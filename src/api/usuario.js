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

    console.log(r);
    return r
}

export async function GetUserById(id) {
    const resp = await server.get(`/usuario/${id}`);
    return resp
}

export async function EnviarImagem(id, Profile, Banner) {
    const formData = new FormData();
    formData.append('profile', Profile);
    formData.append('Banner', Banner);
    alert('oi')

    const res = await server.put(`/usuario/${id}/image`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    }).then((formData) => console.log(formData))

    return res;
}


export function GetProfileImage(ProfIMG) {
    console.log(`${server.getUri()}/${ProfIMG}`)
    return `${server.getUri()}/${ProfIMG}`
}

// export function GetProfileImage(BannerIMG) {
//     console.log(`${server.getUri()}/${ProfIMG}`)
//     return `${server.getUri()}/${ProfIMG}`
// }