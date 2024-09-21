import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import './layout.scss'
import Footer from "../../components/Footer/Footer";
function Layout() {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
export default Layout;