import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Productlist from './pages/Productlist'
import Productdetails from './pages/Productdetails'
import Layout from './Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route path='/home' element={<Productlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product-details/:id' element={<Productdetails />} />
        </Route>
      {/* <Productlist /> */}
      </Routes>
    </>
  )
}

export default App
