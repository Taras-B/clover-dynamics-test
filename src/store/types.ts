import { Action } from 'redux'

export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export enum EnumActionType {
  SET_LOADING = 'app/SET_LOADING',
  SET_ALERT = 'app/SET_ALERT',
  SET_CLOSE_ALERT = 'app/SET_CLOSE_ALERT',

  SET_ROVER_PHOTOS = 'rovers/SET_ROVER_PHOTOS',
  SET_PAGE_PHOTOS = 'rovers/SET_PAGE_PHOTOS',
  SET_SEARCH_PHOTOS = 'rovers/SET_SEARCH_PHOTOS',
  SET_QUERYING_SEARCH_PHOTOS = 'rovers/SET_QUERYING_SEARCH_PHOTOS',
}
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

export enum EnumRovers {
  Curiosity = 'curiosity',
  Spirit = 'spirit',
  Opportunity = 'opportunity',
}

export enum EnumCameraRover {
  FHAZ = 'fhaz',
  RHAZ = 'rhaz',
  MAST = 'mast',
  CHERCAM = 'chercam',
  MAHLI = 'mahli',
  MARDI = 'mardi',
  NAVCAM = 'navcam',
  PANCAM = 'pancam',
  MINITES = 'minites',
}

export interface IQueryingBySol {
  sol: number
  camera: string
  page: number
  rovers: string
}
export interface IRoversState {
  photos: IDataRoverPhotos[]
  queryingBySol: IQueryingBySol
}

// App state type
export type AlertTypeMessageT = 'success' | 'info' | 'warning' | 'error' | undefined
export interface IAlertData {
  open: boolean
  message: string
  type: AlertTypeMessageT
}

export interface IAppState {
  loading: LoadingState
  alert: IAlertData
}

// interfaces to App actions
export interface ISetAlertAction extends Action<EnumActionType> {
  type: EnumActionType.SET_ALERT
  payload: Omit<IAlertData, 'open'>
}
export interface ISetCloseAlertAction extends Action<EnumActionType> {
  type: EnumActionType.SET_CLOSE_ALERT
}

export interface ISetLoadingAction extends Action<EnumActionType> {
  type: EnumActionType.SET_LOADING
  payload: LoadingState
}

// interfaces to Rovers photo actions
export interface ISetRoversPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.SET_ROVER_PHOTOS
  payload: IDataRoverPhotos[]
}

export interface ISetPagePhotosAction extends Action<EnumActionType> {
  type: EnumActionType.SET_PAGE_PHOTOS
}
export interface ISetQueryingSearchPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.SET_QUERYING_SEARCH_PHOTOS
  payload: IQueryingBySol
}
export interface ISetSearchPhotosAction extends Action<EnumActionType> {
  type: EnumActionType.SET_SEARCH_PHOTOS
  payload: IDataRoverPhotos[]
}

export type RoversActionT =
  | ISetRoversPhotosAction
  | ISetQueryingSearchPhotosAction
  | ISetPagePhotosAction
  | ISetSearchPhotosAction

export type AppActionT = ISetAlertAction | ISetCloseAlertAction | ISetLoadingAction
