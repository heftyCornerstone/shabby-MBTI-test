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
    console.log('response', response.data)
    return response.data;
};
/*
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2FiYyIsImlhdCI6MTcwMDgxNDQyMCwiZXhwIjoxNzAwODE4MDIwfQ.8hWOHHEzDPzumnqCU7jyoi3zFhr-HNZvC7_pzBfOeuU",
  "userId": "유저 아이디",
  "success": true,
  "avatar": "프로필 이미지",
  "nickname": "유저 닉네임"
}
*/

export const getUserProfile = async (token) => {
    //다른 유저의 정보를 쿼리스트링으로 얻을까?
    const response = await axios.get(`${API_URL}/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
/*
{
  "id": "사용자 아이디",
  "nickname": "사용자 닉네임",
  "avatar": null,
  "success": true
}
*/

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
    console.log('response ', response.data);
    return response.data;
};
/*
{
  "avatar": "변경된 이미지 URL",
  "nickname": "변경된 닉네임",
  "message": "프로필이 업데이트되었습니다.",
  "success": true
}
*/