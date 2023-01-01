import React from "react";
import { observer } from 'mobx-react-lite';
import { footer, footer__list, footer__list__link, footer__list__element} from "./styles";

export const FooterComponent = () => {

    return(
        <section className={footer}>
            <ul className={footer__list}>
                <li><a href="#" className={footer__list__link}>webstack@gmail</a></li>
                <li className={footer__list__element}>
			        © 2023 Webstack
		        </li>
            </ul>
        </section>
    );
}

export default observer(FooterComponent);
