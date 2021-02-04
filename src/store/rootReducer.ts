import { combineReducers } from 'redux'
import { roversPhotosReducer } from './reducers/roversPhotos'
import { IRoversState } from './types'

export const rootReducer = combineReducers({
  roversPhotos: roversPhotosReducer,
})

export type RootState = {
  roversPhotos: IRoversState
}
