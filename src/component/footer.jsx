export default function Footer() {
    return (
        <footer className="bg- text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Information */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Company Name</h3>
                        <p className="text-gray-400">
                            Providing top-notch web development, graphic design, and custom art services to help businesses grow online.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
                            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <p className="text-gray-400">123 Web St, Suite 100</p>
                        <p className="text-gray-400">City, State, ZIP</p>
                        <p className="text-gray-400 mt-2">Email: info@company.com</p>
                        <p className="text-gray-400">Phone: +123 456 7890</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.99 0h-16c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-16c0-2.21-1.79-4-4-4zm-10.45 17h-3.1v-7h3.1v7zm-1.55-7.85c-1 0-1.75-.75-1.75-1.75s.75-1.75 1.75-1.75c.99 0 1.75.75 1.75 1.75s-.75 1.75-1.75 1.75zm9.01 7.85h-3.1v-3.85c0-.94-.02-2.15-1.31-2.15-1.32 0-1.52 1.03-1.52 2.09v3.91h-3.1v-7h2.98v.96h.04c.42-.79 1.45-1.63 2.98-1.63 3.18 0 3.77 2.09 3.77 4.81v3.86h-.01z"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.56c-.89.39-1.84.66-2.83.77 1.01-.61 1.78-1.57 2.15-2.71-.95.56-2 .97-3.13 1.19-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.76.13 1.12-4.1-.21-7.73-2.17-10.17-5.15-.43.74-.68 1.6-.68 2.52 0 1.73.88 3.25 2.23 4.15-.82-.03-1.59-.25-2.26-.62v.06c0 2.42 1.72 4.44 4 4.9-.42.12-.87.18-1.33.18-.32 0-.63-.03-.93-.09.63 1.97 2.48 3.4 4.67 3.44-1.71 1.34-3.86 2.13-6.2 2.13-.4 0-.79-.02-1.17-.07 2.21 1.42 4.83 2.25 7.64 2.25 9.17 0 14.18-7.59 14.18-14.18 0-.22 0-.44-.01-.65.97-.7 1.8-1.57 2.46-2.56z"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.04c5.51 0 9.96 4.45 9.96 9.96 0 4.39-2.85 8.1-6.77 9.39-.5.09-.68-.22-.68-.48v-1.71c2.76.59 3.35-1.32 3.35-1.32.46-1.17 1.11-1.48 1.11-1.48.9-.61-.07-.6-.07-.6-1.08.08-1.65 1.11-1.65 1.11-.88 1.54-2.3 1.1-2.86.84-.09-.63-.35-1.1-.64-1.35 2.2-.25 4.52-1.1 4.52-4.94 0-1.09-.39-1.99-1.03-2.7.1-.25.45-1.28-.1-2.66 0 0-.84-.27-2.76 1.02-.8-.22-1.65-.34-2.5-.34-.85 0-1.7.12-2.5.34-1.92-1.29-2.76-1.02-2.76-1.02-.55 1.38-.2 2.41-.1 2.66-.64.71-1.03 1.61-1.03 2.7 0 3.85 2.32 4.69 4.53 4.94-.35.3-.68.9-.68 1.8v2.67c0 .27-.18.59-.7.49-3.92-1.29-6.77-5-6.77-9.39 0-5.51 4.45-9.96 9.96-9.96z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-800 pt-4 text-center">
                    <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Visual Verse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
