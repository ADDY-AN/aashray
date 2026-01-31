"use client";

import React from "react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#fbfdf7] text-[#05668d] font-sans py-20 px-6">
            <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#00a896]/10">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-8">Last Updated: January 2026</p>

                <div className="space-y-6 text-[#028090] leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Aashray Hospital</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">2. Information We Collect</h2>
                        <p>We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers submitted via our appointment forms.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>To schedule appointments and provide medical services.</li>
                            <li>To improve our website and customer service.</li>
                            <li>To communicate with you regarding updates or health inquiries.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">5. Third-Party Links</h2>
                        <p>
                            This website may include links to third-party websites (e.g., Cloudinary for images, Google Maps). Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">6. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us:</p>
                        <p className="mt-2 font-bold">Aashray Hospital</p>
                        <p>Phone: +91 77391 42568</p>
                        <p>Email: aashraynursing@gmail.com</p>
                    </section>
                </div>
            </div>
        </main>
    );
}