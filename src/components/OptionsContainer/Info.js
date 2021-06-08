import { useState } from "react"
const Info = () => {
  const [toggle, setToggle] = useState(true)
  const style = {
    transform: toggle ? "translateY(130%)" : "translateY(0%)",
    transition: "300ms",
    transformOrigin: "bottom",
  }

  return (
    <>
      <div className='info'>
        <button
          title='Information'
          className='info-button'
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          i
        </button>
        <div className='options' style={style}>
          <h4>Disclaimer:</h4>
          <p>
            These numbers serve only as a rough estimation, and may not be
            accurate.
          </p>
          <br />
          <hr />
          <br />
          <h4>About Me:</h4>
          <h5>
            <a href='https://linkedin.com/in/marcustfernandez'>LinkedIn</a>
          </h5>
          <h5>
            <a href='https://github.com/marcustf'>GitHub</a>
          </h5>
          <h5>
            <a href='https://marcustf.com'>Personal Site</a>
          </h5>
          <br />
          <hr />
          <br />
          <h4>Special Thanks:</h4>
          <h5>
            <a href='https://www.mk5cortinaestate.co.uk/calculator4.php'>
              mk5cortinaestate and Frozen Mist
            </a>
          </h5>
          <h5>
            <a href='http://projects.austinbroadhead.com/whpCalculator/'>
              Austin Broadhead
            </a>
          </h5>
        </div>
      </div>
    </>
  )
}

export default Info
