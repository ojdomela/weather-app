import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from './components/cards/Card'
import Form from './components/input/Form'
import GlobalStyle from './styles'


function App() {
  const [cities, setCities] = useState([])

  const addCity = (city) => {
    setCities([...cities, {
      info: city,
      id: uuidv4()
    }])
  }
  
  const removeCity = (id) => {
    setCities(cities.filter(city => city.id !== id))
  }

  return (
    <>
      <GlobalStyle />
      <Form addCity={addCity} />
      {cities.length > 0 && <div>
        {cities.map(city => <Card removeCity={removeCity} key={city.id} city={city} />)}
      </div>}
    </>
  );
}

export default App;
