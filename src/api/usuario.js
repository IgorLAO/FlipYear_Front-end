import axios from "axios";
const server = axios.create({
     baseURL: "http://129.148.42.252:5010"
    // baseURL: "http://localhost:5000"
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

export async function EnviarImagem(id, Profile) {
    const formData = new FormData();
    formData.append('profile', Profile);
    alert('oi');

    const res = await server.put(`/usuario/${id}/ProfImage`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    }).then((formData) => console.log(formData))

    return res;
}

export function GetProfileImage(ProfIMG) {
    console.log(`${server.getUri()}/${ProfIMG}`);
    return `${server.getUri()}/${ProfIMG}`
}


export async function InsertUser(infosEndereco, infosPessoa) {
    const respEndereco = await server.post('/enderecos', infosEndereco);
    let respUser = await server.post('usuarios', infosPessoa);
    return respEndereco
}

// -----ADM
export async function ADMSearchUsers(searchText) {
    const resp = await server.get(axios.get(`/usuarios/busca?search=${searchText}`));
    return resp
}

export async function GeAlltUsers(){
    const resp = await server.get(`/usuarios`);
    return resp
}
