import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"

import GearIcon from "../../Assets/GearIcon"
import OptionsList from "./OptionsList"

const OptionsContainer = () => {
  const {
    sidebars: { options },
    openOptions,
  } = useContext(GlobalContext)

  return (
    <div className={`options-container${options}`}>
      <button
        title='Options'
        onClick={openOptions}
        className={`options-button${options}`}
      >
        {!options ? "+" : <GearIcon />}
      </button>
      <OptionsList />
    </div>
  )
}

export default OptionsContainer
