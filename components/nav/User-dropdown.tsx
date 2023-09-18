import React from 'react'
import Link from 'next/link'

import { useUser } from '@auth0/nextjs-auth0/client'
import { FaCircleUser, FaUser, FaArrowRightFromBracket } from 'react-icons/fa6'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

const UserDropdown = (): JSX.Element => {
  const { user } = useUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaCircleUser className='text-3xl text-[--bg-100] cursor-pointer p-[.1rem] rounded-full border-[--bg-100] border-2 hover:text-[--bg-200] hover:border-[--bg-200] transition-colors' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          user === undefined
            ? ''
            : (
                <>
                  <DropdownMenuLabel className='text-[--text-200]'>
                    <div className='flex gap-2 items-center'>
                      <img src={user.picture ?? ''} alt={`Foto de perfil de ${user.name}` ?? ''} className='rounded-full w-7' />
                      {user.name}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </>
              )
        }
        {
          user === undefined
            ? (
              <DropdownMenuItem>
                <Link href="/api/auth/login" className='flex gap-2 text-[--text-200] hover:text-[--accent-200] transition-all w-full'>
                  <FaUser />
                  <p>Iniciar Sesion</p>
                </Link>
              </DropdownMenuItem>
              )
            : (
              <>
                <DropdownMenuItem>
                  <Link href="/profile" className='flex gap-2 text-[--text-200] hover:text-[--accent-200] transition-all w-full'>
                    <FaUser />
                    <p>Perfil</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/api/auth/logout" className='flex gap-2 text-[--text-200] hover:text-[--accent-200] transition-all w-full'>
                    <FaArrowRightFromBracket />
                    <p>Cerrar Sesion</p>
                  </Link>
                </DropdownMenuItem>
              </>
              )
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
