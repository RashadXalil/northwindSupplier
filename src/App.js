import SupplierList from './pages/SupplierList/SupplierList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Detail from './pages/Detail/Detail'
import AddSupplier from './pages/AddSupplier/AddSupplier'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<SupplierList />} />
          <Route path="/suppliers/:id" element={<Detail />} />
          <Route path="/add" element={<AddSupplier />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
