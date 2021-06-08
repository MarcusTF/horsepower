import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
  comparerState: [
    {
      make: "Chevrolet",
      model: "Impala SS",
      year: "1996",
      horsepower: 260,
    },
    {
      make: "Chevrolet",
      model: "Camaro Z/28",
      year: "1969",
      horsepower: 385,
    },
    {
      make: "McLaren",
      model: "MP4-12C",
      year: "2010",
      horsepower: 592,
    },
    {
      make: "Honda",
      model: "Civic VTi",
      year: "1997",
      horsepower: 170,
    },
    {
      make: "Ford",
      model: "GT",
      year: "2006",
      horsepower: 550,
    },
    {
      make: "Ferrari",
      model: "Enzo",
      year: "2003",
      horsepower: 660,
    },
    {
      make: "Bugatti",
      model: "Veyron",
      year: "2010",
      horsepower: 1001,
    },
    {
      make: "Bugatti",
      model: "Chiron",
      year: "2021",
      horsepower: 1479,
    },
    {
      make: "Cleetus McFarland",
      model: '"Leeroy"',
      year: "2020",
      horsepower: 1500,
    },
  ],
  lastTouched: {
    field: "crank",
  },
  horsepowerState: {
    crank: 0,
    wheel: 0,
  },
  filterState: { value: "" },
  drivetrainState: {
    selected: "FWD",
  },
  transmissionState: {
    selected: "auto",
  },
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //ACTIONS
  function calculator(type, value) {
    dispatch({
      type: "CALCULATE",
      payload: { type, value },
    })
  }
  function setFilter(filter) {
    dispatch({
      type: "FILTER",
      payload: { filter },
    })
  }
  function setLastTouched(field) {
    dispatch({
      type: "LAST_TOUCHED",
      payload: { field },
    })
  }
  function setDrivetrain(selection) {
    dispatch({
      type: "DRIVETRAIN",
      payload: { selection },
    })
  }
  function setTransmission(selection) {
    dispatch({
      type: "TRANSMISSION",
      payload: { selection },
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        comparer: state.comparerState,
        horsepower: state.horsepowerState,
        filter: state.filterState,
        drivetrain: state.drivetrainState,
        transmission: state.transmissionState,
        lastTouched: state.lastTouched,
        calculator,
        setFilter,
        setDrivetrain,
        setTransmission,
        setLastTouched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
