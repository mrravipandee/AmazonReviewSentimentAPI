import React from 'react'
import Hero from '../components/Hero'

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero section */}
            <Hero />
            {/* How It Works Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-screen-xl mx-auto px-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <img src="/path-to-your-image.png" alt="Step 1" className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Step 1</h3>
                            <p className="text-gray-600">Submit a product link for review or paste product details.</p>
                        </div>
                        <div className="text-center">
                            <img src="/path-to-your-image.png" alt="Step 2" className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Step 2</h3>
                            <p className="text-gray-600">Our AI reviews the product and provides honest feedback.</p>
                        </div>
                        <div className="text-center">
                            <img src="/path-to-your-image.png" alt="Step 3" className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Step 3</h3>
                            <p className="text-gray-600">Make an informed decision based on real insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonials Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">What Our Users Say</h2>
                    <div className="flex flex-col items-center">
                        <div className="bg-white shadow-lg p-8 max-w-md mx-auto rounded-lg">
                            <p className="text-gray-600">"This tool helped me avoid buying counterfeit products! Highly recommended."</p>
                            <p className="text-gray-700 mt-4 font-semibold">John Doe</p>
                            <p className="text-gray-500">Verified Buyer</p>
                        </div>
                        <div className="bg-white shadow-lg p-8 max-w-md mx-auto rounded-lg mt-8">
                            <p className="text-gray-600">"I saved money and made a better purchasing decision using this review tool!"</p>
                            <p className="text-gray-700 mt-4 font-semibold">Jane Smith</p>
                            <p className="text-gray-500">Verified Buyer</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA (Call to Action) Section */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Start Making Smarter Decisions Today</h2>
                    <p className="mb-6">Get instant, honest reviews on the products you’re interested in.</p>
                    <a
                        href="/get-started"
                        className="bg-white text-blue-600 rounded-lg px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-200 hover:bg-blue-50"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* Product Categories or Popular Products Section */}
            <section className="py-16">
                <div className="max-w-screen-xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Popular Product Reviews</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="border rounded-lg p-6 shadow-lg">
                            <img src="/path-to-product-image.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Product 1</h3>
                            <p className="text-gray-600">An in-depth review of Product 1.</p>
                            <a href="/product1" className="text-blue-600 mt-4 inline-block">View Review</a>
                        </div>
                        <div className="border rounded-lg p-6 shadow-lg">
                            <img src="/path-to-product-image.jpg" alt="Product 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Product 2</h3>
                            <p className="text-gray-600">An in-depth review of Product 2.</p>
                            <a href="/product2" className="text-blue-600 mt-4 inline-block">View Review</a>
                        </div>
                        <div className="border rounded-lg p-6 shadow-lg">
                            <img src="/path-to-product-image.jpg" alt="Product 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-medium text-gray-700">Product 3</h3>
                            <p className="text-gray-600">An in-depth review of Product 3.</p>
                            <a href="/product3" className="text-blue-600 mt-4 inline-block">View Review</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-screen-xl mx-auto px-6">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800">How does ReviewBot work?</h3>
                            <p className="text-gray-600 mt-4">ReviewBot uses AI to analyze product details and provide honest feedback to help you make better purchasing decisions.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-800">Is ReviewBot free to use?</h3>
                            <p className="text-gray-600 mt-4">Yes, our basic product review tool is completely free to use. You can access all features with no charges!</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
