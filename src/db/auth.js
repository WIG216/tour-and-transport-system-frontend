import api from "./apiClient";

const registerUser = (data) => {
    return api.post('/auth/signup', data);
}

const loginUser = (data) => {
    return api.post('/auth/login', data);
}

export {
    registerUser,
    loginUser,
}

