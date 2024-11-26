import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults';

export const getTestResults = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getUserTestResult = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch {
        return null;
    }
};

export const createTestResult = async (resultData) => {
    const { userId, mbtiResult } = resultData;
    const result = {
        "id": userId,
        "testResult": mbtiResult,
        "visibility": true
    }
    const resultJson = JSON.stringify(result);
    const response = await axios.post(`${API_URL}`, resultJson);

    return response.data
};

export const updateTestResult = async (resultData) => {
    const { userId, mbtiResult } = resultData;
    const patchData = {
        "testResult": mbtiResult
    };
    const response = await axios.patch(`${API_URL}/${userId}`, patchData);

    return response.data;
};

export const deleteTestResult = async (userId) => {
    const response = await axios.delete(`${API_URL}/${userId}`);
    return response.data;
};

export const updateTestResultVisibility = async (userId, visibility) => {
    const patchData = {
        "visibility": visibility
    };
    const response = await axios.patch(`${API_URL}/${userId}`, patchData);

    return response.data;
};