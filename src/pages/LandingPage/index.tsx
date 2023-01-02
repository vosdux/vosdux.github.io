import React, {useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import WOW from 'wowjs';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
import AdvantageComponent from './AdvantageComponent';
import FooterComponent from './FooterComponent';
import MediaComponent from './MediaComponent';
import ReviewComponent from './ReviewComponent';


const LandingPage = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
  <HeaderComponent />
  <AboutComponent />
  <AdvantageComponent />
  <ReviewComponent />
  <MediaComponent />
  <FooterComponent />
  </>
  );
};

export default observer(LandingPage);
