import api from "./apiClient";

const registerUser = (data) => {
    return api.post('/users/register', data);
}

const loginUser = (data) => {
    return api.post('/users/login', data);
}

export {
    registerUser,
    loginUser,
}

