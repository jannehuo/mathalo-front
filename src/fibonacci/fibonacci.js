import { head, drop, random, sample } from 'lodash';
import { initCanvas, getCanvasElement } from '../canvas/canvas';
import { CANVAS_ID, BASE_URL, API_PATHS } from '../constants';
import { getRandomPalette, getScreenSize } from '../utils/utils';
import { loadData } from '../http/http';

class Fibonacci {
  constructor() {
    const dataUrl = `${BASE_URL}${API_PATHS.fibonacci}/${100}`;
    this.canvas = getCanvasElement(CANVAS_ID);
    this.ctx = this.canvas.getContext('2d');
    this.data = [];
    this.palette = getRandomPalette();
    this.screen = getScreenSize();

    loadData(dataUrl).then((response) => {
      this.data = response;
      this.init();
    });
  }

  init() {
    initCanvas(CANVAS_ID);
    const backgroundColor = head(this.palette);
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw();
  }

  draw() {
    const pointColor = sample(drop(this.palette));
    const xPos = this.screen.w / 2;
    const radius = 1;
    this.data.forEach((point) => {
      const yPos = point;
      this.ctx.beginPath();
      this.ctx.fillStyle = pointColor;
      this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
      this.ctx.fill();
    });
  }

  clear() {
    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Fibonacci;
