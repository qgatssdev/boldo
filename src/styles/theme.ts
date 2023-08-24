import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Manrope, Open_Sans } from 'next/font/google';

export const manrope = Manrope({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#0A2640',
        light: '#777',
      },
    },
    typography: {
      manrope: {
        fontFamily: manrope.style.fontFamily,
      },
      openSans: {
        fontFamily: openSans.style.fontFamily,
      },
    },
  })
);
