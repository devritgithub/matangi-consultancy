'use client';

import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
    return (
        <>
            <Navbar />

            <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
                <motion.div
                    className="container mx-auto px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-10 relative overflow-hidden"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <motion.div
                            className="absolute top-0 right-0 h-20 w-20 bg-blue-100 rounded-bl-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        />
                        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-6">Get in Touch</h2>
                        <p className="text-center text-gray-600 mb-10 text-md">
                            We’re ready to help you grow your finances. Let us know how we can support you.
                        </p>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="group relative">
                                <input
                                    type="text"
                                    required
                                    className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                                    Full Name
                                </label>
                            </div>

                            {/* Email */}
                            <div className="group relative">
                                <input
                                    type="email"
                                    required
                                    className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                                    Email Address
                                </label>
                            </div>

                            {/* Phone */}
                            <div className="group relative md:col-span-2">
                                <input
                                    type="tel"
                                    required
                                    className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=" "
                                />
                                <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                                    Phone Number
                                </label>
                            </div>

                            {/* Message */}
                            <div className="group relative md:col-span-2">
                                <textarea
                                    required
                                    rows={5}
                                    className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=" "
                                ></textarea>
                                <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                                    Your Message
                                </label>
                            </div>

                            {/* Button */}
                            <div className="col-span-1 md:col-span-2 text-center mt-4">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition duration-300"
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default ContactUs;
