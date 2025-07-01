import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.scss"

function Layout({ children }) {
  return (
    <div className="norm">
        <div className="app-container">
            <Navbar />
            <main>{children}</main>
        </div>
        <Footer />
    </div>
  );
}

export default Layout;
