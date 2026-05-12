"use client";

import Link from "next/link";
import { ArrowLeft, Scale, FileText, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useGlobalData} from "../../context/GlobalDataContext";

export default function TermsAndConditionsClient() {
   const globalData = useGlobalData();
       const contact = globalData?.contacts;
       const loading = globalData?.loading ?? true;
 if (loading || !contact) return null;
    return (
        <div className="min-h-screen bg-deep-navy">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-deep-navy via-deep-navy to-gold/20">
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Scale className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg text-ice-blue/80 max-w-2xl mx-auto">
                            Please read these terms carefully before using our services or website.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Breadcrumb */}
                    <div className="flex flex-wrap gap-2 text-sm text-ice-blue/70 mb-8">
                        <Link href="/" className="hover:text-gold transition-colors">
                            Home
                        </Link>
                        <span>›</span>
                        <span className="text-white">Terms & Conditions</span>
                    </div>

                    {/* Last Updated */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
                        <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-gold" />
                            <p className="text-ice-blue/70">
                                <strong className="text-white">Last Updated:</strong> May 7, 2026
                            </p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Agreement to Terms</h2>
                        <p className="text-ice-blue/80 text-lg leading-relaxed mb-6">
                            These Terms and Conditions constitute a legally binding agreement between you and Bayroof Constructions.
                            By accessing or using our website and services, you agree to be bound by these terms. If you do not agree 
                            to these terms, please do not use our website or services.
                        </p>
                        <p className="text-ice-blue/80 text-lg leading-relaxed">
                            We reserve the right to update or modify these terms at any time without prior notice. Your continued use 
                            of the website following any changes constitutes acceptance of those changes.
                        </p>
                    </div>

                    {/* 1. Services */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">1. Services</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Service Description</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        Bayroof Constructions provides professional roofing services including but not limited to 
                                        installation, repair, maintenance, inspection, and consultation services for residential, 
                                        commercial, and industrial properties. All services are performed by qualified professionals 
                                        adhering to industry standards and best practices.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Service Standards</h3>
                                    <p className="text-ice-blue/80 leading-relaxed mb-4">
                                        We strive to provide services that meet or exceed industry standards and your specific requirements. 
                                        All work is performed by trained and experienced professionals using quality materials from 
                                        reputable manufacturers.
                                    </p>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        We reserve the right to refuse service to anyone for any reason at any time. We may modify or 
                                        discontinue any service without notice at any time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. User Responsibilities */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">2. User Responsibilities</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                When using our website and services, you agree to:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Provide accurate, current, and complete information when requesting services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Cooperate with our team during service delivery and provide safe access to work areas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Ensure compliance with all applicable local building codes and regulations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Make payments according to the agreed upon terms and schedule</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Not use our website for any unlawful purpose or in violation of any applicable laws</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Maintain the confidentiality of any account credentials provided</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Payment Terms */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">3. Payment Terms</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Pricing and Quotes</h3>
                                    <p className="text-ice-blue/80 leading-relaxed mb-4">
                                        All quotes provided are valid for 30 days from the date of issue unless otherwise stated. 
                                        Final pricing may vary based on site conditions, scope changes, or additional work required 
                                        that was not apparent during the initial inspection.
                                    </p>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        All prices are in Indian Rupees (INR) unless otherwise specified. Taxes and additional 
                                        fees may apply as required by law.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Payment Schedule</h3>
                                    <div className="bg-white/5 rounded-xl p-6 space-y-4">
                                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                            <span className="text-ice-blue/80">Deposit upon contract signing</span>
                                            <span className="text-gold font-semibold">30%</span>
                                        </div>
                                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                            <span className="text-ice-blue/80">Progress payment at project midpoint</span>
                                            <span className="text-gold font-semibold">40%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-ice-blue/80">Final payment upon completion</span>
                                            <span className="text-gold font-semibold">30%</span>
                                        </div>
                                    </div>
                                    <p className="text-ice-blue/80 leading-relaxed mt-6">
                                        Late payments may incur additional charges. We reserve the right to suspend work if 
                                        payments are not received according to the agreed schedule.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Accepted Payment Methods</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        We accept bank transfers, checks, and other payment methods as agreed upon in writing. 
                                        All payments must be made to the account specified in your service agreement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Warranties and Guarantees */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">4. Warranties and Guarantees</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Workmanship Warranty</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        Bayroof Constructions provides a comprehensive 5-year workmanship warranty on all roofing 
                                        installations and repairs. This warranty covers defects in materials and labor under normal 
                                        use and weather conditions. Any issues arising from improper maintenance, alterations by 
                                        third parties, or extreme weather events beyond design specifications are not covered.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Manufacturer Warranties</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        Manufacturer warranties on roofing materials are passed through to you and are subject to 
                                        the respective manufacturer's terms and conditions. We will assist you in processing any 
                                        manufacturer warranty claims that may arise during the warranty period.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Warranty Exclusions</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        Warranties do not cover damage caused by natural disasters, acts of God, improper maintenance, 
                                        unauthorized modifications, or normal wear and tear beyond the expected lifespan of materials.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Limitation of Liability */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <AlertTriangle className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">5. Limitation of Liability</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                To the fullest extent permitted by applicable law, Bayroof Constructions shall not be liable for 
                                any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                                loss of profits, data, use, goodwill, or other intangible losses resulting from:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1">•</span>
                                    <span className="text-ice-blue/80">Your use or inability to use our services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1">•</span>
                                    <span className="text-ice-blue/80">Any unauthorized access to or use of our servers and/or personal information</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1">•</span>
                                    <span className="text-ice-blue/80">Any interruption or cessation of services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1">•</span>
                                    <span className="text-ice-blue/80">Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</span>
                                </li>
                            </ul>
                            <p className="text-ice-blue/80 leading-relaxed p-4 bg-gold/5 border border-gold/20 rounded-lg">
                                <strong className="text-white">Important:</strong> In no event shall our total liability to you for all 
                                claims exceed the amount paid by you to Bayroof Constructions for the specific service giving rise to 
                                the claim. Nothing in these terms excludes or limits liability for death, personal injury, or fraud.
                            </p>
                        </div>
                    </div>

                    {/* 6. Intellectual Property */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">6. Intellectual Property</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                All content on this website, including but not limited to text, graphics, logos, images, videos, 
                                designs, and software, is the property of Bayroof Constructions or its content suppliers and is 
                                protected by applicable intellectual property laws.
                            </p>
                            <p className="text-ice-blue/80 leading-relaxed">
                                You may not reproduce, distribute, modify, create derivative works of, publicly display, or 
                                otherwise use any content from our website without prior written permission from Bayroof Constructions.
                            </p>
                        </div>
                    </div>

                    {/* 7. Termination */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Scale className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">7. Termination</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                Either party may terminate the service agreement with reasonable written notice. In the event 
                                of termination:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">You remain responsible for payment of all services rendered up to the termination date</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">Any advance payments for uncompleted work will be refunded on a pro-rata basis</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <span className="text-ice-blue/80">All provisions of these terms that by their nature should survive termination shall survive</span>
                                </li>
                            </ul>
                            <p className="text-ice-blue/80 leading-relaxed">
                                We reserve the right to terminate services immediately without notice if you breach any material 
                                term of these conditions.
                            </p>
                        </div>
                    </div>

                    {/* 8. Governing Law */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Scale className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">8. Governing Law and Dispute Resolution</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                These terms and conditions shall be governed by and construed in accordance with the laws of India. 
                                Any disputes arising out of or in connection with these terms shall be subject to the exclusive 
                                jurisdiction of the courts of Kerala, India.
                            </p>
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                Before initiating any formal legal proceedings, the parties agree to attempt to resolve any dispute 
                                through good-faith negotiations and, if necessary, mediation.
                            </p>
                            <p className="text-ice-blue/80 leading-relaxed">
                                Any claim or cause of action arising out of or related to the use of our services or these terms 
                                must be filed within one (1) year after such claim or cause of action arose.
                            </p>
                        </div>
                    </div>

                    {/* 9. Privacy Policy */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">9. Privacy Policy</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                Your use of our website and services is also governed by our Privacy Policy, which outlines how 
                                we collect, use, and protect your personal information. By using our services, you consent to 
                                the practices described in our Privacy Policy.
                            </p>
                            <p className="text-ice-blue/80 leading-relaxed">
                                We are committed to protecting your privacy and handling your personal data in accordance with 
                                applicable data protection laws.
                            </p>
                        </div>
                    </div>

                    {/* 10. Contact Information */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">10. Contact Information</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-8">
                                For questions, concerns, or inquiries about these Terms and Conditions, please contact us through 
                                any of the following channels:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Bayroof Constructions</h3>
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📧</span>
                                            <p className="text-ice-blue/80">Email: {contact.email}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📞</span>
                                            <p className="text-ice-blue/80">Phone: {contact.phone}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📍</span>
                                            <p className="text-ice-blue/80">
                                                Address: <span dangerouslySetInnerHTML={{ __html: contact.address }} />
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">⏰</span>
                                            <p className="text-ice-blue/80">Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-ice-blue/80 leading-relaxed mt-6">
                                We aim to respond to all inquiries within 2-3 business days. For urgent matters, please contact 
                                us by phone during business hours.
                            </p>
                        </div>
                    </div>

                    {/* Acknowledgment */}
                    <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8 lg:p-10 mb-16">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Acknowledgment</h3>
                                <p className="text-ice-blue/80 leading-relaxed">
                                    By using our website and services, you acknowledge that you have read, understood, and agree 
                                    to be bound by these Terms and Conditions. If you do not agree with any part of these terms, 
                                    please discontinue use of our website and services immediately.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all text-lg"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}