import React from 'react'
import proyects from "@/helpers/proyects.helpers"
import Link from 'next/link'

const Proyects = () => {
  const proyectos = proyects
  return (
    <div className='bg-primaryColor flex flex-col items-center p-16'>
      <h1 className='text-2xl font-bold text-white mb-8'>Proyectos</h1>
      <div className='grid grid-cols-4 gap-4'>
        {
          proyectos && proyectos.map((proyect)=>{
            return(
              <Link href={proyect.url}> 
                <div className='bg-white rounded-lg overflow-hidden hover:cursor-pointer' key={proyect.id}>
                  <div className='w-full h-44 overflow-hidden'>
                      <img src={proyect.imgProyect} alt={`img-${proyect.name}`} />
                  </div>
                  <div className='h-60 relative flex flex-col'>
                      <h3 className='self-center font-bold text-2xl uppercase mt-6'>{proyect.name}</h3>
                      <div className='h-full p-4 flex flex-col overflow-y-auto'>
                          <p className='text-justify'>{proyect.miniDescription}</p>
                          <div className='w-16 h-16 absolute flex justify-center -top-[2.5rem] left-1/2 transform -translate-x-1/2 bg-white rounded-full overflow-hidden'>
                              <img src={proyect.imgDev} alt="logoDev" />
                          </div>
                      </div>
                  </div>
                </div>
             </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Proyects