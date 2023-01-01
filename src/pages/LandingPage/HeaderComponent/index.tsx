import { Button } from 'antd'; 
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { authStore } from '@stores/authStore';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import {animation1, animation2, animation3, animation4, animation5, animation6, animation7, animation8, animation9, animation10, animation11, animation12, animation13, animation14} from "./animation";

//
import {header, centered, centeredList, centeredList__title, centered__organization, link, link__castom, link__castom__point} from './styles';

const HeaderComponent = () => {
  const { login } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    login({ username: '', password: '' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //ts particles part
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
//
//animation test
animation1();
animation2();
animation3();
animation4();
animation5();
animation6();
animation7();
animation8();
animation9();
animation10();
animation11();
animation12();
animation13();
animation14();

  return (
    <>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen:{
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "#1c1d25",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
<ul className={link}>
    <li className={link__castom}>
    <a className={link__castom__point} onClick={() => navigate('sign-up')} >Зарегестрироваться</a>
    </li>
    <li className={link__castom}>
    <a className={link__castom__point} onClick={() => navigate('login')} >Войти</a>
    </li>
  </ul>
  <header className={header}>
    <ul className={centeredList}>
        <li className={centeredList__title} id='1'>0</li>
        <li className={centeredList__title} id='2'>0</li>
        <li className={centeredList__title} id='3'>0</li>
        <li className={centeredList__title} id='4'>0</li>
        <li className={centeredList__title} id='5'>0</li>
        <li className={centeredList__title} id='6'>0</li>
        <li className={centeredList__title} id='7'>0</li>
        <li className={centeredList__title} id='8'>0</li>
        <li className={centeredList__title} style={{padding: '5px'}}>{' '}</li>
        <li className={centeredList__title} id='9'>0</li>
        <li className={centeredList__title} id='10'>0</li>
        <li className={centeredList__title} id='11'>0</li>
        <li className={centeredList__title} id='12'>0</li>
        <li className={centeredList__title} id='13'>0</li>
        <li className={centeredList__title} id='14'>0</li>
    </ul>
    <div className={centered}>
        <code className={centered__organization}>{'< WEBSTACK />'}</code>
    </div>
  </header>
  </>
  );
};

export default observer(HeaderComponent);
