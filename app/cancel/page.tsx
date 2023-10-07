'use client'

import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

const page = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center w-screen py-32'>
      <div className='flex flex-col items-center py-20 border-2 px-7 w-full mx-8 max-w-3xl rounded-sm border-[--bg-300] bg-[--bg-200] text-[--text-200]'>
        <h1 className='font-bold text-2xl text-center'>Lo sentimos, tu compra no se pudo completar</h1>

        <Link href='/' className='mt-10 border-2 border-[--accent-100] text-[--text-100] font-bold py-2 w-2/4 rounded-sm hover:bg-[--accent-100] hover:text-[--bg-100] text-base text-center transition-colors'>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default withPageAuthRequired(page)
