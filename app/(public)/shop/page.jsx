'use client'
import { Suspense } from "react"
import { useState } from 'react'
import ProductCard from "@/components/ProductCard"
import { Filter, X, Check } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSelector } from "react-redux"
import { categories } from "@/assets/assets"

function ShopContent() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const router = useRouter()

    const products = useSelector(state => state.product.list)

    const [selectedCategories, setSelectedCategories] = useState([])
    const [priceRange, setPriceRange] = useState([0, 200])
    const [minRating, setMinRating] = useState(0)
    const [showMobileFilter, setShowMobileFilter] = useState(false)

    // Filter logic
    const filteredProducts = products.filter(product => {
        // Search filter
        if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
            return false
        }
        
        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false
        }
        
        // Price filter
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
            return false
        }
        
        // Rating filter (calculate average rating if available)
        if (minRating > 0 && product.rating) {
            const avgRating = product.rating.length > 0 
                ? product.rating.reduce((sum, r) => sum + r.rating, 0) / product.rating.length 
                : 0
            if (avgRating < minRating) {
                return false
            }
        }
        
        return true
    })

    const toggleCategory = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const clearFilters = () => {
        setSelectedCategories([])
        setPriceRange([0, 200])
        setMinRating(0)
        if (search) router.push('/shop')
    }

    const FilterSidebar = ({ isMobile = false }) => (
        <div className={`bg-white ${isMobile ? 'p-6' : 'p-6 rounded-lg border border-slate-200'}`}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                    <Filter size={20} />
                    Filters
                </h2>
                {isMobile && (
                    <button onClick={() => setShowMobileFilter(false)} className="p-1">
                        <X size={24} />
                    </button>
                )}
            </div>

            <button 
                onClick={clearFilters}
                className="text-sm text-emerald-600 hover:text-emerald-700 mb-6 font-medium"
            >
                Clear All Filters
            </button>

            {/* Categories */}
            <div className="mb-6 pb-6 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Categories</h3>
                <div className="space-y-2">
                    {categories.map(category => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                selectedCategories.includes(category) 
                                    ? 'bg-emerald-500 border-emerald-500' 
                                    : 'border-slate-300 group-hover:border-emerald-400'
                            }`}>
                                {selectedCategories.includes(category) && (
                                    <Check size={14} className="text-white" />
                                )}
                            </div>
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleCategory(category)}
                                className="hidden"
                            />
                            <span className="text-sm text-slate-600 group-hover:text-slate-800">{category}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6 pb-6 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Price Range</h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                            placeholder="Min"
                        />
                        <span className="text-slate-400">-</span>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                            placeholder="Max"
                        />
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full accent-emerald-500"
                    />
                </div>
            </div>

            {/* Rating Filter */}
            <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map(rating => (
                        <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="rating"
                                checked={minRating === rating}
                                onChange={() => setMinRating(rating)}
                                className="w-4 h-4 text-emerald-600 accent-emerald-500"
                            />
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-500 text-sm">★</span>
                                <span className="text-sm text-slate-600 group-hover:text-slate-800">{rating} & up</span>
                            </div>
                        </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                            type="radio"
                            name="rating"
                            checked={minRating === 0}
                            onChange={() => setMinRating(0)}
                            className="w-4 h-4 text-emerald-600 accent-emerald-500"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-800">All Ratings</span>
                    </label>
                </div>
            </div>

            {isMobile && (
                <button
                    onClick={() => setShowMobileFilter(false)}
                    className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                    Apply Filters
                </button>
            )}
        </div>
    )

    return (
        <div className="min-h-[70vh] mx-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="my-6">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl text-slate-500 flex items-center gap-2">
                            All <span className="text-slate-700 font-medium">Products</span>
                        </h1>
                        <button 
                            onClick={() => setShowMobileFilter(true)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium"
                        >
                            <Filter size={18} />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Active Filters */}
                {(selectedCategories.length > 0 || minRating > 0 || search) && (
                    <div className="mb-6 flex flex-wrap gap-2">
                        {search && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                Search: {search}
                                <button onClick={() => router.push('/shop')} className="ml-1">
                                    <X size={14} />
                                </button>
                            </span>
                        )}
                        {selectedCategories.map(cat => (
                            <span key={cat} className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                {cat}
                                <button onClick={() => toggleCategory(cat)} className="ml-1">
                                    <X size={14} />
                                </button>
                            </span>
                        ))}
                        {minRating > 0 && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                Rating: {minRating}+ ★
                                <button onClick={() => setMinRating(0)} className="ml-1">
                                    <X size={14} />
                                </button>
                            </span>
                        )}
                    </div>
                )}

                {/* Main Content */}
                <div className="flex gap-6">
                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-6">
                            <FilterSidebar />
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <main className="flex-1">
                        <div className="mb-4 text-sm text-slate-600">
                            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                        </div>
                        
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mb-32">
                                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-slate-700 mb-2">No products found</h3>
                                <p className="text-slate-500 mb-4">Try adjusting your filters or search terms</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {showMobileFilter && (
                <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                    <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white overflow-y-auto">
                        <FilterSidebar isMobile={true} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default function Shop() {
    return (
        <Suspense fallback={<div>Loading shop...</div>}>
            <ShopContent />
        </Suspense>
    )
}