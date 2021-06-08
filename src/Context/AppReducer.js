/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  const { payload } = action
  switch (action.type) {
    case "CALCULATE": {
      let modifier
      switch (state.drivetrainState.selected) {
        case "FWD":
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
        case "RWD":
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
        case "AWD":
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

        default:
          modifier = 0.91
          break
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
    default:
      return state
  }
}

/**
 * FWD
 *    Auto
 *    C=>W * 0.88 W=>C * (100/88)
 *    Manual
 *    C=>W * 0.93 W=>C * (100/93)
 *    Mod Auto
 *    C=>W * 0.91 W=>C * (100/91)
 *
 *
 */
