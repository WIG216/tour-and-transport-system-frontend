import jwtDecode from 'jwt-decode';
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";


const key = "authToken";

const storeToken  =  (authToken) => {
    try {
        localStorage.setItem(key, authToken);
    } catch (error) {
        console.log("Error storing auth token", error)
    }
}

const getToken = () => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.log("Error getting the auth token", error)
    }
}

const getUser = () => {
    const token =  getToken();

    return token ? jwtDecode(token) : null;
}

const isDriver = () => {
    const token =  getToken();
    let user = jwtDecode(token);
    console.log('USER IN ISCHECK',  user)

    return user?.role == 'driver' ? true : false;
}

const isAdmin = () => {
    const token =  getToken();
    let user = jwtDecode(token);
    // console.log('USER IN ISCHECK',  user)
    return user?.role == 'admin' ? true : false;
}

const removeToken = async ()=> {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Error removing auth token", error);
    }
}

export { getUser, getToken, removeToken, storeToken, isDriver, isAdmin }
