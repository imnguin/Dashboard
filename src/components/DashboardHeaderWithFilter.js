import React, { useState } from 'react';
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
const { Text } = Typography;

const serviceOptions = [
    { label: 'Tổng đài', value: 'tongdai' },
    { label: 'Giao hàng & lắp đặt', value: 'giaohang' },
    { label: 'Bảo dưỡng', value: 'baoduong' },
    { label: 'Bảo hành & sửa chữa', value: 'baohanh' },
    { label: 'Kho vận', value: 'khovan' },
    { label: 'Xây dựng bác sĩ', value: 'xaydung' },
];

const initialCheckedList = ['giaohang'];

const FilterSidebarDrawer = ({ open, onClose }) => {
    const [checkedList, setCheckedList] = useState(initialCheckedList);

    const onChange = (list) => {
        setCheckedList(list);
    };
    const renderDrawerHeader = () => (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
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
                marginTop: 10
            }} />
        </>
    );
    const renderFilterSection = (icon, title, content) => (
        <div style={{ marginBottom: 20 }}>
            <Space size="small" style={{ marginBottom: 10 }}>
                {icon}
                <Text strong style={{ color: 'white', fontSize: '16px' }}>{title}</Text>
            </Space>
            <div style={{ paddingLeft: 24 }}>
                {content}
            </div>
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
            mask={false}
            width={DRAWER_ROOT_WIDTH}
            rootStyle={{
                top: PADDING,
                bottom: PADDING,
                left: PADDING,
                height: `calc(100% - ${PADDING * 2}px)`,
            }}
            style={{
                borderRadius: '8px',
                overflow: 'hidden',
            }}
            styles={{
                header: { backgroundColor: '#6C757D', borderBottom: 'none', padding: '16px 24px' },
                body: { backgroundColor: '#6C757D', padding: '16px 24px' },
                footer: {
                    backgroundColor: '#6C757D',
                    borderTop: '1px solid #737373',
                    padding: '16px 24px'
                }
            }}

            footer={
                <Button
                    icon={<ExportOutlined />}
                    style={{ width: '100%', borderRadius: 6 }}
                >
                    Export
                </Button>
            }
        >
        </Drawer>
    );
};
const DashboardHeaderWithFilter = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                    <div style={{
                        height: 25,
                        width: 25,
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }}>
                    </div>
                    <span style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }}>Logistics</span>
                </div>
                <span style={{ fontSize: 10, fontStyle: 'italic' }}><span style={{ fontSize: 8 }}>Thành viên của </span>Thế Giới Di Động</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <span style={{ fontSize: 20, fontWeight: 'bold' }}>
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
        <div style={{ position: 'relative' }}>
            {renderHeader()}
            <FilterSidebarDrawer
                open={isDrawerOpen}
                onClose={handleDrawerClose}
            />
        </div>
    );
};

export default DashboardHeaderWithFilter;