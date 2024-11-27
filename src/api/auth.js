import { authApiJson, authApiToken } from '../axios/api';

export const register = async (userData) => {
    const response = await authApiJson.post('/register', userData);

    return response.data;
};

export const signin = async (userData) => {
    const response = await authApiJson.post('/login', userData);

    return response.data;
};

export const getUserProfile = async () => {
    const response = await authApiToken.get('/user');

    return response.data;
};

export const updateProfile = async (data) => {
    const { formData} = data;
    const response = await authApiToken.patch('/profile', formData);

    return response.data;
};

//const response = await axios.patch('/profile', formData);