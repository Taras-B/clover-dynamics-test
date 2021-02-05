import {
  EnumActionType,
  IAlertData,
  ISetAlertAction,
  ISetCloseAlertAction,
  LoadingState,
  ISetLoadingAction,
} from '../types'

export const actionApp = {
  setAlert: (payload: Omit<IAlertData, 'open'>): ISetAlertAction => ({
    type: EnumActionType.SET_ALERT,
    payload,
  }),
  closeAlert: (): ISetCloseAlertAction => ({
    type: EnumActionType.SET_CLOSE_ALERT,
  }),
  setLoading: (payload: LoadingState): ISetLoadingAction => ({
    type: EnumActionType.SET_LOADING,
    payload,
  }),
}
