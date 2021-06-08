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
      make: "Toyota",
      model: "Supra",
      year: "2021",
      horsepower: 382,
    },
    {
      make: "Reliant",
      model: "Robin",
      year: "1981",
      horsepower: 40,
    },
    {
      make: "Buick",
      model: "GNX",
      year: "1987",
      horsepower: 300,
    },
    {
      make: "Lamborghini",
      model: "Diablo GT",
      year: "1998",
      horsepower: 575,
    },
    {
      make: "Lamborghini",
      model: "Aventador SVJ",
      year: "2020",
      horsepower: 575,
    },
    {
      make: "Nissan",
      model: "Sentra",
      year: "2021",
      horsepower: 149,
    },
    {
      make: "Nissan",
      model: "Skyline GT-R",
      year: "2002",
      horsepower: 276,
    },
    {
      make: "Honda",
      model: "NSX",
      year: "2000",
      horsepower: 290,
    },
  ],
  lastTouched: {
    field: "crank",
  },
  sidebarState: {
    comparer: "--closed",
    options: "--closed",
  },
  horsepowerState: {
    crank: 0,
    wheel: 0,
  },
  filterState: {
    value: "",
  },
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
  function openComparer() {
    dispatch({ type: "COMPARER" })
  }
  function openOptions() {
    dispatch({ type: "OPTIONS" })
  }
  function closeSidebars() {
    dispatch({ type: "CLOSE_SIDEBARS" })
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
        sidebars: state.sidebarState,
        calculator,
        setFilter,
        setDrivetrain,
        setTransmission,
        setLastTouched,
        openComparer,
        openOptions,
        closeSidebars,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
