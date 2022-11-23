import React, { useState } from 'react'

export default function Login({ onSubmit }) {
  const [change, setChange] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setChange({ ...change, [e.target.name]: e.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(change)
    // setSubmitting(true)

    setTimeout(() => {
      // setSubmitting(false)
    }, 3000)
  }

  return (
    <section>
    <div className='w-[500px] mx-auto p-6'>
      <div className='w-full p-6 m-auto bg-white shadow-xl shadow-rose-600/40 ring ring-2 ring-red-600 lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center text-red-600  uppercase decoration-wavy'>
          Login SITEC
        </h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label for='email' className='block text-sm font-semibold text-gray-800'>
              Email
            </label>
            <input
              onChange={handleChange}
              name='email'
              type='email'
              value={change.email}
              className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
          </div>
          <div className='mb-2'>
            <label for='password' className='block text-sm font-semibold text-gray-800'>
              Password
            </label>
            <input
              name='password'
              onChange={handleChange}
              value={change.password}
              type='password'
              className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
              />
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              value='submit'
              className=' w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-red-600 focus:outline-none bg-red-600 focus:bg-red-600'
              >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
              </section>
  )
}
