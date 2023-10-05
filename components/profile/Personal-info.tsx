import React, { useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

import { regiones } from '@/data/comunasArray'
import type { User } from '@/interfaces/interfaces'

import { updateUser } from '@/api/user'
import { useToast } from '../ui/use-toast'

interface PersonalInfoProps {
  user: User
}

const PersonalInfo = ({ user }: PersonalInfoProps): JSX.Element => {
  const { toast } = useToast()

  const [isApartment, setIsApartment] = React.useState<boolean>(user.address?.isApartment)
  const [listComunas, setListComunas] = React.useState<string[]>([])
  const [region, setRegion] = React.useState<string>('')
  const [comuna, setComuna] = React.useState<string>('')

  useEffect(() => {
    setRegion(((user?.address?.region)?.length > 0) ? user.address.region : 'Seleccione una region')
    setComuna(((user?.address?.comuna)?.length > 0) ? user.address.comuna : 'Seleccione una comuna')
  }, [user?.address?.region, user?.address?.comuna])

  const handleRegion = (region: string): void => {
    setRegion(region)
    setListComunas(regiones[region])
  }

  const handleComuna = (comuna: string): void => {
    setComuna(comuna)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      await updateUser({
        id: user.id,
        name: (document.getElementById('name') as HTMLInputElement)?.value,
        lastName: (document.getElementById('lastname') as HTMLInputElement)?.value,
        RUT: (document.getElementById('rut') as HTMLInputElement)?.value,
        phone: (document.getElementById('phone') as HTMLInputElement)?.value,
        address: {
          street: (document.getElementById('address') as HTMLInputElement)?.value,
          number: parseInt((document.getElementById('number') as HTMLInputElement)?.value),
          region,
          comuna,
          isApartment,
          apartamentNumber: parseInt((document.getElementById('aparment-number') as HTMLInputElement)?.value),
          zipCode: parseInt((document.getElementById('zip-code') as HTMLInputElement)?.value)
        }
      })

      toast({
        title: 'Datos actualizados',
        description: 'Se han actualizado los datos correctamente',
        duration: 3000
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se han podido actualizar los datos',
        variant: 'destructive',
        duration: 3000
      })
    }
  }

  return (
    <>
      {
        user?.email?.length > 0
          ? (
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            <form className='border-2 rounded-lg py-2 px-3' onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-x-3 mt-2'>
                <Label htmlFor='name'>Nombre</Label>
                <Label htmlFor='lastname'>Apellido</Label>
                <Input id='name' defaultValue={user.name} />
                <Input id='lastname' defaultValue={user.lastName} required />
              </div>
              <Label htmlFor='email'>Correo</Label>
              <Input id='email' defaultValue={user.email} disabled required />
              <div className='grid grid-cols-2 gap-x-3 mt-2'>
                <Label htmlFor='rut'>RUT</Label>
                <Label htmlFor='phone'>Telefono</Label>
                <Input id='rut' defaultValue={user.RUT} required />
                <Input id='phone' defaultValue={user.phone} required />
              </div>

              <Separator className='my-4' />

              <h3 className='font-semibold'>Direccion</h3>
              <div className='grid grid-cols-3 gap-x-3 mt-2'>
                <Label htmlFor='address' className='col-span-2'>Calle</Label>
                <Label htmlFor='number'>Numero</Label>
                <Input id='address' defaultValue={user.address?.street} className='col-span-2' required />
                <Input id='number' defaultValue={user.address?.number} required />

              </div>
              <Label htmlFor='region'>Region</Label>
              <Select onValueChange={handleRegion} required>
                <SelectTrigger className='mt-3'>
                  <SelectValue placeholder={region} />
                </SelectTrigger>
                <SelectContent className='max-h-96 overflow-y-scroll'>
                  <SelectItem value='I Tarapacá'>I Tarapacá</SelectItem>
                  <SelectItem value='II Antofagasta'>II Antofagasta</SelectItem>
                  <SelectItem value='III Atacama'>III Atacama</SelectItem>
                  <SelectItem value='IV Coquimbo'>IV Coquimbo</SelectItem>
                  <SelectItem value='V Valparaiso'>V Valparaiso</SelectItem>
                  <SelectItem value="VI Libertador General Bernardo O'Higgins">VI Libertador General Bernardo O'Higgins</SelectItem>
                  <SelectItem value='VII Maule'>VII Maule</SelectItem>
                  <SelectItem value='VIII Biobio'>VIII Biobio</SelectItem>
                  <SelectItem value='IX Araucania'>IX Araucania</SelectItem>
                  <SelectItem value='X Los Lagos'>X Los Lagos</SelectItem>
                  <SelectItem value='XI Aysen'>XI Aysen</SelectItem>
                  <SelectItem value='XII Magallanes y Antartica'>XII Magallanes y Antartica</SelectItem>
                  <SelectItem value='XIV Los Rios'>XIV Los Rios</SelectItem>
                  <SelectItem value='XV Arica y Parinacota'>XV Arica y Parinacota</SelectItem>
                  <SelectItem value='XVI Ñuble'>XVI Ñuble</SelectItem>
                  <SelectItem value='Region Metropolitana'>Region Metropolitana</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor='comuna'>Comuna</Label>
              <Select onValueChange={handleComuna} required>
                <SelectTrigger className='mt-3'>
                  <SelectValue placeholder={comuna} />
                </SelectTrigger>
                <SelectContent className='max-h-96 overflow-y-scroll'>
                  {
                    listComunas.map((comuna) => (
                      <SelectItem key={comuna} value={comuna}>
                        {comuna}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <div className='flex items-center gap-2 mt-3 mb-1 ml-1'>
                <Checkbox id='isApartment' className='-mt-2' onClick={() => { setIsApartment(!isApartment) }} checked={isApartment} />
                <Label htmlFor='isAparment'>¿Departamento?</Label>
              </div>
              {
                isApartment && (
                  <>
                    <Label htmlFor='aparmentNumber'>Numero de Dpto</Label>
                    <Input id='aparmentNumber' value={user.address?.apartamentNumber} required={isApartment} />
                  </>
                )
              }
              <Label htmlFor='zipCode'>Codigo Postal</Label>
              <Input id='zipCode' defaultValue={user.address?.zipCode} />

              <Button type='submit' className='my-5 w-full text-base bg-[--accent-200] text-[--bg-100] font-bold hover:bg-[--accent-100] transition-all hover:text-[--text-200]' >
                Guardar
              </Button>
            </form>
            )
          : (
            <div className='flex py-10 px-14'>
              <p className='text-lg font-semibold text-center'>
                No se pudo cargar la informacion del usuario
              </p>
            </div>
            )
      }
    </>
  )
}

export default PersonalInfo
