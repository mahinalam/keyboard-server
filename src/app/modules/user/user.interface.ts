/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export type TUserRole = keyof typeof USER_ROLE
export interface IUser {
  name: string
  email: string
  password: string
  phone: string
  address: string
  role: TUserRole
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
  status?: string
}

export interface ILoginUser {
  email: string
  password: string
}
export interface UserModel extends Model<IUser> {
  isUserExists(email: string): Promise<IUser>
  isUserDeleted(email: string): Promise<boolean>
  isPasswordMatched(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>
}
