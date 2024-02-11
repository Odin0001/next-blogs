import Comments from '@/components/Comments'
import FormComment from '@/components/FormComment'
import React from 'react'

const singleBlog = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold'>Post 1</h1>
      <p>Written by: John Doe</p>
      <div className='mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit in fugit mollitia amet dolor fuga nam iusto labore animi totam.
      </div>

      <Comments />
      <FormComment />
    </div>
  )
}

export default singleBlog