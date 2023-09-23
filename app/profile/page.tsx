'use client'

import React, { useEffect } from 'react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import { getUser } from '@/api/api'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import PersonalInfo from '@/components/profile/Personal-info'

import type { User } from '@/interfaces/interfaces'
import ProductManagement from '@/components/profile/Admin-Products'

const ProfilePage = (): JSX.Element => {
  const [userDb, setUserDb] = React.useState<User>({})
  const { user } = useUser()

  useEffect(() => {
    void getUser(user?.sub as string)
      .then((res) => { setUserDb(res) })
  }, [])

  return (
    <>
      {
        userDb?.role === 'USER_ROLE'
          ? (
            <div>
              <h2 className='bg-[--accent-200] text-xl font-semibold text-[--bg-100]'>
                MODO ADMINISTRADOR
              </h2>
              <Tabs defaultValue='products' className='mx-5 my-5'>
                <TabsList>
                  <TabsTrigger value='products'>Productos</TabsTrigger>
                  <TabsTrigger value='categories'>Categorias</TabsTrigger>
                  <TabsTrigger value='brands'>Marcas</TabsTrigger>
                </TabsList>
                <TabsContent value='products'>
                  <ProductManagement />
                </TabsContent>
                <TabsContent value='categories'>

                </TabsContent>
                <TabsContent value='brands'>

                </TabsContent>
              </Tabs>
            </div>
            )
          : (
            <div className='mx-5 my-6 min-h-[80vh]'>
              <h1 className='text-xl font-semibold'>
                Bienvenido {user?.name}
              </h1>
              <Tabs defaultValue='personal-info'>
                <TabsList>
                  <TabsTrigger value='personal-info'>Datos Personales</TabsTrigger>
                  <TabsTrigger value='history'>Historial</TabsTrigger>
                  <TabsTrigger value='payment-methods'>Metodos de pago</TabsTrigger>
                </TabsList>
                <TabsContent value='personal-info'>
                  <PersonalInfo user={userDb} />
                </TabsContent>
                <TabsContent value='history'>

                </TabsContent>
                <TabsContent value='payment-history'>

                </TabsContent>
                <TabsContent value='directions'>

                </TabsContent>
              </Tabs>
            </div>
            )
      }
    </>
  )
}

export default withPageAuthRequired(ProfilePage)
