/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  const { payload } = action
  switch (action.type) {
    case "CALCULATE": {
      let modifier
      switch (state.drivetrainState.selected) {
        case "FWD": {
          switch (state.transmissionState.selected) {
            case "trad-auto":
              modifier = 0.88
              break
            case "manual":
              modifier = 0.93
              break
            case "auto":
              modifier = 0.91
              break

            default:
              break
          }
          break
        }
        case "RWD": {
          switch (state.transmissionState.selected) {
            case "trad-auto":
              modifier = 0.83
              break
            case "manual":
              modifier = 0.88
              break
            case "auto":
              modifier = 0.86
              break

            default:
              break
          }
          break
        }
        case "AWD": {
          switch (state.transmissionState.selected) {
            case "trad-auto":
              modifier = 0.78
              break
            case "manual":
              modifier = 0.83
              break
            case "auto":
              modifier = 0.84
              break
            default:
              break
          }
          break
        }
        default: {
          modifier = 0.91
          break
        }
      }
      switch (payload.type) {
        case "crank":
          return {
            ...state,
            horsepowerState: {
              crank: payload.value,
              wheel: payload.value * modifier,
            },
          }
        case "wheels":
          return {
            ...state,
            horsepowerState: {
              crank: payload.value * (1 / modifier),
              wheel: payload.value,
            },
          }
        default:
          return state
      }
    }
    case "FILTER": {
      return { ...state, filterState: { value: payload.filter } }
    }
    case "DRIVETRAIN": {
      return { ...state, drivetrainState: { selected: payload.selection } }
    }
    case "TRANSMISSION": {
      return { ...state, transmissionState: { selected: payload.selection } }
    }
    case "LAST_TOUCHED": {
      return { ...state, lastTouched: { field: payload.field } }
    }
    case "COMPARER": {
      return {
        ...state,
        sidebarState: {
          options:
            window.innerWidth < 700 ? "--closed" : state.sidebarState.options,
          comparer: !state.sidebarState.comparer ? "--closed" : "",
        },
      }
    }
    case "OPTIONS": {
      return {
        ...state,
        sidebarState: {
          comparer:
            window.innerWidth < 700 ? "--closed" : state.sidebarState.comparer,
          options: !state.sidebarState.options ? "--closed" : "",
        },
      }
    }
    case "CLOSE_SIDEBARS": {
      return {
        ...state,
        sidebarState: {
          comparer: "--closed",
          options: "--closed",
        },
      }
    }
    default:
      return state
  }
}
