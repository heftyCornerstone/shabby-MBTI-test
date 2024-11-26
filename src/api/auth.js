import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

export const register = async (userData) => {
    const userJson = JSON.stringify(userData);
    const response = await axios.post(`${API_URL}/register`, userJson, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
};

export const signin = async (userData) => {
    const userJson = JSON.stringify(userData);
    const response = await axios.post(`${API_URL}/login?expiresIn=30m`, userJson, {
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response.data;
};

export const getUserProfile = async (token) => {
    //다른 유저의 정보를 쿼리스트링으로 얻을까?
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};

export const updateProfile = async (data) => {
    const { formData, token } = data;
    const response = await axios.patch(`${API_URL}/profile`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        }
    );

    return response.data;
};