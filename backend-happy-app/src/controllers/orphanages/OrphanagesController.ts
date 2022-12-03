import { Request, Response } from 'express';
import { orphanageRepository } from '../../repositories/orphanageRepository';
import { BodyTypes } from './types';
import orphanages_view from '../../views/orphanages_view'
import * as Yup from 'yup'

export class OrphanageController {

  async show(req: Request, res: Response) {
    
    try{
      const { id } = req.params
      const orphanage = await orphanageRepository.findOneOrFail({
        where: {id: Number(id)},
        relations: ['images']
    })
      
      if(!orphanage) {
        throw new Error('Orfanato não encontrado.')
      }
      
      return res.status(200).json(orphanages_view.render(orphanage))
    }catch(error: any) {
      return res.status(404).json({ message: error.message })
    }
  }
  
  async index(req: Request, res: Response) {
    const orphanages = await orphanageRepository.find({
      relations: ['images']
    })

    return res.status(200).json(orphanages_view.renderMany(orphanages))
  }
  
  async create(req: Request, res: Response) {
    
    const { 
      name,
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours 
    } = req.body as BodyTypes

    const reqImages = req.files as Express.Multer.File[]

    const images = reqImages.map(image => {
      return {
        path: image.filename
      }
    })

    const data = {
      name,
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
      images
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      latitude: Yup.string().required(),
      longitude: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      opening_hours: Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false
    })
  
    const orphanage = orphanageRepository.create(data)
  
    await orphanageRepository.save(orphanage)
    
    return res.status(201).json(orphanage)
  }
}