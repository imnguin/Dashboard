import { HOST_LIST } from "../constants/systemVars";
import { hideLoading, showLoading } from "../redux/reducers/loadingSlice";

const headerDefautl = { 'user-agent': 'Mozilla/4.0 MDN Example', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
const requestDefault = { cache: 'no-cache', credentials: 'same-origin', withCredentials: true, mode: 'cors', redirect: 'follow', referrer: 'no-referrer', }

const _fetchAPI = async (url = '', data = {}, _header = headerDefautl, method = 'POST') => {
    try {
        let requestData = { headers: _header, method: method, ...requestDefault }
        if (method == 'POST') { requestData = { ...requestData, body: typeof data === 'object' ? JSON.stringify(data) : JSON.stringify({ data }) } }
        let response = await fetch(url, requestData);
        return await response.json();
    } catch (error) {
        return { iserror: true, message: "Lỗi hệ thống, vui lòng liên hệ quản trị viên!", messagedetail: error.stack, resultObject: null }
    }
};

const _fetchLogin = (hostName, apiPath, data) => async (dispatch, state) => {
    try {
        dispatch(showLoading());
        const apiResult = await _fetchAPI(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data);
        dispatch(hideLoading());
        if (!apiResult.iserror) {
            localStorage.setItem('logininfo', JSON.stringify(apiResult.resultObject));
            // dispatch(setDataUser(JSON.stringify(apiResult.resultObject)));
            return { ...apiResult, messaege: 'Đăng nhập thành công!', }
        }
        return apiResult;
    } catch (error) {
        return {
            iserror: true,
            message: error.messaege,
            messagedetail: error,
            resultObject: null
        }
    }
}

const _fetchData = (hostName, apiPath, data, method = 'POST') => async (dispatch, state) => {
    try {
        const logininfo = JSON.parse(localStorage.getItem('logininfo'));
        const _header = { ...headerDefautl, "authorization": `Bearer ${logininfo.accessToken}`, };
        dispatch(showLoading());
        const apiResult = await _fetchAPI(`${HOST_LIST[hostName].hostBaseURL}${apiPath}`, data, _header);
        dispatch(hideLoading());
        if (apiResult.status == 403) {
            window.location.href = "/login";
            return
        }
        return apiResult

    } catch (error) {
        return {
            iserror: true,
            message: error.message,
            messagedetail: error,
            resultObject: null
        }
    }
}

export { _fetchLogin, _fetchData }