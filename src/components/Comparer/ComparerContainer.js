import { useContext, useRef } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import CompareIcon from "../../Assets/CompareIcon"
import ComparerList from "./ComparerList"
import Filter from "./Filter"

const ComparerContainer = () => {
  //context
  const {
    sidebars: { comparer },
    openComparer,
    closeSidebars,
  } = useContext(GlobalContext)

  // useRef to track window size to keep the value out of state, but update UI based on window.innerWidth                                     //
  const reference = useRef({
    // isSmall is to keep it from firing the closeSidebars() function every single time the viewport changes once it's minimized the sidebars once.
    // it tracks if it's already small, and if so, stops checking width < 700 and running the function until it's over 700 again.
    current: { width: window.innerWidth, isSmall: false }, 
  })

  window.onresize = () => {
    const { current } = reference
    current.width = window.innerWidth
    if (!current.isSmall)
      if (current.width < 700) {
        closeSidebars()
        current.isSmall = true
      }
    if (current.width > 700) current.isSmall = false
  }
  // I put it here because it had to go somewhere and I figured I'd put it in with a relevant component that already had context imported.    //

  return (
    <div className={`comparer-container${comparer}`}>
      <button
        title='Compare to other cars'
        className={`comparer-button${comparer}`}
        onClick={openComparer}
      >
        {!comparer ? "+" : <CompareIcon />}
      </button>
      <Filter />
      <div className='comparer-list'>
        <ComparerList />
      </div>
    </div>
  )
}

export default ComparerContainer
