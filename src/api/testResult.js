import { serverApi, serverApiUserInfo } from '../axios/api';

export const getTestResults = async () => {
    const response = await serverApi.get();
    return response.data;
};

export const getUserTestResult = async () => {
    try {
        const response = await serverApiUserInfo.get();

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
    const response = await serverApi.post('', resultJson);

    return response.data
};

// export const updateTestResult = async (mbtiResult) => {
//     const patchData = {
//         "testResult": mbtiResult
//     };
//     const response = await serverApiUserInfo.patch('', patchData);

//     return response.data;
// };

export const deleteTestResult = async () => {
    const response = await serverApiUserInfo.delete();
    return response.data;
};

export const updateTestResultVisibility = async (userId) => {
    const { visibility } = await getUserTestResult(userId)
    const patchData = {
        "visibility": !(visibility)
    };
    const response = await serverApiUserInfo.patch('', patchData);

    return response.data;
};