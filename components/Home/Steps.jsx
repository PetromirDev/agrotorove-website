import Image from "next/image"
import styled from "styled-components"
import { Container } from "../../styles/layout"

const Steps = () => (
  <Wrapper>
    <Images>
      <div>
        <StepImage 
          layout="fill"
          objectFit="cover" 
          objectPosition="center" 
          src="/images/home/steps/phone.jpg" 
          alt="phone"
        />
        <p>1.</p>
      </div>
      <div>
        <StepImage 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          src="/images/home/steps/truck.jpg" 
          alt="phone"
        />
        <p>2.</p>
      </div>
      <div>
        <StepImage 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          src="/images/home/steps/tractor.jpg" 
          alt="phone"
        />
        <p>3.</p>
      </div>
    </Images>
    
  </Wrapper>
)

export default Steps

const Wrapper = styled.section`
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  background-color: ${props => props.theme.backgroundSecondary};
`

const StepImage = styled(Image)`
  border-radius: 8px;
`

const Images = styled.div`
  ${Container};
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-areas: 
  "phone"
  "truck"
  "tractor"
  ;
  gap: 1.875rem;

  @media (min-width: 1000px) {
    grid-template-areas: 
    "phone truck"
    "tractor tractor"
    ;
  }

  @media (min-width: 1280px) {
    height: 700px;
    grid-template-areas: 
    "phone truck"
    "phone tractor"
    ;
  }

  div {
    position: relative;
    width: 18.75rem;
    height: 15.625rem;
    border-radius: 5px;
    &:first-child {
      grid-area: phone;
    }
    &:nth-child(2) {
      grid-area: truck;
    }
    &:nth-child(3) {
      grid-area: tractor;
    }

    p {
      position: absolute;
      top: 1.25rem;
      left: 1.5rem;
      display: block;
      line-height: 100%;
      font-size: 3rem;
      font-weight: 600;
      color: #fff;
      
    }

    @media (min-width: 370px) {
      width: 21.875rem;
      height: 18.75rem;
    }

    @media (min-width: 480px) {
      width: 28.125rem;
      height: 25rem;
    }
    @media (min-width: 1280px) {
      height: 100%;
  }
  }
`