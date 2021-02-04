import { combineReducers } from 'redux'
import { appReducer } from './reducers/appReducer'
import { roversPhotosReducer } from './reducers/roversPhotos'
import { IAppState, IRoversState } from './types'

export const rootReducer = combineReducers({
  roversPhotos: roversPhotosReducer,
  appReducer: appReducer,
})

export type RootState = {
  roversPhotos: IRoversState
  appReducer: IAppState
}
