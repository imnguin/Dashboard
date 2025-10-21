import { Col, Row, Grid, Form, Select, DatePicker, Typography, Button, Rate, Table, Progress, Tooltip, message, notification } from "antd";
import React from "react";
import avatar from "../../assets/images/anh-dai-dien-hai-yodyvn.jpg";
import bell from "../../assets/images/free-bell-icon-860-thumb.png";
import logo from "../../assets/images/111.png";
import chothuchien from "../../assets/images/chothuchien.png";
import dichuyen from "../../assets/images/dichuyen.png";
import dangthuchien from "../../assets/images/dangthuchien.png";
import hoanthanh from "../../assets/images/hoanthanh.png";
import bellicon from "../../assets/images/bellicon.png";
import bagicon from "../../assets/images/bagicon.png";
import warningicon from "../../assets/images/warningicon.png";
import { ExportOutlined, WarningFilled, MoreOutlined, SearchOutlined } from '@ant-design/icons';
import StarRatingChart from "./components/StarRatingChart";
import ErrorImpactChart from "./components/ErrorImpactChart";
import SalesTargetChart from "./components/SalesTargetChart";
import PersonnelStackedChart from "./components/PersonnelStackedChart";
import './css/style.css';
import WavySparkChart from "./components/WavySparkChart";
import dayjs from "dayjs";
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import SalesTrendAndTargetChart from "./components/SalesTrendAndTargetChart";
dayjs.extend(weekday);
dayjs.extend(localeData);

const { RangePicker } = DatePicker;
const Dashboard = () => {
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
            chartData: [20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45, 55],
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
            chartData: [60, 50, 55, 45, 40, 35, 40, 30, 25, 20, 15], // Dữ liệu giảm
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
            chartData: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,],
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
            chartData: [30, 35, 40, 38, 45, 50, 48, 55, 60, 58, 65, 70],
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
                        <Col xs={24} sm={24} md={14} lg={14} xl={16}>
                            <div className="operation-card">
                                <Row className="operation-header" gutter={[10, 10]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <span className="operation-title">Vận hành</span>
                                        <span className="operation-count">323,893 đơn hàng</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} className={`operation-date ${!screens.md ? 'mobile' : ''}`}>
                                        <Typography.Text>
                                            <span>01/09/2023 - 30/09/2023</span>
                                            <Button
                                                className="export-button"
                                                type="primary"
                                                size="middle"
                                                icon={<ExportOutlined />}
                                                onClick={() => openNotificationWithIcon('info', 'Tính năng đang phát triển!')}
                                            >
                                                Export
                                            </Button>
                                        </Typography.Text>
                                    </Col>
                                </Row>
                                <Row className="operation-stats" gutter={[10, 10]}>
                                    {statItems.map((item, index) => (
                                        <Col xs={24} sm={24} md={12} lg={12} xl={6} key={index}>
                                            <div className={`stat-card ${item.title.toLowerCase().replace(/\s/g, '')}`} style={{ backgroundColor: item.bgColor }}>
                                                <div className="stat-wrapper">
                                                    <div className="stat-content">
                                                        <img src={item.src} className="stat-icon" />
                                                        <div className="stat-text">
                                                            <Typography.Text className="stat-value">{item.value}</Typography.Text>
                                                            <Typography.Text className="stat-label">{item.title}</Typography.Text>
                                                        </div>
                                                    </div>
                                                    <div className="stat-details">
                                                        <span className={`stat-trend ${item.trend}`}>{item.trend === 'down' ? '▼' : '▲'}</span>
                                                        <span className="stat-percentage"> {item.percentage}</span>
                                                        <span className="stat-link" onClick={() => openNotificationWithIcon('info', 'Tính năng đang phát triển!')}>Xem chi tiết</span>
                                                    </div>
                                                </div>
                                                {item.chartData && (
                                                    <WavySparkChart
                                                        data={item.chartData}
                                                        trend={item.trend}
                                                        lineColor={item.chartLineColor}
                                                        fillColor={item.chartFillColor}
                                                    />
                                                )}
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl={8}>
                            <div className="notification-card">
                                <Row className="notification-row" gutter={[0, 10]} style={{ width: '100%', padding: 10 }}>
                                    {notificationItems.map((item, index) => (
                                        <Col span={24} key={index}>
                                            <div className={`notification-item ${item.isError ? 'error' : ''}`} onClick={() => openNotificationWithIcon('info', 'Tính năng đang phát triển!')}>
                                                <div className="notification-content">
                                                    <div className="notification-icon-container" style={{ backgroundColor: item.bgColor }}>
                                                        <img src={item.icon} className="notif-icon" />
                                                    </div>
                                                    <div className={`notification-text ${item.isError ? 'error-text-container' : ''}`}>
                                                        {item.title && <span className="notification-title">{item.title}</span>}
                                                        {typeof item.text === 'string' ? (
                                                            <span className="notification-message" style={{ color: item.textColor, fontSize: '13px' }}>{item.text}</span>
                                                        ) : (
                                                            item.text
                                                        )}
                                                    </div>
                                                </div>
                                                <span><MoreOutlined /></span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[10, 20]} className="bottom-row" style={{ marginTop: 15 }}>
                        <Col xs={24} sm={24} md={24} lg={14} xl={8}>
                            <div className="satisfaction-card">
                                <Row gutter={[10, 10]}>
                                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                        <div className="satisfaction-header">
                                            <span className="satisfaction-title">Hiệu quả hài lòng</span>
                                            <span className="satisfaction-count">323.839 đơn hàng</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} className={`satisfaction-rating-col ${isMobile ? 'mobile' : ''}`}>
                                        <div className="rating-container">
                                            <span className="rating-label">Sao đánh giá TB</span>
                                            <span><span className="rating-value">4.5</span><Rate value={4.5} /></span>
                                            <span className="rating-trend"><span className="trend-down">&#9660; 0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className={`chart-container ${isMobile ? 'mobile' : ''}`}>
                                            <StarRatingChart
                                                chartData={[8, 10, 12, 15, 25, 30]}
                                                labels={['1 Sao', '2 Sao', '3 Sao', '4 Sao', '5 Sao', 'Không đánh giá']}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="error-chart-container">
                                            <ErrorImpactChart
                                                minHeight={isMobile ? 400 : 200}
                                                width='100%'
                                                title="Lỗi ảnh hưởng sao phục vụ"
                                                labels={['T1. Tay nghề', 'T2. Thái độ phục vụ', 'T3. Trễ hẹn/chậm thời gian', 'T4. Quy trình', 'T5. Lỗi đặc biệt nghiêm trọng']}
                                                chartData={[12000, 9000, 20500, 6500, 1000]}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={10} xl={16}>
                            <Row gutter={[10, 10]}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                        <div className="personnel-card">
                                            <PersonnelStackedChart />
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                        <div className="table-card">
                                            <Row className="table-header" gutter={[10, 10]}>
                                                <Col xs={24} sm={24} md={12}>
                                                    <span className="table-title" >Tư vấn cài App</span>
                                                </Col>
                                                <Col xs={24} sm={24} md={12} className={`table-date-col ${!screens.md ? 'mobile' : ''}`}>
                                                    <Typography.Text>
                                                        <span>01/09/2023 - 30/09/2023</span>
                                                        <span className="table-link" onClick={() => openNotificationWithIcon('info', 'Tính năng đang phát triển!')}>Chi tiết</span>
                                                    </Typography.Text>
                                                </Col>
                                            </Row>
                                            <Table
                                                columns={columns}
                                                dataSource={data}
                                                size="large"
                                                pagination={false}
                                            />
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="sales-card">
                                            <SalesTrendAndTargetChart />
                                        </div>
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {contextHolder}
        </div>
    );
};

export default Dashboard;