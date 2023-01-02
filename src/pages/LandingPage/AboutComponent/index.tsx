import { observer } from 'mobx-react-lite';
import React from 'react';
import classNames from 'classnames';
import { Steps } from 'antd';
import {
  about,
  about__title,
  about__text,
  about__text__description,
  about__text__title,
  about__logo,
  about__flexbox,
  about__logo__png,
} from './styles';
import logo from './images/logo.png';
import 'animate.css';


const AboutComponent = () => {
  return (
    <section className={about} id="about">
      <div className="wow animate__animated animate__slideInUp">
      <h2 className={classNames(about__title, "animate__animated", "animate__fadeInLeft")}>О нас</h2>
      </div>
      <div className={classNames(about__flexbox, "wow", "animate__animated animate__slideInUp")}>
        <div className={about__logo}>
          <img src={logo} alt="logo" className={about__logo__png} />
        </div>
        <div className={about__text}>
          <p className={about__text__title}>
            Frontend разработка
            <br />
            Для профи и новичков
          </p>
          <Steps
            className={about__text__description}
            direction="vertical"
            items={[
              {
                title: 'Недорогие курсы',
                description: 'Более 10 курсов по разным технологиям. стоймость От 500 рублей за курс',
                status: 'process',
              },
              {
                title: 'Подойдет всем',
                description: 'Различные курсы от основ HTML до продвинутого typescript',
                status: 'process',
              },
              {
                title: 'Личный кабинет',
                description: 'Удобный личный кабинет для занятий, в котором хранятся все ваши купленные курсы',
                status: 'process',
              },
              {
                title: 'Качество',
                description:
                  'С нашими уроками вы освоите все необходиые технологии, чтобы создать свой первый сайт с нуля',
                status: 'process',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default observer(AboutComponent);
