import { Theme } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';

export const styleSheet = ({ theme }: { theme: Theme }) => `
  body,
  #__next {
  }

  a {
    color: ${theme.palette.text.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const GlobalStyle = ({ theme }: { theme: any }) => (
  <GlobalStyles styles={styleSheet({ theme })} />
);
