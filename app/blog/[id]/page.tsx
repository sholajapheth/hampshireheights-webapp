'use client'
import BlogDetails from '@/Components/Pages/Blog/BlogDetails'
import { useParams } from 'next/navigation'

import React from 'react'

const Details = () => {
const params = useParams()

  return (
    <div>
        <BlogDetails id={params.id} />
    </div>
  )
}

export default Details