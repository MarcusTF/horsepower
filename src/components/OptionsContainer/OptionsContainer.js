import { useState } from "react"
import GearIcon from "../../Assets/GearIcon"
import OptionsList from "./OptionsList"

const OptionsContainer = () => {
  const [toggle, setToggle] = useState("--closed")
  const toggleOpen = () =>
    toggle === "" ? setToggle("--closed") : setToggle("")

  return (
    <div className={`options-container${toggle}`}>
      <button
        title='Options'
        onClick={toggleOpen}
        className={`options-button${toggle}`}
      >
        {!toggle ? "+" : <GearIcon />}
      </button>
      <OptionsList />
    </div>
  )
}

export default OptionsContainer
