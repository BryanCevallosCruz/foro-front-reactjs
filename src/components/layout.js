import { Outlet } from "react-router-dom";

import Footer from "./footer";
import Navigation from "./navigation";

const Layout = () => {
  return (
    <>
      <div className="container py-3">
        <header>
          <div className="card text-center text-white bg-info" >
            <h4>Foro de comentarios</h4>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;