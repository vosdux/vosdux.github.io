import React from 'react';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import {
  root,
  container__emailVerify,
  emailVerify__block,
  emailVerify__bottomBlock,
  emailVerify__topBlock,
} from './styles';
const DashboardPage: React.FC = ({ email }: DashboardTypes) => {
  return (
    <div className={root}>
      <div className={container__emailVerify}>
        <div className={emailVerify__block}>
          <div className={emailVerify__topBlock}>
            <div>
              <MailOutlined style={{ fontSize: '40px' }} />
              <h3>Проверьте свой адрес электронной почты</h3>
            </div>
            <div>
              <p>
                адрес, который у нас в настоящее время есть для вашей учетной записи,<span>{email}</span>
              </p>
            </div>
          </div>
          <div className={emailVerify__bottomBlock}>
            <div>
              <p>
                Подтвердите адрес электронной почты, если письмо не пришло нажмите кнопку Отправить или проверьте папку
                спам
              </p>
            </div>
            <div>
              <Button type="primary">Отправить</Button> <Button type="primary">Назад</Button>
            </div>
            <p>не правильный адрес? <span>Обновите свой адрес электронной почты</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
