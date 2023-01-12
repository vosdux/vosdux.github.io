import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { PARTICLES_OPTIONS } from './constants';
import type { Engine } from 'tsparticles-engine';

export const CustomParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={PARTICLES_OPTIONS} />;
};
