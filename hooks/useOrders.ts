import getOrders from '@/api/order'
import { useEffect, useState } from 'react'
import type { Order, User } from '@/interfaces/interfaces'

interface UseOrders {
  userId: User['id'] | undefined
}

const useOrders = (
  { userId }: UseOrders
): { orders: { total: number, orders: Order[] } } => {
  const [orders, setOrders] = useState<{ total: number, orders: Order[] }>({ total: 0, orders: [] })

  useEffect(() => {
    const fetchOrders = async (): Promise<void> => {
      const response = await getOrders(userId ?? '')
      setOrders(response)
    }

    void fetchOrders()
  }, [])

  return { orders }
}

export default useOrders
