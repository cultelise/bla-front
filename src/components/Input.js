import React from 'react'

const Input = ({ name, value, onChange }) => {
  return (
    <div className='inputs'>
      <label htmlFor={name}>{name}</label>
      <input type={'text'} name={name} id={name} value={value} onChange={onChange}></input>
    </div>
  )
}

export default Input