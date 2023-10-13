'use client'

import React from 'react'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from '@/components/ui/toaster'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin-ext']
})

const AppContainer = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <CartProvider>
      <body className={nunitoSans.className}>
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </CartProvider>
  )
}

export default AppContainer
