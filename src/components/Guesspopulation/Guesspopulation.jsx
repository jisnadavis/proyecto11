import { Random } from '../../utils/random'
import { PointsNivel } from '../PointsNivel/PointsNivel'
import './Guesspopulation.css'
import React, { useEffect, useState } from 'react'

export const Guesspopulation = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [points, setPoints] = useState(0)
  const [nivel, setNivel] = useState(1)
  const [populationSelected, setPopulationSelected] = useState(0)

  const randomCountry = (countrysarry) => {
    const index = Random(countrysarry)
    const country = countrysarry[index]
    return setSelectedCountry(country)
  }

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,capital'
      )
      const result = await res.json()
      console.log(result)
      randomCountry(result)
      setCountries(result)
    }
    fetchCountries()
  }, [])

  const checkPopulation = () => {
    if (
      selectedCountry.population - 3000000 <= populationSelected &&
      selectedCountry.population + 3000000 >= populationSelected
    ) {
      setPoints(points + 1)
    }
    setNivel(nivel + 1)
    randomCountry(countries)
  }

  return (
    <div className='population'>
      <PointsNivel nivel={nivel} point={points} />
      {selectedCountry && (
        <>
          {console.log('selectedCountry', selectedCountry)}
          <h2>
            What is the population of <span>{selectedCountry.name.common}</span>{' '}
            ?
          </h2>
          <div className='img_wrp'>
            <img
              src={selectedCountry.flags.svg}
              alt={selectedCountry.name.common}
            />
          </div>
          <input
            type='number'
            className='input-population'
            max={2000000000}
            min={1}
            value={populationSelected}
            onChange={(e) => setPopulationSelected(parseInt(e.target.value))}
          />
          <button className='check' onClick={checkPopulation}>
            Check
          </button>
        </>
      )}
    </div>
  )
}
