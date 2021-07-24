const Arrow = props => {
  return (
    <i className={
      props.sort === 'asc'
        ? 'far fa-caret-square-down'
        : 'far fa-caret-square-up'
    }></i>
  )
}

export default Arrow