import { Col, Row, Grid, Form, Select, DatePicker, Typography, Button, Rate, Table, Progress, Tooltip } from "antd";
import React from "react";
import dayjs from "dayjs"; // Import dayjs
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
const { RangePicker } = DatePicker;
const Dashboard = () => {
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
                            <Col xs={24} sm={12} md={10} lg={8}>
                                <Form.Item style={{ margin: 0 }}>
                                    <RangePicker
                                        style={{ width: '100%' }}
                                        defaultValue={[dayjs('2015/01/01', 'DD/MM/YYYY'), dayjs('2015/01/01', 'DD/MM/YYYY')]}
                                        format={'DD/MM/YYYY'}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={2}>
                                <Form.Item style={{ margin: 0 }}>
                                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
                                    </Button>
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
                        display: !screens.lg ? "none" : "flex",
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
                            {/* CONTAINER: Thẻ DIV cha cần có position: 'relative' để định vị dấu chấm đỏ */}
                            <div
                                style={{
                                    position: 'relative',
                                    display: 'inline-block', // Quan trọng: Giúp thẻ div ôm khít kích thước của icon
                                    // Nếu bạn không dùng inline-block, thẻ div sẽ chiếm hết chiều rộng và làm sai lệch vị trí của dấu chấm đỏ.
                                }}
                            >
                                {/* ICON CHUÔNG */}
                                <img
                                    src={bell}
                                    alt="Notification Bell"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        borderRadius: "50%",
                                    }}
                                />

                                {/* DẤU CHẤM ĐỎ: Sử dụng position: 'absolute' */}
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: -3,     // Điều chỉnh để dấu chấm nằm trên cùng, hơi lấn ra ngoài
                                        right: -3,   // Điều chỉnh để dấu chấm nằm bên phải, hơi lấn ra ngoài
                                        height: 8,
                                        width: 8,
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        zIndex: 10, // Đảm bảo dấu chấm nằm trên icon
                                        border: '1px solid white', // Tùy chọn: Thêm viền trắng để nổi bật hơn
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                lineHeight: "1.2",
                            }}
                        >
                            <span>Nguyễn Nguyên Khang</span>
                            <span style={{ fontSize: 13, color: '#787486' }}>3755 - Trụ sở MWG</span>
                        </div>
                        <div>
                            <img
                                src={avatar}
                                style={{
                                    height: 35,
                                    width: 35,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "1px solid #b4d4ffff",
                                }}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ padding: 15 }} gutter={[15, 15]}>
                <Col span={24}>
                    <Row gutter={[10, 10]} >
                        <Col xs={24} sm={24} md={14} lg={14} xl={16}>
                            <div
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#FFFFFF',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: 10,
                                    flexDirection: 'column',
                                    padding: 10,
                                    height: '100%'
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
                                    <Col xs={24} sm={24} md={12}>
                                        <span style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>Vận hành</span>
                                        <span style={{ fontWeight: 'bold', fontSize: 16, color: '#0084ff', marginLeft: 10 }}>323,893 đơn hàng</span>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} style={{ textAlign: !screens.md ? 'left' : 'right' }}>
                                        <Typography.Text>
                                            <span>01/09/2023 - 30/09/2023</span>
                                            <Button
                                                type="primary"
                                                style={{
                                                    backgroundColor: '#ffffffff',
                                                    borderColor: '#dbe2ebff',
                                                    color: '#818181ff',
                                                    marginLeft: 15
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
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                minHeight: '80%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#FFEBED',
                                                paddingLeft: '10%'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <img
                                                    src={chothuchien}
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: "50%",
                                                        marginTop: 5,
                                                        objectFit: "cover",
                                                        border: "1px solid #dbe2ebff",
                                                    }}
                                                />
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "14px", color: "#000000ff", fontWeight: "bold", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Chờ thực hiện</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: '#01D9C0' }}>&#9650;</span><span style={{ color: "#000000ff" }}> 5.68%</span>
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
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                minHeight: '80%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#FFF4ED',
                                                paddingLeft: '10%'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <img
                                                    src={dichuyen}
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: "50%",
                                                        marginTop: 5,
                                                        objectFit: "cover",
                                                        border: "1px solid #dbe2ebff",
                                                    }}
                                                />
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "14px", color: "#000000ff", fontWeight: "bold", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Di chuyển</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: '#EA9011' }}>&#9660;</span><span style={{ color: "#000000ff" }}> 2.3%</span>
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
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                minHeight: '80%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#DCFCE7',
                                                paddingLeft: '10%'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <img
                                                    src={dangthuchien}
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: "50%",
                                                        marginTop: 5,
                                                        objectFit: "cover",
                                                        border: "1px solid #dbe2ebff",
                                                    }}
                                                />
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "14px", color: "#000000ff", fontWeight: "bold", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Đang thực hiện</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: '#01D9C0' }}>&#9650;</span><span style={{ color: "#000000ff" }}> 5.68%</span>
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
                                                borderRadius: 10,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                minHeight: '80%',
                                                padding: 10,
                                                flexDirection: 'column',
                                                backgroundColor: '#C3E6FF',
                                                paddingLeft: '10%'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
                                                <img
                                                    src={hoanthanh}
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: "50%",
                                                        marginTop: 5,
                                                        objectFit: "cover",
                                                        border: "1px solid #dbe2ebff",
                                                    }}
                                                />
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Typography.Text style={{ fontSize: "22px", fontWeight: "bold", color: "#000000ff" }}>
                                                        12.345 Đơn
                                                    </Typography.Text>
                                                    <Typography.Text style={{ fontSize: "14px", color: "#000000ff", fontWeight: "bold", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Hoàn tất</Typography.Text>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888", marginTop: "8px" }}>
                                                <span style={{ color: '#01D9C0' }}>&#9650;</span><span style={{ color: "#000000ff" }}> 5.68%</span>
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
                                    padding: 5,
                                    height: '100%'
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
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFCED5',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    flexShrink: 0,
                                                }}>
                                                    <img
                                                        src={warningicon}
                                                        style={{
                                                            height: 20,
                                                            width: 20,
                                                            borderRadius: "50%",
                                                            objectFit: 'contain',
                                                        }}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, }}>
                                                    <span style={{ fontWeight: 'bold' }}>Cảnh báo</span>
                                                    <span style={{ color: 'red', fontSize: '13px' }}> 12 đơn hàng sắp trễ giờ</span>
                                                </div>
                                            </div>
                                            <span><MoreOutlined /></span>
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
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFD88C',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    flexShrink: 0,
                                                }}>
                                                    <img
                                                        src={bellicon}
                                                        style={{
                                                            height: 20,
                                                            width: 20,
                                                            borderRadius: "50%",
                                                            objectFit: 'contain',
                                                        }}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, }}>
                                                    <span style={{ fontWeight: 'bold' }}>Thông báo </span>
                                                    <span style={{ color: '#718EBF', fontSize: '13px' }}> 12 cập nhật trạng thái</span>
                                                </div>
                                            </div>
                                            <span><MoreOutlined /></span>
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
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                                                gap: 50,
                                            }}
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FFF5D9',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    flexShrink: 0,
                                                }}>
                                                    <img
                                                        src={bagicon}
                                                        style={{
                                                            height: 20,
                                                            width: 20,
                                                            borderRadius: "50%",
                                                            objectFit: 'contain',
                                                        }}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, }}>
                                                        <span style={{ fontWeight: '500', }}>Máy sạc không vào, hoặc báo "Không hỗ trợ phụ kiện này".
                                                        </span>
                                                        <span style={{ color: 'red', fontSize: '13px' }}> 37 lỗi trong tháng này</span>
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, }}>
                                                        <span style={{ fontWeight: '500', }}>Màn hình ám màu/ hở sáng / sọc ngang - dọc".
                                                        </span>
                                                        <span style={{ color: 'red', fontSize: '13px' }}> 15 lỗi trong tháng này</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span><MoreOutlined /></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[10, 20]} style={{ marginTop: 15 }}>
                        <Col xs={24} sm={24} md={24} lg={14} xl={8}>
                            <div
                                style={{
                                    display: 'flex',
                                    backgroundColor: '#FFFFFF',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    borderRadius: 10,
                                    flexDirection: 'column',
                                    padding: 20,
                                    height: '100%'
                                }}
                            >
                                <Row gutter={[10, 30]}>
                                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 10,
                                            }}
                                        >
                                            <span style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>Hiệu quả hài lòng</span>
                                            <span style={{ fontSize: 16, color: '#0195FF', fontWeight: 'bold' }}>323.839 đơn hàng</span>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, }}>
                                            <span style={{ color: '#718EBF' }}>Sao đánh giá TB</span>
                                            <span><span style={{ fontSize: 23, fontWeight: 'bold', marginRight: 5 }}>4.5</span><Rate value={4.5} /></span>
                                            <span><span style={{ color: 'red' }}>&#9660; 0.2%</span> so với tháng trước</span>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div style={{ display: 'flex', justifyContent: 'center', minHeight: isMobile ? 250 : 350 }}>
                                            <StarRatingChart />
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ErrorImpactChart title="Lỗi ảnh hưởng sao phục vụ" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={10} xl={16}>
                            <Row gutter={[10, 10]}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            borderRadius: 10,
                                            flexDirection: 'column',
                                            padding: 10,
                                            minHeight: 300,
                                            height: '100%'
                                        }}
                                    >
                                        <PersonnelStackedChart />
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            borderRadius: 10,
                                            flexDirection: 'column',
                                            padding: 10,
                                            minHeight: 300,
                                            gap: 20,
                                        }}
                                    >
                                        <Row
                                            style={{
                                                display: 'flex',
                                                padding: 10,
                                                width: '100%',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                            gutter={[10, 10]}
                                        >
                                            <Col xs={24} sm={24} md={12}>
                                                <span style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>Tư vấn cài App</span>
                                            </Col>
                                            <Col xs={24} sm={24} md={12} style={{ textAlign: !screens.md ? 'left' : 'right' }}>
                                                <Typography.Text>
                                                    <span>01/09/2023 - 30/09/2023</span>
                                                    <span style={{ marginLeft: 10, textDecorationLine: 'underline', color: '#0195FF' }}>Chi tiết</span>
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
                            </Row>

                            <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                            borderRadius: 10,
                                            flexDirection: 'column',
                                            padding: 10
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <SalesTargetChart
                                                title="Tổng thu nhập"
                                                dataTarget={[500, 500, 500, 500, 500, 500]}
                                                dataSales={[250, 100, 800, 230, 390, 410]}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            backgroundColor: '#FFFFFF',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                            borderRadius: 10,
                                            flexDirection: 'column',
                                            padding: 10
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <SalesTargetChart
                                                title="Doanh thu tháng này"
                                                backgroundColor1='#BFDBFE'
                                                backgroundColor2='#2563EB'
                                                dataTarget={[500, 500, 500, 500, 500, 500]}
                                                dataSales={[250, 300, 10, 150, 900, 400]}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;