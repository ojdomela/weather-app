export default function Card({ city, removeCity }) {
    console.log(city.data)
    return (
        <div>
            <button onClick={() => removeCity(city.id)}></button>
            <p>Card Title</p>
            <p>Card Content</p>
        </div>
    )
}
