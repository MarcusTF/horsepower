import { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalContext"
import Checkbox from "./Checkbox"

const DrivetrainOptions = () => {
  const {
    drivetrain: { selected },
    setDrivetrain,
    horsepower: { crank, wheel },
    calculator,
    lastTouched,
  } = useContext(GlobalContext)

  const changeDrivetrain = e => {
    setDrivetrain(e.target.name)
    calculator(lastTouched.field, lastTouched.field === "crank" ? crank : wheel)
  }

  return (
    <fieldset className='options drivetrain-options'>
      <legend>Drivetrain Options</legend>
      <div className='option'>
        <Checkbox name='RWD' state={selected} onChange={changeDrivetrain} />
        <label htmlFor='RWD'>Rear Wheel Drive</label>
      </div>
      <div className='option'>
        <Checkbox name='FWD' state={selected} onChange={changeDrivetrain} />
        <label htmlFor='FWD'>Front Wheel Drive</label>
      </div>
      <div className='option'>
        <Checkbox name='AWD' state={selected} onChange={changeDrivetrain} />
        <label htmlFor='AWD'>All Wheel Drive</label>
      </div>
    </fieldset>
  )
}

export default DrivetrainOptions
