import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogData } from './blogData'
import { useAuth } from './auth'

function BlogPost()  {
    const navigate = useNavigate()
    const {slug} = useParams()

    const auth = useAuth()
    const blogPost = blogData.find(post => post.slug === slug)

    const canDelete = auth.user?.isAdmin || auth.user?.username === blogPost.author

    const returnToBlog = () => {
        // navigate('/blog')
        navigate(-1)
    }
  return (
    <>
    <h2>{blogPost.title}</h2>
    <button onClick={returnToBlog}>Volver al Blog</button>
    <p>{blogPost.content}</p>
    <p>{blogPost.author}</p>

    {canDelete && (<button>Eliminar BlogPost</button>)}
    </>
  )
}


export { BlogPost}
