import { Image } from '../models/Images'

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.URL_IMAGES_UPLOADS}/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image))
  }
}