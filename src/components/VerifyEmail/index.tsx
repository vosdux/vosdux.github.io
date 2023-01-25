import React, { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';
import { CustomParticles } from '@components/CustomParticles';
import {
  root,
  container__emailVerify,
  emailVerify__block,
  emailVerify__bottomBlock,
  emailVerify__topBlock,
} from './styles';

type Props = {
  email: string;
  isResendLoading: boolean;
  isExtiLoading: boolean;
  onResendClick: () => void;
  onExitClick: () => void;
};

export const VerifyEmail: FC<Props> = ({ email, isResendLoading, isExtiLoading, onResendClick, onExitClick }) => {
  const navigate = useNavigate();

  return (
    <div className={root}>
      <CustomParticles />
      <div className={container__emailVerify}>
        <div className={emailVerify__block}>
          <div className={emailVerify__topBlock}>
            <div>
              <MailOutlined style={{ fontSize: '40px' }} />
              <h3>Проверьте свой адрес электронной почты</h3>
            </div>
            <div>
              <p>
                адрес, который у нас в настоящее время есть для вашей учетной записи, <span>{email}</span>
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
              <Button loading={isResendLoading} disabled={isExtiLoading} onClick={onResendClick} type="primary">Отправить</Button> 
              <Button onClick={() => navigate('/')} type="primary">На главную</Button>
              <Button loading={isExtiLoading} disabled={isResendLoading} onClick={onExitClick} type="primary">Выйти</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
