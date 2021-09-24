import { getScreenSize } from '../utils/utils'

export const getCanvasElement = (id) => {
  if (id) {
    return document.getElementById(id)
  }
  return null
}

export const initCanvas = (id) => {
  if (id) {
    try {
      const canvasEl = getCanvasElement(id)
      const screen = getScreenSize()
      canvasEl.width = screen.w
      canvasEl.height = screen.h
    } catch {
      throw new Error('No canvas element found!')
    }
  }
}
