import TopRight from './top-right'
import BottomCenter from './bottom-center'
import BottomLeft from './bottom-left'
import BottomRight from './bottom-right'
import Center from './center-center'
import CenterLeft from './center-left'
import CenterRight from './center-right'
import TopCenter from './top-center'
import TopLeft from './top-left'

export const alertsPositionIds = {
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  CENTER_CENTER: 'center-center',
  CENTER_LEFT: 'center-left',
  CENTER_RIGHT: 'center-right',
  TOP_CENTER: 'top-center',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right'
}

export const alertsPositionContainer = {
  alertPosition: {
    [alertsPositionIds.BOTTOM_CENTER]: BottomCenter,
    [alertsPositionIds.BOTTOM_LEFT]: BottomLeft,
    [alertsPositionIds.BOTTOM_RIGHT]: BottomRight,
    [alertsPositionIds.CENTER_CENTER]: Center,
    [alertsPositionIds.CENTER_LEFT]: CenterLeft,
    [alertsPositionIds.CENTER_RIGHT]: CenterRight,
    [alertsPositionIds.TOP_CENTER]: TopCenter,
    [alertsPositionIds.TOP_LEFT]: TopLeft,
    [alertsPositionIds.TOP_RIGHT]: TopRight
  }
}
