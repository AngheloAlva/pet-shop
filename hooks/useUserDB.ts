import { getUser } from '@/apiRequest/user'
import type { User } from '@/interfaces/interfaces'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useEffect, useState } from 'react'

export const useUserDB = (): { user: User | undefined } => {
  const { user } = useUser()
  const [userDB, setUserDB] = useState<User>()

  useEffect(() => {
    const getUserDB = async (): Promise<void> => {
      const userDB = await getUser(user?.sub ?? '')
      setUserDB(userDB.user[0])
    }

    if (user != null) {
      void getUserDB()
    }
  }, [user])

  return { user: userDB }
}
