import React from 'react'

export default function CardFront({ data }) {
    console.log(data)
  return (
    <div>
      <p>{data.weather[0].description}</p>
      <p>{Math.round(data.temp)}</p>
      <p>{data.dt}</p>
      <p>{data.sunrise}</p>
      <p>{data.sunset}</p>
    </div>
  )
}
