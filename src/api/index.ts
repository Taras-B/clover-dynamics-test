import axios from 'axios'
import { IDataRoverPhotos } from '../store/types'
const API_KEY = 'Zd94Z85x0leoVo5TRLGzd4EaDF8NRNhVtmZL4YPC'

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
})

interface IGetResult {
  photos: IDataRoverPhotos[]
}

export const roverAPI = {
  get(
    rover: string = 'curiosity',
    sol: number = 100,
    camera: string = 'fhaz'
  ): Promise<IGetResult> {
    return instance
      .get<IGetResult>(`${rover}/photos?sol=${sol}&camera=${camera}&API_KEY=${API_KEY}`)
      .then((res) => res.data)
  },
}
