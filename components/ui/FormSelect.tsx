import React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Props {
  field: string
  value: string
  list: Array<{
    _id: string
    name: string
  }>
  handleFilterChange: (filterName: string, filterValue: string) => void
}

export const FormSelect = ({ field, value, list, handleFilterChange }: Props): JSX.Element => {
  return (
    <Select required value={value} onValueChange={(e) => { handleFilterChange(field, e) }}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {
          list.map((item, index) => (
            <SelectItem value={item._id} key={index}>
              {item.name}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}
