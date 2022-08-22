import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditToken from './pages/EditToken';
import { GlobalStyle } from './styles/global';
function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-token" element={<AddToken />} />
          <Route path="/edit-token/:editToken" element={<EditToken />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
