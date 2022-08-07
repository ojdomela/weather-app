import { useState, useEffect } from 'react'
import 'flag-icons/css/flag-icons.css'

function App() {
  const [response, setResponse] = useState([])
  const [cities, setCities] = useState([])
  const [input, setInput] = useState('')
  const [selection, setSelection] = useState('')

  useEffect(() => {
    if (!selection) return
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selection}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [selection])

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() => setSelection(input)}>Search</button>
        <p>Error Message</p>
        <div>
          <p>
            <span className='fi fi-us'></span>Suggestion 1
          </p>
          <p>Suggestion 2</p>
          <p>Suggestion 3</p>
          <p>Suggestion 4</p>
          <p>Suggestion 5</p>
        </div>
      </div>
      <div>
        <div>
          <p>Close button</p>
          <p>Card Title</p>
          <p>Card Content</p>
        </div>
        <div>
          <p>Close button</p>
          <p>Card Title</p>
          <p>Card Content</p>
        </div>
        <div>
          <p>Close button</p>
          <p>Card Title</p>
          <p>Card Content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
