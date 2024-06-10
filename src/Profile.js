import React from 'react'
import {  useAuth } from './auth'

function Profile()  {
  const auth = useAuth();

  // if(!auth.user){
  //   return <Navigate to="/login"/>
  // }
  
  return (
    <>
      <h1>Perfil</h1>
      <p>Welcome, {auth?.user?.username}</p>
    </>
  );
}

export { Profile}
