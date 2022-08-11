export const deviceWidth = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 600,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const deviceWidthPx = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobileXL: '600px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${deviceWidthPx.mobileS})`,
  mobileM: `(min-width: ${deviceWidthPx.mobileM})`,
  mobileL: `(min-width: ${deviceWidthPx.mobileL})`,
  mobileXL: `(min-width: ${deviceWidthPx.mobileXL})`,
  tablet: `(min-width: ${deviceWidthPx.tablet})`,
  laptop: `(min-width: ${deviceWidthPx.laptop})`,
  laptopL: `(min-width: ${deviceWidthPx.laptopL})`,
  desktop: `(min-width: ${deviceWidthPx.desktop})`,
  desktopL: `(min-width: ${deviceWidthPx.desktop})`,
};
