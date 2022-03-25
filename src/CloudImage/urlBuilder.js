
const BASE_URL = 'res.cloudinary.com'
const PATH = 'image/upload'
const CLOUD_NAME = 'dx3ld2x6k'

export const UrlFor = (publicId) =>{
  return `//${BASE_URL}/${CLOUD_NAME}/${PATH}/${publicId}`    
}