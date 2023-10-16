import React, { useEffect } from 'react'
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

import { postUser } from '@/apiRequest/user'

const UserDropdown = (): JSX.Element => {
  const { user } = useUser()

  useEffect(() => {
    if (user === undefined) return

    const newUser = {
      id: user.sub ?? '',
      name: user.name ?? '',
      email: user.email ?? ''
    }

    void postUser(newUser)
  }, [user])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaCircleUser className='text-3xl text-[--bg-100] cursor-pointer p-[.1rem] rounded-full border-[--bg-100] border-2 hover:text-[--bg-200] hover:border-[--bg-200] transition-colors sm:text-4xl' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          user === undefined
            ? ''
            : (
                <>
                  <DropdownMenuLabel className='text-[--text-200] md:text-lg'>
                    <div className='flex gap-2 items-center'>
                      <img src={user.picture ?? ''} alt={`Foto de perfil de ${user.nickname}` ?? ''} className='rounded-full w-7' />
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
                <Link href="/api/auth/login" className='flex gap-2 items-center text-[--text-200] hover:text-[--accent-200] transition-all w-full md:text-lg'>
                  <FaUser className='-mt-[.2rem] md:-mt-[.1rem] lg:-mt-0' />
                  <p>Iniciar Sesion</p>
                </Link>
              </DropdownMenuItem>
              )
            : (
              <>
                <DropdownMenuItem>
                  <Link href="/profile" className='flex gap-2 md:gap-3 text-[--text-200] items-center hover:text-[--accent-200] transition-all w-full md:text-lg'>
                    <FaUser className='-mt-[.15rem] md:-mt-[.05rem] lg:-mt-0' />
                    <p>Perfil</p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/api/auth/logout" className='flex gap-2 md:gap-3 items-center text-[--text-200] hover:text-[--accent-200] transition-all w-full md:text-lg'>
                    <FaArrowRightFromBracket className='-mt-[.15rem] md:-mt-[.05rem] lg:-mt-0' />
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
