import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We provide AI-powered insights to help you make smarter purchasing decisions by analyzing thousands of Amazon reviews.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviewbot" className="text-gray-400 hover:text-white transition-colors">
                                    ReviewBot
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li>Email: support@reviewbot.com</li>
                            <li>Phone: +1 (123) 456-7890</li>
                            <li>Address: 123 AI Street, Tech City</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://twitter.com/reviewbot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://facebook.com/reviewbot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com/company/reviewbot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://instagram.com/reviewbot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ReviewBot. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;