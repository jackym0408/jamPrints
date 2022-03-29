import './App.css';
import Nav from './components/Nav';
import Homepage from './pages/Home';
import Footer from './components/Footer'
import Products from './pages/Products';
import Contact from './pages/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router> 
        <Nav />
        <Routes>
          <Route index element={<Homepage />}/>
          <Route path='/product' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}



export default App;
