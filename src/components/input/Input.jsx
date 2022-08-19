import { useState } from 'react'
import Suggestion from './Suggestion'
import styled from 'styled-components';
import { globals } from '../../styles';

export default function Input({ addCity }) {
    const [suggestions, setSuggestions] = useState([])
    const [error, setError] = useState(false)
    const [input, setInput] = useState('')

    const selectSuggestion = (city) => {
        addCity(city)
        setSuggestions([])
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
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if (res.ok) return res.json()
                throw new Error(input)
            })
            .then(data => {
                setError(false)
                const filtered = filterForDuplicate(data)
                if(filtered.length > 1) {
                    setSuggestions(filtered)
                    setError(false)
                    return
                }
                if(filtered.length === 1) {
                    selectSuggestion(filtered[0])
                    setError(false)
                    return
                }
                setSuggestions([])
                setError(`Couldn't find ${input}!`)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => setInput(''))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </Form>
            {error && <Text>{error}</Text>}
            <Wrapper>
                {suggestions.map((city, index) => <Suggestion selectSuggestion={selectSuggestion} key={index} city={city} />)}
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    padding: 1.5rem;
    background-color: ${globals.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

const Form = styled.form`
    margin: 1.5rem;
    display: flex;
`

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    border-radius: 50%;
    background-color: ${globals.primaryColor};
    color: ${globals.secondaryColor};
    line-height: 1.5rem;
    text-align: center;
`;