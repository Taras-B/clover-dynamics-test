import produce, { Draft } from 'immer'
import { IRoversState, LoadingState, EnumActionType, RoversActionT } from '../types'

const initialExpenseState: IRoversState = {
  photos: [],
  currentPage: 1,
  loading: LoadingState.LOADED,
}

export const roversPhotosReducer = produce(
  (draft: Draft<IRoversState>, action: RoversActionT) => {
    switch (action.type) {
      case EnumActionType.SET_ROVER_PHOTOS:
        draft.photos.push(...action.payload)
        break
      default:
        break
    }
  },
  initialExpenseState
)
