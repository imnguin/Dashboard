import React, { useMemo, useState } from "react";
import { Avatar, Button, Col, Dropdown, Grid, Layout, Menu, notification, Row, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import appMenu from "../constants/appMenu";
import DashboardHeaderWithFilter from "../components/DashboardHeaderWithFilter";
import bell from '../assets/images/free-bell-icon-860-thumb.png'
import dayjs from "dayjs";
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import { NotificationService } from "../utils/NotificationService";
dayjs.extend(weekday);
dayjs.extend(localeData);

const MainLayout = (props) => {
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const [filterData, setFilterData] = useState(null);

    React.useEffect(() => {
        if (api) {
            window.globalNotificationApi = api;
        }
    }, [api]);

    if (props.layout === 'notUse') {
        return (
            props.children
        );
    }

    const childrenWithProps = useMemo(() => {
        if (React.isValidElement(props.children)) {
            return React.cloneElement(props.children, {
                filterData
            });
        }
        return props.children;
    }, [props.children, filterData]);

    const Logout = () => {
        localStorage.removeItem('logininfo');
        navigate('/login');
    }

    return (
        <div className="app-container">
            <Row className="header-row" gutter={[0, 16]}>
                <Col xs={24} md={12}>
                    <DashboardHeaderWithFilter filterData={(filter) => setFilterData(filter)} />
                </Col>
                <Col xs={0} md={12} className={`user-col ${!screens.md ? 'hidden' : ''}`}>
                    <div className="user-info">
                        <div className="notification-bell-container" onClick={() => NotificationService.info('Thông báo', 'Tính năng đang phát triển!')}>
                            <img src={bell} alt="Notification Bell" className="bell-icon" />
                            <span className="notification-dot" />
                        </div>
                        <div className="user-details">
                            <span>162779 - Nguyễn Nguyên Khang</span>
                            <span className="user-id">3755 - Trụ sở MWG</span>
                        </div>
                        <div>
                            <img src={'https://insite.thegioididong.com/cdninsite/UserImages/reviewed/162779_thumb.jpg'} className="avatar-img" />
                        </div>
                    </div>
                </Col>
            </Row>
            {childrenWithProps}
            {contextHolder}
        </div >
    );
}

export default MainLayout;