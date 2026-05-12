import { useState } from "react";
import './Navber3.css'

const Navber3 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    return (
        <>
            {/* NAVBAR */}
            <nav className="navbar">

                {/* MOBILE MENU BUTTON */}
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </button>

                {/* LOGO */}
                <div className="logo">NovaUI</div>

                {/* DESKTOP MENU */}
                <ul className="desktop-menu">

                    <li><a href="/">Home</a></li>

                    <li><a href="/">About</a></li>

                    {/* DROPDOWN */}
                    <li className="dropdown">

                        <button className="dropdown-btn">
                            Services ▾
                        </button>

                        <ul className="dropdown-menu">

                            <li><a href="/">Web Design</a></li>

                            <li><a href="/">Development</a></li>

                            <li><a href="/">SEO</a></li>

                            <li><a href="/">Marketing</a></li>

                        </ul>

                    </li>

                    <li><a href="/">Portfolio</a></li>

                    <li><a href="/">Contact</a></li>

                </ul>

            </nav>

            {/* OVERLAY */}
            <div
                className={menuOpen ? "overlay show" : "overlay"}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* DRAWER */}
            <div className={menuOpen ? "drawer open" : "drawer"}>

                {/* TOP */}
                <div className="drawer-top">

                    <h2>Menu</h2>

                    <button
                        className="close-btn"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>

                </div>

                {/* MOBILE MENU */}
                <ul className="mobile-menu">

                    <li><a href="/">🏠 Home</a></li>

                    <li><a href="/">👤 About</a></li>

                    {/* MOBILE DROPDOWN */}
                    <li>

                        <button
                            className="mobile-dropdown-btn"
                            onClick={() => setServiceOpen(!serviceOpen)}
                        >
                            🛠 Services {serviceOpen ? "▴" : "▾"}
                        </button>

                        <ul className={serviceOpen ? "mobile-dropdown open" : "mobile-dropdown"}>

                            <li><a href="/">Web Design</a></li>

                            <li><a href="/">Development</a></li>

                            <li><a href="/">SEO</a></li>

                            <li><a href="/">Marketing</a></li>

                        </ul>

                    </li>

                    <li><a href="/">💼 Portfolio</a></li>

                    <li><a href="/">📞 Contact</a></li>

                </ul>

            </div>

        </>
    );
};

export default Navber3;