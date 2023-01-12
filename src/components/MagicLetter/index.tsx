import React, { FC, useEffect, useState } from 'react';
import { getRandomNumber } from '@utils/getRandomNumber';
import { root } from './styles';

type Props = {
  iterations: number;
  min: number;
  max: number;
  letter: string;
};

export const MagicLetter: FC<Props> = ({ iterations, min, max, letter }) => {
  const [child, setChild] = useState<number | string>(0);

  useEffect(() => {
    let i = 0;
    const timeriId = setInterval(() => {
      if (i < iterations - 1) {
        setChild(getRandomNumber(min, max));
        i += 1;
      } else {
        setChild(letter);
        clearInterval(timeriId);
      }
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <li className={root}>{child}</li>;
};
