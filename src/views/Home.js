import React, { useState } from 'react';
import Step from '../components/Step';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/reducers/loadingSlice';
import { Button } from 'antd';
import Tab from '../components/Tab';
const description = 'This is a description.';
const items = [
    {
        title: 'Đến kho nhận',
        description,
    },
    {
        title: 'Nhận yêu cầu',
        description,
        subTitle: 'Left 00:00:08',
    },
    {
        title: 'Bắt đầu đi',
        description,
    },
    {
        title: 'Đến nhà khách',
        description,
    },
    {
        title: 'Bàn giao vật tư',
        description,
    },
    {
        title: 'Hoàn tất đơn',
        description,
    },
    {
        title: 'Nộp tiền',
        description,
    },
    {
        title: 'Kết thúc',
        description,
    },
]
const Home = (props) => {
    const [isFinish, setIsFinish] = useState(false);
    const [current, setCurrent] = useState(1);
    const dispatch = useDispatch();
    const fetchData = async () => {
        setCurrent(prev => prev + 1)
        setIsFinish(false)
        dispatch(showLoading()); // Hiển thị loading
        try {
            // Giả lập thời gian chờ 3 giây
            await new Promise((resolve) => setTimeout(resolve, 6000));
            setIsFinish(true)
            // Xử lý dữ liệu ở đây
        } catch (error) {
            console.error('Error:', error);
        } finally {
            dispatch(hideLoading()); // Ẩn loading
        }
    };
    return (
        <>
            {isFinish && <Step items={items} current={current} />}
            <Tab />
            <div style={{ marginTop: 100 }}>
                <Button onClick={fetchData}>Click</Button>
            </div>
        </>
    )
}
export default Home;