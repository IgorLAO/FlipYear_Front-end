import server from "./server";


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


export async function InsertEnderecos(infosEndereco) {
    const respEndereco = await server.post('/enderecos', infosEndereco);
    return respEndereco
}

export async function InsertUsuario(infosPessoa) {
    const respUser = await server.post('/usuarios', infosPessoa);
    console.log(respUser)
    return respUser
}

// -----ADM
export async function ADMSearchUsers(searchText) {
    const resp = await server.get(`/usuarios/busca?search=${searchText}`);
    return resp
}

export async function GeAllUsers() {
    const resp = await server.get(`/usuarios`);
    return resp
}
