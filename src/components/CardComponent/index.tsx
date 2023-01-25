import { Button } from 'antd';
import React, { FC } from 'react';
import cn from 'classnames';
import {
  advantage__list__card,
  advantage__list__card__title,
  advantage__list__card__description,
  advantage__list__card__image,
} from './styles';

type Props = {
  index?: number;
  image: string;
  title: string;
  description?: string;
  onButtonClick?: () => void;
  className?: string;
};

export const CardComponent: FC<Props> = ({ index, image, title, description, className, onButtonClick }) => {
  return (
    <li key={index} className={cn(advantage__list__card, className)}>
      <img src={image} alt="Easy form of information" className={advantage__list__card__image} />
      <p className={advantage__list__card__title}>{title}</p>
      {description && <p className={advantage__list__card__description}>{description}</p>}
      {onButtonClick && (
        <Button type="primary" onClick={onButtonClick}>
          Подробние{' '}
        </Button>
      )}
    </li>
  );
};
