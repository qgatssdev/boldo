import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from '@styles/global';
import { WithChildren } from 'app';
import { theme } from '../styles/theme';

type Props = WithChildren<any>;

export const AppThemeProvider = ({ children }: Props) => (
  <>
    <GlobalStyle theme={theme} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
