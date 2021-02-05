import produce, { Draft } from 'immer'
import { IAppState, LoadingState, EnumActionType, AppActionT } from '../types'

const initialExpenseState: IAppState = {
  alert: {
    open: false,
    type: undefined,
    message: '',
  },
  loading: LoadingState.LOADED,
}

export const appReducer = produce((draft: Draft<IAppState>, action: AppActionT) => {
  switch (action.type) {
    case EnumActionType.SET_ALERT:
      draft.alert.open = true
      draft.alert.message = action.payload.message
      draft.alert.type = action.payload.type
      break

    case EnumActionType.SET_CLOSE_ALERT:
      draft.alert.open = false
      draft.alert.message = ''
      break
    case EnumActionType.SET_LOADING:
      draft.loading = action.payload
      break
    default:
      break
  }
}, initialExpenseState)
