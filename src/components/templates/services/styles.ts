import { styled } from '@mui/material';
import Image from 'next/image';

export const StyledServiceContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '900px',
  paddingTop: '5%',
}));

export const StyledHeader = styled('h1')({
  color: '#F1F1F1',
  fontSize: '20px',
  fontWeight: '400',
  textAlign: 'center',
});

export const StyledTitle = styled('p')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '48px',
  fontWeight: '400',
  maxWidth: '842px',
  margin: '0 auto',
  textAlign: 'center',
  lineHeight: '72px',
  marginTop: '10px',
}));

export const StyledServiceMockContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '7%',
  marginRight: '7%',
  marginTop: '70px',
});

export const StyledImage = styled(Image)({
  maxWidth: '300px',
  maxHeight: '354px',
});

export const StyledServiceWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledText = styled('h1')(({theme}) => ({
  color: theme.palette.common.white,
  fontSize: '24px',
  fontWeight: '400',
  marginTop: '24px',
}));