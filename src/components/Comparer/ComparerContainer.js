import React, { useState } from "react"
import CompareIcon from "../../Assets/CompareIcon"
import ComparerList from "./ComparerList"
import Filter from "./Filter"

const ComparerContainer = () => {
  const [toggle, setToggle] = useState("--closed")

  const toggleOpen = () =>
    toggle === "" ? setToggle("--closed") : setToggle("")

  return (
    <div className={`comparer-container${toggle}`}>
      <button
        title='Compare to other cars'
        className={`comparer-button${toggle}`}
        onClick={toggleOpen}
      >
        {toggle === "" ? "+" : <CompareIcon />}
      </button>
      <Filter />
      <div className='comparer-list'>
        <ComparerList />
      </div>
    </div>
  )
}

export default ComparerContainer
