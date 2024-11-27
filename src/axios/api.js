import axios from "axios";

const SERVER_API_URL = 'http://localhost:5000/testResults';
const JWT_API_URL = 'https://moneyfulpublicpolicy.co.kr';


export const serverApi = axios.create({
    baseURL: SERVER_API_URL,
});

export const serverApiUserInfo = axios.create({
    baseURL: SERVER_API_URL,
});
serverApiUserInfo.interceptors.request.use(
    (config)=>{
        const userAuthStorage = localStorage.getItem('userAuth-storage');
        if (userAuthStorage) {
            const parsedData = JSON.parse(userAuthStorage);
            const userId = parsedData.state.userId;
            config.url = `/${userId}`;
        }

        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const authApiJson = axios.create({
    baseURL: JWT_API_URL,
});

export const authApiToken = axios.create({
    baseURL: JWT_API_URL,
});
authApiToken.interceptors.request.use(
    (config) => {
        const userAuthStorage = localStorage.getItem('userAuth-storage');
        if (userAuthStorage) {
            const parsedData = JSON.parse(userAuthStorage);
            const token = parsedData.state.token;
            config.headers.Authorization = `Bearer ${token}`;
        }

        const endPoint = config.url;
        if (endPoint === '/profile') config.headers["Content-Type"] = "multipart/form-data";

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/*
생략했는데 문제생기면 붙이기
    headers: {
        "Content-Type": "application/json",
    }
*/