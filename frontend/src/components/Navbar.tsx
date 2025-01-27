import React from "react";
import { Link } from "react-router-dom";  // Import Link
import logo from '../assets/logo.svg';
import ContactUs from '../assets/contact-us.svg';

const Navbar: React.FC = () => {
    return (
        <section className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex shrink-0">
                        <Link aria-current="page" className="flex items-center" to="/">
                            <img
                                className="h-7 w-auto"
                                src={logo}
                                alt="Website Logo"
                            />
                            <p className="sr-only">Amazon Product Review</p>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                        <Link
                            aria-current="page"
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            to="/review-bot"
                        >
                            ReviewBot
                        </Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            to="/products"
                        >
                            Products
                        </Link>
                        <Link
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            to="/about-us"
                        >
                            About Us
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <Link aria-current="page" className="flex items-center" to="/contact-us">
                            <img
                                className="h-7 w-auto"
                                src={ContactUs}
                                alt="Contact us"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
