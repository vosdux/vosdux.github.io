import React, { useEffect, useState } from 'react';
import { Button, Card, Layout, Menu, Row, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ReadOutlined } from '@ant-design/icons';
import { LoadingScreen } from '@components/LoadingScreen';
import { authStore } from '@stores/authStore';
import { root, content, logo } from './styles';

const { Header, Content, Sider } = Layout;

const AdminPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [keyPage, setKeyPage] = useState('1');
  const [isBroken, setIsBroken] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const location = useLocation();

  const { role, isAuthenticated, isLoading, logout } = authStore;

  useEffect(() => {
    switch (location.pathname.split('/')[2]) {
      case 'courses':
        setKeyPage('1');
        break;

      case 'lessons':
        setKeyPage('2');
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && role !== 'ADMIN') {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, role]);

  const onExitClick = async () => {
    await logout();
    navigate('/');
  };

  const items = [
    { key: '1', icon: <ReadOutlined />, label: 'Курсы', onClick: () => navigate('courses') },
    { key: '2', icon: <ReadOutlined />, label: 'Уроки', onClick: () => navigate('lessons') },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Layout className={root}>
      <Sider
        breakpoint="sm"
        collapsedWidth={isBroken ? '0' : undefined}
        onBreakpoint={setIsBroken}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={logo} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[keyPage]}
          items={items}
          onClick={({ key }) => setKeyPage(key)}
        />
        <Row justify="center">
          <Button type="primary" onClick={onExitClick}>
            Выйти
          </Button>
        </Row>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content className={content}>
          <Card>
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default observer(AdminPage);
