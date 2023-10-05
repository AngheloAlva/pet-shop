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
import { useUserDB } from '@/hooks/useUser'

const ProfilePage = (): JSX.Element => {
  const { user } = useUserDB()

  return (
    <>
      <div className='mx-5 my-6 min-h-[80vh]'>
        <h1 className='text-xl font-semibold'>
          Bienvenido {user?.name}
        </h1>
        <Tabs defaultValue='personal-info'>
          <TabsList className='bg-[--bg-200]'>
            <TabsTrigger value='personal-info'>Datos Personales</TabsTrigger>
            <TabsTrigger value='history'>Historial</TabsTrigger>
            <TabsTrigger value='payment-methods'>Metodos de pago</TabsTrigger>
          </TabsList>
          <TabsContent value='personal-info' className='bg-[--bg-200] boder-[--bg-300] rounded-md'>
            <PersonalInfo user={user} />
          </TabsContent>
          <TabsContent value='history'>

          </TabsContent>
          <TabsContent value='payment-history' className='bg-[--bg-200] boder-[--bg-300] rounded-md'>

          </TabsContent>
          <TabsContent value='directions' className='bg-[--bg-200] boder-[--bg-300] rounded-md'>

          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default withPageAuthRequired(ProfilePage)
