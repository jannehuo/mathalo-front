import { head } from 'lodash';
import { initCanvas, getCanvasElement } from '../canvas/canvas';
import { CANVAS_ID } from '../constants';
import { getRandomPalette } from '../utils/utils';

class Fibonacci {
  constructor() {
    this.canvas = getCanvasElement(CANVAS_ID);
    this.ctx = this.canvas.getContext('2d');
    this.init();
  }

  init() {
    initCanvas(CANVAS_ID);
    const palette = getRandomPalette();
    const backgroundColor = head(palette);
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Fibonacci;
