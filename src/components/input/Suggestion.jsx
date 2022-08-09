import 'flag-icons/css/flag-icons.css'

export default function Suggestion({ selectSuggestion, city }) {
  const flagString = `fi fi-${city.country.toLowerCase()}`

  return (
    <div onClick={() => selectSuggestion(city)}>
      <p>
        <span className={flagString}></span>{city.name}{city.state && `, ${city.state}`}
      </p>
    </div>
  )
}
