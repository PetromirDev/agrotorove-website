import Image from "next/image"
import styled from "styled-components"
// Styles
import { Container, HCenter, VCenter } from "../../../styles/layout"
// Icons
import SellIcon from './images/sell.svg'
import ConsultIcon from './images/consult.svg'
import WriteIcon from './images/write.svg'

const Services = () => (
  <Wrapper id="services">
    <Body>
      <Label>01 — Услуги</Label>
      <Title>Нашите услуги</Title> 
      <ServiceItems>
        <Service>
          <div>
            <ServiceImage>
              <Image
                alt="truck-icon"
                src={SellIcon}
                width={40}
                height={40}
              />
            </ServiceImage>
            <ServiceTitle>Продажба на минерални торове</ServiceTitle>
          </div>

          <ServiceText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, sequi.
          </ServiceText>
        </Service>
        <Service>
          <div>
            <ServiceImage>
              <Image
                alt="write-icon"
                src={WriteIcon}
                width={40}
                height={40}
              />
            </ServiceImage>
            <ServiceTitle>Заверяване на дневници за растителна защита</ServiceTitle>
          </div>
          <ServiceText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, sequi.
          </ServiceText>
        </Service>
        <Service>
          <div>
            <ServiceImage>
              <Image
                alt="consult-icon"
                src={ConsultIcon}
                width={40}
                height={40}
              />
            </ServiceImage>
            <ServiceTitle>Лично консултиране по телефона</ServiceTitle>
          </div>
          <ServiceText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, sequi.
          </ServiceText>
        </Service>
      </ServiceItems>
    </Body>
  </Wrapper>
)

export default Services

const ServiceImage = styled.div`
  margin-bottom: .625rem;
`

const ServiceTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`

const ServiceText = styled.p`
  opacity: .8;
  font-weight: 400;
`

const Service = styled.div`
  ${VCenter};
  justify-content: space-between;
  padding: 1.875rem;
  background-color: #FAFAFA;
  border-radius: 8px;
  max-width: 21.875rem;
  text-align: center;
`

const ServiceItems = styled.div`
  ${HCenter};
  align-items: stretch;
  gap: 1.875rem;
  flex-wrap: wrap;
`

const Label = styled.span`
  opacity: .68;
  font-weight: 500;
  text-align: center;
  display: block;
  margin-bottom: 1.5rem;
`

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: #fff;
`

const Body = styled.div`
  ${Container};
`

const Title = styled.h2`
  font-weight: 600;
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 3.75rem;
`