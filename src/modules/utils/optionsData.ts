import { memeType } from "../../types"

export const filtersData = [
  { value: 'grayscale(100%)', label: 'Escala de grises' },
  { value: 'invert(100%)', label: 'Invertir' },
  { value: 'blur(3px)', label: 'Efecto borroso' },
  { value: 'sepia(100%)', label: 'Efecto sepia' },
  { value: 'hue-rotate(90deg)', label: 'Rotación HUE' },
  { value: 'none', label: 'Ninguno' },
]

export const fontFamilyData = [
  { value: '"Montserrat", sans-serif', label: 'Montserrat' },
  { value: "'Honk', system-ui", label: 'Honk' },
  { value: "'Bangers', system-ui", label: 'Bangers' },
  { value: '"Libre Baskerville", serif', label: 'Baskerville' },
  { value: '"Dancing Script", cursive', label: 'Dancing Script' },
  { value: '"Samsung Sharp Sans Medium", cursive', label: 'Samsung Sharp' }
]


export const templatesData: memeType[] = [
  {
    id: '1',
    text: 'ups.',
    image: 'https://estaticos-cdn.prensaiberica.es/clip/df14b47b-9360-424a-88a6-b12460e43ab0_alta-libre-aspect-ratio_default_0.jpg',
    filter: '',
    fontColor: '',
    fontFamily: '"Dancing Script", cursive',
    fontSize: 30,
    template: '',
    category: 'Clásicos'
  },
  {
    id: '2',
    text: 'Yeahhh',
    image: 'https://static.abc.es/media/recreo/2017/08/29/nino-koSH--1240x698@abc.jpg',
    filter: '',
    fontColor: '',
    fontFamily: "'Bangers', system-ui",
    fontSize: 30,
    template: '',
    category: 'Clásicos'
  },
  {
    id: '3',
    text: '???',
    image: 'https://img2.rtve.es/im/5805132/?w=900',
    filter: '',
    fontColor: '',
    fontFamily: '"Samsung Sharp Sans Medium"',
    fontSize: 30,
    template: '',
    category: 'Blanco y negro'
  },
]