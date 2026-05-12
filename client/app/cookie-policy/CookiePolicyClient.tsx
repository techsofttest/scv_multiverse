"use client";

import Link from "next/link";
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useGlobalData } from "../../context/GlobalDataContext";

export default function CookiePolicyClient() {
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
                        <Cookie className="w-16 h-16 text-gold mx-auto mb-6" />
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Cookie Policy
                        </h1>
                        <p className="text-lg text-ice-blue/80 max-w-2xl mx-auto">
                            Learn about how we use cookies and similar technologies to improve your experience.
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
                        <span className="text-white">Cookie Policy</span>
                    </div>

                    {/* Last Updated */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
                        <div className="flex items-center gap-3">
                            <Cookie className="w-5 h-5 text-gold" />
                            <p className="text-ice-blue/70">
                                <strong className="text-white">Last Updated:</strong> May 7, 2026
                            </p>
                        </div>
                    </div>

                    {/* Introduction - What Are Cookies */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12 mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <Cookie className="w-8 h-8 text-gold" />
                            <h2 className="text-3xl font-bold text-white">What Are Cookies?</h2>
                        </div>
                        <p className="text-ice-blue/80 text-lg leading-relaxed mb-6">
                            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                            when you visit our website. They help us provide you with a better browsing experience by 
                            remembering your preferences, understanding how you use our site, and ensuring certain features 
                            work correctly.
                        </p>
                        <p className="text-ice-blue/80 text-lg leading-relaxed mb-6">
                            Cookies may be "session cookies" which are deleted when you close your browser, or "persistent 
                            cookies" which remain on your device for a set period or until you delete them manually.
                        </p>
                        <p className="text-ice-blue/80 text-lg leading-relaxed">
                            This policy explains what cookies we use, why we use them, and how you can control your 
                            cookie preferences.
                        </p>
                    </div>

                    {/* Cookie Categories */}
                    <div className="space-y-16">
                        {/* 1. Essential Cookies */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">1. Essential Cookies</h2>
                                    <span className="inline-block mt-2 text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-semibold">
                                        Always Active
                                    </span>
                                </div>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-8">
                                    These cookies are strictly necessary for the website to function properly. They enable core 
                                    functionality such as security, network management, and accessibility. You may disable these 
                                    by changing your browser settings, but this may affect how the website functions.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Session Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed">
                                            Maintain your browsing session while navigating our website. These cookies are temporary 
                                            and are deleted when you close your browser.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <p className="text-ice-blue/60 text-xs">Duration: Session</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Security Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed">
                                            Protect against security threats, prevent fraud, and ensure the safety of your data 
                                            when interacting with our website.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <p className="text-ice-blue/60 text-xs">Duration: Persistent</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Load Balancing Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed">
                                            Distribute traffic across multiple servers to ensure optimal performance and 
                                            prevent server overload.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <p className="text-ice-blue/60 text-xs">Duration: Session</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed">
                                            Remember your cookie preferences and consent choices when you visit our website.
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-white/10">
                                            <p className="text-ice-blue/60 text-xs">Duration: 12 months</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Analytics Cookies */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">2. Analytics Cookies</h2>
                                    <span className="inline-block mt-2 text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-semibold">
                                        Optional
                                    </span>
                                </div>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-8">
                                    These cookies help us understand how visitors interact with our website by collecting and 
                                    reporting information anonymously. They help us improve our website's performance and user 
                                    experience based on real usage data.
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Google Analytics</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Tracks page views, session duration, bounce rates, and user behavior patterns to 
                                            help us optimize our website content and structure.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <p className="text-ice-blue/60"><strong className="text-white">Purpose:</strong> Website improvement and user experience optimization</p>
                                            <p className="text-ice-blue/60"><strong className="text-white">Data Collected:</strong> Anonymized IP address, browser type, pages visited, time on site</p>
                                            <p className="text-ice-blue/60"><strong className="text-white">Duration:</strong> Up to 2 years</p>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Performance Metrics</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Monitors website speed, technical performance, and identifies areas for 
                                            improvement in page load times and responsiveness.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <p className="text-ice-blue/60"><strong className="text-white">Purpose:</strong> Technical performance monitoring</p>
                                            <p className="text-ice-blue/60"><strong className="text-white">Data Collected:</strong> Page load times, error rates, server response times</p>
                                            <p className="text-ice-blue/60"><strong className="text-white">Duration:</strong> Session to 1 year</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Functional Cookies */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">3. Functional Cookies</h2>
                                    <span className="inline-block mt-2 text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full font-semibold">
                                        Optional
                                    </span>
                                </div>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-8">
                                    These cookies enable enhanced functionality and personalization features. They may be set 
                                    by us or by third-party providers whose services we have added to our pages.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Preference Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Remember your choices such as language preferences, location settings, and 
                                            display preferences to provide a more personalized experience.
                                        </p>
                                        <p className="text-ice-blue/60 text-xs">Duration: Up to 1 year</p>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Form Data Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Save information you've entered in forms to prevent data loss during navigation 
                                            and make it easier to complete forms on return visits.
                                        </p>
                                        <p className="text-ice-blue/60 text-xs">Duration: Session to 30 days</p>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Video Player Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Remember your video playback preferences, volume settings, and viewing history 
                                            for embedded video content.
                                        </p>
                                        <p className="text-ice-blue/60 text-xs">Duration: Up to 1 year</p>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Live Chat Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Support the functionality of any live chat features we may offer, remembering 
                                            your chat history and preferences.
                                        </p>
                                        <p className="text-ice-blue/60 text-xs">Duration: Session to 6 months</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Marketing Cookies */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white">4. Marketing Cookies</h2>
                                    <span className="inline-block mt-2 text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full font-semibold">
                                        Optional
                                    </span>
                                </div>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-8">
                                    These cookies are used to deliver advertisements that are more relevant to you and your 
                                    interests. They are also used to limit the number of times you see an advertisement and 
                                    help measure the effectiveness of advertising campaigns.
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Advertising Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Track your browsing habits to show you relevant ads for our services on other 
                                            websites you visit. These help us measure the effectiveness of our advertising.
                                        </p>
                                        <p className="text-ice-blue/60 text-xs">Duration: Up to 2 years</p>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Social Media Cookies</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            Enable sharing buttons and social media integration. These cookies may track 
                                            your browsing across different websites to build a profile of your interests.
                                        </p>
                                        <p className="text-ice-blue/60 text-xs">Duration: Varies by platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Cookie Management */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-gold" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">5. Managing Your Cookies</h2>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Browser Settings</h3>
                                        <p className="text-ice-blue/80 leading-relaxed mb-4">
                                            You can control and manage cookies through your browser settings. Most browsers 
                                            allow you to:
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">View what cookies are stored on your device</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">Delete all or specific cookies</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">Block third-party cookies</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">Block cookies from specific websites</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">Block all cookies from being set</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">Clear all cookies when you close your browser</span>
                                            </li>
                                        </ul>
                                        <p className="text-ice-blue/80 leading-relaxed">
                                            Instructions for managing cookies in popular browsers:
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                                <p className="text-white font-semibold text-sm">Chrome</p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                                <p className="text-white font-semibold text-sm">Firefox</p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                                <p className="text-white font-semibold text-sm">Safari</p>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-4 text-center">
                                                <p className="text-white font-semibold text-sm">Edge</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Cookie Consent Tool</h3>
                                        <p className="text-ice-blue/80 leading-relaxed mb-4">
                                            When you first visit our website, you will see a cookie banner where you can 
                                            choose which types of cookies you want to accept. You can change your preferences 
                                            at any time by clicking the "Cookie Settings" link in the footer of our website.
                                        </p>
                                        <p className="text-ice-blue/80 leading-relaxed">
                                            Please note that disabling certain cookies may affect the functionality of our 
                                            website and limit your ability to use some features.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Opting Out of Targeted Advertising</h3>
                                        <p className="text-ice-blue/80 leading-relaxed">
                                            You can opt out of targeted advertising from many third-party ad networks through:
                                        </p>
                                        <ul className="space-y-3 mt-4">
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">
                                                    <strong className="text-white">Network Advertising Initiative (NAI):</strong>{" "}
                                                    <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                                                        optout.networkadvertising.org
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold mt-1">•</span>
                                                <span className="text-ice-blue/80">
                                                    <strong className="text-white">Digital Advertising Alliance (DAA):</strong>{" "}
                                                    <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                                                        optout.aboutads.info
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6. Third-Party Cookies */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                                    <Cookie className="w-6 h-6 text-red-500" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">6. Third-Party Cookies</h2>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-8">
                                    Some cookies are placed by third-party services that appear on our pages. We do not 
                                    control the setting of these cookies and recommend that you check the third-party 
                                    websites for more information about their cookies and how to manage them.
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Google Services</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed mb-3">
                                            We use Google Analytics and potentially other Google services. Google's privacy 
                                            policy and cookie information can be found at:
                                        </p>
                                        <Link 
                                            href="https://policies.google.com/privacy" 
                                            target="_blank"
                                            className="text-gold hover:underline text-sm"
                                        >
                                            Google Privacy Policy →
                                        </Link>
                                    </div>
                                    
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-white mb-3">Social Media Plugins</h3>
                                        <p className="text-ice-blue/80 text-sm leading-relaxed">
                                            If we include social media sharing buttons or embedded content from platforms 
                                            like Facebook, Instagram, or YouTube, these platforms may set their own cookies 
                                            for tracking and personalization purposes.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-gold/5 border border-gold/20 rounded-xl p-6">
                                        <p className="text-ice-blue/80 text-sm leading-relaxed">
                                            <strong className="text-white">Note:</strong> We are not responsible for the 
                                            cookie practices of third-party websites. We encourage you to review the privacy 
                                            and cookie policies of any third-party services you interact with.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7. Updates to Policy */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-gold" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">7. Updates to This Policy</h2>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-6">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices, 
                                    technologies, legal requirements, or for other operational reasons. When we make changes, 
                                    we will update the "Last Updated" date at the top of this page.
                                </p>
                                <p className="text-ice-blue/80 leading-relaxed mb-6">
                                    For material changes, we will provide a more prominent notice, which may include an 
                                    email notification for registered users or a notice on our website.
                                </p>
                                <p className="text-ice-blue/80 leading-relaxed">
                                    Your continued use of our website after any changes indicates your acceptance of the 
                                    updated Cookie Policy. We encourage you to review this policy periodically to stay 
                                    informed about our use of cookies.
                                </p>
                            </div>
                        </div>

                        {/* 8. Contact Information */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                                    <Cookie className="w-6 h-6 text-gold" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">8. Contact Us</h2>
                            </div>
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
                                <p className="text-ice-blue/80 leading-relaxed mb-8">
                                    If you have any questions, concerns, or requests regarding our use of cookies or this 
                                    Cookie Policy, please do not hesitate to contact us:
                                </p>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4">
                                    <h3 className="text-xl font-semibold text-white">Bayroof Constructions</h3>
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📧</span>
                                            <p className="text-ice-blue/80">Email: {contact?.email || 'privacy@bayroof.com'}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📞</span>
                                            <p className="text-ice-blue/80">Phone: {contact?.phone || '+91 XXXXXXXXXX'}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">📍</span>
                                            <p className="text-ice-blue/80">Address: {contact?.address || 'Your Business Address, Kerala, India'}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gold">⏰</span>
                                            <p className="text-ice-blue/80">Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-ice-blue/80 leading-relaxed mt-6">
                                    We aim to respond to all cookie-related inquiries within 2-3 business days.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Consent Acknowledgment */}
                    <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8 lg:p-10 mb-16 mt-16">
                        <div className="flex items-start gap-4">
                            <Cookie className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Your Consent</h3>
                                <p className="text-ice-blue/80 leading-relaxed">
                                    By using our website, you consent to the use of cookies as described in this Cookie 
                                    Policy. You can manage your cookie preferences at any time through your browser 
                                    settings or our cookie consent tool. If you do not agree to our use of cookies, 
                                    please adjust your browser settings or discontinue use of our website.
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