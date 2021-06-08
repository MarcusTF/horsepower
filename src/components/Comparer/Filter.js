import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

const Filter = () => {
  const { filter, setFilter } = useContext(GlobalContext)

  const inputHandler = e => {
    setFilter(e.target.value)
  }

  return (
    <input
      type="text"
      name="filter"
      className="filter"
      placeholder="Start typing to filter..."
      onChange={inputHandler}
      value={filter.value}
    />
  )
}

export default Filter
