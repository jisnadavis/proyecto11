import React from 'react'
import './PointsNivel.css'

export const PointsNivel = ({ point, nivel }) => {
  return (
    <div className='points'>
      <h2 className='nivel'>Nivel:{nivel}</h2>
      <h2 className='score'>Score:{point}</h2>
    </div>
  )
}
