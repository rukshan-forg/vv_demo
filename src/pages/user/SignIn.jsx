import { useState } from "react";

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple form validation
        if (!formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }
        // Reset error message and handle form submission
        setError("");
        console.log("Form submitted:", formData);
        // You can further process the form data or integrate with a backend.
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>
                    <p className="text-center text-gray-600 mb-8">Access your account</p>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline"> {error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-gray-600">
                        Don&#39;t have an account? <a href="/user/sign-up" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
