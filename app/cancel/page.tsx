'use client'

import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

const page = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center py-20 px-10 gap-20'>
      <h1 className='font-bold text-2xl text-[--text-200] text-center'>
        Lo sentimos, tu compra no se pudo completar
      </h1>
      <Link href={'/'} className='border-2 mb-32 my-16 rounded-sm px-7 py-2 font-semibold text-[--text-100] hover:bg-[--accent-100] transition-colors border-[--accent-100]'>
        Volver al inicio
      </Link>
    </div>
  )
}

export default withPageAuthRequired(page)
