import { Layout, theme } from 'antd';
import React from 'react';
import cn from 'classnames';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { CardComponent } from '@components/CardComponent';
import { MOCK } from './constants';
import { advantage, advantage__wrapper, advantage__list, borderCard } from './styles';

const { Content } = Layout;

const CoursePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content style={{ margin: '0 16px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            borderRadius: '15px',
          }}
        >
          <div>
            <section style={{ borderRadius: '15px' }} className={advantage} id="advantage">
              <div className={advantage__wrapper}>
                <ul className={cn(advantage__list, getFadeInAnimation('Right'))}>
                  {MOCK.map((item, index) => (
                    <CardComponent key={index} onButtonClick={() => console.log()} {...item} className={borderCard} />
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default CoursePage;
