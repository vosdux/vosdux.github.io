import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { UserOutlined, ReadOutlined } from '@ant-design/icons';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { CustomParticles } from '@components/CustomParticles';
import { DashBoard__title, Dashboard__transparent } from './styles';
import { authStore } from '../../stores/authStore/index';
import { VerifyEmail } from '../../components/VerifyEmail/index';

const {  Sider } = Layout;

const DashboardPage = () => {
  const { isActivated, email, isAuthenticated, isLoading, resendEmail } = authStore;
  const [collapsed, setCollapsed] = useState(false);
  const [keyPage, setKeyPage] = useState('1');

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

  return isActivated ? (
    <>
      <CustomParticles />
      <Layout style={{ minHeight: '100vh' }} className={Dashboard__transparent}>
        <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[keyPage]}
            items={items}
            onClick={({ key }) => setKeyPage(key)}
          />
        </Sider>
        <Layout className={Dashboard__transparent}>
          <div className={cn(getSlideInAnimation('Up'))}>
            <h2 className={DashBoard__title}>{items[Number(keyPage) - 1].label}</h2>
          </div>
          <Outlet />
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    </>
  ) : (
    <VerifyEmail isResendLoading={isLoading} onResendClick={() => resendEmail()} email={email} />
  );
};

export default observer(DashboardPage);
