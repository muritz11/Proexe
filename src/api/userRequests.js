import axios from "axios";

// const client = axios.create({
//     baseURL: "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
// })


class UsersApi {

    constructor() {
        this.api_url = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
    }

    init = () => {
        this.client = axios.create({
            baseURL: this.api_url
        })

        return this.client
    }

    getAllUsers = () => {
        return this.init().get('/')
    }

    deleteUser = (uid) => {
        return this.init().delete(`/${uid}`)
    }

    updateUser = (uid, params) => {
        return this.init().put(`/${uid}`, { params: params })
    }

    createUser = (params) => {
        return this.init().post('/', { params: params })
    }

}


export default UsersApi