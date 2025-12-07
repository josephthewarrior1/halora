'use client'
import { Heart, Shield, Leaf, Star, Users, Award, TrendingUp, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter()
    return (
        <div className="bg-pink-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 py-20 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8C2155] to-[#FF5F88] bg-clip-text text-transparent mb-6">
                            About Our Brand
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Kami adalah pioneer dalam industri halal beauty di Indonesia, berkomitmen untuk menghadirkan produk kecantikan berkualitas tinggi yang aman, halal, dan terjangkau untuk semua.
                        </p>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 rounded-full opacity-50 blur-xl"></div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                                Cerita Kami
                            </h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Dimulai pada tahun 2020, kami lahir dari sebuah visi sederhana namun kuat: setiap wanita muslimah berhak mendapatkan produk kecantikan yang tidak hanya membuat mereka tampil cantik, tapi juga sejalan dengan nilai-nilai dan keyakinan mereka.
                            </p>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Kami memahami bahwa kecantikan bukan hanya tentang penampilan luar, tetapi juga tentang merasa percaya diri dan nyaman dengan pilihan yang kita buat. Itulah mengapa setiap produk kami telah tersertifikasi halal dan diproduksi dengan bahan-bahan alami berkualitas tinggi.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Dari skincare hingga makeup, kami terus berinovasi untuk menghadirkan produk yang tidak hanya efektif, tetapi juga aman untuk kulit sensitif Indonesia yang terpapar iklim tropis.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-pink-300 to-purple-300 rounded-3xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <Sparkles size={80} className="text-white mx-auto mb-4" />
                                    <p className="text-white text-2xl font-bold">4+ Years</p>
                                    <p className="text-white/90">Melayani Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                            Nilai-Nilai Kami
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Prinsip yang menjadi fondasi setiap keputusan dan produk yang kami ciptakan
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "100% Halal",
                                description: "Semua produk tersertifikasi halal oleh MUI dan lembaga internasional"
                            },
                            {
                                icon: Leaf,
                                title: "Natural Ingredients",
                                description: "Menggunakan bahan alami pilihan yang aman untuk kulit"
                            },
                            {
                                icon: Heart,
                                title: "Cruelty Free",
                                description: "Tidak ada testing pada hewan dalam proses produksi"
                            },
                            {
                                icon: Star,
                                title: "Premium Quality",
                                description: "Kualitas premium dengan harga yang terjangkau"
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                                <div className="bg-gradient-to-br from-pink-200 to-purple-200 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    <value.icon className="text-[#8C2155]" size={28} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 rounded-3xl p-8 sm:p-12">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Users, number: "100K+", label: "Happy Customers" },
                                { icon: Award, number: "50+", label: "Produk Tersedia" },
                                { icon: TrendingUp, number: "98%", label: "Satisfaction Rate" },
                                { icon: Star, number: "4.8/5", label: "Average Rating" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-white/50 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="text-[#8C2155]" size={32} />
                                    </div>
                                    <p className="text-3xl sm:text-4xl font-bold text-[#8C2155] mb-2">
                                        {stat.number}
                                    </p>
                                    <p className="text-slate-700 font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <Heart size={80} className="text-white mx-auto mb-4" />
                                    <p className="text-white text-xl font-semibold">Halal Beauty</p>
                                    <p className="text-white/90 mt-2">For Everyone</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                                Misi Kami
                            </h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Kami berkomitmen untuk membuat produk halal beauty accessible untuk semua kalangan. Tidak peduli usia, tipe kulit, atau budget, setiap orang berhak mendapatkan produk berkualitas yang membuat mereka merasa cantik dan percaya diri.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Dengan terus melakukan riset dan inovasi, kami berusaha menghadirkan formula terbaru yang menggabungkan teknologi modern dengan wisdom tradisional, menciptakan produk yang truly works untuk kulit Indonesia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 bg-pink-50 p-4 rounded-xl">
                                    <p className="text-2xl font-bold text-[#8C2155] mb-1">Inovasi</p>
                                    <p className="text-sm text-slate-600">Terus berkembang dengan riset</p>
                                </div>
                                <div className="flex-1 bg-pink-50 p-4 rounded-xl">
                                    <p className="text-2xl font-bold text-[#8C2155] mb-1">Kualitas</p>
                                    <p className="text-sm text-slate-600">Standard internasional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                        Join Our Beauty Journey
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan wanita Indonesia yang sudah merasakan manfaat produk halal beauty kami. Mulai perjalanan kecantikan alami kamu hari ini!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => router.push('/shop')}
                            className="bg-gradient-to-r from-[#8C2155] to-[#FF5F88] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
                        >
                            Shop Now
                        </button>
                        <button 
                            onClick={() => router.push('/contact')}
                            className="bg-white border-2 border-[#8C2155] text-[#8C2155] px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-all"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About