import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '0d5fdd03-1a3c-47a6-addf-87c8d41e990d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }

)

export const usersApi = {
    getUsers(currentPage=1, pageSize=10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(responce => responce.data)
    }
}

export const authApi = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const followApi = {
    postFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(responce => responce.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data)
    }
}