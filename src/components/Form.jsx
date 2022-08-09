import { useState } from 'react'
import Suggestion from './Suggestion'

export default function Form({ addCity }) {
    const [response, setResponse] = useState([])
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    const selectSuggestion = (city) => {
        addCity(city)
        setResponse([])
    }

    const filterForDuplicate = (data) => {
        const filtered = data.reduce(
            (filteredObject, currentItem) => {
                const code = currentItem.country + currentItem.state + currentItem.name
                if (filteredObject.some(
                    (item) => item.name === currentItem.name && item.state === currentItem.state && item.country === currentItem.country
                )) return filteredObject
                return [...filteredObject, currentItem]
            }, {}
        )
        return filtered
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(input)
            })
            .then(data => {
                setError(false)
                setResponse(filterForDuplicate(data))
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {error && <p>Couldn't find {error}!</p>}
            {response.length > 1 && <div>
                {response.map((city, index) => <Suggestion selectSuggestion={selectSuggestion} key={index} city={city} />)}
            </div>}
        </>
    )
}
