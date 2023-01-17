import React, { FC, ReactNode } from 'react';
import { Typography } from 'antd';
import { link__custom, link__custom__point } from './styles';

const { Text } = Typography;

type Props = {
  children: ReactNode;
  onClick: () => void;
}

export const Menuitem: FC<Props> = (props) => (
  <li className={link__custom}>
    <a className={link__custom__point} {...props} />
  </li>
);
