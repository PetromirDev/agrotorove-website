import Link from "next/link"
import styled from "styled-components"
import { Container, HCenter, VCenter } from "../../styles/layout"
import PhoneImage from './images/phone.svg'
import EmailImage from './images/mail.svg'
import Image from "next/image"

const Footer = () => {
  return (
    <Wrapper>
      <WidthContainer>
        <ContactLabel>Свържете се с нас</ContactLabel>
        <Title>
          Стигнахте чак до тук.
          <br/>
          Защо не се свържете с нас?
        </Title>
        <ContactForm action="https://formsubmit.co/00fe8c2a73af1d4206a2f1e74f4fb88c" method="POST">
            <input placeholder="Вашето име" type="text" name="name" required />
            <input placeholder="Вашият имейл адрес" type="email" name="email" required />
            <textarea placeholder="Вашето съобщение" name="message" required></textarea>
            <button type="submit">Send</button>
        </ContactForm> 
        <TopFooter>
          <Logo>Агро Торове 77</Logo>
          <Navigation>
            <Link href="#home">
              <NavLink>
                Начало
              </NavLink>
            </Link>
            <Link href="#about">
              <NavLink>
                За нас
              </NavLink>
            </Link>
            <Link href="#services">
              <NavLink>
                Услуги
              </NavLink>
            </Link>
            {/* <Link href="#fertilizers">
              <NavLink>
                Торове
              </NavLink>
            </Link> */}
          </Navigation>
        </TopFooter>
        <Separator />
        <BottomFooter>
          <Copyright>
              Copyright 2024 Агро Торове 77 ЕООД
              {' '}
              |
              {' '}
              <a target='_blank' rel="noreferrer" href="https://petromir.dev">Website by petromir.dev</a>
          </Copyright>
          <ContactInformation>
            <a href="tel:+359 887 697 749">
              Обадете се
              <Image src={PhoneImage} alt="phone" width={20} height={20} />
            </a>
            <a href="mailto:agrotorove@abv.bg">
              Пратете имейл
              <Image src={EmailImage} alt="email" width={20} height={20} />
            </a>
          </ContactInformation>
        </BottomFooter>
      </WidthContainer>
    </Wrapper>
  )
}

export default Footer

const Logo = styled.h4`
  font-size: 1.625rem;
  font-weight: 600;
`

const Navigation = styled.nav`
  ${HCenter};
  gap: 1.875rem;
`

const NavLink = styled.a`
  opacity: .8;
  transition: ${(props) => props.theme.globalTransition};
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: .9375rem;
  max-width: 21.875rem;
  width: 100%;
  margin-bottom: 6.25rem;

  input, textarea {
    font-size: .9rem;
    border: none;
    padding: 1rem 1.25rem;
    border-radius: 5px;
    background-color: #1C1D23;
    color: #fff;
    width: 100%;
  }

  textarea {
    resize: none;
    min-height: 7.5rem;
    margin-bottom: .9375rem;
  }

  button {
    background-color: ${props => props.theme.primary};
    opacity: 1;
    color: #fff;
    padding: 1rem 1.25rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 400;
    transition: ${props => props.theme.globalTransition};
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }
`

const TopFooter = styled.div`
  ${VCenter};
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.875rem;

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
    flex-direction: row;
  }
`

const ContactLabel = styled.span`
  opacity: .8;
  font-size: .9rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  max-width: 31.25rem;
  text-align: center;
  
  @media (min-width: 768px) {
    margin-bottom: 3.75rem;
    font-size: 2.25rem;
  }
`

const Wrapper = styled.footer`
  background-color: #000;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
  color: #fff;
`

const Separator = styled.div`
  width: 100%;
  height: 3px;
  background-color: #1C1D23;
  margin-bottom: 1.875rem;

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`

const BottomFooter = styled.div`
  ${VCenter};
  flex-direction: column-reverse;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ContactInformation = styled.div`
  ${HCenter};
  gap: 1.25rem;

  a {
    font-size: .9rem;
    ${HCenter};
    gap: .625rem;
    opacity: .8;
    transition: ${props => props.theme.globalTransition};

    &:hover {
      opacity: 1;
    }
  }
`

const Copyright = styled.p`
  font-size: .9rem;
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, .68);
  
  @media (min-width: 768px) {
    text-align: left;
  }
  
  a {
    transition: ${props => props.theme.globalTransition};
    color: ${props => props.theme.primary};
    opacity: 1;
    
    &:hover {
      opacity: .8;
    }
  }
`

const WidthContainer = styled.div`
  ${VCenter};
  ${Container};
`