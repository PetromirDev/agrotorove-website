import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { Container, HCenter, VCenter } from "../styles/layout"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isScrolledMax, setIsScrolledMax] = useState(true)
  const [prevPos, setPrevPos] = useState(0)

  const handleNavigationToggle = () => setIsOpen((prev) => !prev)
  
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const navbar = document.getElementById('navbar')
    
    if (navbar && (currentScrollPos < navbar.clientHeight)) {
      setIsScrolling(false)
      setIsScrolledMax(true)
    } else {
      setIsScrolledMax(false)
      if (prevPos > currentScrollPos) {
        setIsScrolling(false)
      } else {
        setIsScrolling(true)
      }
    }
    setPrevPos(currentScrollPos)
  }, [prevPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Wrapper isOpen={isOpen} isScrolling={isScrolling} isScrolledMax={isScrolledMax} id="navbar">
      <WidthContainer>
        <TopBar>
          <Logo isScrolledMax={isScrolledMax}>Агро Торове 77</Logo>
          <Hamburger 
            isScrolledMax={isScrolledMax} 
            aria-label="navigation hamburger" 
            onClick={handleNavigationToggle} 
            isOpen={isOpen}
          >
            <div></div>
          </Hamburger>
        </TopBar>
        <Navigation isOpen={isOpen}>
          <Logo isOpen={isOpen}>Агро Торове 77</Logo>
          <MainNavigation>
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
          </MainNavigation>
          
          <Link href="#contact">
            <Action isScrolling={isScrolling} isScrolledMax={isScrolledMax}>
              Свържете се с нас ↗
            </Action>
          </Link>
        </Navigation>
      </WidthContainer>
    </Wrapper>
  )
}

export default Navbar

const MainNavigation = styled.div`
  ${VCenter};
  @media (max-width: 768px) {
    gap: 2.5rem;
    padding: 0 3.75rem;
    width: 100%;
  }
  
  @media (min-width: 768px) {
    padding: 0;
    gap: 3.75rem;
    margin: 0 auto;
    flex-direction: row;
  }
`

const TopBar = styled.div`
  ${HCenter};
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: auto;
  }
`

const Hamburger = styled.button`
  background-color: transparent;
  outline: none;
  border: none;

  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.25s linear;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  div {
    position: relative;
  }

  div,
  div:after,
  div:before {
    background-color: ${props => !props.isScrolledMax ? '#000' : '#fafafa'};
    border-radius: 10px;
    width: 2.2rem;
    height: .25rem;
    transition: all 0.15s linear;
  }

  div:before,
  div:after {
    content: "";
    position: absolute;
    left: 0;
  }

  div:before {
    transform: translateY(-220%);
  }

  div:after {
    transform: translateY(220%);
  }

  ${props => props.isOpen ? `
    div {
      background: transparent;
    }

    div:before {
      transform: rotate(45deg);
    }

    div:after {
      transform: rotate(-45deg);
    }
  ` : ''}

  @media (min-width: 768px) {
    display: none;
  }
`

const Wrapper = styled.div`
  padding: 1.5625rem 1.25rem;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.isScrolledMax ? 'transparent' : '#fff'};
  transition: transform .4s .1s ease-in-out, background-color .3s ease-in-out;
  color: #000;
  transform: ${props => (props.isScrolling && !props.isOpen) ? 'translateY(-100%)' : 'translateY(0)'};
  @media (min-width: 768px) {
    transform: ${props => props.isScrolling ? 'translateY(-100%)' : 'translateY(0)'};
    color: ${props => props.isScrolledMax ? '#fff' : '#19352b'};
  }
  ${props => !props.isScrolledMax ? 'box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.4)' : ''};
`

const WidthContainer = styled.div`
  ${HCenter};
  ${Container};
  justify-content: space-between;
`

const Logo = styled.span`
  font-size: 1.625rem;
  font-weight: 800;
  color: ${props => ((props.isScrolledMax === true) || (props.isOpen === false)) ? '#fff' : '#000'};
`

const Navigation = styled.nav`
  ${VCenter};
  flex: 1;
  
  ${Logo} {
    display: block;
  }
  
  @media (max-width: 768px) {
    left: ${props => props.isOpen ? 0 : '-100%'};
    transition: .3s ease-in-out left;
    top: 0;
    position: fixed;
    z-index: 100;
    background-color: #fff;
    height: 100vh;
    padding: 2.5rem;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    ${Logo} {
      display: none;
    }
    flex-direction: row;
    display: flex;
  }
`

const NavLink = styled.a`
  opacity: .8;
  font-size: 1.3rem;
  transition: .3s ease-in-out color;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

const Action = styled.a`
  cursor: pointer;
  font-weight: 500;
  opacity: 1;
  transition: ${props => props.theme.globalTransition};
  padding: .75rem 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    ${props => !props.isScrolledMax ? `
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      border-radius: 5px;
      background-color: ${props.theme.primary};
      color: #fff;
    ` : ''}
  }


  &:hover {
    opacity: .8;
  }
`