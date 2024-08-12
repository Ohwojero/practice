import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Notfound from "./pages/notfound/Notfound";
import Trainers from "./pages/trainers/Trainers";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index element ={<Home/>}/>
        <Route path='About' element ={<About/>}/>
        <Route path='Gallery' element ={<Gallery/>}/>
        <Route path='Plans' element ={<Plans/>}/>
        <Route path='Trainers' element ={<Trainers/>}/>
        <Route path='Notfound' element ={<Notfound/>}/>
        <Route path='Contact' element ={<Contact/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
