import React from "react";
import { Col, Row, Grid, Form, Select, DatePicker, Typography, Button, Rate, Table, Progress, Tooltip, message, notification } from "antd";
import '../css/style.css';
import RatingGroupedBarChart from "../components/RatingGroupedBarChart";
const Detail2 = () => {
    return (
        <>
        <Row className="content-row" gutter={[15, 15]}>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <div className="operation-card">
                                <Row gutter={[10, 30]} style={{ padding: 10 }}>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Tổng doanh thu</span>
                                            <span
                                                style={{
                                                    fontSize: 22,
                                                    fontWeight: 'bold',
                                                    color: '#4BA665'
                                                }}>
                                                2.235.343.545 VNĐ
                                            </span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Số lượng đơn</span>
                                            <span style={{ fontSize: 22, fontWeight: 'bold', color: '#4BA665' }}>2.235.343 đơn</span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Doanh thu nhập trả</span>
                                            <span style={{ fontSize: 22, fontWeight: 'bold', color: 'red' }}>2.235.343.545 VNĐ</span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10
                                            }}
                                        >
                                            <span style={{ fontWeight: '500', color: '#323F4B' }}>Tỷ lệ nhập trả</span>
                                            <span style={{ fontSize: 22, fontWeight: 'bold', color: '#323F4B' }}>17%</span>
                                            <span><span style={{ color: 'red', fontWeight: '500' }}>▼ -0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col xs={24} xl={18}>
                            <div className="operation-card">
                                <RatingGroupedBarChart
                                    title='Tổng quan doanh thu theo từng khu vực'
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
                                        'Nhập trả': { data: [15, 25, 20, 22, 25, 18, 22, 19, 12], color: '#E53935' },
                                        'Doanh khu': { data: [50, 55, 52, 58, 55, 50, 55, 52, 45], color: '#4FC3F7' },
                                        'Target': { data: [175, 180, 175, 180, 175, 180, 175, 180, 190], color: '#1813F4' },
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    );
};

export default Detail2;