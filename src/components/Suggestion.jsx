import 'flag-icons/css/flag-icons.css'

export default function Suggestion({ selectSuggestion, city}) {
  // console.log(city)
  const countryClass = city.country.toLowerCase()
  return (
    <div onClick={() => selectSuggestion(city)}>
      <span className={countryClass}></span>
        <p>{city.name}{city.state && `, ${city.state}`}</p>
    </div>
  )
}
