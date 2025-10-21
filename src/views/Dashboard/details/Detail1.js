import { Col, Row, Grid, Form, Select, DatePicker, Typography, Button, Rate, Table, Progress, Tooltip, message, notification } from "antd";
import React from "react";
import avatar from "../../../assets/images/anh-dai-dien-hai-yodyvn.jpg";
import bell from "../../../assets/images/free-bell-icon-860-thumb.png";
import logo from "../../../assets/images/111.png";
import chothuchien from "../../../assets/images/chothuchien.png";
import dichuyen from "../../../assets/images/dichuyen.png";
import dangthuchien from "../../../assets/images/dangthuchien.png";
import hoanthanh from "../../../assets/images/hoanthanh.png";
import bellicon from "../../../assets/images/bellicon.png";
import bagicon from "../../../assets/images/bagicon.png";
import warningicon from "../../../assets/images/warningicon.png";
import { ExportOutlined, WarningFilled, MoreOutlined, SearchOutlined, StarFilled, ExclamationCircleFilled } from '@ant-design/icons';
import StarRatingChart from "../components/StarRatingChart";
import '../css/style.css';
import dayjs from "dayjs";
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import RatingGroupedBarChart from "../components/RatingGroupedBarChart";
import Top5ErrorPercentageChart from "../components/Top5ErrorPercentageChart";
import AverageStarTrendChart from "../components/AverageStarTrendChart";
import pajamastimeout from '../../../assets/images/pajamas_time-out.png'
dayjs.extend(weekday);
dayjs.extend(localeData);

const { RangePicker } = DatePicker;
const Detail1 = () => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, description) => {
        api[type]({
            message: 'Thông báo',
            description: description
        });
    };
    const isMobile = window.matchMedia("(max-width: 576px)").matches;
    const colors = ['#0195FF', '#00E096', '#884EFF', '#FF8F0C'];
    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
        },
        {
            title: 'Kênh',
            dataIndex: 'channel',
        },
        {
            title: 'Số lượng user giới thiệu',
            dataIndex: 'users',
            render: (_, record) => <Tooltip title={`${record.users} user`}>
                <Progress percent={parseInt(record.ratio)} size="small" showInfo={false} strokeColor={colors[record.key - 1]} />
            </Tooltip>,
        },
        {
            title: 'Tỷ lệ',
            dataIndex: 'ratio',
            render: (_, record) => <Progress type="circle" percent={parseInt(record.ratio)} size={40} format={(percent) => <span style={{ color: colors[record.key - 1] }}>{percent}%</span>} strokeColor={colors[record.key - 1]} />
        },
    ];
    const data = [
        {
            key: '1',
            stt: '1',
            channel: 'Thế giới di động',
            users: 32,
            ratio: '35%',
        },
        {
            key: '2',
            stt: '2',
            channel: 'Điện máy xanh',
            users: 42,
            ratio: '50%',
        },
        {
            key: '3',
            stt: '3',
            channel: 'Tận Tâm',
            users: 42,
            ratio: '100%',
        },
        {
            key: '4',
            stt: '4',
            channel: 'Tổng các kênh',
            users: 42,
            ratio: '25%',
        },
    ];
    const statItems = [
        {
            src: chothuchien,
            title: 'Chờ thực hiện',
            value: '12.345 Đơn',
            numericValue: 5678,
            trend: 'up',
            percentage: '5.68%',
            bgColor: '#FFEBED',
            chartData: [20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55, 50, 60],
            chartLineColor: '#FF6F6F', // Màu đường biểu đồ
            chartFillColor: 'rgba(255, 111, 111, 0.2)', // Màu fill biểu đồ
        },
        {
            src: dichuyen,
            title: 'Di chuyển',
            value: '5.678 Đơn',
            numericValue: 2300,
            trend: 'down',
            percentage: '2.3%',
            bgColor: '#FFF4ED',
            chartData: [60, 50, 55, 45, 40, 35, 40, 30, 25, 20, 15, 10, 5], // Dữ liệu giảm
            chartLineColor: '#FFB870', // Màu đường biểu đồ
            chartFillColor: 'rgba(255, 184, 112, 0.2)', // Màu fill biểu đồ
        },
        {
            src: dangthuchien,
            title: 'Đang thực hiện',
            value: '8.901 Đơn',
            numericValue: 8901,
            trend: 'up',
            percentage: '5.68%',
            bgColor: '#DCFCE7',
            chartData: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
            chartLineColor: '#4CAF50',
            chartFillColor: 'rgba(76, 175, 80, 0.2)',
        },
        {
            src: hoanthanh,
            title: 'Hoàn tất',
            value: '25.432 Đơn',
            numericValue: 25432,
            trend: 'up',
            percentage: '5.68%',
            bgColor: '#C3E6FF',
            chartData: [30, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70, 68, 75],
            chartLineColor: '#2196F3',
            chartFillColor: 'rgba(33, 150, 243, 0.2)',
        },
    ];
    const notificationItems = [
        {
            icon: warningicon,
            title: 'Cảnh báo',
            text: '12 đơn hàng sắp trễ giờ',
            bgColor: '#FFCED5',
            textColor: 'red'
        },
        {
            icon: bellicon,
            title: 'Thông báo',
            text: '12 cập nhật trạng thái',
            bgColor: '#FFD88C',
            textColor: '#718EBF'
        },
        {
            icon: bagicon,
            title: null, // No title, as per original
            text: (
                <div className="error-content">
                    <div className="error-item">
                        <span className="error-text">Máy sạc không vào, hoặc báo "Không hỗ trợ phụ kiện này".</span>
                        <span className="error-count">37 lỗi trong tháng này</span>
                    </div>
                    <div className="error-item">
                        <span className="error-text">Màn hình ám màu/ hở sáng / sọc ngang - dọc".</span>
                        <span className="error-count">15 lỗi trong tháng này</span>
                    </div>
                </div>
            ),
            bgColor: '#FFF5D9',
            textColor: 'red',
            isError: true
        },
    ];

    const showNotification = () => {
        notification.info({
            message: 'Thông báo',
            description: 'Tính năng đang phát triển!',
            placement: 'topRight',
        });
    };

    const topStarItems = [
        {
            title: '1 sao',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #DC5C53 100%)',
            crossColor: '#D32F2F',
            percent: 15
        },
        {
            title: '2 sao',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #FF6C02 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: '3 sao',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #FF6C02 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: '4 sao',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #104086 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: '5 sao',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #104086 100%)',
            crossColor: '#D32F2F'
        },
    ];

    const topErrItems = [
        {
            title: 'T3. Trễ hẹn',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #DC5C53 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: 'T4. Tay nghề',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #FF6C02 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: 'T2. Thái độ',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #FF6C02 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: 'T1. Trễ hẹn',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #104086 100%)',
            crossColor: '#D32F2F'
        },
        {
            title: 'T5. Trễ hẹn',
            subTitle: '3755 - Trụ sở MWG',
            bgColor: 'linear-gradient(90deg, #FDF6F5 0%, #104086 100%)',
            crossColor: '#D32F2F'
        },
    ];

    return (
        <div className="app-container">
            <Row className="header-row" gutter={[0, 16]}>
                <Col xs={24} md={8} lg={6} xl={5} xxl={4}>
                    <div className={`logo-container ${isMobile ? 'mobile' : ''}`}>
                        <div><img src={logo} className="logo-img" /></div>
                        <div className="logo-text">Hiệu quả vận hành</div>
                    </div>
                </Col>
                <Col xs={24} md={16} lg={12} xl={13} xxl={14} className="form-col">
                    <Form className="search-form" onFinish={() => openNotificationWithIcon('info', 'Tính năng đang phát triển!')}>
                        <Row className="form-row" gutter={[16, 16]} justify="center" align="middle">
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item className="form-item">
                                    <Select placeholder="Chọn dịch vụ...">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item className="form-item">
                                    <Select placeholder="Chọn cơ cấu tổ chức...">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={10} lg={8}>
                                <Form.Item className="form-item">
                                    <RangePicker
                                        className="range-picker"
                                        defaultValue={[dayjs(), dayjs()]}
                                        format={'DD/MM/YYYY'}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={2}>
                                <Form.Item className="form-item">
                                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col xs={0} sm={0} md={0} lg={6} xl={6} xxl={6} className={`user-col ${!screens.lg ? 'hidden' : ''}`}>
                    <div className="user-info">
                        <div className="notification-bell-container" onClick={() => openNotificationWithIcon('info', 'Tính năng đang phát triển!')}>
                            <img src={bell} alt="Notification Bell" className="bell-icon" />
                            <span className="notification-dot" />
                        </div>
                        <div className="user-details">
                            <span>Nguyễn Nguyên Khang</span>
                            <span className="user-id">3755 - Trụ sở MWG</span>
                        </div>
                        <div>
                            <img src={avatar} className="avatar-img" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="content-row" gutter={[15, 15]}>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <div className="operation-card">
                                <Row gutter={[10, 30]} style={{ padding: 10 }}>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={4} xxl={4}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Tổng lượt đánh giá / Đơn hàng</span>
                                            <span
                                                style={{
                                                    fontSize: 22,
                                                    fontWeight: 'bold'
                                                }}>
                                                2.235/
                                                <span
                                                    style={{
                                                        fontSize: 15,
                                                        color: '#0195FF'
                                                    }}
                                                >5.505 đơn
                                                </span>
                                            </span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={4} xxl={4}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Sao đánh giá TB</span>
                                            <span><span style={{ fontSize: 22, fontWeight: 'bold', color: '#323F4B' }}>4.5</span><Rate style={{ fontSize: 13, marginLeft: 5 }} value={4.5} /></span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={4} xxl={4}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Tỷ lệ 5 <StarFilled style={{ color: '#FADB15' }} /></span>
                                            <span style={{ fontSize: 22, fontWeight: 'bold', color: '#323F4B' }}>54%</span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={4} xxl={4}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Tỷ lệ 1-4 <StarFilled style={{ color: '#FADB15' }} /></span>
                                            <span style={{ fontSize: 22, fontWeight: 'bold', color: '#323F4B' }}>17%</span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={4} xxl={4}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}><ExclamationCircleFilled style={{ color: '#E6602B' }} /> Khiếu nại</span>
                                            <span style={{ fontSize: 22, fontWeight: 'bold', color: '#323F4B' }}>17 Khiếu nại</span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={4} xxl={4}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <Select
                                                showSearch
                                                style={{ width: '100%' }}
                                                placeholder="Tất cả khu vực/ kho của..."
                                                optionFilterProp="label"
                                                filterSort={(optionA, optionB) =>
                                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                                }
                                                options={[
                                                    {
                                                        value: '1',
                                                        label: 'Not Identified',
                                                    },
                                                    {
                                                        value: '2',
                                                        label: 'Closed',
                                                    },
                                                    {
                                                        value: '3',
                                                        label: 'Communicated',
                                                    },
                                                    {
                                                        value: '4',
                                                        label: 'Identified',
                                                    },
                                                    {
                                                        value: '5',
                                                        label: 'Resolved',
                                                    },
                                                    {
                                                        value: '6',
                                                        label: 'Cancelled',
                                                    },
                                                ]}
                                            />
                                            <span style={{ textAlign: 'right', color: '#323F4B', fontSize: 12 }}>Thời gian áp dụng 01/10/2025</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col xs={24} xl={18}>
                            <div className="operation-card">
                                <RatingGroupedBarChart
                                    title='Tổng quan sao đánh giá'
                                    labels={[
                                        'Kho Hà Nội dài tối đa hai dòng số một',
                                        'Tên kho sẽ dài tối đa hai dòng',
                                        'Kho Đà Nẵng rất dài, dài nữa',
                                        'Kho Hải Phòng',
                                        'Kho Cần Thơ siêu dài khủng khiếp',
                                        'Tên kho rất rất rất dài',
                                        'Kho thành phố Hồ Chí Minh',
                                        'Kho Thái Nguyên',
                                        'Kho Bình Dương cực kỳ dài'
                                    ]}
                                    chartData={{
                                        'Không đánh giá': { data: [55, 60, 58, 55, 56, 57, 58, 55, 62], color: '#4CAF50' },
                                        '1 Sao': { data: [15, 25, 20, 22, 25, 18, 22, 19, 12], color: '#E53935' },
                                        '2 Sao': { data: [30, 30, 35, 32, 28, 25, 27, 25, 38], color: '#FFB300' },
                                        '3 Sao': { data: [50, 55, 52, 58, 55, 50, 55, 52, 45], color: '#4FC3F7' },
                                        '4 Sao': { data: [75, 80, 78, 75, 78, 80, 75, 80, 85], color: '#00BCD4' },
                                        '5 Sao': { data: [175, 180, 175, 180, 175, 180, 175, 180, 190], color: '#1813F4' },
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xs={24} md={12} xl={6}>
                            <div className="operation-card">
                                <span style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Top kho có tỷ trọng sao thấp</span>
                                <div style={{ padding: 10 }}>
                                    {
                                        topStarItems.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '10px',
                                                        borderRadius: '12px',
                                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                        position: 'relative',
                                                        width: '100%',
                                                        background: item.bgColor, // Sử dụng biến gradient
                                                        color: 'white',
                                                        marginTop: '5px'
                                                        // fontFamily: 'Arial, sans-serif'
                                                    }}
                                                >

                                                    {/* ICON CIRCLE */}
                                                    <div
                                                        style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            minWidth: '40px',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginRight: '15px',
                                                            backgroundColor: '#F7C3C0',
                                                            border: '1px solid rgba(255, 255, 255, 0.5)',
                                                            position: 'relative',
                                                        }}
                                                    >
                                                        <img src={pajamastimeout}></img>
                                                    </div>

                                                    <div style={{ flexGrow: 1 }}>
                                                        <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#2B3674' }}>{item.title}</div>
                                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#4BA665' }}>{item.subTitle}
                                                            <span style={{ marginLeft: 10, color: 'red' }}>{item.percent || 0}%</span>
                                                        </div>
                                                    </div>

                                                    <div
                                                        style={{
                                                            cursor: 'pointer',
                                                            marginLeft: '10px',
                                                            fontSize: '20px',
                                                            lineHeight: '1',
                                                            opacity: '0.7'
                                                        }}
                                                    >
                                                        &#8942;
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} md={12} xl={9}>
                            <div className="operation-card">
                                <div
                                    style={{
                                        margin: 10,
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>Số lượng lỗi khiếu nại theo khu vực</span>
                                    <span style={{ fontSize: 20, fontWeight: 'bold' }}>2.235<span style={{ color: '#0195FF' }}>/5.505 đơn</span></span>
                                </div>
                                <Top5ErrorPercentageChart />
                            </div>
                        </Col>
                        <Col xs={24} md={12} xl={9}>
                            <div className="operation-card">
                                <span style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Tỷ trọng sao - Khiếu nại theo khu vực</span>
                                <StarRatingChart />
                            </div>
                        </Col>
                        <Col xs={24} md={12} xl={6}>
                            <div className="operation-card">
                                <span style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Top tỷ trọng khiếu nại theo kho</span>
                                <div style={{ padding: 10 }}>
                                    {
                                        topErrItems.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '10px',
                                                        borderRadius: '12px',
                                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                        position: 'relative',
                                                        width: '100%',
                                                        background: item.bgColor, // Sử dụng biến gradient
                                                        color: 'white',
                                                        marginTop: '5px'
                                                        // fontFamily: 'Arial, sans-serif'
                                                    }}
                                                >

                                                    {/* ICON CIRCLE */}
                                                    <div
                                                        style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            minWidth: '40px',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginRight: '15px',
                                                            backgroundColor: '#F7C3C0',
                                                            border: '1px solid rgba(255, 255, 255, 0.5)',
                                                            position: 'relative',
                                                        }}
                                                    ><img src={pajamastimeout}></img>
                                                    </div>

                                                    <div style={{ flexGrow: 1 }}>
                                                        <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px', color: '#2B3674' }}>{item.title}</div>
                                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#4BA665' }}>{item.subTitle}</div>
                                                    </div>

                                                    <div
                                                        style={{
                                                            cursor: 'pointer',
                                                            marginLeft: '10px',
                                                            fontSize: '20px',
                                                            lineHeight: '1',
                                                            opacity: '0.7'
                                                        }}
                                                    >
                                                        &#8942;
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div className="operation-card">
                                <AverageStarTrendChart />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {contextHolder}
        </div>
    );
};

export default Detail1;