import React from "react";
import { observer } from 'mobx-react-lite';
import { review, review__title } from "./styles";

export const ReviewComponent = () => {

    return(
        <section className={review}>
            <h2 className={review__title}>Отзывы</h2>
        </section>
    );
}

export default observer(ReviewComponent);
