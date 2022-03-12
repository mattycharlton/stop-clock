import styled from 'styled-components'
import breakpoints from './styles/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3f2fd;
  padding: 3rem 1rem;
  border-radius: 5px;

  @media ${breakpoints.md} {
    padding: 3rem;
`

export const Digit = styled.span`
  display: inline-block;
  color: #0288d1;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;

  @media ${breakpoints.md} {
    font-size: 7rem;
  }

  @media ${breakpoints.lg} {
    font-size: 10rem;
  }
`
