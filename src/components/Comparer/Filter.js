import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

const Filter = () => {
  //context
  const { filter, setFilter } = useContext(GlobalContext)

  //functions
  const inputHandler = e => {
    setFilter(e.target.value)
  }

  return (
    <input
      autocomplete='off'
      type='text'
      name='filter'
      className='filter'
      placeholder='Start typing to filter...'
      onChange={inputHandler}
      value={filter.value}
    />
  )
}

export default Filter
