import Github from "../../Assets/Github"
import LinkIcon from "../../Assets/LinkIcon"
import Linkedin from "../../Assets/Linkedin"

const Info = () => {
  return (
    <>
      <div className='info'>
        <div className='options'>
          ya
          <h4 style={{ textAlign: "center" }}>About Me:</h4>
          <div className='about-me'>
            <a title='LinkedIn' href='https://linkedin.com/in/marcustfernandez'>
              <Linkedin />
            </a>
            <a title='GitHub' href='https://github.com/marcustf'>
              <Github />
            </a>
            <a title='Personal Site' href='https://marcustf.com'>
              <LinkIcon />
            </a>
          </div>
          <hr />
          <br />
          <h4>Special Thanks:</h4>
          <h5>
            <a href='https://www.mk5cortinaestate.co.uk/calculator4.php'>
              mk5cortinaestate.co.uk
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
