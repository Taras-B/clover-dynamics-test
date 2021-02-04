import axios from 'axios'
const API_KEY = 'Zd94Z85x0leoVo5TRLGzd4EaDF8NRNhVtmZL4YPC'

const instance = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
})

interface IDataPhotos {
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

interface IGetResult {
  photos: IDataPhotos[]
}

export const API = {
  get(rover: string, sol: number, camera: string): Promise<IGetResult> {
    return instance
      .get<IGetResult>(`${rover}/photos?sol=${sol}&camera=${camera}&API_KEY=${API_KEY}`)
      .then((res) => res.data)
  },
}
