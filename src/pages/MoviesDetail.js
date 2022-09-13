import React from 'react'
import { useParams } from 'react-router-dom'

const MoviesDetail = () => {
  const object = useParams()
  
  return (
    <div>MoviesDetail{object.detail}</div>
  )
}

export default MoviesDetail