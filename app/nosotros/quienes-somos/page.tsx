import Image from 'next/image'
import React from 'react'

const page = (): JSX.Element => {
  return (
    <main className='my-7 mx-5 flex flex-col md:mx-20 lg:mx-[15vw] 2xl:mx-[25vw]'>
      <section className='flex flex-col gap-5 items-center sm:flex-row sm:items-start text-right'>
        <div>
          <h1 className='text-xl font-bold'>SOBRE PET SHOP</h1>
          <p>Somos Tienda Online y Física especialistas en la venta de productos para Mascotas siendo la tienda online N°1 en Chile, con más de 5 años ofreciendo todo para tus Mascotas.</p>
        </div>
        <Image src={'/imgs/petshop-cat-dog.png'} alt='Dog image' width={300} height={300} className='rounded-sm w-1/2' />
      </section>
      <section className='flex flex-col gap-5 items-center sm:flex-row-reverse sm:items-start mt-14 text-left'>
        <div>
          <h2 className='text-lg font-bold'>PASION POR LOS ANIMALES</h2>
          <p>Somos un equipo dedicado de amantes de los animales y entusiastas de los peludos de todas las formas y tamaños. Nuestra misión es proporcionarte un espacio donde puedas encontrar todo lo necesario para satisfacer las necesidades y mimar a tus queridas mascotas.</p>
        </div>
        <Image src={'/imgs/petshop-cat.png'} alt='Dog image' width={300} height={300} className='rounded-sm w-1/2' />
      </section>
      <section className='flex flex-col gap-5 items-center sm:flex-row sm:items-start mt-14 text-right'>
        <div>
          <h2 className='text-lg font-bold'>PRODUCTOS</h2>
          <p>En Pet Shop, nos enorgullece ofrecerte una amplia gama de productos de alta calidad y marcas reconocidas que han sido cuidadosamente seleccionados para garantizar la satisfacción tanto de tus mascotas como de ti. Desde alimentos nutritivos y deliciosos hasta juguetes interactivos, camas acogedoras, accesorios de moda y productos de cuidado personal, ¡lo tenemos todo!</p>
        </div>
        <Image src={'/imgs/petshop-dog.png'} alt='Dog image' width={300} height={300} className='rounded-sm w-1/2' />
      </section>
    </main>
  )
}

export default page
