import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import AllBrands from "./AllBrands";
import CarDetails from "./CarDetails";
import AddCar from "./AddCar";
import AboutUs from './AboutUs';
import Advertising from './Advertising';
import ContactUs from './ContactUs';
import CopyrightNotice from './CopyrightNotice';
import Disclaimer from './Disclaimer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/allBrands" element={<AllBrands />}></Route>
          <Route path="/allBrands/:id" element={<CarDetails />}></Route>
          <Route path="/allBrands/add" element={<AddCar />}></Route>
          <Route path="/allBrands/edit/:id" element={<AddCar />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/advertising' element={<Advertising />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
          <Route path='/copyright-notice' element={<CopyrightNotice />}></Route>
          <Route path='/disclaimer' element={<Disclaimer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
