import { useContext, useRef } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import CompareIcon from "../../Assets/CompareIcon"
import ComparerList from "./ComparerList"
import Filter from "./Filter"

const ComparerContainer = () => {
  const {
    sidebars: { comparer },
    openComparer,
    closeSidebars,
  } = useContext(GlobalContext)

  const reference = useRef({
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
