import styled, { css } from "styled-components"

const HCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const VCenter = css`
  ${HCenter}
  flex-direction: column;
`

const Container = css`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;  
  padding: 0 1.875rem;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1281px) {
    padding: 0;
  }
`

export {
  HCenter,
  VCenter,
  Container,
}