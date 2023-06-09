import { Outlet } from "react-router-dom";

import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <div className="container py-3" style={{ maxWidth: '50rem' }}>
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