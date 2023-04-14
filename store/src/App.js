import { Container } from 'react-bootstrap';
import './App.css';
import NavbarComp from './components/NavbarComp';
import { Routes, Route } from 'react-router';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Store from './pages/Store';

function App() {
  return (
    <Container >
      <NavbarComp />
    <Routes>
      <Route index element={<Store />} />
      <Route path="success" element={<Success />}/>
      <Route path="cancel" element={<Cancel />}/>
    </Routes>
    </Container>
    
  );
}

export default App;
