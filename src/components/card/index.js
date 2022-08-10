import React, { useState, useEffect, useMemo } from 'react';
import 'flag-icons'
import CardFront from './CardFront';
import CardBack from './CardBack';
import { CardWrapper, Button, Title, Wrapper } from './styles'

export default React.memo(function Card({ city, removeCity }) {
    const [data, setData] = useState(null)
    const [flipped, setFlipped] = useState(false)

    const flagString = useMemo(() => `fi fi-${city.info.country.toLowerCase()}`, [city])

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.info.lat}&lon=${city.info.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(!!data)

    return (
        <CardWrapper>
            <Wrapper>
                <Title><span className={flagString}></span>{city.info.name}{city.info.state && `, ${city.info.state}`}</Title>
                <Button onClick={() => removeCity(city.id)}>X</Button>
            </Wrapper>
            {data && flipped && <CardBack data={data?.daily} setFlipped={setFlipped} />}
            {data && !flipped && <CardFront data={data?.current} setFlipped={setFlipped} />}
        </CardWrapper>
    )
})
