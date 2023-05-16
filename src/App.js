import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartPage from './components/pages/CartPage';
import Footer from './components/Footer';
import Main from './components/pages/MainPage';
import HeartPage from './components/pages/HeartPage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/heart" element={<HeartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
