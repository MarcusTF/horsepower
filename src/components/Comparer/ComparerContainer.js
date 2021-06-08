import React, { useState } from "react"
import ComparerList from "./ComparerList"
import Filter from "./Filter"

const ComparerContainer = () => {
  const [toggle, setToggle] = useState("--closed")

  const toggleOpen = () =>
    toggle === "" ? setToggle("--closed") : setToggle("")

  return (
    <div className={`comparer-container${toggle}`}>
      <button className={`comparer-button${toggle}`} onClick={toggleOpen}>
        {toggle === "" ? "+" : "V"}
      </button>
      <Filter />
      <div className='comparer-list'>
        <ComparerList />
      </div>
    </div>
  )
}

export default ComparerContainer