import { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from './components/card/Card'
import Input from './components/input/Input'
import GlobalStyle from './styles'
import styled from 'styled-components';


function App() {
  const [cities, setCities] = useState([])

  const addCity = useCallback((city) => {
    setCities(cities => [...cities, {
      info: city,
      id: uuidv4()
    }])
  }, [])

  const removeCity = useCallback((id) => {
    setCities(cities => cities.filter(city => city.id !== id))
  }, [])

  return (
    <>
      <GlobalStyle />
      <Input addCity={addCity} />
      {cities.length > 0 && <Container>
        {cities.map(city => <Card removeCity={removeCity} key={city.id} city={city} />)}
      </Container>}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export default App;
