import axios from 'axios'

const API_URL = 'https://backend-kgyf.onrender.com/api/users/'

//registrar un papusuario
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)
    return response.data 
}

//login
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    }
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register, login, logout
}

export default authService