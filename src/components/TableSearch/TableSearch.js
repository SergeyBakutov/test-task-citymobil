import { useState } from 'react'
import classes from './TableSearch.module.css'

const TableSearch = props => {
  const [value, setValue] = useState('')
  const valueChangeHandler = event => {
    setValue(event.target.value)
  }

  return (
    <div className={classes.TableSearch}>
      <input
        type='text'
        onChange={valueChangeHandler}
        value={value}
        placeholder='Поиск'
      />
      <button onClick={() => props.onSearch(value)}>Найти</button>
    </div>
  )
}

export default TableSearch