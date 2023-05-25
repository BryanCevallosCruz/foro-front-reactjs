
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

import Layout from './components/layout';
import Information from "./pages/information";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<Information />}></Route>

        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
