import classes from './SelectedCar.module.css'

const SelectedCar = props => {
  return (
    <div className={classes.SelectedCar}>
      {
        props.car.selectedYear === '-'
          ? <p>Автомобиль такого класса отсутствует</p>
          : <p>{`Выбран автомобиль ${props.car.mark} ${props.car.model} ${props.car.selectedYear} года выпуска`}</p>
      }
    </div>
  )
}

export default SelectedCar