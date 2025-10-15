import { Col, Row, Grid, Form, Select, DatePicker, Typography, Button } from "antd";
import React from "react";
import dayjs from "dayjs"; // Import dayjs
import avatar from "../assets/images/anh-dai-dien-hai-yodyvn.jpg";
import bell from "../assets/images/free-bell-icon-860-thumb.png";
import logo from "../assets/images/111.png";
import { ExportOutlined, WarningFilled } from '@ant-design/icons';
const Dashboard = () => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const isMobile = !screens.lg;
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    return (
        <div
            style={{
                height: "100vh",
                backgroundColor: "#DEFEFB",
                overflowX: "hidden",
                maxWidth: "100%",
            }}
        >
            <Row
                style={{
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    padding: "15px 20px",
                    minHeight: "64px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
                gutter={[0, 16]}
            >
                <Col xs={24} md={8} lg={6} xl={5} xxl={4}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: isMobile ? "center" : "flex-start",
                            alignItems: "center",
                            height: "100%",
                            gap: 10,
                        }}
                    >
                        <div><img
                            src={logo}
                            style={{
                                height: 60,
                            }}
                        /></div>
                        <div
                            style={{
                                fontWeight: "bold",
                                fontSize: "19px",
                            }}
                        >
                            Hiệu quả vận hành
                        </div>
                    </div>
                </Col>
                <Col
                    xs={24}
                    md={16}
                    lg={12}
                    xl={13}
                    xxl={14}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        padding: 0,
                    }}
                >
                    <Form
                        style={{
                            width: "100%",
                            margin: 0,
                            maxWidth: "100%",
                        }}
                    >
                        <Row
                            gutter={[16, 16]}
                            justify="center"
                            align="middle"
                            style={{
                                minHeight: "100%",
                                margin: 0,
                                width: "100%",
                                boxSizing: "border-box",
                            }}
                        >
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item style={{ margin: 0 }}>
                                    <Select placeholder="Chọn dịch vụ...">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item style={{ margin: 0 }}>
                                    <Select placeholder="Chọn cơ cấu tổ chức...">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item style={{ margin: 0 }}>
                                    <DatePicker
                                        style={{ width: "100%" }}
                                        defaultValue={dayjs()} // Đặt ngày hôm nay
                                        format={"DD/MM/YYYY"}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item style={{ margin: 0 }}>
                                    <DatePicker
                                        style={{ width: "100%" }}
                                        defaultValue={dayjs()} // Đặt ngày hôm nay
                                        format={"DD/MM/YYYY"}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col
                    xs={0}
                    sm={0}
                    md={0}
                    lg={6}
                    xl={6}
                    xxl={6}
                    style={{
                        display: isMobile ? "none" : "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <div>
                            <img
                                src={bell}
                                style={{
                                    height: 25,
                                    width: 25,
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                lineHeight: "1.2",
                            }}
                        >
                            <div>Nguyễn Nguyên Khang</div>
                            <div style={{ fontSize: 13 }}>3755 - Trụ sở MWG</div>
                        </div>
                        <div>
                            <img
                                src={avatar}
                                style={{
                                    height: 35,
                                    width: 35,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "1px solid #dbe2ebff",
                                }}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ padding: 15 }} gutter={[15, 15]}>
                <Col span={24}>
                    <Row gutter={[10, 10]}>
                        <Col xs={24} sm={24} md={14} lg={14} xl={16}>
                            <div
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#FFFFFF',
                                    // height: 300,
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: 10,
                                    flexDirection: 'column',
                                    padding: 10,
                                }}
                            >
                                <Row
                                    style={{
                                        display: 'flex',
                                        padding: 10,
                                        width: '100%',
                                        justifyContent: 'space-between',
                                    }}
                                    gutter={[10, 10]}
                                >
                                    <Col span={12}>
                                        <Typography.Text strong style={{ fontSize: 20, color: 'black' }}>
                                            Vận hành{' '}
                                            <Typography.Text strong style={{ color: '#0084ff', marginLeft: 10 }}>
                                                323,893 đơn hàng
                                            </Typography.Text>
                                        </Typography.Text>
                                    </Col>
                                    <Col span={12} style={{ textAlign: 'right' }}>
                                        <Typography.Text>
                                            <span style={{ marginRight: '15px' }}>01/09/2023 - 30/09/2023</span>
                                            <Button
                                                type="primary"
                                                style={{
                                                    backgroundColor: '#ffffffff',
                                                    borderColor: '#dbe2ebff',
                                                    color: '#818181ff',
                                                }}
                                                size="middle"
                                                icon={<ExportOutlined />}
                                            >
                                                Export
                                            </Button>
                                        </Typography.Text>
                                    </Col>
                                </Row>
                                <Row gutter={[10, 10]} style={{ padding: 10, flex: 1, marginTop: 15, marginBottom: 15 }}>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                                        <div
                                            style={{
                                                backgroundColor: "#ffffffff",
                                                display: "flex",
                                                border: '1px solid #dbe2ebff',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                height: '100%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#FFEBED'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <span role="img" aria-label="pending" style={{ fontSize: "22px", color: "#ff4d4f" }}>
                                                    📋
                                                </span>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "16px", color: "#000000ff", fontWeight: "bold" }}>Chờ thực hiện</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: "#3f8600" }}>↑ 5.68%</span>
                                                <span style={{ marginLeft: 5, color: "#01D9C0" }}>Xem chi tiết</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                                        <div
                                            style={{
                                                backgroundColor: "#ffffffff",
                                                display: "flex",
                                                border: '1px solid #dbe2ebff',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                height: '100%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#FFF4ED'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <span role="img" aria-label="pending" style={{ fontSize: "22px", color: "#ff4d4f" }}>
                                                    📋
                                                </span>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "16px", color: "#000000ff", fontWeight: "bold" }}>Di chuyển</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: "#3f8600" }}>↑ 5.68%</span>
                                                <span style={{ marginLeft: 5, color: "#01D9C0" }}>Xem chi tiết</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                                        <div
                                            style={{
                                                backgroundColor: "#ffffffff",
                                                display: "flex",
                                                border: '1px solid #dbe2ebff',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                height: '100%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#DCFCE7'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <span role="img" aria-label="pending" style={{ fontSize: "22px", color: "#ff4d4f" }}>
                                                    📋
                                                </span>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "16px", color: "#000000ff", fontWeight: "bold" }}>Đang thực hiện</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: "#3f8600" }}>↑ 5.68%</span>
                                                <span style={{ marginLeft: 5, color: "#01D9C0" }}>Xem chi tiết</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                                        <div
                                            style={{
                                                backgroundColor: "#ffffffff",
                                                display: "flex",
                                                border: '1px solid #dbe2ebff',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                height: '100%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#C3E6FF'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <span role="img" aria-label="pending" style={{ fontSize: "22px", color: "#ff4d4f" }}>
                                                    📋
                                                </span>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "16px", color: "#000000ff", fontWeight: "bold" }}>Hoàn tất</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: "#3f8600" }}>↑ 5.68%</span>
                                                <span style={{ marginLeft: 5, color: "#01D9C0" }}>Xem chi tiết</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl={8}>
                            <div
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: 10,
                                    padding: 10,
                                }}
                            >
                                <Row style={{ width: '100%', padding: 10 }} gutter={[0, 10]}>
                                    <Col span={24}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: 10,
                                                border: '1px solid #ffffffff',
                                                padding: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                                <div style={{
                                                    width: '35px',
                                                    height: '35px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFCED5',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <WarningFilled style={{ fontSize: '13px', color: 'red' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <span style={{ fontWeight: '500' }}>Cảnh báo</span>
                                                    <span style={{ color: 'red', fontSize: '12px' }}> 12 đơn hàng sắp trễ giờ</span>
                                                </div>
                                            </div>
                                            <div>Chi tiết phần 1</div>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderRadius: 10,
                                                border: '1px solid #ffffffff',
                                                padding: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                                <div style={{
                                                    width: '35px',
                                                    height: '35px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFCED5',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <WarningFilled style={{ fontSize: '13px', color: 'red' }} />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <span style={{ fontWeight: '500' }}>Cảnh báo</span>
                                                    <span style={{ color: 'red', fontSize: '12px' }}> 12 đơn hàng sắp trễ giờ</span>
                                                </div>
                                            </div>
                                            <div>Chi tiết phần 1</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;