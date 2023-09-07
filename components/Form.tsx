import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from './ui/select'
import { SelectValue } from '@radix-ui/react-select'

interface FormProps {
  service: string
}

const Form = ({ service }: FormProps): JSX.Element => {
  const [date, setDate] = React.useState<Date | Date[]>()
  const [popoverOpen, setPopoverOpen] = React.useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <form className='w-5/6 border-2 rounded-lg border-t-4 border-t-[--accent-200] flex flex-col gap-4 px-7 py-7 mx-auto'>
        <h3 className='text-[--accent-200]'>INFORMACION PERSONAL</h3>
        <div className='flex gap-4 w-full justify-between my-4'>
          <div className='flex gap-4 flex-col w-1/2'>
            <div className='flex gap-2'>
              <div>
                <Label htmlFor='date' className='flex items-center gap-1'>
                  Fecha
                </Label>
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                  <PopoverTrigger asChild id='date'>
                    <Button variant={'outline'} className='w-48'>
                      {
                        date instanceof Date
                          ? date.toLocaleDateString()
                          : 'Seleccione una fecha'
                      }
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      disabled={(date) => date < new Date()}
                      initialFocus
                      onDayClick={(day) => {
                        setDate(day)
                        setPopoverOpen(false)
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor='hora' className='flex items-center gap-1'>
                  Hora
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='11:00' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='11'>11:00</SelectItem>
                      <SelectItem value='12'>12:00</SelectItem>
                      <SelectItem value='13'>13:00</SelectItem>
                      <SelectItem value='14'>14:00</SelectItem>
                      <SelectItem value='15'>15:00</SelectItem>
                      <SelectItem value='16'>16:00</SelectItem>
                      <SelectItem value='17'>17:00</SelectItem>
                      <SelectItem value='18'>18:00</SelectItem>
                      <SelectItem value='19'>19:00</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor='nombre' className='flex items-center gap-1'>
                Nombre
              </Label>
              <Input id='nombre' type='text' />
            </div>
            <div>
              <Label htmlFor='servicio' className='flex items-center gap-1'>
                Elija el servicio
              </Label>
              <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={service === 'veterinaria' ? 'Consulta' : 'Peluqueria'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {
                        service === 'veterinaria'
                          ? <SelectItem value='consulta'>Consulta</SelectItem>
                          : <SelectItem value='peluqueria'>Peluqueria</SelectItem>
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
            </div>
            <div>
              <Label htmlFor='telefono' className='flex items-center gap-1'>
                Telefono (fijo o celular)
              </Label>
              <Input id='telefono' type='tel' />
            </div>
            <div>
              <Label htmlFor='email' className='flex items-center gap-1'>
                Email
              </Label>
              <Input id='email' type='email' />
            </div>
          </div>

          <div className="flex gap-4 flex-col w-1/2">
            <div>
              <Label htmlFor='Nombre Mascota' className='flex items-center gap-1'>
                Nombre de Mascota
              </Label>
              <Input id='Nombre Mascota' autoComplete='none' type='text' />
            </div>
            <div>
              <Label htmlFor='Apellido' className='flex items-center gap-1'>
                Apellido
              </Label>
              <Input id='Apellido' type='text' />
            </div>
            <div>
              <Label htmlFor='tamaño' className='flex items-center gap-1'>
                Tamaño de Mascota
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='11'>Pequeño</SelectItem>
                    <SelectItem value='12'>Mediano</SelectItem>
                    <SelectItem value='13'>Grande</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className='h-[3.875rem]' />

            <div>
              <Label htmlFor='email-repeat' className='flex items-center gap-1'>
                Repetir Email
              </Label>
              <Input id='email-repeat' type='email' />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <button
            type='submit'
            onClick={onSubmit}
            className='bg-[--accent-200] text-[--bg-100] py-2 px-3 rounded-md transition-all hover:bg-[--accent-100] hover:text-[--text-100]'
          >
            Registrar
          </button>
        </div>
    </form>
  )
}

export default Form
