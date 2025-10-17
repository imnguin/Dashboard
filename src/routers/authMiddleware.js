const authMiddleware = (navigate) => {
    // Xử lý check authen chỗ này hàm dưới chỉ là tạm
    const logininfo = localStorage.getItem('logininfo');
    const authen = JSON.parse(logininfo);
    console.log('authen', authen)
    if (!authen && !authen?.accesstoken) {
        navigate('/login');
        return false;
    }
    return true;
};

export default authMiddleware;