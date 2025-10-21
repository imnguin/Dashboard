import React, { useState } from "react";
import { Avatar, Button, Col, Dropdown, Grid, Layout, Menu, Row, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import appMenu from "../constants/appMenu";

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

const items = appMenu.map(item => {
    return getItem(item.label, item.name, item.icon, item.subItem, item.path);
});

const MainLayout2 = (props) => {
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

    if (props.layout === 'notUse') {
        return (
            props.children
        );
    }

    return (
        // Thiết kế layout cho toàn bộ web ở đây
        props.children
    );
}
export default MainLayout2;