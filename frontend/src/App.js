import './App.css';
import Footer2 from './component/Footer2';
import NavBar from './component/NavBar';
import Aboutus from './Pages/Aboutus';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Registration from './component/Register';
function App() {
  return (

    <Router >
      <div className='App'>
        <NavBar />
        {/* <Home /> */}
        
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/product' element={<Products/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/aboutus' element={<Aboutus/>}/>
          {/* <Route path="/register" element={<Registration />} /> */}
         
        </Routes>
        <Footer2 />
      </div>
    </Router>
  );
}

export default App;
