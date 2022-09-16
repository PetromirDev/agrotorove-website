import Link from "next/link"
import styled from "styled-components"
// Styles
import { Container } from "../../styles/layout"

const Hero = () => (
  <Wrapper id="home">
    <Body>
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusamus repellendus.
      </Title> 
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Magnam adipisci odio dolores, tenetur veritatis voluptates 
        earum distinctio minus recusandae impedit tempore maxime 
        quaerat nobis, at architecto, quisquam exercitationem? Nobis 
        similique praesentium sed ipsa eius, perspiciatis iste. Tempora 
        maxime molestias voluptates, soluta, ipsum, vero ipsa sapiente 
        eveniet at sint aliquid dolor.
      </Text>
      <Link href="#contact">
        <Contact>
          Свържи се с нас
        </Contact>
      </Link>
    </Body>
  </Wrapper>
)

export default Hero

const Contact = styled.a`
  font-weight: 600;
  font-size: 1.3rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: ${props => props.theme.globalTransition};

  &:hover {
    border-bottom: 2px solid #fff;
  }
`

const Text = styled.p` 
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 2rem;

  @media (min-width: 1280px) {
    max-width: 43.75rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  @media (min-width: 1280px) {
    font-size: 4rem;
    max-width: 56.25rem;
  }
`

const Body = styled.div`
  ${Container};
  color: #fff;
  text-align: center;
  @media (min-width: 1280px) {
    text-align: left;
  }
`

const Wrapper = styled.section`
  padding-top: ${props => props.theme.navbarHeight};
  background: url('/images/home/hero-bg-mobile.jpg'),  rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-blend-mode: multiply;
  background-repeat: repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (min-width: 800px) {
    background: url('/images/home/hero-bg-desktop.jpg'),  rgba(0, 0, 0, 0.8);
    background-size: cover;
    background-blend-mode: multiply;
    background-repeat: repeat;
  }

  @media (min-width: 1440px) {
    background: url('/images/home/hero-bg-desktop-large.jpg'),  rgba(0, 0, 0, 0.8);
    background-size: cover;
    background-blend-mode: multiply;
    background-repeat: repeat;
  }
`