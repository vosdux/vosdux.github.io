import React from 'react';
import { observer } from 'mobx-react-lite';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';
import AdvantageComponent from './AdvantageComponent';
import FooterComponent from './FooterComponent';
import MediaComponent from './MediaComponent';
import ReviewComponent from './ReviewComponent';



const LandingPage = () => {
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
