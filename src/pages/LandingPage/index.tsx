import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { HeaderComponent } from '@components/HeaderComponent';
import { AboutComponent } from '@components/AboutComponent';
import { AdvantageComponent } from '@components/AdvantageComponent';
import { FooterComponent } from '@components/FooterComponent';
import { MediaComponent } from '@components/MediaComponent';
import { ReviewComponent } from '@components/ReviewComponent';
import 'animate.css';

const LandingPage = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

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

export default LandingPage;
