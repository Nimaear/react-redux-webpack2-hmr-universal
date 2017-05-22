import { Units } from 'universal/styles';

export const storeCss = oxygenCss({
  store: {
    margin: 'auto',
    width: Units.fullWidth,
    boxSizing: 'border-box',
    '@phone': {
      width: '100%',
      padding: Units.base,
    }
  },
  cover: {
    position: 'relative',
    top: -48,
    margin: 'auto',
    width: Units.fullWidth,
    height: 485,
    '@phone': {
      height: 300,
      width: '100%'
    }
  },
  header: {
    margin: 'auto',
    width: 570,
    padding: ' 38px 0',
    textAlign: 'center',
    fontSize: `${fontSize(2)}`,
    borderStyle: 'solid none none none',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    '@phone': {
      width: '100%'
    }
  },
  subText: {
    textAlign: 'center',
    margin: 'auto',
    paddingBottom: 48,
    width: Units.fullWidth,
    '@phone': {
      width: '100%'
    }
  },
  hero: {
    position: 'relative',
    overflow: 'auto'
  },
  whiteBanner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  }
});