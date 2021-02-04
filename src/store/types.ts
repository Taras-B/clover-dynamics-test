import { Action } from 'redux'

export interface IDataRoverPhotos {
  id: number
  sol: number
  camera: {
    id: number
    name: string
    rover_id: number
    full_name: string
  }
  img_src: string
  earth_date: string
  rover: {
    id: number
    name: string
    landing_date: string
    launch_date: string
    status: string
  }
}
export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface IRoversState {
  photos: IDataRoverPhotos[]
  currentPage: number
  loading: LoadingState
}

export enum EnumActionType {
  FETCH_ROVER_PHOTOS = 'rovers/FETCH_ROVER_PHOTOS',
  SET_ROVER_PHOTOS = 'rovers/SET_ROVER_PHOTOS',
  SET_LOADING = 'rovers/SET_LOADING',
  FETCH_SEARCH_PHOTOS = 'rovers/FETCH_SEARCH_PHOTOS',
  SET_SEARCH_PHOTOS = 'rovers/SET_SEARCH_PHOTOS',
}

export interface ISetRoversPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.SET_ROVER_PHOTOS
  payload: IDataRoverPhotos[]
}
export interface IFetchRoverPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.FETCH_ROVER_PHOTOS
  payload: LoadingState
}

export interface IFetchSearchPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.FETCH_SEARCH_PHOTOS
}
export interface ISetSearchPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.SET_SEARCH_PHOTOS
  payload: IDataRoverPhotos[]
}

export type RoversActionT =
  | ISetRoversPhotosAction
  | IFetchRoverPhotosAction
  | ISetSearchPhotosAction
  | IFetchSearchPhotosAction
