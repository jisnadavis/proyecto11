import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Country.css'
export const Country = () => {
  const [country, setcountry] = useState()
  const { name } = useParams()
  useEffect(() => {
    const fetchdetails = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,independent,currencies,capital,region,area,maps,coatOfArms,startOfWeek`
      )
      const result = await res.json()
      setcountry(result[0])
    }
    fetchdetails()
  }, [])

  return (
    <div className='country'>
      {country && (
        <>
          <h1>{country.name.common}</h1>
          <div className='img_wrp'>
            <img src={country.coatOfArms.svg} alt={country.name.common} />
          </div>
          <p>{country.independent ? 'independent' : 'dependent'}</p>
          <p> currency:{Object.keys(country.currencies)[0]}</p>
          <p>capital:{country.capital}</p>
          <p>Region: {country.region}</p>
          <p>
            Area: {country.area} m<span>2</span>
          </p>
          <p>
            mapa:
            <a href={country.maps.googleMaps} target='blank'>
              {country.maps.googleMaps}
            </a>
          </p>
        </>
      )}
    </div>
  )
}
