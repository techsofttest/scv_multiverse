"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
// import PreFooterCTA from "@/components/PreFooterCTA";
import { useGlobalData } from "@/context/GlobalDataContext";
interface BannerData {
    title: string;
    content: string;
    image: string;
}
export default function ContactPage() {
    const { contacts } = useGlobalData();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [banner, setBanner] = useState<BannerData | null>(null);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/contact`)
            .then((res) => res.json())
            .then((data) => {
                if (data.banner) {
                    setBanner(data.banner);
                }

            })
            .catch((err) => {
                console.error("Failed to fetch contact banner:", err);
                setLoading(false);
            });
    }, []);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact-submit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Something went wrong");

            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="w-full bg-white">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
                {banner?.image && (
                    <Image
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}${banner.image}`}
                        alt="Contact Us"
                        fill
                        priority
                        className="object-cover opacity-40"
                    />
                )}
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                        {banner?.title}
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        {banner?.content}
                    </p>
                </div>
            </section>

            {/* CONTACT INFO & FORM SECTION */}
            <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* LEFT: CONTACT INFO */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-deep-navy mb-8">
                                Contact Information
                            </h2>
                        </div>

                        {/* PHONE */}
                        {contacts?.phone && (
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Phone className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-navy mb-1">Phone</h3>
                                    <a href={`tel:${contacts.phone}`} className="text-gray-600 hover:text-gold transition-colors">
                                        {contacts.phone}
                                    </a>
                                    {contacts.phone2 && (
                                        <a href={`tel:${contacts.phone2}`} className="block text-gray-600 hover:text-gold transition-colors">
                                            {contacts.phone2}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* EMAIL */}
                        {contacts?.email && (
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Mail className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-navy mb-1">Email</h3>
                                    <a href={`mailto:${contacts.email}`} className="text-gray-600 hover:text-gold transition-colors">
                                        {contacts.email}
                                    </a>
                                    {contacts.email2 && (
                                        <a href={`mailto:${contacts.email2}`} className="block text-gray-600 hover:text-gold transition-colors">
                                            {contacts.email2}
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ADDRESS */}
                        {contacts?.address && (
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <MapPin className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-deep-navy mb-1">Address</h3>
                                    <div
                                        className="text-gray-600"
                                        dangerouslySetInnerHTML={{ __html: contacts.address }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* BUSINESS HOURS */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <Clock className="w-6 h-6 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-deep-navy mb-1">Business Hours</h3>
                                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                <p className="text-gray-600">Sunday: Closed</p>
                            </div>
                        </div>

                        {/* WHATSAPP */}
                        {contacts?.whatsapp && (
                            <a
                                href={`https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.9 1.208l-.353.213-3.657-.761.776 3.582-.235.364a9.86 9.86 0 001.45 5.86 9.88 9.88 0 007.687 3.722h.006c2.656 0 5.155-.854 7.305-2.45l.365-.25 3.699.758-.813-3.65.232-.367a9.86 9.86 0 00-1.677-5.915 9.88 9.88 0 00-7.654-3.699z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        )}
                    </div>

                    {/* RIGHT: CONTACT FORM */}
                    <form onSubmit={handleSubmit} className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-deep-navy mb-8">Send us a Message</h2>

                        {submitted && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                            </div>
                        )}

                        {error && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                                {error}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* NAME */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    // value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400"
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    // value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* PHONE */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    // value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400"
                                    placeholder="+91 XXXXXXXXXX"
                                />
                            </div>

                            {/* SUBJECT */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    // value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400"
                                    placeholder="How can we help?"
                                />
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                name="message"
                                // value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder-gray-400"
                                placeholder="Tell us more about your project..."
                            />
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gold hover:bg-gold/90 text-white font-semibold py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>

            {/* MAP SECTION */}
            {contacts?.location && (
                <section className="w-full bg-gray-100 py-12">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                        <h2 className="text-3xl font-bold text-deep-navy mb-8 text-center">Find Us</h2>
                        <div className="w-full h-[450px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <iframe
                                src={contacts.location}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bayroof Office Location"
                            ></iframe>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA SECTION */}
            {/* <PreFooterCTA /> */}
        </div>
    );
}
