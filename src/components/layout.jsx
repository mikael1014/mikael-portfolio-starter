// components/Layout.jsx

import Navbar from 'src/components/Navbar.jsx';
import Footer from 'src/components/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;