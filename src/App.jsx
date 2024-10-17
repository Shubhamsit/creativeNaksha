import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './myComponent/About';
import Home from './Home'
import Body from './myComponent/Body';
import Layout from './Layout';
import Gallery from './myComponent/Gallery';
import ContactUs from './ContactUs';
import OurWork from './OurWork';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Body/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Gallery" element={<Gallery/>}/>
        <Route path="ContactUs" element={<ContactUs/>}/>
        <Route path="OurWork" element={<OurWork/>}/>
        <Route path="Home" element={<Home/>}/>
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
