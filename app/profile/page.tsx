'use client'

import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import PersonalInfo from '@/components/profile/Personal-info'
import { useUserDB } from '@/hooks/useUserDB'
import OrdersHistory from '@/components/profile/Orders-history'

const ProfilePage = (): JSX.Element => {
  const { user } = useUserDB()

  if (user == null) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='mx-5 my-6 min-h-[80vh] md:mx-20 lg:mx-[15vw] 2xl:mx-[20vw]'>
        <h1 className='text-xl font-semibold'>
          Bienvenido {user.name}
        </h1>
        <Tabs defaultValue='personal-info'>
          <TabsList className='bg-[--bg-200]'>
            <TabsTrigger value='personal-info'>Datos Personales</TabsTrigger>
            <TabsTrigger value='history'>Historial</TabsTrigger>
          </TabsList>
          <TabsContent value='personal-info' className='bg-[--bg-200] boder-[--bg-300] rounded-md'>
            <PersonalInfo user={user} />
          </TabsContent>
          <TabsContent value='history'>
            <OrdersHistory user={user} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default withPageAuthRequired(ProfilePage)
