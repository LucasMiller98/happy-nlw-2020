import { Router } from 'express'
import multer from 'multer'
import { OrphanageController } from '../controllers/orphanages/OrphanagesController'
import uploadConfig from '../config/upload'

const routes = Router()
const uploads = multer(uploadConfig)

routes.get('/orphanages/:id', new OrphanageController().show)
routes.get('/orphanages', new OrphanageController().index)
routes.post('/orphanages', uploads.array('images'),new OrphanageController().create)

export default routes