import React, { useState } from 'react';
import {
    LockOutlined,
    UserOutlined,
    GithubOutlined,
    BulbOutlined,
    BulbFilled,
} from '@ant-design/icons';
import {
    LoginForm,
    ProConfigProvider,
    ProFormCheckbox,
    ProFormText,
    setAlpha,
} from '@ant-design/pro-components';
import { Button, Space, Tabs, message, theme, ConfigProvider } from 'antd';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOSTNAME } from '../constants/systemVars';
import { _fetchLogin } from '../utils/fetchData';

const ThemedLogin = ({ isDark, toggleDark }) => {
    const { token } = theme.useToken();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [loginType, setLoginType] = useState('account');

    const iconStyles = {
        marginInlineStart: '16px',
        color: setAlpha(token.colorTextBase, 0.2),
        fontSize: '24px',
        verticalAlign: 'middle',
        cursor: 'pointer',
    };

    const onFinish = async (values) => {
        const response = await dispatch(
            _fetchLogin(HOSTNAME, 'api/authen/login', {
                username: values.username,
                password: values.password,
            })
        );
        if (!response.iserror) {
            message.success('Đăng nhập thành công!');
            const pathname = location?.state?.from?.pathname || '/';
            navigate(pathname);
        } else {
            message.error(response.message);
        }
    };

    return (
        <ProConfigProvider hashed={false}>
            <div
                style={{
                    backgroundColor: token.colorBgLayout,
                    color: token.colorText,
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 16,
                }}
            >
                <LoginForm
                    logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    title="Hệ thống"
                    subTitle={
                        <div style={{ color: token.colorText }}>
                            Nền tảng quản lý hiện đại
                        </div>
                    }
                    actions={
                        <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                            <span style={{ color: token.colorText }}>Đăng nhập với</span>
                            <GithubOutlined style={iconStyles} />
                            <Button
                                type="text"
                                icon={isDark ? <BulbFilled /> : <BulbOutlined />}
                                onClick={toggleDark}
                                style={{ marginLeft: 'auto' }}
                            >
                                {isDark ? 'Sáng' : 'Tối'}
                            </Button>
                        </Space>
                    }
                    onFinish={onFinish}
                    submitter={{
                        searchConfig: {
                            submitText: 'Đăng nhập', // ✅ Đã đổi ngôn ngữ nút
                        },
                    }}
                    contentStyle={{ paddingTop: 0 }}
                >
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: <UserOutlined className={'prefixIcon'} />,
                        }}
                        placeholder="Tên đăng nhập"
                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    />

                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: <LockOutlined className={'prefixIcon'} />,
                        }}
                        placeholder="Mật khẩu"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    />

                    <div style={{ marginBottom: 24 }}>
                        <ProFormCheckbox
                            noStyle
                            name="autoLogin"
                            style={{ color: token.colorText }}
                        >
                            Ghi nhớ mật khẩu
                        </ProFormCheckbox>
                        <a style={{ float: 'right', color: token.colorPrimary }}>
                            Quên mật khẩu?
                        </a>
                    </div>
                </LoginForm>
            </div>
        </ProConfigProvider>
    );
};

const Login = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
        >
            <ThemedLogin isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
        </ConfigProvider>
    );
};

export default Login;
