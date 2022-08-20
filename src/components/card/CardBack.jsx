import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import WindIndicator from './WindIndicator'
import { globals } from '../../styles'
import { format } from 'date-fns'

export default function CardBack({ data }) {
  const [active, setActive] = useState(1)

  const handleToggle = (index) => {
    index === active ? setActive(null) : setActive(index)
  }
  
  return (
    <Container>
      {data.daily.map((day, index) => {
        if (index === 0) return null
        return <Day day={day} key={index} active={active === index} handleToggle={() => handleToggle(index)} offset={data.timezone_offset}/>
      })}
    </Container>
  )
}

const Day = ({ day, active, handleToggle, offset }) => {


  const date = new Date(day.dt * 1000)
  const localDate = new Date((day.dt + (date.getTimezoneOffset() * 60) + offset) * 1000)



  return (
    <Accordion active={active} onClick={handleToggle} >
      <Wrapper active={active}>
        <Text width="9rem">{format(localDate, 'EEEE')}</Text>
        <Text width="8rem">{Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°</Text>
        <Text active={active}>▲</Text>
      </Wrapper>
      <AccordionItem active={active}>
        <IconWrapper>
          <img src={`https://openweathermap.org/img/wn/09d.png`} alt="icon" />
          <Text>{Math.round(day.pop * 100)}%</Text>
        </IconWrapper>
        <IconWrapper>
          <WindIndicator speed={day.wind_speed} direction={day.wind_deg} />
        </IconWrapper>
      </AccordionItem>
    </Accordion>
  )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 40rem;
    margin: 1.5rem 0;
    flex-direction: column;
    align-items: center;
    border: thin solid ${globals.primaryColor};
    background-color: ${globals.tertiaryColor};
    border-radius: 1.5rem;
    overflow: hidden;
`

const Accordion = styled.div`
    width: 100%;
    height: ${props => props.active ? '10rem' : '5rem'};
    transition: height 0.3s ease-in-out;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0 2.5rem;
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-between'};
    background-color: ${props => props.active ? globals.primaryColor : globals.tertiaryColor};
    color: ${props => props.active ? '#fff' : '#000'};
    align-items: center;
    z-index: 3;
`

const Text = styled.p`
    ${props => props.width ? `width: ${props.width};` : ''}
    font-size: 1.8rem;
    margin: 0;
    font-weight: bold;
    transition: transform 0.3s linear;
    transform: rotate(${props => props.active ? '-180deg' : '0deg'});
    @media (max-width: 420px) {
        font-size: 1.4rem;
    }
`

const AccordionItem = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    transition: top 0.3s ease-in-out;
    top: ${props => props.active ? '5rem' : '0'};
    background-color: transparent;
    left: 0;
    z-index: 2;
`

const IconWrapper = styled.div`
    height: 5rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`