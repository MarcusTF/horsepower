import React from "react"
import DrivetrainOptions from "./Options/DrivetrainOptions"
import TransmissionOptions from "./Options/TransmissionOptions"

const OptionsList = () => (
  <>
    <form className='options-form'>
      <DrivetrainOptions />
      <TransmissionOptions />
    </form>
    <div>
      <div className='options'>
        <h4>Special Thanks:</h4>
        <h6>Formulas and calculations inspired by:</h6>
        <h5>
          <a href='https://www.mk5cortinaestate.co.uk/calculator4.php'>
            Mike and "Frozen Mist"
          </a>
        </h5>
        <h5>
          <a href='http://projects.austinbroadhead.com/whpCalculator/'>
            Austin Broadhead
          </a>
        </h5>
      </div>
      <div className='options'>
        <h4>About Me:</h4>
        <h5>marcustf.com</h5>
        <h5>github.com/marcustf</h5>
      </div>
    </div>
  </>
)

export default OptionsList
