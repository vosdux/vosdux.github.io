import React from 'react';
import { observer } from 'mobx-react-lite';
import HeaderComponent from './HeaderComponent';
import AboutComponent from './AboutComponent';



const LandingPage = () => {
  return (
    <>
  <HeaderComponent />
  <AboutComponent />
  </>
  );
};

export default observer(LandingPage);
