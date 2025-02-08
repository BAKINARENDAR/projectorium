<<<<<<< HEAD
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/Home/index';
import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';

export const MyContext = createContext();

function App() {
  const [showheaderfooter, setshowheaderfooter] = useState(true);

  const values = {
    showheaderfooter,
    setshowheaderfooter,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {showheaderfooter && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        {showheaderfooter && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
=======
import './App.css';

function App() {
  return (
    <>
    </>
>>>>>>> 7d1b4fb34bc363af47dc7e03c245fdc7ddf056de
  );
}

export default App;
