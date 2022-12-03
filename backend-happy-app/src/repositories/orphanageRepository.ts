import { AppDataSource } from '../data-source'
import { Orphanage } from '../models/Orphanage'

export const orphanageRepository = AppDataSource.getRepository(Orphanage)