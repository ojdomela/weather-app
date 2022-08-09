import { useState, useEffect } from 'react';
import 'flag-icons'

export default function Card({ city, removeCity }) {
    const [data, setData] = useState({})

    const flagString = `fi fi-${city.info.country.toLowerCase()}`

    useEffect(() => {
        console.log("fetching")
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.info.lat}&lon=${city.info.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    console.log(city.info.name + " rendered")
    console.log(data)
    return (
        <div>
            <button onClick={() => removeCity(city.id)}>X</button>
            <p><span className={flagString}></span>{city.info.name}{city.info.state && `, ${city.info.state}`}</p>
            <p>Card Content</p>
        </div>
    )
}
