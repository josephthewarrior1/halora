'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulasi pengiriman form
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
            
            // Reset status setelah 5 detik
            setTimeout(() => setSubmitStatus(null), 5000)
        }, 1500)
    }

    return (
        <div className="bg-pink-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
                        Hubungi Kami
                    </h1>
                    <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
                        Punya pertanyaan? Kami siap membantu! Tim customer service kami akan dengan senang hati menjawab semua pertanyaan Anda.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-10">
                        {[
                            {
                                icon: Mail,
                                title: "Email Us",
                                info: "support@halalbeauty.com",
                                subInfo: "info@halalbeauty.com"
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                info: "+62 812-3456-7890",
                                subInfo: "+62 821-9876-5432"
                            },
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                info: "Jakarta Selatan",
                                subInfo: "Indonesia"
                            },
                            {
                                icon: Clock,
                                title: "Working Hours",
                                info: "Mon - Fri: 9AM - 6PM",
                                subInfo: "Sat: 9AM - 2PM"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-gradient-to-br from-pink-200 to-purple-200 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="text-[#8C2155]" size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-1">
                                    {item.info}
                                </p>
                                <p className="text-slate-500 text-xs">
                                    {item.subInfo}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <MessageCircle className="text-[#8C2155]" size={32} />
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                                    Send Message
                                </h2>
                            </div>
                            
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    ✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                                        placeholder="email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                                        placeholder="+62 812-3456-7890"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Subjek *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
                                        placeholder="Perihal pesan Anda"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Pesan *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition resize-none"
                                        placeholder="Tuliskan pesan Anda di sini..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#8C2155] to-[#FF5F88] text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Kirim Pesan
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Map & Social Media */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    Lokasi Kami
                                </h3>
                                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <MapPin size={48} className="text-[#8C2155] mx-auto mb-3" />
                                        <p className="text-slate-700 font-semibold">Jakarta Selatan</p>
                                        <p className="text-slate-600 text-sm mt-2">Indonesia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    Follow Us
                                </h3>
                                <p className="text-slate-600 text-sm mb-6">
                                    Ikuti media sosial kami untuk update produk terbaru, promo menarik, dan tips kecantikan!
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: Instagram, name: "Instagram", color: "from-pink-500 to-purple-500" },
                                        { icon: Facebook, name: "Facebook", color: "from-blue-500 to-blue-600" },
                                        { icon: Twitter, name: "Twitter", color: "from-sky-400 to-blue-500" }
                                    ].map((social, index) => (
                                        <button
                                            key={index}
                                            className={`bg-gradient-to-br ${social.color} p-4 rounded-xl text-white hover:shadow-lg hover:scale-105 transition-all flex flex-col items-center gap-2`}
                                        >
                                            <social.icon size={28} />
                                            <span className="text-xs font-medium">{social.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Link */}
                            <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 p-6 rounded-2xl text-center">
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    Need Quick Answers?
                                </h3>
                                <p className="text-slate-700 text-sm mb-4">
                                    Cek FAQ kami untuk jawaban cepat atas pertanyaan umum
                                </p>
                                <button className="bg-white text-[#8C2155] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                                    View FAQ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Time Info */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
                        Komitmen Kami
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Fast Response",
                                description: "Kami merespons email dalam 24 jam"
                            },
                            {
                                title: "Friendly Support",
                                description: "Tim yang ramah dan helpful"
                            },
                            {
                                title: "Solution Focused",
                                description: "Kami mencari solusi terbaik untuk Anda"
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-pink-50 rounded-xl">
                                <h3 className="text-lg font-semibold text-[#8C2155] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact