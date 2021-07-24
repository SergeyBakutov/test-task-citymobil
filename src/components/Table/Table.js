import Arrow from '../UI/Arrow/Arrow'
import classes from './Table.module.css'

function createArrayTariffs(tariffs, tarrifs_list) {
  const arrayTariffs = []

  tarrifs_list.forEach(tariff => {
    Object.keys(tariffs).includes(tariff)
      ? arrayTariffs.push(tariffs[tariff].year)
      : arrayTariffs.push('-')
  })

  return arrayTariffs
}

const Table = (props) => {
  return (
    <table className={classes.Table}>
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, 'mark')}>
            Марка и модель &nbsp;
            {
              props.sortField === 'mark'
                ? <Arrow sort={props.sort} />
                : null
            }
          </th>
          {props.tariffsList.map((tariff, index) => {
            return <th key={index}>{tariff}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car, index) => {
          return (
            <tr key={index}>
              <td>{`${car.mark} ${car.model}`}</td>
              {
                createArrayTariffs(props.cars[index].tariffs, props.tariffsList).map((el, index) => {
                  return (
                    <td
                      key={index}
                      onClick={(event) => props.onCarSelect(car, event.target.outerText)}
                    >
                      {el}
                    </td>
                  )
                })
              }
            </tr>
          )
        })}
      </tbody>
    </table >
  )
}

export default Table