import React, { useState } from "react";
import { Avatar, Button, Col, Dropdown, Grid, Layout, Menu, Row, theme } from "antd";
import AppMenu from "../views";
import { Link, useNavigate } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';

const { useBreakpoint } = Grid;

const getItem = (label = null, key = null, icon = null, children = null, path = null, type = null) => {
    let subMenu, item;
    if (!!children && children.length > 0) {
        subMenu = children.map(sub => {
            return getItem(sub.label, sub.name, sub.icon, sub.subItem, sub.path);
        });
    }
    if (!!subMenu) {
        item = {
            label,
            key,
            icon: !!icon ? React.createElement(icon) : '',
            children: subMenu,
            type
        }
    }
    else {
        item = {
            label: <Link to={path}> {label} </Link>,
            key,
            icon: !!icon ? React.createElement(icon) : '',
            children: subMenu,
            type
        }
    }

    return item;
}

const items = AppMenu.map(item => {
    return getItem(item.label, item.name, item.icon, item.subItem, item.path);
});

const MainLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [collapsedWidth, setCollapsedWidth] = useState(70);
    const { token: { colorBgContainer }, } = theme.useToken();
    const navigate = useNavigate();
    const screens = useBreakpoint()
    const isMobile = screens.xs;
    const handleBreakPoint = (broken) => {
        if (broken) {
            setCollapsedWidth(0)
            setCollapsed(true);
        }
        else {
            setCollapsedWidth(70);
        }
    }

    const Logout = () => {
        localStorage.removeItem('logininfo');
        navigate('/login');
    }

    if (props.layout === '404') {
        return (
            props.children
        );
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={collapsedWidth}
                breakpoint="lg"
                onBreakpoint={(broken) => handleBreakPoint(broken)}
            >
                <Menu theme="dark" mode="inline" items={items} />
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
                    <Row>
                        <Col flex="100px">
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed?.(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col flex="auto">
                            <Dropdown menu={{
                                items: [
                                    {
                                        key: '1',
                                        label: 'Thông tin nhân viên'
                                    },
                                    {
                                        key: '2',
                                        label: 'Đổi mật khẩu'
                                    },
                                    {
                                        key: '3',
                                        label: <span onClick={() => Logout()}>Đăng xuất</span>
                                    }
                                ],
                            }} placement="bottomLeft" arrow>
                                {/* <div style={{
                                    float: 'right',
                                    marginRight: 10
                                }}>
                                    <Avatar size='default' icon={<UserOutlined />}></Avatar>  {!isMobile ? `${'188197'} - ${'Lâm Xuân Nguyên'}` : ''}
                                </div> */}
                            </Dropdown>
                        </Col>
                    </Row>
                </Layout.Header>
                <Layout.Content style={{ margin: '10px 10px 0', overflow: 'initial', minHeight: `calc(100vh - 145px)` }}>
                    <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer, borderRadius: 7 }}>{props.children}</div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: 'center', }}>©2025 Created by Nguin</Layout.Footer>
            </Layout>
        </Layout>
    );
}
export default MainLayout;