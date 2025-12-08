'use client'
import { Heart, Shield, Leaf, Star, Users, Award, TrendingUp, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { assets } from '@/assets/assets'

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
                            We are pioneers in Indonesia's halal beauty industry, committed to delivering high-quality beauty products that are safe, halal-certified, and affordable for everyone.
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
                                Our Story
                            </h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Founded in 2020, we were born from a simple yet powerful vision: every Muslim woman deserves beauty products that not only make them look beautiful but also align with their values and beliefs.
                            </p>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                We understand that beauty isn't just about outward appearance, but also about feeling confident and comfortable with the choices we make. That's why every product we create is halal-certified and made with high-quality natural ingredients.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                From skincare to makeup, we continuously innovate to bring products that are not only effective but also safe for Indonesia's sensitive skin exposed to tropical climates.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden aspect-square">
                                <Image 
                                    src={assets.skincare}
                                    alt="Skincare Products" 
                                    className="w-full h-full object-cover"
                                    width={600}
                                    height={600}
                                />
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
                            Our Values
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Principles that form the foundation of every decision and product we create
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "100% Halal",
                                description: "All products are halal-certified by MUI and international organizations"
                            },
                            {
                                icon: Leaf,
                                title: "Natural Ingredients",
                                description: "Using carefully selected natural ingredients that are safe for skin"
                            },
                            {
                                icon: Heart,
                                title: "Cruelty Free",
                                description: "No animal testing in our production process"
                            },
                            {
                                icon: Star,
                                title: "Premium Quality",
                                description: "Premium quality at affordable prices"
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
                                { icon: Award, number: "50+", label: "Available Products" },
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
                            <div className="rounded-3xl overflow-hidden aspect-square">
                                <Image 
                                    src={assets.about1}
                                    alt="Halal Beauty Products" 
                                    className="w-full h-full object-cover"
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                We are committed to making halal beauty products accessible to everyone. Regardless of age, skin type, or budget, everyone deserves quality products that make them feel beautiful and confident.
                            </p>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Through continuous research and innovation, we strive to deliver cutting-edge formulas that combine modern technology with traditional wisdom, creating products that truly work for Indonesian skin.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 bg-pink-50 p-4 rounded-xl">
                                    <p className="text-2xl font-bold text-[#8C2155] mb-1">Innovation</p>
                                    <p className="text-sm text-slate-600">Continuously evolving through research</p>
                                </div>
                                <div className="flex-1 bg-pink-50 p-4 rounded-xl">
                                    <p className="text-2xl font-bold text-[#8C2155] mb-1">Quality</p>
                                    <p className="text-sm text-slate-600">International standards</p>
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
                        Join thousands of Indonesian women who have already experienced the benefits of our halal beauty products. Start your natural beauty journey today!
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