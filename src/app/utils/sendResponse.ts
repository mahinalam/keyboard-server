import { Response } from 'express'

interface ISendResponse<T> {
  statusCode: number
  success: boolean
  statusCodeNumber: number
  message?: string
  data: T
}

const sendResponse = <T>(res: Response, data: ISendResponse<T>) => {
  res.status(data.statusCodeNumber).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  })
}

export default sendResponse
