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
        //유저의 테스트 결과에 접근하기 위해 엔드포인트를 설정한다
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
        //로그인한 유저의 토큰을 헤더에 넣는다
        const userAuthStorage = localStorage.getItem('userAuth-storage');
        if (userAuthStorage) {
            const parsedData = JSON.parse(userAuthStorage);
            const token = parsedData.state.token;
            config.headers.Authorization = `Bearer ${token}`;
        }

        //프로필에서 닉네임을 수정하려 한다면 content-type을 form-data로 설정한다.
        const endPoint = config.url;
        if (endPoint === '/profile') config.headers["Content-Type"] = "multipart/form-data";

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);