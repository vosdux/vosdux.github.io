import { observer } from 'mobx-react-lite';
import React from 'react';
import {about, about__title} from './styles';

const AboutComponent = () => {


    return(
        <section className={about}>
            <h2 className={about__title}>О нас</h2>
        </section>
    );
};

export default observer(AboutComponent);
