import './globals.css'
import type { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import CartContextContainer from '@/components/AppContainer'

export const metadata: Metadata = {
  title: 'Pet Shop',
  description: 'Pet Shop is a demo e-commerce site built with Next.js, Stripe Checkout, Auth0, etc.'
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
