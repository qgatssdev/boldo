import { styled } from '@mui/material';
import Image from 'next/image';

export const StyledContainer = styled('div')({
  position: 'relative',
});

export const StyledHeroContainer = styled('div')({
  position: 'relative',
  height: '100vh',
});

export const StyledEclipse = styled(Image)({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  right: 0,
});
