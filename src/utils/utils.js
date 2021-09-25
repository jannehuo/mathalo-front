import { sample } from 'lodash';
import { COLORS } from '../constants';

export const getScreenSize = () => {
  return {
    w: window.innerWidth,
    h: window.innerHeight,
  };
};

export const getRandomPalette = () => {
  return sample(COLORS.palettes);
};
