import React from "react"
import DrivetrainOptions from "./Options/DrivetrainOptions"
import TransmissionOptions from "./Options/TransmissionOptions"
import Info from "./Info"

const OptionsList = () => (

    <div className="options-info-container">
      <form className='options-form'>
        <DrivetrainOptions />
        <TransmissionOptions />
      </form>
      <Info />
    </div>

)

export default OptionsList
