import md5 from 'js-md5'


export const UseFetchUsersByName = async (name) => {
    const url = `http://localhost:3002/survivalsro/api/Users/GetUserByName?username=${name}`;
    return (await fetch(url, {mode: 'cors', method:'GET'})).json();
}

export const UserFetchEmailByEmail = async (email) => {
    const url = `http://localhost:3002/survivalsro/api/Users/EmailByEmail?email=${email}`;
    return (await fetch(url, {mode: 'cors' , method:'GET'})).json();
}

export const UseFetchAddUser = async (user) => {
    const url = `http://localhost:3002/survivalsro/api/Users/SaveUser?username=${user.username}&lastName=${user.lastName}&email=${user.email}&password=${user.password}&secretQuestion=${user.secretQuestion}&secretAnswer=${user.secretAnswer}`;
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}

export const UserFetchLogin = async (username, password) => {
    const url = `http://localhost:3002/survivalsro/api/Users/UserByNamePassword?username=${username}&password=${md5.hex(password)}`;
    return (await fetch(url, {mode:'cors', method:'GET'})).json();
}

export const UserFetchSaveAccountChange = async (username, password, email) => {
    const url = `http://localhost:3002/survivalsro/api/Users/EditAccount?username=${username}&password=${password}&email=${email}`
    console.log(url)
    return (await fetch(url, {mode:'cors', method:'POST'})).json();
}
