// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<><Nav /><Footer /></>} >
      <Route index element={<Home />}/>
      <Route path='pricing' element={<div>Pricing</div>} />{/*<Pricing />*/}
      <Route path='product' element={<Products />} />
      <Route path='about' element={<About />} />
      <Route path='career' element={<div>Career</div>} />{/*<Career />*/}
      <Route path='community' element={<div>Community</div>} />{/*<Community />*/}
      <Route path='*' element={<div>Error</div>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
