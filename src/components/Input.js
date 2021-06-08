import React, { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"

const Input = ({ type }) => {
  //Context
  const { horsepower, calculator, setLastTouched } = useContext(GlobalContext)

  //Values
  const horsepowerValue = type === "crank" ? horsepower.crank : horsepower.wheel

  //Functions
  const inputHandler = e => {
    console.log(e.target.name)
    setLastTouched(e.target.name)
    e.target.value = +e.target.value
    calculator(type, e.target.value)
  }

  return (
    <div className='horsepower-container'>
      <input
        onChange={inputHandler}
        type='number'
        name={type}
        className={`input ${type}`}
        value={Math.floor(horsepowerValue)}
      />
      <h4>horsepower @ {type}</h4>
    </div>
  )
}

export default Input
