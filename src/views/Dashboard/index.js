import { Col, Row, Grid, Form, Select, DatePicker, Typography, Button, Rate, Table, Progress, Tooltip, message, notification } from "antd";
import React from "react";
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
import PersonnelStackedChart from "./components/PersonnelStackedChart";
import './css/style.css';
import WavySparkChart from "./components/WavySparkChart";
import SalesTrendAndTargetChart from "./components/SalesTrendAndTargetChart";
import { NotificationService } from "../../utils/NotificationService";
import StarRatingChartD3 from "./components/StarRatingChartD3";
import StackedBarChartD3 from "./components/StackedBarChartD3";

const { RangePicker } = DatePicker;
const Dashboard = (props) => {
    console.log("props", props)
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
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
            value: '12.34523333 Đơn',
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

    // 1. Dữ liệu MẪU
    const chartData = [
        { level: 'LV1', 'Đang trống': 55, 'Chờ thực hiện': 650, 'Đang thực hiện': 450, total: 1155 },
        { level: 'LV2', 'Đang trống': 55, 'Chờ thực hiện': 550, 'Đang thực hiện': 42, total: 647 },
        { level: 'LV3', 'Đang trống': 75, 'Chờ thực hiện': 25, 'Đang thực hiện': 235, total: 335 },
        { level: 'LV4', 'Đang trống': 12, 'Chờ thực hiện': 101, 'Đang thực hiện': 59, total: 172 },
    ];

    // 2. MÀU SẮC (Ánh xạ Key và Mã màu)
    const colorMapping = {
        'Đang thực hiện': '#154df5ff', // Xanh dương
        'Chờ thực hiện': '#fcbb18ff',     // Vàng
        'Đang trống': '#16925cff'             // Xanh lá
    };

    // 3. THỨ TỰ KEYS (Đảo ngược: Xanh lá (Đang trống) ở bên trái -> Xanh dương (Đang đang thực hiện) ở bên phải)
    const stackingOrder = ['Đang trống', 'Chờ thực hiện', 'Đang thực hiện'];
    const starRatingData = [
        { value: 12, label: '1 Sao', color: '#FF6347' },       // Đỏ
        { value: 10, label: '2 Sao', color: '#FFD700' },       // Vàng
        { value: 15, label: '3 Sao', color: '#00BFFF' },       // Xanh da trời
        { value: 25, label: '4 Sao', color: '#20B2AA' },       // Xanh mòng két
        { value: 30, label: '5 Sao', color: '#0000FF' },       // Xanh dương đậm
        { value: 8, label: 'Không đánh giá', color: '#138a49ff' }, // Xanh lục
    ];

    return (
        <>
            <Row className="content-row" gutter={[15, 15]}>
                <Col span={24}>
                    <Row gutter={[15, 15]}>
                        <Col xs={24} sm={24} md={14} lg={14} xl={16}>
                            <div className="operation-card">
                                <Row className="operation-header" gutter={[10, 10]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <span className="operation-title">Vận hành</span>
                                        <span className="operation-count">323,893 đơn hàng</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} className={`operation-date ${!screens.md ? 'mobile' : ''}`}>
                                        <span>01/09/2023 - 30/09/2023</span>
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
                                                        <span className="stat-link" onClick={() => NotificationService.info('Thông báo', 'Tính năng đang phát triển!')}>Xem chi tiết</span>
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
                                            <div className={`notification-item ${item.isError ? 'error' : ''}`} onClick={() => NotificationService.info('Thông báo', 'Tính năng đang phát triển!')}>
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
                    <Row gutter={[15, 15]} className="bottom-row" style={{ marginTop: 15 }}>
                        <Col xs={24} sm={24} md={24} lg={14} xl={8}>
                            <div className="satisfaction-card" onClick={() => NotificationService.info('Thông báo', 'Bạn vừa click hiệu quả hài lòng')}>
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
                                            {/* <StarRatingChart
                                                chartData={[8, 10, 12, 15, 25, 30]}
                                                labels={['1 Sao', '2 Sao', '3 Sao', '4 Sao', '5 Sao', 'Không đánh giá']}
                                            /> */}
                                            <StarRatingChartD3 data={starRatingData} />
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className="error-chart-container">
                                            <ErrorImpactChart
                                                minHeight={isMobile ? 400 : 320}
                                                width='100%'
                                                title="Lỗi ảnh hưởng sao phục vụ"
                                                labels={['T1. Tay nghề', 'T2. Thái độ phục vụ', 'T3. Trễ hẹn/chậm thời gian', 'T4. Quy trình', 'T5. Lỗi đặc biệt nghiêm trọng']}
                                                chartData={[12000, 9000, 20500, 6500, 1000]}
                                                isMobile={!screens.md}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={10} xl={16}>
                            <Row gutter={[15, 15]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="personnel-card" onClick={() => NotificationService.info('Thông báo', 'Bạn vừa click nhân sự')}>
                                        <span style={{
                                            fontSize: 30,
                                            color: 'black',
                                            fontWeight: 'bold',
                                            padding: 10
                                        }}>Nhân sự</span>
                                        {/* <PersonnelStackedChart /> */}
                                        <StackedBarChartD3
                                            data={chartData}
                                            colorMapProps={colorMapping}
                                            keysOrder={stackingOrder}
                                        />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div className="table-card" onClick={() => NotificationService.info('Thông báo', 'Bạn vừa click tư vấn cài app')}>
                                        <Row className="table-header" gutter={[10, 10]}>
                                            <Col xs={24} sm={24} md={12}>
                                                <span className="table-title" >Tư vấn cài App</span>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} className={`table-date-col ${!screens.md ? 'mobile' : ''}`}>
                                                <Typography.Text>
                                                    <span>01/09/2023 - 30/09/2023</span>
                                                    <span className="table-link" onClick={() => NotificationService.info('Thông báo', 'Tính năng đang phát triển!')}>Chi tiết</span>
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
                                {screens.xl && (
                                    <Col span={24}>
                                        <div className="sales-card" onClick={() => NotificationService.info('Thông báo', 'Bạn vừa click doanh thu')}>
                                            <SalesTrendAndTargetChart />
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Col>

                        {!screens.xl && (
                            <Col span={24}>
                                <div className="sales-card" onClick={() => NotificationService.info('Thông báo', 'Bạn vừa click doanh thu')}>
                                    <SalesTrendAndTargetChart />
                                </div>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;