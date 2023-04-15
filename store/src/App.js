import { Container } from 'react-bootstrap';
import './App.css';
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';
import CartProvider from './CartContext';
import CarouselComponent from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
    <Container >
      <NavbarComp />
      <CarouselComponent />
    <Routes>
      <Route index element={<Store />} />
      <Route path="success" element={<Success />}/>
      <Route path="cancel" element={<Cancel />}/>
    </Routes>
    </Container>
    <Footer />
    </CartProvider>
  );
}

export default App;
