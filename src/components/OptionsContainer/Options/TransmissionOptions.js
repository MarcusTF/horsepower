import { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalContext"
import Checkbox from "./Checkbox"

const TransmissionOptions = () => {
  const {
    transmission: { selected },
    setTransmission,
    horsepower: { crank, wheel },
    calculator,
    lastTouched,
  } = useContext(GlobalContext)

  const changeTransmission = e => {
    setTransmission(e.target.name)
    calculator(lastTouched.field, lastTouched.field === "crank" ? crank : wheel)
  }

  return (
    <fieldset className='options transmission-options'>
      <legend>Transmission Options</legend>
      <div className='option'>
        <Checkbox
          name='manual'
          state={selected}
          onChange={changeTransmission}
        />
        <label htmlFor='manual'>Manual</label>
      </div>
      <div className='option'>
        <Checkbox name='auto' state={selected} onChange={changeTransmission} />
        <label htmlFor='auto'>Automatic (Modern 5-Speed)</label>
      </div>
      <div className='option'>
        <Checkbox
          name='trad-auto'
          state={selected}
          onChange={changeTransmission}
        />
        <label htmlFor='trad-auto'>Automatic (Traditional)</label>
      </div>
    </fieldset>
  )
}

export default TransmissionOptions
