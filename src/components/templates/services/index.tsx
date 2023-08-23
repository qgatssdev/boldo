import { serviceMock } from './service-mock';
import {
  StyledServiceContainer,
  StyledHeader,
  StyledTitle,
  StyledServiceMockContainer,
  StyledImage,
  StyledServiceWrapper,
  StyledText,
} from './styles';

const Services = () => {
  return (
    <StyledServiceContainer>
      <StyledHeader>Our services</StyledHeader>
      <StyledTitle>
        Handshake infographic mass market crowdfunding iteration.
      </StyledTitle>
      <StyledServiceMockContainer>
        {serviceMock.map((service, id) => (
          <StyledServiceWrapper key={id}>
            <StyledImage src={service.image} alt={service.title} />
            <StyledText>{service.title}</StyledText>
          </StyledServiceWrapper>
        ))}
      </StyledServiceMockContainer>
    </StyledServiceContainer>
  );
};

export default Services;
