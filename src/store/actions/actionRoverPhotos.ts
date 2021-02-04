import { AppDispatch, AppThunk } from '..'
import {
  EnumActionType,
  IDataRoverPhotos,
  IFetchRoverPhotosAction,
  IQueryingBySol,
  ISetQueryingSearchPhotosAction,
  ISetRoversPhotosAction,
  LoadingState,
} from '../types'
import { roverAPI } from '../../api'

export const actionsRoverPhotos = {
  set: (payload: IDataRoverPhotos[]): ISetRoversPhotosAction => ({
    type: EnumActionType.SET_ROVER_PHOTOS,
    payload,
  }),
  setQuerying: (payload: IQueryingBySol): ISetQueryingSearchPhotosAction => ({
    type: EnumActionType.SET_QUERYING_SEARCH_PHOTOS,
    payload,
  }),
  setLoading: (payload: LoadingState): IFetchRoverPhotosAction => ({
    type: EnumActionType.FETCH_ROVER_PHOTOS,
    payload,
  }),
}

//thunk

export const getRoversPhotos = (): AppThunk => async (
  dispatch: AppDispatch,
  getState
) => {
  try {
    dispatch(actionsRoverPhotos.setLoading(LoadingState.LOADING))
    let { camera, sol, page, rovers } = getState().roversPhotos.queryingBySol

    const data = await roverAPI.get(rovers, sol, camera, page)
    dispatch(actionsRoverPhotos.set(data.photos))
    console.log(data)

    //TODO: add error handling
  } catch (e) {
    console.log(e)
    dispatch(actionsRoverPhotos.setLoading(LoadingState.ERROR))
  }
}

export const searchRoversPhotos = (
  rovers: string,
  sol: number,
  camera: string
): AppThunk => async (dispatch: AppDispatch, getState) => {
  try {
    dispatch(actionsRoverPhotos.setLoading(LoadingState.LOADING))
    const queryData = getState().roversPhotos.queryingBySol

    //TODO: add error handling
    if (
      camera !== queryData.camera ||
      rovers !== queryData.rovers ||
      sol !== queryData.sol
    ) {
      const data = await roverAPI.get(rovers, sol, camera, 1)

      dispatch(actionsRoverPhotos.setQuerying({ rovers, sol, camera, page: 1 }))
      dispatch(actionsRoverPhotos.set(data.photos))
      console.log('SEARCH_ROVERS', data)
    }
    dispatch(actionsRoverPhotos.setLoading(LoadingState.LOADED))
  } catch (e) {
    console.log(e)
    dispatch(actionsRoverPhotos.setLoading(LoadingState.ERROR))
  }
}
export const loadMoreRoversPhotos = (): AppThunk => async (
  dispatch: AppDispatch,
  getState
) => {
  try {
    dispatch(actionsRoverPhotos.setLoading(LoadingState.LOADING))
    let { camera, sol, page, rovers } = getState().roversPhotos.queryingBySol
    const data = await roverAPI.get(rovers, sol, camera, page++)
    dispatch(actionsRoverPhotos.set(data.photos))
    console.log(data)

    //TODO: add error handling
  } catch (e) {
    console.log(e)
    dispatch(actionsRoverPhotos.setLoading(LoadingState.ERROR))
  }
}
