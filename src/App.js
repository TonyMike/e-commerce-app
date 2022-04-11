import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter
} from 'react-router-dom'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/about' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
