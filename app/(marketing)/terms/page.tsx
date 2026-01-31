"use client";

import React from "react";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#fbfdf7] text-[#05668d] font-sans py-20 px-6">
            <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#00a896]/10">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Terms of Service</h1>
                <p className="text-sm text-gray-500 mb-8">Last Updated: January 2026</p>

                <div className="space-y-6 text-[#028090] leading-relaxed">

                    {/* --- CRITICAL MEDICAL DISCLAIMER --- */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <h3 className="text-red-700 font-bold uppercase text-sm tracking-wide mb-1">Medical Disclaimer</h3>
                        <p className="text-red-600 text-sm">
                            The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition. <strong>In case of a medical emergency, call emergency services immediately.</strong>
                        </p>
                    </div>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the website of <strong>Aashray Hospital</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">2. Use License</h2>
                        <p>Permission is granted to temporarily view the materials (information or software) on Aashray Hospital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">3. User Conduct</h2>
                        <p>You agree not to use the website for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the website in any way that could damage the website, the services, or the general business of Aashray Hospital.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">4. Limitation of Liability</h2>
                        <p>
                            Aashray Hospital or its suppliers shall not be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aashray Hospital's website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">5. Accuracy of Materials</h2>
                        <p>
                            The materials appearing on Aashray Hospital's website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#05668d] mb-3">6. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}