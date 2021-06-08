import React from "react"
import DrivetrainOptions from "./Options/DrivetrainOptions"
import TransmissionOptions from "./Options/TransmissionOptions"
import Info from "./Info"

const OptionsList = () => (
  <div className='options-info-container'>
    <form className='options-form'>
      <DrivetrainOptions />
      <TransmissionOptions />
        <p className='options'>
          These numbers serve only as a rough estimation, and may not be
          accurate.
        </p>
    </form>
    <Info />
  </div>
)

export default OptionsList
