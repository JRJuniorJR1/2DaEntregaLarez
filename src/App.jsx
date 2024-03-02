import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
import CheckOut from './components/CheckOut/CheckOut'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  
  return (
    <>
        <BrowserRouter>
          <CartProvider>
              <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/Categoria/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/:nombre/:id' element={<ItemDetailContainer/>}/>
                  <Route path='*' element={<Error/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/checkout' element={<CheckOut/>}/>

                </Routes>            
              <Footer />
          </CartProvider>        
        </BrowserRouter>



    </>
  )
}

export default App
