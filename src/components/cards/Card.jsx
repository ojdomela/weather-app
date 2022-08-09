import React, { useState, useEffect } from 'react';
import 'flag-icons'
import CardFront from './CardFront';
import CardBack from './CardBack';

export default React.memo(function Card({ city, removeCity }) {
    const [data, setData] = useState({})
    const [flipped, setFlipped] = useState(false)

    const flagString = `fi fi-${city.info.country.toLowerCase()}`

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.info.lat}&lon=${city.info.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    console.log(city.info.name)
    console.log(data)
    return (
        <div>
            <button onClick={() => removeCity(city.id)}>X</button>
            <p><span className={flagString}></span>{city.info.name}{city.info.state && `, ${city.info.state}`}</p>
            {flipped ? <CardBack data={data.daily} /> : <CardFront data={data.current} />}
        </div>
    )
})
