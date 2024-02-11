'use client'

import { FormData } from "@/types/blogs"
import { ChangeEvent, FormEvent, useState } from "react"

const inputClass = 'w-full py-2 px-3 border border-gray-300 text-black rounded-md focus:outline-none focus:border-blue-300'
const btnClass = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'

const FormNewPost = () => {

  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: ''
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault()
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <input type="text" className={inputClass} placeholder='enter the title' name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className='mb-4'>
        <textarea className={inputClass} placeholder='enter the content' name="content" value={formData.content} onChange={handleChange}></textarea>
      </div>
      <button className={btnClass}>Submit</button>
    </form>
  )
}

export default FormNewPost