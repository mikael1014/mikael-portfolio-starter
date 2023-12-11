// components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Mikaël's Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1bI4R2iZnyZWdbIuagHnVHzxSM0t7zlV0LfB4NQ1rwIY/edit" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;