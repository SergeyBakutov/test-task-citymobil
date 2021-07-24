import React from 'react'
import Table from '../../components/Table/Table'
import Loader from '../../components/UI/Loader/Loader'
import classes from './Content.module.css'
import _ from 'lodash'
import SelectedCar from '../../components/SelectedCar/SelectedCar'
import TableSearch from '../../components/TableSearch/TableSearch'

class Content extends React.Component {
  state = {
    car: null,
    cars: [],
    loading: true,
    search: '',
    sort: 'asc',
    sortField: 'mark',
    tariffsList: []
  }

  async componentDidMount() {
    const response = await fetch('https://city-mobil.ru/api/cars')
    const data = await response.json()
    this.setState({
      cars: data.cars,
      tariffsList: data.tariffs_list,
      loading: false
    })
  }

  sortHandler = sortField => {
    const cloneCars = [...this.state.cars]
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
    const orderedCars = _.orderBy(cloneCars, sortField, sortType)

    this.setState({
      cars: orderedCars,
      sort: sortType,
      sortField
    })
  }

  carSelectHandler = (car, selectedYear) => {
    const modifiedCar = {
      ...car,
      selectedYear
    }
    this.setState({
      car: modifiedCar
    })
  }

  searchHandler = search => {
    this.setState({ search })
  }

  getFilteredCars() {
    const { cars, search } = this.state

    if (!search) return cars

    return cars.filter(car => {
      return car['mark'].toLowerCase().includes(search.toLowerCase())
        || car['model'].toLowerCase().includes(search.toLowerCase())
    })
  }

  render() {
    return (
      <div className={classes.Content}>
        {
          this.state.loading
            ? <Loader />
            : <>
              <TableSearch onSearch={this.searchHandler} />
              <Table
                cars={this.getFilteredCars()}
                tariffsList={this.state.tariffsList}
                onSort={this.sortHandler}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onCarSelect={this.carSelectHandler}
              />
            </>
        }
        {
          this.state.car
            ? <SelectedCar car={this.state.car} />
            : null
        }
      </div>
    )
  }
}

export default Content