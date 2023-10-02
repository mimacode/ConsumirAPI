import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './components/views/Products';
import { ProductDetail } from './components/common/ProductDetail';

function App() {
  return (
    <BrowserRouter basename="/store">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
