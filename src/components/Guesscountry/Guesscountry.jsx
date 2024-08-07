import { Random } from '../../utils/random'
import { PointsNivel } from '../PointsNivel/PointsNivel'
import './Guesscountry.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Guesscountry = () => {
  const [countrys, setcountrys] = useState([])
  const [selectedcountrys, setselectedcountrys] = useState()
  const [points, setpoints] = useState(0)
  const [nivel, setnivel] = useState(1)
  const [randomflag, setrandomflag] = useState([])
  const checkanswer = (src) => {
    if (src == selectedcountrys.flags.svg) {
      setpoints(points + 1)
    }
    setnivel(nivel + 1)
    nextlevel(countrys)
  }
  const nextlevel = (res) => {
    const selectedposition = Random(res)
    const currentcountry = {
      src: res[selectedposition].flags.svg,
      alt: res[selectedposition].flags.alt
    }
    const nextcountry = {
      src: res[selectedposition + 1].flags.svg,
      alt: res[selectedposition + 1].flags.alt
    }
    const previouscountry = {
      src: res[selectedposition - 1].flags.svg,
      alt: res[selectedposition - 1].flags.alt
    }
    setselectedcountrys(res[selectedposition])
    let random = Math.random()
    if (random < 0.33) {
      setrandomflag([previouscountry, currentcountry, nextcountry])
    } else if (random < 0.66) {
      setrandomflag([currentcountry, previouscountry, nextcountry])
    } else {
      setrandomflag([nextcountry, previouscountry, currentcountry])
    }
  }
  useEffect(() => {
    const fetchcountry = async () => {
      const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags'
      )
      const result = await res.json()
      setcountrys(result)
      nextlevel(result)
      console.log(result)
    }
    fetchcountry()
  }, [])
  return (
    <div className='guesscountry'>
      <h1>
        please guess the country
        <PointsNivel point={points} nivel={nivel} />
      </h1>
      <h2>
        please select the flag of :
        <Link to={`/country/${selectedcountrys?.name.common}`}>
          <span>{selectedcountrys?.name.common}</span>{' '}
        </Link>
      </h2>
      <div className='countryflag'>
        {randomflag.map((flag, index) => (
          <div
            className='img_wrp'
            key={index}
            onClick={() => {
              checkanswer(flag.src)
            }}
          >
            <img src={flag.src} alt={flag.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
