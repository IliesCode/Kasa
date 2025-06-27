import Navbar from "./Navbar";
import Footer from "./Footer";

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
