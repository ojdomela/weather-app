import React, { useState, useEffect, useMemo } from 'react';
import 'flag-icons'
import CardFront from './CardFront';
import CardBack from './CardBack';
import styled from 'styled-components';
import { globals } from '../../styles';

export default React.memo(function Card({ city, removeCity }) {
    const [data, setData] = useState(null)
    const [flipped, setFlipped] = useState(false)

    const flagString = useMemo(() => `fi fi-${city.info.country.toLowerCase()}`, [city])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.info.lat}&lon=${city.info.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <Container>
            <Wrapper justifyContent="space-between">
                <Title><span className={flagString}></span></Title>
                <Button onClick={() => removeCity(city.id)}>X</Button>
            </Wrapper>
            <CardTitle margin="1rem 0" name={city.info.name} state={city.info.state} />
            {data && flipped && <CardBack data={data.daily} />}
            {data && !flipped && <CardFront data={data} />}
            <button onClick={() => setFlipped(flipped => !flipped)}>Show 7-days</button>
        </Container>
    )
})

const CardTitle = ({name, state}) => {
    if (!state) return <Title margin="1rem 0">{name}</Title>

    return (
        <Title margin="1rem 0">
            <span>{name},&nbsp;</span><span>{state}</span>
        </Title>
    )
}

const Container = styled.div`
    flex: 1;
    margin: 1.5rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    min-width: 25rem;
    max-width: 35rem;
    border: 2px solid ${globals.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    align-self: flex-start;
    border: none;
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${globals.tertiaryColor};
`

const Title = styled.h2`
    font-size: 2.5rem;
    margin: ${props => props.margin || '0'};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
