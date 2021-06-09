import React, { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import More from "../../Assets/More"
import Less from "../../Assets/Less"
import Equal from "../../Assets/Equal"

const ComparerList = () => {
  //context
  const {
    comparer,
    filter,
    horsepower: { crank },
  } = useContext(GlobalContext)

  return comparer
    .sort((a, b) => (a.horsepower - crank > b.horsepower - crank ? 1 : -1))
    .filter(car => {
      if (filter.value !== "") {
        return (
          //this search checks if the Make, Model, or Year match the input from the user to filter the list.
          (
            car.make.toLowerCase() +
            car.model.toLowerCase() +
            car.year.toLowerCase()
          ).search(
            // This checks if the information for each car contains ALL of the inputs from the user.
            `^(?=.*${filter.value.toLowerCase().replace(" ", ")(?=.*")}).*$`
          ) !== -1
        )
      }
      return car
    })
    .map((car, i) => (
      <div key={i} className='comparer-car'>
        <div>
          <h5>{`${car.year} ${car.make}`}</h5>
          <h4>{car.model}</h4>
        </div>
        <div style={{ display: "flex" }}>
          <h3>{`${Math.floor(Math.abs(car.horsepower - crank))}hp`}</h3>
          {car.horsepower - crank === 0 ? (
            <Equal />
          ) : car.horsepower - crank < 0 ? (
            <More />
          ) : (
            <Less />
          )}
        </div>
      </div>
    ))
}

export default ComparerList
