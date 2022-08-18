import React from 'react'
import format from 'date-fns/format'
import WindIndicator from './WindIndicator'
import styled from 'styled-components'
import { globals } from '../../styles'

export default function CardFront({ data }) {
  const date = new Date(data.current.dt * 1000)
  return (
    <Container flexDirection="column">
      <Text>{format(date, 'EEEE, do') + ' of ' + format(date, 'MMMM')}</Text>
      <img src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`} alt="icon" />
      <Text>{Math.round(data.current.temp)}°</Text>
      <Wrapper>
        <img src={`https://openweathermap.org/img/wn/09d.png`} alt="icon" />
        <Text>{Math.round(data.daily[0].pop * 100)}%</Text>
      </Wrapper>
      <WindIndicator speed={data.current.wind_speed} direction={data.current.wind_deg} />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 45rem;
    border: thin solid ${globals.primaryColor};
    background-color: ${globals.tertiaryColor};
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    margin: 0;
    font-size: 1.8rem;
    font-weight: bold;
    @media (max-width: 420px) {
        font-size: 1.4rem;
    }
`
