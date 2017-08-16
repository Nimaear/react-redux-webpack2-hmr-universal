import { Typography , fontSize } from './index';

const css = oxygenCss({
  H1 :{
    fontSize: `${fontSize(10)}`,
    fontWeight: 'bold',
    lineHeight: '52px'
  },
  H2 :{
    fontSize: `${fontSize(5)}`,
    lineHeight: '35px'
  },
  H3 :{
    fontSize: `${fontSize(3)}`,
    lineHeight: '25px'
  },
  BODY: {
    fontFamily: Typography.fontFamily,
    fontSize: `${fontSize(0)}`,
    lineHeight: '24px',
  },
  HTML: {
    fontFamily: Typography.fontFamily,
    fontSize: `${fontSize(0)}`,
    lineHeight: '24px',
  },
  header :{
    fontSize: `${fontSize(1)}`,
    lineHeight: '24px',
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: `${fontSize(-1)}`,
    lineHeight: '18px',
    textTransform: 'uppercase'
  },
  body :{
    fontSize: `${fontSize(0)}`,
    lineHeight: '24px',
  },
  small :{
    fontSize: `${fontSize(0)}`,
    lineHeight: '21px',
  },
  caption :{
    fontSize: `${fontSize(-1)}`,
    lineHeight: '18px',
  },
});

export default css;