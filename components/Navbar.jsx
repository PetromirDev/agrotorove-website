import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { Container, HCenter } from "../styles/layout"

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
    <Wrapper isScrolling={isScrolling} isScrolledMax={isScrolledMax} id="navbar">
      <WidthContainer>
        <TopBar>
          <Logo>Агро Торове 77</Logo>
          <Hamburger aria-label="navigation hamburger" onClick={handleNavigationToggle} isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </TopBar>
        <Navigation isOpen={isOpen}>
          <div>
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
          </div>
          
          <Link href="#contact">
            <Action isScrolling={isScrolling} isScrolledMax={isScrolledMax}>
              Свържи се с нас ↗
            </Action>
          </Link>
        </Navigation>
      </WidthContainer>
    </Wrapper>
  )
}

export default Navbar

const TopBar = styled.div`
  ${HCenter};
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: auto;
  }
`

const Hamburger = styled.button`
  display: block;
  background-color: transparent;
  outline: none;
  border: none;

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(-2px, -1px)' : ''};
    opacity: ${props => props.isOpen ? 0 : 1};
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(0, -1px)' : ''};
    transform-origin: 0% 100%;
  }
  span:nth-last-child(3) {
    opacity: ${props => props.isOpen ? 1 : 0};
    transform: ${props => props.isOpen ? 'rotate(0deg) scale(0.2, 0.2)' : ''};
  }

  @media (min-width: 768px) {
    display: none;
  }

`

const Wrapper = styled.div`
  padding: 1.5625rem 0;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.isScrolledMax ? 'transparent' : '#fff'};
  transition: transform .4s .1s ease-in-out, background-color .3s ease-in-out;
  transform: ${props => props.isScrolling ? 'translateY(-100%)' : 'translateY(0)'};
  color: ${props => props.isScrolledMax ? '#fff' : '#19352b'};
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
`

const Navigation = styled.nav`
  ${HCenter};
  flex: 1;
  display: none;

  div {
    ${HCenter};
    gap: 3.75rem;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

const NavLink = styled.a`
  opacity: .8;
  transition: ${(props) => props.theme.globalTransition};
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`

const Action = styled.a`
  cursor: pointer;
  font-weight: 500;
  opacity: 1;
  transition: ${props => props.theme.globalTransition};
  padding: 12px 24px;

  ${props => !props.isScrolledMax ? `
    border-radius: 5px;
    background-color: ${props.theme.primary};
    color: #fff;
  ` : ''}

  &:hover {
    opacity: .8;
  }
`