import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FiUser, FiShoppingBag, FiLogOut } from "react-icons/fi";

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const { cartItems, token, setToken } = useContext(StoreContext);
    const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className="navbar-logo" />
            </Link>

            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>Mobile App</li>
                <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search} alt="search" className="navbar-search" />

                <div className='navbar-cart-wrapper'>
                    <Link to='/cart'>
                        <div className="bag-container">
                            {totalItems > 0 && <div className="dot"></div>}
                            <img src={assets.bag} alt="bag" className="navbar-bag" />
                        </div>
                    </Link>
                </div>

                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div
                    className='navbar-profile'
                    onClick={() => setShowDropdown(prev => !prev)}
                >
                
                        <FiUser className="profile-icon" />

                        {showDropdown && (
                            <ul className="nav-profile-dropdown">
                                <li>
                                    <FiShoppingBag />
                                    <p>Orders</p>
                                </li>
                                <hr />
                                <li onClick={() => {
    setToken(null);
    setShowDropdown(false);
}}>
    <FiLogOut />
    <p>Logout</p>
</li>

                            </ul>
                        )}
                    </div>
                )}

                <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
                    <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
                    <div className={`bar ${mobileMenuOpen ? "open" : ""}`}></div>
                </div>

                {mobileMenuOpen && (
                    <ul className='mobile-menu open'>
                        <li onClick={() => setMenu("home")}>Home</li>
                        <li onClick={() => setMenu("menu")}>Menu</li>
                        <li onClick={() => setMenu("mobile")}>Mobile App</li>
                        <li onClick={() => setMenu("contact")}>Contact</li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
