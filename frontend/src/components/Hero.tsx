import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import heroImage from "../assets/hero-section.svg";

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center min-h-screen">
            <div className="grid items-center gap-8 px-6 md:grid-cols-2 md:max-w-screen-lg mt-20">
                {/* Left Column - Text & Buttons */}
                <div className="text-center md:text-left space-y-6 order-2 md:order-1">
                    <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl">
                        Get Honest Product Insights
                    </h1>
                    <p className="text-lg text-gray-700">
                        With so many similar products and prices all over the place, it’s hard to know what’s really worth your money. Let us help you make the right choice. We’ll give you honest reviews and clear insights—no confusion, just the facts!
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
                        <Link to="/review-bot">
                            <button className="w-full rounded-xl bg-[#9c7bf2] px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#c582e7] focus:outline-none md:w-auto">
                                Try Us Now
                            </button>
                        </Link>
                        <Link
                            to='#'
                            className="w-full rounded-xl bg-gray-100 px-6 py-3 text-sm font-medium text-gray-900 shadow-lg transition-all hover:bg-gray-200 md:w-auto"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative w-full max-w-[500px] h-[22.5rem] overflow-hidden rounded-[30px_10px_30px_10px] order-1 md:order-2">
                    <img
                        src={heroImage}
                        alt="Product Insight"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
