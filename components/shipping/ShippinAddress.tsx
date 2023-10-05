import React, { useEffect } from 'react'

import PersonalInfo from '@/components/profile/Personal-info'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const ShippinAddress = ({ user, onAddressChange }): JSX.Element => {
  useEffect(() => {
    if (user?.address?.street !== undefined) {
      onAddressChange(true)
    }
  }, [user?.address?.street])

  return (
    <div className='border-2 rounded-sm p-4 mt-2 bg-[--bg-200] border-[--bg-300]'>
      {
        user?.address?.region === undefined
          ? (
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Aun no tienes una direccion de envio</p>
                <Dialog>
                  <DialogTrigger>
                    <button className='border-2 rounded-sm px-3 border-[--bg-300] bg-[--bg-100] py-1 my-3 w-full'>
                      Agregar direccion
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Agregar direccion
                      </DialogTitle>
                    </DialogHeader>
                    <PersonalInfo user={user} />
                  </DialogContent>
                </Dialog>
              </div>
            )
          : (
            <>
              <h2 className='text-lg font-semibold'>Datos de envio</h2>
              <div className='flex flex-col gap-2 mt-2'>
                <p className='font-semibold'>Nombre: {user.name} {user.lastName}</p>
                <p className='font-semibold'>Email: {user.email}</p>
                <p className='font-semibold'>Telefono: {user.phone}</p>
                <p className='font-semibold'>Direccion:</p>
                <p className='font-semibold ml-4'>Comuna: {user.address?.comuna}</p>
                <p className='font-semibold ml-4'>Region: {user.address?.region}</p>
                <p className='font-semibold ml-4'>Calle: {user.address?.street} {user.address?.number}</p>
                <p className='font-semibold ml-4'>Codigo postal: {user.address?.zipCode}</p>
              </div>
            </>
            )
      }
    </div>
  )
}

export default ShippinAddress
