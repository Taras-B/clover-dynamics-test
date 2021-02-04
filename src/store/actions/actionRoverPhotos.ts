import { AppDispatch, AppThunk } from '..'
import {
  EnumActionType,
  IDataRoverPhotos,
  IFetchRoverPhotosAction,
  ISetRoversPhotosAction,
  LoadingState,
} from '../types'
import { roverAPI } from '../../api'

export const actionsRoverPhotos = {
  set: (payload: IDataRoverPhotos[]): ISetRoversPhotosAction => ({
    type: EnumActionType.SET_ROVER_PHOTOS,
    payload,
  }),
  setLoading: (payload: LoadingState): IFetchRoverPhotosAction => ({
    type: EnumActionType.FETCH_ROVER_PHOTOS,
    payload,
  }),
}

//thunk

export const getRoversPhotos = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(actionsRoverPhotos.setLoading(LoadingState.LOADING))
    const data = await roverAPI.get()
    console.log(data)

    dispatch(actionsRoverPhotos.set(data.photos))
    if (data) {
    }
  } catch (e) {
    console.log(e)
    dispatch(actionsRoverPhotos.setLoading(LoadingState.ERROR))
  }
}
