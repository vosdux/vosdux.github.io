import { observer } from 'mobx-react-lite';
import React from 'react';


const AboutComponent = () => {


    return(
        <div style={{height: '100vh', backgroundColor: '#e6ecf0', width: '100vw'}}>{'i was here!'}</div>
    );
};

export default observer(AboutComponent);
