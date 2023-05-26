
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";

import Layout from './components/layout';
import Information from "./pages/information";
import routesPrivate from "./routes/routes";
import CreateUser from './pages/user/CreateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<CreateUser />}></Route>
          {routesPrivate.map((route) => (
            <Route
              exact
              path={route.route}
              element={route.component}
              key={route.key}
            />
          ))} 
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
