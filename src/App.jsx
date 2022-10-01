import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Event from './pages/Event';
import PageNotFound from './pages/Page404';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/event/:id" element={<Event />}/>
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
