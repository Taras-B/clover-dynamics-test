import produce, { Draft } from 'immer'
import { IRoversState, EnumActionType, RoversActionT } from '../types'

const initialRoverPhotoState: IRoversState = {
  photos: [],
  queryingBySol: {
    camera: 'fhaz',
    sol: 100,
    rovers: 'curiosity',
    page: 1,
  },
}

export const roversPhotosReducer = produce(
  (draft: Draft<IRoversState>, action: RoversActionT) => {
    switch (action.type) {
      case EnumActionType.SET_ROVER_PHOTOS:
        draft.photos.push(...action.payload)
        break
      case EnumActionType.SET_SEARCH_PHOTOS:
        draft.photos = action.payload
        break
      case EnumActionType.SET_QUERYING_SEARCH_PHOTOS:
        draft.queryingBySol = action.payload
        break
      case EnumActionType.SET_PAGE_PHOTOS:
        draft.queryingBySol.page++
        break
      default:
        break
    }
  },
  initialRoverPhotoState
)
