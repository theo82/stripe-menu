import React from 'react'
import { useGlobalContext } from './context'
const Hero = () => {
  const data = useGlobalContext()
  console.log(data)
  return <h1>Hero</h1>
}

export default Hero
