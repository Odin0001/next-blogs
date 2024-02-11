import Link from 'next/link'
import React from 'react'

const posts = [
  {
    id: 1,
    title: 'title 1',
    userName: 'author 1'
  },
  {
    id: 2,
    title: 'title 2',
    userName: 'author 2'
  },
  {
    id: 3,
    title: 'title 3',
    userName: 'author 3'
  },
]

const blogs = () => {
  return (
    <div className='max-w-4xl mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map(post => (
          <Link key={post.id} href={`/blogs/${post.id}`} className='bg-gray-200 p-4 rounded-md shadow-md shadow-black'>
            <h2 className='font-bold text-xl'>{post.title}</h2>
            <p>Written by: {post.userName}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default blogs