import { styled } from '@mui/material';

type Props = {
  transparent: boolean;
};

export const StyledSmallButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'transparent',
})<Props>(({ theme, transparent }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  width: '128px',
  height: '40px',
  borderRadius: '24px',
  textAlign: 'center',
  backgroundColor: transparent ? 'none' : theme.palette.primary.main,
  color: transparent ? 'none' : theme.palette.common.white,
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 700,
}));

export const StyledMediumButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'transparent',
})<Props>(({ theme, transparent }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  width: '187px',
  height: '60px',
  borderRadius: '56px',
  textAlign: 'center',
  background: transparent ? 'none' : theme.palette.primary.main,
  color: transparent ? 'none' : theme.palette.common.white,
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 700,
}));

export const StyledLargeButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'transparent',
})<Props>(({ theme, transparent }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  width: '247px',
  height: '60px',
  borderRadius: '56px',
  textAlign: 'center',
  background: transparent ? 'none' : theme.palette.primary.main,
  color: transparent ? 'none' : theme.palette.common.white,
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 700,
}));
