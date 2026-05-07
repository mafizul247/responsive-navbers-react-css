import { useState } from 'react';
// import './Navber2.css'

const Navber2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>

            {/* Hamburger Button */}
            <div
                className="menu-icon"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </div>
            {/* Menu */}
            <ul className={isOpen ? "nav-links active" : "nav-links"}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navber2;