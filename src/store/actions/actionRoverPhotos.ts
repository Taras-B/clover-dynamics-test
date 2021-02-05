import { AppDispatch, AppThunk } from '..'
import {
  EnumActionType,
  IDataRoverPhotos,
  IQueryingBySol,
  ISetPagePhotosAction,
  ISetQueryingSearchPhotosAction,
  ISetRoversPhotosAction,
  LoadingState,
  ISetSearchPhotosAction,
} from '../types'
import { roverAPI } from '../../api'
import { actionApp } from './actionApp'

export const actionsRoverPhotos = {
  set: (payload: IDataRoverPhotos[]): ISetRoversPhotosAction => ({
    type: EnumActionType.SET_ROVER_PHOTOS,
    payload,
  }),
  setSearchPhotos: (payload: IDataRoverPhotos[]): ISetSearchPhotosAction => ({
    type: EnumActionType.SET_SEARCH_PHOTOS,
    payload,
  }),
  setQuerying: (payload: IQueryingBySol): ISetQueryingSearchPhotosAction => ({
    type: EnumActionType.SET_QUERYING_SEARCH_PHOTOS,
    payload,
  }),
  setPage: (): ISetPagePhotosAction => ({
    type: EnumActionType.SET_PAGE_PHOTOS,
  }),
}

//thunk

export const getRoversPhotos = (): AppThunk => async (
  dispatch: AppDispatch,
  getState
) => {
  try {
    dispatch(actionApp.setLoading(LoadingState.LOADING))
    let { camera, sol, page, rovers } = getState().roversPhotos.queryingBySol

    const data = await roverAPI.get(rovers, sol, camera, page)
    dispatch(actionsRoverPhotos.set(data.photos))
    dispatch(actionApp.setLoading(LoadingState.LOADED))
  } catch (e) {
    console.log(e)
    dispatch(actionApp.setLoading(LoadingState.ERROR))
    dispatch(actionApp.setAlert({ message: 'Error on server', type: 'error' }))
  }
}

export const searchRoversPhotos = (
  rovers: string,
  sol: number,
  camera: string
): AppThunk => async (dispatch: AppDispatch, getState) => {
  try {
    dispatch(actionApp.setLoading(LoadingState.LOADING))
    const queryData = getState().roversPhotos.queryingBySol

    if (
      camera !== queryData.camera ||
      rovers !== queryData.rovers ||
      sol !== queryData.sol
    ) {
      const data = await roverAPI.get(rovers, sol, camera, 1)
      dispatch(actionsRoverPhotos.setQuerying({ rovers, sol, camera, page: 1 }))

      if (data.photos.length !== 0) {
        dispatch(actionsRoverPhotos.setSearchPhotos(data.photos))
        dispatch(actionApp.setLoading(LoadingState.LOADED))
        dispatch(actionApp.setAlert({ message: 'Ok, photos on page', type: 'success' }))
      } else {
        dispatch(actionApp.setLoading(LoadingState.LOADED))
        dispatch(
          actionApp.setAlert({
            message: 'Not found photo. Enter another values',
            type: 'error',
          })
        )
      }
    } else {
      dispatch(actionApp.setLoading(LoadingState.LOADED))
      dispatch(
        actionApp.setAlert({
          message: 'You find this. Enter other values',
          type: 'warning',
        })
      )
    }
  } catch (e) {
    console.log(e)
    dispatch(actionApp.setLoading(LoadingState.LOADED))
    dispatch(actionApp.setAlert({ message: 'Error on server', type: 'error' }))
  }
}
export const loadMoreRoversPhotos = (): AppThunk => async (
  dispatch: AppDispatch,
  getState
) => {
  try {
    dispatch(actionApp.setLoading(LoadingState.LOADING))
    dispatch(actionsRoverPhotos.setPage())

    let { camera, sol, page, rovers } = getState().roversPhotos.queryingBySol
    const data = await roverAPI.get(rovers, sol, camera, page)
    if (data.photos.length !== 0) {
      dispatch(actionsRoverPhotos.set(data.photos))
      dispatch(actionApp.setLoading(LoadingState.LOADED))
      dispatch(actionApp.setAlert({ message: 'Ok photo on page', type: 'info' }))
    } else {
      dispatch(actionApp.setLoading(LoadingState.LOADED))
      dispatch(actionApp.setAlert({ message: 'Not found photo', type: 'error' }))
    }
  } catch (e) {
    console.log(e)
    dispatch(actionApp.setLoading(LoadingState.LOADED))
    dispatch(actionApp.setAlert({ message: 'Error on server', type: 'error' }))
  }
}
