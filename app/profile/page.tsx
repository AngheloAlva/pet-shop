'use client'

import React, { use, useEffect } from 'react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { getUser } from '@/api/api'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import type { User } from '@/interfaces/interfaces'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XVI, Metropolitana } from '@/data/comunasArray'

const ProfilePage = (): JSX.Element => {
  const [userDb, setUserDb] = React.useState<User>({})
  const [isApartment, setIsApartment] = React.useState<boolean>(false)
  const [comunas, setComunas] = React.useState<string[]>([])
  const { user } = useUser()

  useEffect(() => {
    void getUser(user?.sub as string)
      .then((res) => { setUserDb(res) })
  }, [])

  const handleRegion = (region: string): void => {
    switch (region) {
      case 'I':
        setComunas(I)
        break
      case 'II':
        setComunas(II)
        break
      case 'III':
        setComunas(III)
        break
      case 'IV':
        setComunas(IV)
        break
      case 'V':
        setComunas(V)
        break
      case 'VI':
        setComunas(VI)
        break
      case 'VII':
        setComunas(VII)
        break
      case 'VIII':
        setComunas(VIII)
        break
      case 'IX':
        setComunas(IX)
        break
      case 'X':
        setComunas(X)
        break
      case 'XI':
        setComunas(XI)
        break
      case 'XII':
        setComunas(XII)
        break
      case 'XIV':
        setComunas(XIV)
        break
      case 'XV':
        setComunas(XV)
        break
      case 'XVI':
        setComunas(XVI)
        break
      case 'RM':
        setComunas(Metropolitana)
        break
      default:
        setComunas([])
    }
  }

  return (
    <div className='mx-5 my-6 min-h-[80vh]'>
      <h1 className='text-xl font-semibold'>
        Bienvenido {user?.name}
      </h1>
      <Tabs>
        <TabsList>
          <TabsTrigger value='personal-info'>Datos Personales</TabsTrigger>
          <TabsTrigger value='history'>Historial</TabsTrigger>
          <TabsTrigger value='payment-methods'>Metodos de pago</TabsTrigger>
          <TabsTrigger value='directions'>Direcciones</TabsTrigger>
        </TabsList>
        <TabsContent value='personal-info'>
          <div className='border-2 rounded-lg py-2 px-3'>
            <div className='grid grid-cols-2 gap-x-3 mt-2'>
              <Label htmlFor='name'>Nombre</Label>
              <Label htmlFor='lastname'>Apellido</Label>
              <Input id='name' value={userDb.name} />
              <Input id='lastname' value={userDb.lastName} />
            </div>
            <Label htmlFor='email'>Correo</Label>
            <Input id='email' value={userDb.email} disabled />
            <div className='grid grid-cols-2 gap-x-3 mt-2'>
              <Label htmlFor='rut'>RUT</Label>
              <Label htmlFor='phone'>Telefono</Label>
              <Input id='rut' value={userDb.RUT} />
              <Input id='phone' value={userDb.phone} />
            </div>

            <Separator className='my-4' />

            <h3 className='font-semibold'>Direccion</h3>
            <Label htmlFor='address'>Calle</Label>
            <Input id='address' value={userDb.address?.street} />
            <Label htmlFor='number'>Numero</Label>
            <Input id='number' value={userDb.address?.number} />
            <Label htmlFor='region'>Region</Label>
            <Select onValueChange={handleRegion}>
              <SelectTrigger className='mt-3'>
                <SelectValue>
                  {userDb.address?.region}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='I'>I Tarapacá</SelectItem>
                <SelectItem value='II'>II Antofagasta</SelectItem>
                <SelectItem value='III'>III Atacama</SelectItem>
                <SelectItem value='IV'>IV Coquimbo</SelectItem>
                <SelectItem value='V'>V Valparaiso</SelectItem>
                <SelectItem value='VI'>VI Libertador General Bernardo O'Higgins</SelectItem>
                <SelectItem value='VII'>VII Maule</SelectItem>
                <SelectItem value='VIII'>VIII Biobio</SelectItem>
                <SelectItem value='IX'>IX Araucania</SelectItem>
                <SelectItem value='X'>X Los Lagos</SelectItem>
                <SelectItem value='XI'>XI Aysen</SelectItem>
                <SelectItem value='XII'>XII Magallanes y Antartica</SelectItem>
                <SelectItem value='XIV'>XIV Los Rios</SelectItem>
                <SelectItem value='XV'>XV Arica y Parinacota</SelectItem>
                <SelectItem value='XVI'>XVI Ñuble</SelectItem>
                <SelectItem value='RM'>Region Metropolitana</SelectItem>
              </SelectContent>
            </Select>
            <Label htmlFor='comuna'>Comuna</Label>
            <Select>
              <SelectTrigger className='mt-3'>
                <SelectValue>
                  {userDb.address?.comuna}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className='max-h-96 overflow-y-scroll'>
                {
                  comunas.map((comuna) => (
                    <SelectItem key={comuna} value={comuna}>
                      {comuna}
                    </SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
            <div className=''>
              <Checkbox className='mr-2 my-3' id='is-apartment' onClick={() => { setIsApartment(!isApartment) }} />
              <Label htmlFor='is-aparment'>¿Departamento?</Label>
            </div>
            {
              isApartment && (
                <>
                  <Label htmlFor='aparment-number'>Numero de Dpto</Label>
                  <Input id='aparment-number' value={userDb.address?.apartamentNumber} />
                </>
              )
            }
            <Label htmlFor='zip-code'>Codigo Postal</Label>
            <Input id='zip-code' value={userDb.address?.zipCode} />

            <Button className='my-5 w-full text-base bg-[--accent-200] text-[--bg-100] font-bold hover:bg-[--accent-100] transition-all hover:text-[--text-200]' >
              Guardar
            </Button>
          </div>
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

export default withPageAuthRequired(ProfilePage)
