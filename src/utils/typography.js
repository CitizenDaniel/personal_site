import Typography from 'typography';

const typography = new Typography({
  bodyColor: '#262626',
  baseFontSize: '16px',
  bodyFontFamily: [
    'Yu Gothic Medium', // win
    'YuGothic', // mac
    'sans-serif',
  ],
  headerColor: '#262626',
  headerFontFamily: [
    'Yu Gothic Medium', // win
    'YuGothic', // mac
    'sans-serif',
  ],
  overrideStyles: () => ({
    'ul, li': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    'h1, h2, h3': {
      textAlign: 'center',
    },
    img: {
      margin: 0,
    },
  }),
});

const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
