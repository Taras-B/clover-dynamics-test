import produce, { Draft } from 'immer'
import { IRoversState, LoadingState, EnumActionType, RoversActionT } from '../types'

const initialExpenseState: IRoversState = {
  photos: [],
  queryingBySol: {
    camera: 'fhaz',
    sol: 100,
    rovers: 'curiosity',
    page: 1,
  },
  loading: LoadingState.LOADED,
}

export const roversPhotosReducer = produce(
  (draft: Draft<IRoversState>, action: RoversActionT) => {
    switch (action.type) {
      case EnumActionType.SET_ROVER_PHOTOS:
        draft.photos.push(...action.payload)
        draft.loading = LoadingState.LOADED
        break
      case EnumActionType.SET_QUERYING_SEARCH_PHOTOS:
        // const { camera, sol, rovers } = action.payload
        draft.queryingBySol = action.payload
        // draft.queryingBySol.sol = sol
        // draft.queryingBySol.rovers = rovers
        // draft.queryingBySol.page = 1
        break
      case EnumActionType.SET_PAGE_PHOTOS:
        draft.queryingBySol.page++
        break
      default:
        break
    }
  },
  initialExpenseState
)
