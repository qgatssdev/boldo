import { Metadata } from '@atoms/metadata';
import Header from '@templates/header';
import { type NextPage } from 'next';
import Hero from '@templates/hero';
import Services from '@templates/services';
import {
  StyledContainer,
  StyledEclipse,
  StyledHeroContainer,
} from '@styles/styles';

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <Metadata />
      <StyledEclipse src={require('../assets/Ellipse 9.svg')} alt='eclipse' />
      <StyledHeroContainer>
        <Header />
        <Hero />
      </StyledHeroContainer>
      <Services />
    </StyledContainer>
  );
};

export default Home;
