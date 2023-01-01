import React from "react";
import { observer } from 'mobx-react-lite';
import {media, media__title} from './styles';

export const MediaComponent = () => {

    return(
        <section className={media}>
            <h2 className={media__title}>Видео с канала</h2>
        </section>
    );
}

export default observer(MediaComponent);
