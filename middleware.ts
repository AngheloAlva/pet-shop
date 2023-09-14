import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  ignoredRoutes: [
    '/',
    '/peluqueria',
    '/veterinaria',
    '/tiendas',
    '/tienda/nunoa',
    '/tienda/santiago-centro',
    '/product/:id',
    '/category/:id',
    '/brand/:id'
  ]
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
