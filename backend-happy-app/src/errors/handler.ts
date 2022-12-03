import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if(error instanceof ValidationError) {

    return res.status(400).json({ message: 'Validation Fails' })
  }
  
  console.error(error)

  return res.status(500).json({ message: 'Internal Server Error.' })
}