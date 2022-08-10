import { useState } from 'react'
import Suggestion from './Suggestion'
import { Container, Wrapper, Form } from './styles'

export default function Input({ addCity }) {
    const [response, setResponse] = useState([])
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    const selectSuggestion = (city) => {
        addCity(city)
        setResponse([])
    }

    const filterForDuplicate = (data) => {
        const filtered = Object.values(data.reduce(
            (filteredObject, currentItem) => {
                const code = currentItem.country + currentItem.state + currentItem.name
                if (!filteredObject[code]) filteredObject[code] = currentItem
                return filteredObject
            }, {}))
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
        <Container>
            <Form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </Form>
            {error && <p>Couldn't find {error}!</p>}
            <Wrapper>
                {response.length > 1 && response.map((city, index) => <Suggestion selectSuggestion={selectSuggestion} key={index} city={city} />)}
            </Wrapper>
        </Container>
    )
}
