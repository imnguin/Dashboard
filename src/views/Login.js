import React from "react";
import Loading from "../components/Loading";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/reducers/loadingSlice";

const Login = (props) => {
    const dispatch = useDispatch();
    const fetchData = async () => {
        dispatch(showLoading()); // Hiển thị loading
        try {
            // Giả lập thời gian chờ 3 giây
            await new Promise((resolve) => setTimeout(resolve, 3000));
            // Xử lý dữ liệu ở đây
        } catch (error) {
            console.error('Error:', error);
        } finally {
            dispatch(hideLoading()); // Ẩn loading
        }
    };

    return (
        <Button onClick={fetchData}>Click</Button>
    );
}
export default Login;