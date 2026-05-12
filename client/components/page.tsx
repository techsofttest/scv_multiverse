"use client";

import React, { useEffect } from 'react';

export const metadata = {
    title: "Terms and Conditions | Bayroof Constructions",
    description: "The legal terms governing the use of Bayroof Constructions' services and website."
};
export default function TermsAndConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main className="min-h-screen bg-white pt-32 pb-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-deep-navy mb-8">Terms and Conditions</h1>
                <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
                    <p className="text-lg">By accessing our website and services, you agree to comply with the following terms.</p>
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-deep-navy mb-4">1. Use of the Site</h2>
                        <p>The content provided on this website is for general information and use only. It is subject to change without notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-deep-navy mb-4">2. Intellectual Property</h2>
                        <p>This website contains material which is owned by or licensed to Bayroof Constructions. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-deep-navy mb-4">3. Quotations and Projects</h2>
                        <p>Any quotation provided through the site is an estimate. Final pricing and project timelines are subject to onsite inspection and formal contractual agreement.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-deep-navy mb-4">4. Liability</h2>
                        <p>Bayroof Constructions shall not be liable for any indirect or consequential loss or damage arising out of the use of this website.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
