import React, { useEffect, useState } from 'react'
import { Random } from '../../utils/random'
import { PointsNivel } from '../PointsNivel/PointsNivel'
import './Guesscapital.css'
export const Guesscapital = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [points, setPoints] = useState(0)
  const [nivel, setnivel] = useState(1)
  const [options, setOptions] = useState([])

  const checkAnswer = (capital) => {
    if (selectedCountry && selectedCountry.capital[0] === capital) {
      setPoints(points + 1)
    }
    setnivel(nivel + 1)
    nextLevel(countries)
  }

  const nextLevel = (res) => {
    if (res.length === 0) return

    const selectedPosition = Random(res)
    const currentCountry = res[selectedPosition]
    const previousCountry =
      res[selectedPosition - 1] || res[selectedPosition + 1]
    const nextCountry = res[selectedPosition + 1] || res[selectedPosition - 1]

    if (!currentCountry) return

    setSelectedCountry(currentCountry)

    let random = Math.random()
    if (random < 0.33) {
      setOptions([previousCountry, currentCountry, nextCountry])
    } else if (random < 0.66) {
      setOptions([currentCountry, previousCountry, nextCountry])
    } else {
      setOptions([nextCountry, previousCountry, currentCountry])
    }
  }

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,capital'
      )
      const result = await res.json()
      setCountries(result)
      nextLevel(result)
    }
    fetchApi()
  }, [])

  return (
    <div className='capital'>
      <PointsNivel point={points} nivel={nivel}></PointsNivel>
      <div className='guesscapital'>
        {selectedCountry ? (
          <>
            <h1>
              Please find the capital of{' '}
              <span>{selectedCountry.name.common}</span>
            </h1>
            <div className='answerdiv'>
              {options.map((option, index) => (
                <div
                  onClick={() => checkAnswer(option.capital[0])}
                  key={index}
                  className='answercapital'
                >
                  <h2>{option.capital[0]}</h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2>No selected country found</h2>
        )}
      </div>
    </div>
  )
}

export default Guesscapital
