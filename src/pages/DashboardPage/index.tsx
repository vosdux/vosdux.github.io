import React, { useEffect, useState } from 'react';
import { Avatar, Button, Layout, Menu, Row, Space, Typography } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { UserOutlined, ReadOutlined } from '@ant-design/icons';
import { authStore } from '@stores/authStore';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { CustomParticles } from '@components/CustomParticles';
import { LoadingScreen } from '@components/LoadingScreen';
import { VerifyEmail } from '@components/VerifyEmail';
import { mb15 } from '@styles/global';
import { Dashboard__logo, Dashboard__sider, DashBoard__title, Dashboard__transparent, Dashboard__username } from './styles';

const { Sider } = Layout;
const { Text } = Typography;

const DashboardPage = () => {
  const { isActivated, email, isAuthenticated, isLoading, isLogoutLoading, resendEmail, logout } = authStore;
  const [collapsed, setCollapsed] = useState(false);
  const [keyPage, setKeyPage] = useState('1');
  const [isBroken, setIsBroken] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'User',
      onClick: () => navigate('/dashboard'),
    },
    {
      key: '2',
      icon: <ReadOutlined />,
      label: 'Курсы',
      onClick: () => navigate('/dashboard/courses'),
    },
  ];

  useEffect(() => {
    switch (location.pathname.split('/')[2]) {
      case 'courses':
        setKeyPage('2');
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const onExitClick = async () => {
    await logout();
    navigate('/');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return isActivated ? (
    <>
      <CustomParticles />
      <Layout className={Dashboard__transparent}>
        <Sider
          breakpoint='sm'
          collapsedWidth={isBroken ? '0' : undefined}
          onBreakpoint={setIsBroken}
          collapsed={collapsed}
          collapsible
          onCollapse={(value) => setCollapsed(value)}
          className={Dashboard__sider}
        >
          <div>
            <div className={Dashboard__logo}>
              <Row justify="center">
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  {!collapsed && <Text className={Dashboard__username}>Name</Text>}
                </Space>
              </Row>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={[keyPage]}
              items={items}
              onClick={({ key }) => setKeyPage(key)}
            />
          </div>
          <Row justify="center" className={mb15}>
            <Button type="primary" onClick={onExitClick}>Выйти</Button>
          </Row>
        </Sider>
        <Layout className={Dashboard__transparent}>
          <div className={cn(getSlideInAnimation('Up'))}>
            <h2 className={DashBoard__title}>{items[Number(keyPage) - 1].label}</h2>
          </div>
          <Outlet />
        </Layout>
      </Layout>
    </>
  ) : (
    <VerifyEmail
      isExtiLoading={isLogoutLoading}
      isResendLoading={isLoading}
      onResendClick={resendEmail}
      onExitClick={onExitClick}
      email={email}
    />
  );
};

export default observer(DashboardPage);
