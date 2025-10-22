import React, { useEffect, useState } from 'react';
import { Drawer, Button, Checkbox, Space, Typography, Divider, Row, Col } from 'antd';
import {
    GlobalOutlined,
    CalendarOutlined,
    ExportOutlined,
    BookOutlined,
    CloseOutlined
} from '@ant-design/icons';
import logotgdd from '../assets/images/logotgdd.png';
import proiconsfoldablevertical from '../assets/images/proicons_foldable-vertical.png';
import logosvg from '../assets/images/logosvg.svg';
import carbondnsservices from '../assets/images/carbon_dns-services.png';
const { Text } = Typography;

const serviceOptions = [
    { label: 'Tổng đài', value: 'tongdai' },
    { label: 'Giao hàng & lắp đặt', value: 'giaohang' },
    { label: 'Bảo dưỡng', value: 'baoduong' },
    { label: 'Bảo hành & sửa chữa', value: 'baohanh' },
    { label: 'Kho vận', value: 'khovan' },
    { label: 'Xây dựng bảo trì', value: 'xaydung' },
];

const initialCheckedList = ['giaohang'];

const FilterSidebarDrawer = ({ open, onClose, filterData }) => {
    const [checkedList, setCheckedList] = useState(initialCheckedList);

    useEffect(() => {
        filterData?.(checkedList)
    }, []);

    const onChange = (list) => {
        filterData?.(list)
        setCheckedList(list);
    };

    const renderDrawerHeader = () => (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <img src={logotgdd} style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: '50%', border: '1px solid white' }} />
                <span style={{ fontSize: 21, fontWeight: 'bold', color: 'white' }}>
                    Hiệu quả vận hành
                </span>
                <img
                    src={proiconsfoldablevertical}
                    style={{ marginTop: 4, cursor: 'pointer' }}
                    onClick={onClose}
                />
            </div>
            <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: 'white',
                marginTop: 15
            }} />
        </>
    );

    const renderFilterSection = (icon, title, content) => (
        <div style={{ marginBottom: 10 }}>
            <Space size="small" style={{ marginBottom: 5 }}>
                {icon}
                <Text strong style={{ color: 'white', fontSize: '14px' }}>{title}</Text>
            </Space>
            {
                content && <div style={{ paddingLeft: 24 }}>
                    {content}
                </div>
            }
        </div>
    );

    const PADDING = 10;
    const DRAWER_CONTENT_WIDTH = 300;
    const DRAWER_ROOT_WIDTH = DRAWER_CONTENT_WIDTH + PADDING;

    return (
        <Drawer
            title={renderDrawerHeader()}
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            width={DRAWER_ROOT_WIDTH}
            rootStyle={{
                top: PADDING,
                bottom: PADDING,
                left: PADDING,
                height: `calc(100% - ${PADDING * 2}px)`,
            }}
            style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.05)',
            }}
            styles={{
                header: { backgroundColor: '#6C757D', borderBottom: 'none', padding: '16px 24px' },
                body: {
                    backgroundColor: '#6C757D', padding: '0px 35px', overflow: 'auto'
                },
                footer: {
                    backgroundColor: '#6C757D',
                    borderTop: '1px solid #737373',
                    padding: '16px 24px'
                },
                mask: {
                    backgroundColor: 'transparent'
                }
            }}

            footer={
                <Button
                    icon={<ExportOutlined />}
                    style={{ width: '40%', borderRadius: 6, backgroundColor: '#16A34A' }}
                    type='primary'
                >
                    Export
                </Button>
            }
        >
            {renderFilterSection(
                <GlobalOutlined style={{ color: 'white' }} />,
                'Dịch vụ',
                <Checkbox.Group
                    options={serviceOptions.map(opt => ({
                        ...opt,
                        // 💡 V5: Đặt màu cho label của checkbox
                        style: { color: 'white' }
                    }))}
                    value={checkedList}
                    onChange={onChange}
                    style={{ display: 'flex', flexDirection: 'column' }}
                />
            )}

            {renderFilterSection(
                <CalendarOutlined style={{ color: 'white' }} />,
                'Khu vực'
            )}
            {renderFilterSection(
                // <img src={carbondnsservices} style={{ backgroundColor: '#6C757D', width: 25, height: 25, borderRadius: '50%' }} />,
                <CalendarOutlined style={{ color: 'white' }} />,
                'Kho điều phối'
            )}
            {renderFilterSection(
                <CalendarOutlined style={{ color: 'white' }} />,
                'Thời gian'
            )}
        </Drawer>
    );
};

const DashboardHeaderWithFilter = (props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Ví dụ: Small screen < 600px

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 450);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleDrawerOpen = () => setIsDrawerOpen(true);
    const handleDrawerClose = () => setIsDrawerOpen(false);
    const renderHeader = () => (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                minWidth: '335px',
                maxWidth: '450px',
                minHeight: '60px',
                backgroundColor: '#6C757D',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                color: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <img src={logotgdd} style={{ backgroundColor: 'white', width: 30, height: 30, borderRadius: '50%', border: '1px solid white' }} />
                    <span style={{ fontSize: 20, fontWeight: 'bold', fontStyle: 'italic' }}>Logistics</span>
                </div>
                <span style={{ fontSize: 10, fontStyle: 'italic', whiteSpace: 'nowrap', fontWeight: '500' }}><span style={{ fontSize: 8 }}>Thành viên của </span>Thế Giới Di Động</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginLeft: 10 }}>
                <span
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        display: isSmallScreen ? 'none' : 'block' // ẨN KHI MÀN HÌNH NHỎ
                    }}
                >
                    Hiệu quả vận hành
                </span>
                <img
                    src={proiconsfoldablevertical}
                    style={{ marginTop: 4, cursor: 'pointer' }}
                    onClick={handleDrawerOpen}
                />
            </div>
        </div>
    );

    return (
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
            {renderHeader()}
            <FilterSidebarDrawer
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                filterData={(value) => props.filterData(value)}
            />
        </div>
    );
};

export default DashboardHeaderWithFilter;