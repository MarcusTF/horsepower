import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'

const ComparerList = () => {
  const {
    comparer,
    filter,
    horsepower: { crank },
  } = useContext(GlobalContext)

  return comparer
    .sort((a, b) => (+a.year < +b.year ? 1 : -1))
    .sort((a, b) => (a.make > b.make ? 1 : -1))
    .filter(car => {
      if (filter.value !== '') {
        return (
          (
            car.make.toLowerCase() +
            car.model.toLowerCase() +
            car.year.toLowerCase()
          ).search(
            `^(?=.*${filter.value.toLowerCase().replace(' ', ')(?=.*')}).*$`
          ) !== -1
        )
      }
      return car
    })
    .map((car, i) => (
      <div key={i} className="comparer-car">
        <div>
          <h5>{`${car.year} ${car.make}`}</h5>
          <h4>
            {car.model} - {car.horsepower}hp
          </h4>
        </div>
        <div>
          <h3>
            {`~ ${Math.floor(Math.abs(car.horsepower - crank))}hp ${
              car.horsepower - crank < 0 ? 'more' : 'less'
            }`}
          </h3>
        </div>
      </div>
    ))
}

export default ComparerList
