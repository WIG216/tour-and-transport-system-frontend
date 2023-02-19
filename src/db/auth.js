import api from "./apiClient";

const registerUser = (data) => {
    return api.post('/auth/users/register', data);
}

const loginUser = (data) => {
    return api.post('/auth/users/login', data);
}

export {
    registerUser,
    loginUser,
}

