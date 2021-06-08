const Checkbox = ({ name, state, onChange }) => {
  return (
    <input
      onChange={onChange}
      type='checkbox'
      name={name}
      checked={state === name ? true : false}
    />
  )
}

export default Checkbox
