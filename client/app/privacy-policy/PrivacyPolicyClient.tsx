"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicyClient() {
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
                        <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-ice-blue/80 max-w-2xl mx-auto">
                            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                        <span className="text-white">Privacy Policy</span>
                    </div>

                    {/* Last Updated */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
                        <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-gold" />
                            <p className="text-ice-blue/70">
                                <strong className="text-white">Last Updated:</strong> May 7, 2026
                            </p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12 mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
                        <p className="text-ice-blue/80 text-lg leading-relaxed mb-6">
                            At Bayroof Constructions, we are committed to protecting your privacy and ensuring the security 
                            of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                            safeguard your information when you visit our website or use our services.
                        </p>
                        <p className="text-ice-blue/80 text-lg leading-relaxed">
                            By using our website or services, you agree to the collection and use of information in accordance 
                            with this policy. We encourage you to read this policy carefully and contact us if you have any 
                            questions or concerns.
                        </p>
                    </div>

                    {/* 1. Information We Collect */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Database className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">1. Information We Collect</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Personal Information You Provide</h3>
                                    <p className="text-ice-blue/80 leading-relaxed mb-4">
                                        We may collect personal information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80">Fill out contact forms on our website</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80">Request a quote or consultation for our services</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80">Subscribe to our newsletter or marketing communications</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80">Communicate with us via email, phone, or other channels</span>
                                        </li>
                                    </ul>
                                    <p className="text-ice-blue/80 leading-relaxed mb-4">
                                        The types of personal information we may collect include:
                                    </p>
                                    <div className="bg-white/5 rounded-xl p-6 space-y-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">👤</span>
                                            <span className="text-ice-blue/80">Full name and contact information (email address, phone number)</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📍</span>
                                            <span className="text-ice-blue/80">Physical address and location details for service delivery</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📋</span>
                                            <span className="text-ice-blue/80">Project requirements, specifications, and preferences</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">💳</span>
                                            <span className="text-ice-blue/80">Payment and billing information (processed securely)</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Automatically Collected Information</h3>
                                    <p className="text-ice-blue/80 leading-relaxed mb-4">
                                        When you visit our website, we automatically collect certain information through cookies 
                                        and similar technologies:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Device Information:</strong> IP address, browser type, operating system, and device type</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Usage Data:</strong> Pages visited, time spent on pages, links clicked, and navigation patterns</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Location Data:</strong> General geographic location based on IP address</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Referral Information:</strong> How you arrived at our website (search engine, direct link, etc.)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. How We Use Your Information */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">2. How We Use Your Information</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                We use the information we collect for the following purposes:
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Service Delivery</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        To provide, maintain, and improve our roofing services. This includes processing your 
                                        requests, managing projects, scheduling appointments, and delivering the services you 
                                        have requested.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Communication</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        To communicate with you about your projects, send service updates, respond to inquiries, 
                                        and provide customer support. We may also send you administrative messages related to 
                                        your account or transactions.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Website Improvement</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        To analyze website usage patterns, improve user experience, optimize website performance, 
                                        and develop new features based on user preferences and behavior.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Marketing and Promotions</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        With your consent, to send you promotional materials, special offers, newsletters, and 
                                        information about services we think may interest you. You can opt out of marketing 
                                        communications at any time.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Legal Compliance</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        To comply with applicable laws, regulations, legal processes, and enforce our terms and 
                                        conditions. This includes protecting our rights, privacy, safety, and property.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Information Sharing and Disclosure */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Mail className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">3. Information Sharing and Disclosure</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                We respect your privacy and do not sell, trade, or rent your personal information to third 
                                parties for their marketing purposes. We may share your information only in the following 
                                circumstances:
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Service Providers</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        We may share information with trusted third-party service providers who assist us in 
                                        operating our website, conducting our business, or servicing you. These parties are 
                                        contractually obligated to keep your information confidential and use it only for the 
                                        purposes we specify.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Legal Requirements</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        We may disclose your information if required by law, court order, or governmental 
                                        regulation, or if we believe in good faith that disclosure is necessary to protect 
                                        our rights, your safety, or the safety of others.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Business Transfers</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        In the event of a merger, acquisition, reorganization, or sale of all or a portion of 
                                        our assets, your information may be transferred as part of that transaction. We will 
                                        notify you of any such change in ownership or control of your personal information.
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">With Your Consent</h3>
                                    <p className="text-ice-blue/80 leading-relaxed">
                                        We may share your information with third parties when we have your explicit consent 
                                        to do so. You have the right to withdraw your consent at any time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Data Security */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Lock className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">4. Data Security</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                We take the security of your personal information seriously and implement appropriate 
                                technical and organizational measures to protect it.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">🔒</span>
                                    <div>
                                        <strong className="text-white">Encryption:</strong>
                                        <p className="text-ice-blue/80">We use SSL/TLS encryption to protect data transmitted between your browser and our servers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">🛡️</span>
                                    <div>
                                        <strong className="text-white">Access Controls:</strong>
                                        <p className="text-ice-blue/80">Access to personal information is restricted to authorized personnel who need it to perform their job functions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">🔐</span>
                                    <div>
                                        <strong className="text-white">Regular Audits:</strong>
                                        <p className="text-ice-blue/80">We regularly review our security practices and update them to address new threats and vulnerabilities.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">📊</span>
                                    <div>
                                        <strong className="text-white">Monitoring:</strong>
                                        <p className="text-ice-blue/80">We monitor our systems for potential vulnerabilities and attacks to prevent data breaches.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6">
                                <p className="text-ice-blue/80 leading-relaxed">
                                    <strong className="text-white">Important Note:</strong> While we strive to protect your personal 
                                    information, no method of transmission over the Internet or electronic storage is 100% secure. 
                                    We cannot guarantee absolute security, but we are committed to protecting your data and will 
                                    notify you promptly in the event of a data breach as required by applicable law.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Your Rights */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">5. Your Rights and Choices</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                You have certain rights regarding your personal information. Subject to applicable law, 
                                you may:
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">📖</span>
                                    <div>
                                        <strong className="text-white">Right to Access:</strong>
                                        <p className="text-ice-blue/80">Request access to the personal information we hold about you and receive a copy of it.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">✏️</span>
                                    <div>
                                        <strong className="text-white">Right to Rectification:</strong>
                                        <p className="text-ice-blue/80">Request correction of any inaccurate or incomplete personal information we have about you.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">🗑️</span>
                                    <div>
                                        <strong className="text-white">Right to Erasure:</strong>
                                        <p className="text-ice-blue/80">Request deletion of your personal information under certain circumstances ("right to be forgotten").</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">🚫</span>
                                    <div>
                                        <strong className="text-white">Right to Object:</strong>
                                        <p className="text-ice-blue/80">Object to the processing of your personal information for direct marketing or other purposes.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">📦</span>
                                    <div>
                                        <strong className="text-white">Right to Data Portability:</strong>
                                        <p className="text-ice-blue/80">Request transfer of your personal information to another organization in a structured format.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-gold mt-1">📧</span>
                                    <div>
                                        <strong className="text-white">Right to Opt-Out:</strong>
                                        <p className="text-ice-blue/80">Unsubscribe from marketing communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-ice-blue/80 leading-relaxed">
                                To exercise any of these rights, please contact us using the information provided in the 
                                Contact Us section below. We will respond to your request within the timeframe required by 
                                applicable law.
                            </p>
                        </div>
                    </div>

                    {/* 6. Cookies and Tracking */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Database className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">6. Cookies and Tracking Technologies</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                We use cookies and similar tracking technologies to enhance your browsing experience, analyze 
                                website traffic, and understand where our visitors come from. Cookies are small text files 
                                stored on your device by your web browser.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Types of Cookies We Use</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function and cannot be switched off.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-gold mt-1">•</span>
                                            <span className="text-ice-blue/80"><strong className="text-white">Functional Cookies:</strong> Enable enhanced functionality and personalization.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-ice-blue/80 leading-relaxed">
                                You can control cookies through your browser settings. Please note that disabling cookies may 
                                affect the functionality of our website. For more detailed information, please see our{" "}
                                <Link href="/cookie-policy" className="text-gold hover:underline">
                                    Cookie Policy
                                </Link>.
                            </p>
                        </div>
                    </div>

                    {/* 7. Data Retention */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Database className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">7. Data Retention</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                We retain your personal information only for as long as necessary to fulfill the purposes 
                                outlined in this Privacy Policy, unless a longer retention period is required or permitted 
                                by law.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <CheckIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <p className="text-ice-blue/80">
                                        <strong className="text-white">Project Records:</strong> Retained for the duration of the warranty period plus any additional time required by law.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <p className="text-ice-blue/80">
                                        <strong className="text-white">Contact Information:</strong> Retained while your account is active or as needed to provide services.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                                    <p className="text-ice-blue/80">
                                        <strong className="text-white">Marketing Data:</strong> Retained until you opt out or withdraw consent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 8. Third-Party Links */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">8. Third-Party Links</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed">
                                Our website may contain links to third-party websites or services that are not owned or 
                                controlled by Bayroof Constructions. We are not responsible for the privacy practices or 
                                content of these third-party sites. We encourage you to review the privacy policies of any 
                                third-party websites you visit.
                            </p>
                        </div>
                    </div>

                    {/* 9. Children's Privacy */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">9. Children's Privacy</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly 
                                collect personal information from children. If we become aware that we have inadvertently 
                                collected personal information from a child under 18, we will take steps to delete that 
                                information as quickly as possible.
                            </p>
                        </div>
                    </div>

                    {/* 10. Changes to This Policy */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">10. Changes to This Privacy Policy</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-6">
                                We reserve the right to update or modify this Privacy Policy at any time. When we make 
                                changes, we will revise the "Last Updated" date at the top of this page. We encourage 
                                you to review this policy periodically to stay informed about our privacy practices.
                            </p>
                            <p className="text-ice-blue/80 leading-relaxed">
                                Material changes will be communicated to you via email or through a prominent notice on 
                                our website prior to the change becoming effective. Your continued use of our services 
                                after any modifications constitutes acceptance of the updated policy.
                            </p>
                        </div>
                    </div>

                    {/* 11. Contact Us */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                <Phone className="w-6 h-6 text-gold" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">11. Contact Us</h2>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                            <p className="text-ice-blue/80 leading-relaxed mb-8">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                                data practices, please do not hesitate to contact us:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
                                <h3 className="text-xl font-semibold text-white">Bayroof Constructions</h3>
                                <div className="space-y-3 mt-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gold">📧</span>
                                        <p className="text-ice-blue/80">Email: privacy@bayroof.com</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gold">📞</span>
                                        <p className="text-ice-blue/80">Phone: +91 XXXXXXXXXX</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gold">📍</span>
                                        <p className="text-ice-blue/80">Address: Your Business Address, Kerala, India</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gold">⏰</span>
                                        <p className="text-ice-blue/80">Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-ice-blue/80 leading-relaxed mt-6">
                                We aim to respond to all privacy-related inquiries within 2-3 business days. If you are 
                                not satisfied with our response, you have the right to lodge a complaint with your local 
                                data protection authority.
                            </p>
                        </div>
                    </div>

                    {/* Consent Acknowledgment */}
                    <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8 lg:p-10 mb-16">
                        <div className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Your Consent</h3>
                                <p className="text-ice-blue/80 leading-relaxed">
                                    By using our website and services, you consent to the collection, use, and disclosure 
                                    of your information as described in this Privacy Policy. If you do not agree with any 
                                    part of this policy, please discontinue use of our website and services immediately.
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

// Helper component for check icon
function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}