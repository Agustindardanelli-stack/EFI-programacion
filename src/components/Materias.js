import { list } from 'postcss'
import React from 'react'

const Materias = () => {
    const listadoMaterias = ["Matemática y Lógica", "Sistemas y Organizaciones", "Arquitectura de las Computadoras", "Programación 1", "Inglés", "Lengua y Comunicación", 
                            "Sistemas Operativos", "Matemática Aplicada", "Modelado de Sistemas", "Programción 2", "Bases de Datos", "Práctica Profesionalizante 1",
                            "Interfaz de Usuario", "Redes", "Ingeniería del Software", "Programación 3", "Validación y Verificación de Programas", "Ética y Deontologia Profesional", "Práctica Profesionalizante 2"]
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
        {listadoMaterias.map((materia) => (
                <tr>
                <td class="py-3 px-6">
                    {materia}
                </td>
                <td class="py-3 px-6">
                    2021
                </td>
                <td class="py-3 px-6">
                    Juan Perez
                </td>
                <td class="py-3 px-6">
                    1234
                </td>
                <td class="py-3 px-6">
                    1234
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
    </section>
  )
}

export default Materias