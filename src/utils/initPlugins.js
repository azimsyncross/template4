import GLightbox from 'glightbox'
import PureCounter from '@srexi/purecounterjs'

export const initGLightbox = () => {
  GLightbox({
    selector: '.glightbox'
  })
}

export const initPureCounter = () => {
  new PureCounter()
} 