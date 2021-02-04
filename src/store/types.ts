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
  loading: LoadingState
}

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

export enum EnumActionType {
  FETCH_ROVER_PHOTOS = 'rovers/FETCH_ROVER_PHOTOS',
  SET_ROVER_PHOTOS = 'rovers/SET_ROVER_PHOTOS',
  SET_LOADING = 'rovers/SET_LOADING',
  FETCH_SEARCH_PHOTOS = 'rovers/FETCH_SEARCH_PHOTOS',
  SET_PAGE_PHOTOS = 'rovers/SET_PAGE_PHOTOS',
  SET_SEARCH_PHOTOS = 'rovers/SET_SEARCH_PHOTOS',
  SET_QUERYING_SEARCH_PHOTOS = 'rovers/SET_QUERYING_SEARCH_PHOTOS',
  SET_ALERT = 'app/SET_ALERT',
  SET_CLOSE_ALERT = 'app/SET_CLOSE_ALERT',
}

export interface ISetAlertAction extends Action<EnumActionType> {
  type: EnumActionType.SET_ALERT
  payload: Omit<IAlertData, 'open'>
}
export interface ISetCloseAlertAction extends Action<EnumActionType> {
  type: EnumActionType.SET_CLOSE_ALERT
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
  | IFetchRoverPhotosAction
  | ISetSearchPhotosAction
  | IFetchSearchPhotosAction
  | ISetQueryingSearchPhotosAction
  | ISetPagePhotosAction

export type AppActionT = ISetAlertAction | ISetCloseAlertAction
