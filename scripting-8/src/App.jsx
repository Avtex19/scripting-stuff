import React from 'react'
import { useGlobalContext } from './context'

import Header from './Header'
import CartContent from './CartContent'


function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Header />
      <CartContent />
    </main>
  )
}

export default App
