import './globals.css'
import type { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import CartContextContainer from '@/components/AppContainer'

export const metadata: Metadata = {
  title: 'Pet Shop - La mejor tienda online para productos de mascotas',
  description: 'Pet Shop es una demostración de un sitio e-commerce construido con Next.js, Stripe Checkout, Auth0, etc., ofreciendo una amplia gama de productos de alta calidad para tus mascotas.',
  keywords: 'Pet Shop, productos para mascotas, tienda online, perros, gatos, camas para mascotas, comida para mascotas, alimento para mascotas, alimento para perros, alimento para gatos, transportadoras para mascotas, Next.js, Stripe Checkout, Auth0, React, TypeScript, Tailwind CSS',
  robots: 'index,follow'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <UserProvider>
        <CartContextContainer children={children} />
      </UserProvider>
    </html>
  )
}
