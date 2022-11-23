import { React} from 'react'

const Home = () => {
    return (
      <section className='bg-gray-200' >
           <div className=' custom-img contrast-125  saturate-150' >
          <div className='block p-6  text-white text-center bg-stone-900 bg-opacity-50  ' >
            <p className=' underline border-b-teal-500 text-white text-5xl dark:text-white' >Bienvenido a SITEC</p>    
            <br/>      
            <p className='p-4 text-2xl ' >Informacion de Contacto</p>
            <br/>      
            <p className='p-4 text-2xl'>Wenceslao Tejerina Norte 783 - Villa Dalcar - Río Cuarto</p>
            <br/>      
            <p className='p-4 text-2xl'> Horarios de atención: De 9:00 a 13:00 y de 16:00 a 21:00 hs | Tel: (0358) 4643036</p>          
            <br/>      
            <p className='p-4 underline text-2xl '>informes@itecriocuarto.org.ar</p>
          </div>
          
          </div>                 
      </section>
    )
  }


export default Home