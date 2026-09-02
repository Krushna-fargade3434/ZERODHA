import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Menu = () => {
    const { user, logout } = useAuth();
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleProfileClick = () => {
        setIsProfileDropdownOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        setIsProfileDropdownOpen(false);
        await logout();
    };

    const initials = user?.name
        ? user.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
        : "U";

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">
            <img src="logo.png" alt="logo" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
                            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
                            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
                            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
                            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
                            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
                            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">{initials}</div>
                    <p className="username">{user?.name || "USER"}</p>
                    {isProfileDropdownOpen && (
                        <div className="profile-dropdown">
                            <Link to="/account" className="profile-dropdown-item" onClick={() => setIsProfileDropdownOpen(false)}>
                                My account
                            </Link>
                            <button type="button" className="profile-dropdown-item danger" onClick={handleLogout}>
                                Log out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
