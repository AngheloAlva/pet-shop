import type { SimpleUser, User, UserUpdate } from '@/interfaces/interfaces'
import axios from 'axios'

const postUser = async (user: SimpleUser): Promise<{ msg: string }> => {
  try {
    const response = await axios.post('http://localhost:3001/users', user)
    return response.data.msg
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getUser = async (id: string): Promise<{ msg: string, user: User }> => {
  try {
    const response = await axios(`http://localhost:3001/users/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const updateUser = async (user: UserUpdate): Promise<{ msg: string, user: User }> => {
  try {
    const response = await axios.put(`http://localhost:3001/users/${user.id}`, user)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export {
  postUser,
  getUser,
  updateUser
}
