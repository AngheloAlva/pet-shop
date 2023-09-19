import React from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

import { I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XVI, Metropolitana } from '@/data/comunasArray'
import type { User } from '@/interfaces/interfaces'

interface PersonalInfoProps {
  user: User
}

const PersonalInfo = ({ user }: PersonalInfoProps): JSX.Element => {
  const [isApartment, setIsApartment] = React.useState<boolean>(false)
  const [comunas, setComunas] = React.useState<string[]>([])

  const regiones = {
    I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XVI, RM: Metropolitana
  }

  const handleRegion = (region: string[]): void => {
    setComunas(regiones[region])
  }

  return (
    <div className='border-2 rounded-lg py-2 px-3'>
      <div className='grid grid-cols-2 gap-x-3 mt-2'>
        <Label htmlFor='name'>Nombre</Label>
        <Label htmlFor='lastname'>Apellido</Label>
        <Input id='name' value={user.name} />
        <Input id='lastname' value={user.lastName} />
      </div>
      <Label htmlFor='email'>Correo</Label>
      <Input id='email' value={user.email} disabled />
      <div className='grid grid-cols-2 gap-x-3 mt-2'>
        <Label htmlFor='rut'>RUT</Label>
        <Label htmlFor='phone'>Telefono</Label>
        <Input id='rut' value={user.RUT} />
        <Input id='phone' value={user.phone} />
      </div>

      <Separator className='my-4' />

      <h3 className='font-semibold'>Direccion</h3>
      <div className='grid grid-cols-3 gap-x-3 mt-2'>
        <Label htmlFor='address' className='col-span-2'>Calle</Label>
        <Label htmlFor='number'>Numero</Label>
        <Input id='address' value={user.address?.street} className='col-span-2' />
        <Input id='number' value={user.address?.number} />

      </div>
      <Label htmlFor='region'>Region</Label>
      <Select onValueChange={handleRegion}>
        <SelectTrigger className='mt-3'>
          <SelectValue>
            {user.address?.region}
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
            {user.address?.comuna}
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
            <Input id='aparment-number' value={user.address?.apartamentNumber} />
          </>
        )
      }
      <Label htmlFor='zip-code'>Codigo Postal</Label>
      <Input id='zip-code' value={user.address?.zipCode} />

      <Button className='my-5 w-full text-base bg-[--accent-200] text-[--bg-100] font-bold hover:bg-[--accent-100] transition-all hover:text-[--text-200]' >
        Guardar
      </Button>
    </div>
  )
}

export default PersonalInfo
