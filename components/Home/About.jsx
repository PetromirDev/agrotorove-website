import styled from "styled-components"
// Styles
import { Container, HCenter, VCenter } from "../../styles/layout"

const About = () => (
  <Wrapper id="about">
    <WidthContainer>
      <Label>02 — За нас</Label>
      <Title>
        Lorem ipsum dolor sit, amet 
        consectetur adipisicing elit. 
        Id ducimus sit nihil.
      </Title>
      <Info>
        <Stats>
          <Stat>
            <h3>20+</h3>
            <p>Клиенти от различни части на България.</p>
          </Stat>
          <Stat>
            <h3>100 000+</h3>
            <p>Продадени тона гранулирана и течна тор на нашите клиенти.</p>
          </Stat>
        </Stats>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias nobis qui vitae omnis natus, vero, error illum sequi corporis ipsum atque, alias eligendi ipsam eos debitis nulla minus quia possimus? Culpa modi ut autem eum in debitis eius esse illum assumenda id. Minus fuga accusamus neque quo vero, corrupti necessitatibus?
        </AboutText>
      </Info>
    </WidthContainer>
  </Wrapper>
)


export default About

const AboutText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: .8;
  flex: 1;
`

const Stat = styled.div`
  max-width: 18.75rem;
  h3 {
    font-weight: 600;
    font-size: 2.5rem;
  }
  p {
    opacity: .8;
  }
`

const Stats = styled.div`
  flex: 1;
  ${HCenter};
  gap: 3.125rem;
  flex-direction: column;
  
  @media (min-width: 700px) {
    flex-direction: row;
  }
`

const Info = styled.div`
  ${HCenter};
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;
  gap: 6.25rem;

  @media (min-width: 1280px) {
    max-width: unset;
    flex-direction: row;
  }
`

const Label = styled.span`
  opacity: .68;
  font-weight: 500;
  display: block;
  margin-bottom: 1.5rem;
`

const Title = styled.h2`
  max-width: 43.75rem;
  font-weight: 700;
  margin-bottom: 5rem;
  font-size: 2.25rem;
`

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.backgroundSecondary};
`

const WidthContainer = styled.div`
  ${Container};
  ${VCenter};
  text-align: center;
  @media (min-width: 1280px) {
    text-align: left;
    align-items: flex-start;
  }
`
