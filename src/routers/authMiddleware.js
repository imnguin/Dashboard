const authMiddleware = (navigate) => {
    // const logininfo = localStorage.getItem('logininfo');
    // const authen = JSON.parse(logininfo);
    // console.log('authen', authen)
    // if (!authen && !authen?.accesstoken) {
    //     navigate('/login');
    //     return false;
    // }
    return true;
};

export default authMiddleware;