import { Github, House, MonitorDown, Package } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Menu items array
  const menuItems = [
    { to: "/", icon: <House className="w-5 h-5" />, label: "Home" },
    { to: "/apps", icon: <Package className="w-5 h-5" />, label: "Apps" },
    { to: "/installed", icon: <MonitorDown className="w-5 h-5" />, label: "Installation" },
  ];

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start flex items-center gap-2">
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
              <ul className="absolute top-16 left-2 w-52 bg-base-100 shadow-md rounded-md p-2 z-50 flex flex-col gap-2">
                {menuItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 ${
                          isActive ? "text-purple-600" : "text-base-content"
                        } hover:text-purple-500`
                      }
                      onClick={handleLinkClick}
                    >
                      {item.icon} {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/"
            className="btn btn-ghost gap-1 p-1 flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img className="md:w-10 w-8" src="/logo.png" alt="Logo" />
            <p className="font-bold text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] md:text-base text-sm">
              HERO.IO
            </p>
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-lg font-semibold">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-purple-600" : "text-base-content"
                    } hover:text-purple-500`
                  }
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {item.icon} {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End: Contribute Button */}
        <div className="navbar-end">
          <a
            href="https://github.com/rafsan1p"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white gap-2"
          >
            <Github className="w-5 h-5" /> Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;