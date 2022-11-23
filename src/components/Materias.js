import { list } from 'postcss'
import React from 'react'

const MateriasItec = () => {
    let materias = [
        {
        Nombre: "Matemática y Logica",
        Anio: "1.ero",
        Docente: "Bunader Pablo",
        Codigo: 1,
        Correlatividades: "-",
        },
        {
        Nombre: "Sistemas y Organizaciones",
        Anio: "1.ero",
        Docente: "Muños María José",
        Codigo: 2,
        Correlatividades: "-",
        },
        {
        Nombre: "Arquitectura de las Computadoras",
        Anio: "1.ero",
        Docente: "Sosa Jorge",
        Codigo: 3,
        Correlatividades: "-",
        },
        {
        Nombre: "Programación 1",
        Anio: "1.ero",
        Docente: "Kaniefsky Pablo",
        Codigo: 4,
        Correlatividades: "-",
        },
        {
        Nombre: "Inglés",
        Anio: "1.ero",
        Docente: "Lemo Pedro",
        Codigo: 5,
        Correlatividades: "-",
        },
        {
        Nombre: "Lengua y Comunicación",
        Anio: "1.ero",
        Docente: "Pomini Ariadna",
        Codigo: 6,
        Correlatividades: "-",
        },
        {
        Nombre: "Sistemas Operativos",
        Anio: "2.do",
        Docente: "Sosa Jorge",
        Codigo: 7,
        Correlatividades: 3,
        },
        {
        Nombre: "Matemática Aplicada",
        Anio: "2.do",
        Docente: "Sosa Jorge",
        Codigo: 8,
        Correlatividades: 1,
        },
        {
        Nombre: "Modelado de Sistemas",
        Anio: "2.do",
        Docente: "Moragues Egle",
        Codigo: 9,
        Correlatividades: "2-6",
        },
        {
        Nombre: "Programción 2",
        Anio: "2.do",
        Docente: "Sambrenil Mauricio",
        Codigo: 10,
        Correlatividades: 4,
        },
        {
        Nombre: "Bases de Datos",
        Anio: "2.do",
        Docente: "Bunader Pablo",
        Codigo: 11,
        Correlatividades: 4,
        },
        {
        Nombre: "Práctica Profesionalizante 1",
        Anio: "2.do",
        Docente: "Cabral Mario",
        Codigo: 12,
        Correlatividades: "2-4-5",
        },
        {
        Nombre: "Interfaz de Usuario",
        Anio: "3.ero",
        Docente: "Cabral Mario",
        Codigo: 13,
        Correlatividades: 9,
        },
        {
        Nombre: "Redes",
        Anio: "3.ero",
        Docente: "Dellafiore Ariel",
        Codigo: 14,
        Correlatividades: 7,
        },
        {
        Nombre: "Ingeniería de Software",
        Anio: "3.ero",
        Docente: "Lucero Matías",
        Codigo: 15,
        Correlatividades: 9,
        },
        {
        Nombre: "Programación 3",
        Anio: "3.ero",
        Docente: "Muñoz Fernando",
        Codigo: 16,
        Correlatividades: "10-11",
        },
        {
        Nombre: "Validación y Verificación de Programas",
        Anio: "3.ero",
        Docente: "Moragues Egle",
        Codigo: 17,
        Correlatividades: "8-10",
        },
        {
        Nombre: "Ética y Deontología Profesional",
        Anio: "3.ero",
        Docente: "Tissera Clara",
        Codigo: 18,
        Correlatividades: 6,
        },
        {
        Nombre: "Práctica Profesionalizante 2",
        Anio: "3.ero",
        Docente: "Huck Marcelo",
        Codigo: 19,
        Correlatividades: 12,
        },
        ]    
        
    return (
    <section>
        <h1 className='text-center text-4xl font-bold text-gray-700 py-6'>Materias</h1>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Materia
                </th>
                <th scope="col" class="py-3 px-6">
                    Año
                </th>
                <th scope="col" class="py-3 px-6">
                    Docente
                </th>
                <th scope="col" class="py-3 px-6">
                    Código
                </th>
                <th scope="col" class="py-3 px-6">
                    Correlativas
                </th>
            </tr>
        </thead>
        <tbody class="dark:bg-gray-700">
                <tr>
            
                <td class="py-3 px-6">
                    Object.values(materias)
                </td>
                <td class="py-3 px-6">
                    {materias.Anio}
                </td>
                <td class="py-3 px-6">
                    {materias.Docente}
                </td>
                <td class="py-3 px-6">
                    {materias.Codigo}
                </td>
                <td class="py-3 px-6">
                    {materias.Correlatividades}
                </td>
                }
            </tr>
        </tbody>
    </table>
</div>
    </section>
  )
}

export default MateriasItec