import React from 'react'
import { useAuth } from './auth'

function Profile()  {
  const auth = useAuth()
  return (
    <>
    <h1>
      Profile Page
    </h1>

    <p>
      {auth.user.username}
    </p>
    </>
  )
}

export { Profile}
