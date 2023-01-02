import React, {useEffect} from "react";
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';
import { advantage, advantage__title, advantage__list, advantage__list__card, advantage__list__card__title, advantage__list__card__description, advantage__list__card__image } from "./styles";
import easy from './images/easy.png';
import level from './images/level.png';
import price from './images/best-price.png';
import community from './images/communities.png';
import premium from './images/premium.png';
import stock from './images/ready-stock.png';
import 'animate.css';



export const AdvantageComponent = () => {

    return(
        <section className={classNames(advantage)}>
            <div className="wow animate__animated animate__slideInUp">
            <h2 className={advantage__title}>Наши преимущества</h2>
            </div>
            <ul className={classNames(advantage__list, "wow animate__animated animate__slideInUp")}>
                <li className={advantage__list__card}>
                    <img src={easy} alt='Easy form of information' className={advantage__list__card__image} />
                    <p className={advantage__list__card__title}>Легкая воспринимаемость</p>
                    <p className={advantage__list__card__description}>Информационные материалы предоставлены в удобной и интуитивно понятной форме, а все темы полностью разобраны </p>
                </li>
                <li className={advantage__list__card}>
                    <img src={level} alt='Easy form of information' className={advantage__list__card__image} />
                    <p className={advantage__list__card__title}>Разные уровни сложности</p>
                    <p className={advantage__list__card__description}>Выбирайте курс подходящий именно под ваш уровень осведомленности в сфере IT! </p>
                </li>
                <li className={advantage__list__card}>
                    <img src={price} alt='Easy form of information' className={advantage__list__card__image} />
                    <p className={advantage__list__card__title}>Лучшее ценообразование</p>
                    <p className={advantage__list__card__description}>Наша цель натренировать и обучитьт будущих специалистов с максимально лояльной ценовой политикой!</p>
                </li>
                <li className={advantage__list__card}>
                    <img src={community} alt='Easy form of information' className={advantage__list__card__image} />
                    <p className={advantage__list__card__title}>Активное коммьюнити</p>
                    <p className={advantage__list__card__description}>Мы придерживаемся взгляда, что помощь коллегам дает новый бесценный опыт и ускоряет процесс обучения, поэтому поддерживаем связи в социальных сетях!</p>
                </li>
                <li className={advantage__list__card}>
                    <img src={premium} alt='Easy form of information' className={advantage__list__card__image} />
                    <p className={advantage__list__card__title}>Ограненная информация</p>
                    <p className={advantage__list__card__description}>Мы разрабатываем качественные курсы без лишней, бесполезной информации</p>
                </li>
                <li className={advantage__list__card}>
                    <img src={stock} alt='Easy form of information' className={advantage__list__card__image} />
                    <p className={advantage__list__card__title}>Формат учебных материалов</p>
                    <p className={advantage__list__card__description}>Мы предоставляем учебные материалы в удобных форматах: статьи, видео и домашние задания. Все это необходимо, чтобы сделать процесс обучения максимально комфортным</p>
                </li>
            </ul>
        </section>
    );
};

export default observer(AdvantageComponent);
