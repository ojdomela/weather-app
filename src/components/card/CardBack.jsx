import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import WindIndicator from './WindIndicator'
import { globals } from '../../styles'

export default function CardBack({ data }) {
  const [active, setActive] = useState(0)

  const handleToggle = (index) => {
    index === active ? setActive(null) : setActive(index)
  }

  return (
    <Container>
      {data.map((day, index) => <Day day={day} key={index} active={active === index} handleToggle={() => handleToggle(index)} />)}
    </Container>
  )
}

const Day = ({ day, active, handleToggle }) => {
  return (
    <Accordion active={active} onClick={handleToggle} >
      <Wrapper>
        <p>Date</p>
        <p>{Math.round(day.temp.min)}° /{Math.round(day.temp.max)}°</p>
        <p>Toggle</p>
      </Wrapper>
      <AccordionItem active={active}>
        <p>icon {day.pop * 100}%</p>
        <WindIndicator speed={day.wind_speed} direction={day.wind_deg} />
      </AccordionItem>
    </Accordion>
  )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: thin solid ${globals.primaryColor};
`

const Accordion = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    background-color: ${props => props.active ? globals.primaryColor : 'transparent'};
    flex-direction: ${props => props.flexDirection || 'row'};
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${props => props.flexDirection || 'row'};
`

const AccordionItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
