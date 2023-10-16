import type { SimpleUser, User, UserUpdate } from '@/interfaces/interfaces'
import axios from 'axios'

const postUser = async (user: SimpleUser): Promise<{ msg: string }> => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/users`, user)
    return response.data.msg
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

const getUser = async (id: string): Promise<{ msg: string, user: User[] }> => {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/users/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

const updateUser = async (user: UserUpdate): Promise<{ msg: string, user: User }> => {
  try {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_PET_SHOP_SERVER_URL}/users/${user.id}`, user)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error()
  }
}

export {
  postUser,
  getUser,
  updateUser
}
