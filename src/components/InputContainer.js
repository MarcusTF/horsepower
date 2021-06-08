import React, { useContext } from "react"
import { GlobalContext } from "../Context/GlobalContext"

import Input from "./Input"

const InputContainer = ({ type }) => {
  const { horsepower } = useContext(GlobalContext)
  let saturation = horsepower.crank > 650 ? 75 : (horsepower.crank / 650) * 75
  let lightness =
    horsepower.crank < 650
      ? 50
      : (Math.min(1600, horsepower.crank) / 1600) * 100 + 10
  let style =
    type === "crank"
      ? {
          backgroundColor: `hsl(0,${saturation}%,${lightness}%)`,
          transition: "1.5s",
        }
      : {
          backgroundColor: `hsl(560,${saturation}%,${lightness}%)`,
          transition: "1.5s",
        }
  return (
    <div className={`${type}-container input-container`} style={style}>
      <Input type={type} />
    </div>
  )
}

export default InputContainer
