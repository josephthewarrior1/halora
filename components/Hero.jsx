'use client'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import CategoriesMarquee from './CategoriesMarquee'
import { assets } from "@/assets/assets"

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'Rp'
    const router = useRouter()

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                
                {/* LEFT MAIN BEAUTY BANNER */}
                <div className='relative flex-1 flex flex-col bg-pink-200 rounded-3xl xl:min-h-[420px] group overflow-hidden'>
                    <div className='p-5 sm:p-16'>
                        <div 
                            onClick={() => router.push('/shop')}
                            className='inline-flex items-center gap-3 bg-pink-300 text-pink-600 pr-4 p-1 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-pink-400 transition-colors'
                        >
                            <span className='bg-pink-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs'>
                                NEW
                            </span>
                            Halal Beauty Collection
                            <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>

                        <h2 className='text-3xl sm:text-5xl leading-[1.2] my-4 font-semibold bg-gradient-to-r from-[#8C2155] to-[#FF5F88] bg-clip-text text-transparent max-w-sm sm:max-w-md'>
                            Glow Up With Halal Skincare 
                        </h2>

                        <p className='text-slate-800 text-sm mt-4 sm:mt-6 max-w-sm'>
                            Produk halal aman untuk kulitmu setiap hari. Mulai dari hanya
                        </p>

                        <p className='text-3xl font-bold mt-1'>
                            {currency} 19.000
                        </p>

                        <button 
                            onClick={() => router.push('/shop')}
                            className='bg-[#8C2155] text-white text-sm py-3 px-8 sm:py-4 sm:px-12 mt-6 rounded-md hover:bg-[#761A48] hover:scale-105 active:scale-95 transition'
                        >
                            SHOP NOW
                        </button>
                    </div>

                    {/* Product Image */}
                    <Image
                        className='absolute bottom-0 right-0 translate-x-[10%] sm:translate-x-0 object-contain drop-shadow-xl'
                        src={assets.liptint}
                        alt="Lip Tint"
                        width={280}
                        height={380}
                    />
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
                    
                    {/* CARD 1 - Best Sellers */}
                    <div 
                        onClick={() => router.push('/shop')}
                        className='flex-1 flex items-center justify-between bg-purple-200 rounded-3xl p-6 px-8 group cursor-pointer hover:bg-purple-300 transition-colors'
                    >
                        <div>
                            <p className='text-3xl font-semibold bg-gradient-to-r from-[#4A1C77] to-[#C882E8] bg-clip-text text-transparent max-w-40'>
                                Best Sellers
                            </p>
                            <p className='flex items-center gap-1 mt-4 font-medium'>
                                Shop Now 
                                <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} />
                            </p>
                        </div>
                        <Image
                            className='w-24 sm:w-28 md:w-32 object-contain'
                            src="/images/hero/serum.png"
                            alt="Serum"
                            width={120}
                            height={120}
                        />
                    </div>

                    {/* CARD 2 - Discount 20% */}
                    <div 
                        onClick={() => router.push('/shop')}
                        className='flex-1 flex items-center justify-between bg-blue-200 rounded-3xl p-6 px-8 group cursor-pointer hover:bg-blue-300 transition-colors'
                    >
                        <div>
                            <p className='text-3xl font-semibold bg-gradient-to-r from-[#21437F] to-[#7CCBFF] bg-clip-text text-transparent max-w-40'>
                                Discount 20%
                            </p>
                            <p className='flex items-center gap-1 mt-4 font-medium'>
                                Grab Deals 
                                <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} />
                            </p>
                        </div>
                        <Image
                            className='w-24 sm:w-28 md:w-32 object-contain'
                            src="/images/hero/daycream.png"
                            alt="Day Cream"
                            width={120}
                            height={120}
                        />
                    </div>

                </div>
            </div>

            <CategoriesMarquee />
        </div>
    )
}

export default Hero