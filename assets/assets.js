import gs_logo from "./gs_logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"
import liptint from "./liptint.png"
import serum from "./serum.png"
import vaseline from "./vaseline.png"


export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, gs_logo,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12, liptint, serum, vaseline
}

export const categories = ["Serum", "Moisturizer", "Facial Wash", "Toner", "Sunscreen", "Sheet Mask", "Cleansing Oil", "Hair Care"];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.2, review: "I was a bit skeptical at first, but this product turned out to be even better than I imagined. The quality feels premium, it's easy to use, and it delivers exactly what was promised. I've already recommended it to friends and will definitely purchase again in the future.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'L\'Oreal Paris Revitalift Serum', category:'Skincare', id:'prod_1'} },
    { id: "rat_2", rating: 5.0, review: "This product is great. I love it! You made it so simple. My skin feels so much better and smoother after using this product.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'La Roche Posay Moisturizer', category:'Skincare', id:'prod_2'} },
    { id: "rat_3", rating: 4.1, review: "This product is amazing. I love it! You made it so simple. My skin is clearer and healthier than before.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Cetaphil Facial Wash', category:'Skincare', id:'prod_3'} },
    { id: "rat_4", rating: 5.0, review: "This product is great. I love it! You made it so simple. My skin tone is more even and radiant now.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'SK-II Facial Treatment Essence', category:'Skincare', id:'prod_4'} },
    { id: "rat_5", rating: 4.3, review: "Overall, I'm very happy with this purchase. It works as described and feels durable. The only reason I didn't give it five stars is because of a small issue (such as setup taking a bit longer than expected, or packaging being slightly damaged). Still, highly recommend it for anyone looking for a reliable option.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Skin1004 Sunscreen', category:'Skincare', id:'prod_5'} },
    { id: "rat_6", rating: 5.0, review: "This product is great. I love it! You made it so simple. My skin feels hydrated and refreshed after every use.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Mediheal Sheet Mask', category:'Skincare', id:'prod_6'} },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "Halora Beauty",
    description: "At Halora Beauty, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest skincare trends, top-notch beauty products, wellness essentials, or unique lifestyle products — we've got it all under one digital roof.",
    username: "halorabeauty",
    address: "Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "contact@halora.com",
    contact: "+62 812-3456-7890",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Halora Team",
        email: "team@halora.com",
        image: gs_logo,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "L'Oreal Paris Revitalift Serum",
        description: "L'Oreal Paris Revitalift Serum with a powerful formula. It's perfect for anti-aging and rejuvenation. It's made of high-quality ingredients and comes with proven results. Revitalize your skin with this advanced serum. Indulge yourself in a world of youthful radiance with intensive skin repair. Equipped with cutting-edge Hyaluronic Acid and Pro-Retinol technology, prepare to be enthralled by visibly smoother and firmer skin.",
        mrp: 459000,
        price: 389000,
        images: [product_img1, product_img2, product_img3, product_img4],
        category: "Serum",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_2",
        name: "La Roche Posay Moisturizer",
        description: "La Roche Posay Moisturizer with a gentle formula. It's perfect for sensitive skin. It's made of dermatologically tested ingredients and provides long-lasting hydration.",
        mrp: 549000,
        price: 479000,
        images: [product_img2],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Moisturizer",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_3",
        name: "Cetaphil Gentle Facial Wash",
        description: "Cetaphil Gentle Facial Wash with a mild formula. It's perfect for daily cleansing. It's made of soap-free ingredients and maintains skin's natural moisture balance.",
        mrp: 189000,
        price: 159000,
        images: [product_img3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Facial Wash",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_4",
        name: "SK-II Facial Treatment Essence",
        description: "SK-II Facial Treatment Essence with signature Pitera formula. It's perfect for radiant skin. It's made of premium ingredients and delivers transformative results.",
        mrp: 2890000,
        price: 2590000,
        images: [product_img4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Toner",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_5",
        name: "Skin1004 Madagascar Centella Sunscreen",
        description: "Skin1004 Madagascar Centella Sunscreen with SPF 50+ PA++++. It's perfect for daily sun protection. It's made of centella asiatica extract and provides soothing benefits.",
        mrp: 279000,
        price: 229000,
        images: [product_img5],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Sunscreen",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_6",
        name: "Mediheal N.M.F Intensive Hydrating Sheet Mask",
        description: "Mediheal N.M.F Intensive Hydrating Sheet Mask with deep moisture. It's perfect for instant hydration boost. It's made of natural moisturizing factors and delivers spa-quality results.",
        mrp: 45000,
        price: 35000,
        images: [product_img6],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Sheet Mask",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_7",
        name: "Anua Heartleaf Pore Control Cleansing Oil",
        description: "Anua Heartleaf Pore Control Cleansing Oil with gentle deep cleansing. It's perfect for removing makeup and impurities. It's made of heartleaf extract and provides pore care.",
        mrp: 329000,
        price: 279000,
        images: [product_img7],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Cleansing Oil",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_8",
        name: "Rated Green Real Grow Anti-Hair Loss Stimulating Scalp Spray",
        description: "Rated Green Real Grow Anti-Hair Loss Stimulating Scalp Spray with natural ingredients. It's perfect for hair loss prevention. It's made of plant-based formula and promotes healthy hair growth.",
        mrp: 459000,
        price: 399000,
        images: [product_img8],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Hair Care",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_9",
        name: "The Ordinary Niacinamide Serum",
        description: "The Ordinary Niacinamide 10% + Zinc 1% Serum with high-strength formula. It's perfect for blemish-prone skin. It's made of niacinamide and zinc and reduces appearance of pores.",
        mrp: 149000,
        price: 119000,
        images: [product_img9],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Serum",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_10",
        name: "CeraVe Hydrating Facial Cleanser",
        description: "CeraVe Hydrating Facial Cleanser with ceramides. It's perfect for normal to dry skin. It's made of essential ceramides and hyaluronic acid for gentle cleansing.",
        mrp: 219000,
        price: 189000,
        images: [product_img10],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Facial Wash",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_11",
        name: "Some By Mi AHA BHA PHA 30 Days Miracle Toner",
        description: "Some By Mi AHA BHA PHA 30 Days Miracle Toner with triple exfoliation. It's perfect for troubled skin. It's made of tea tree extract and provides gentle chemical exfoliation.",
        mrp: 269000,
        price: 219000,
        images: [product_img11],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Toner",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
    },
    {
        id: "prod_12",
        name: "Innisfree Green Tea Seed Serum",
        description: "Innisfree Green Tea Seed Serum with fresh Jeju green tea. It's perfect for hydration and skin balance. It's made of green tea extract and delivers moisture to skin.",
        mrp: 379000,
        price: 319000,
        images: [product_img12],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Serum",
        rating: [...dummyRatingsData,...dummyRatingsData],
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
    }
];

export const ourSpecsData = [
    { title: "Free Shipping", description: "Enjoy fast, free delivery on every order no conditions, just reliable doorstep.", icon: SendIcon, accent: '#84a685' },
    { title: "7 Days easy Return", description: "Change your mind? No worries. Return any item within 7 days.", icon: ClockFadingIcon, accent: '#84a685' },
    { title: "24/7 Customer Support", description: "We're here for you. Get expert help with our customer support.", icon: HeadsetIcon, accent: '#84a685' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    street: "Jl. Merdeka No. 45",
    city: "Jakarta Selatan",
    state: "DKI Jakarta",
    zip: "12190",
    country: "Indonesia",
    phone: "081234567890",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
}

export const couponDummyData = [
    { code: "NEW20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
    { code: "NEW10", description: "10% Off for New Users", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
    { code: "OFF20", description: "20% Off for All Users", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
    { code: "OFF10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
    { code: "HALORA15", description: "15% Off for Members", discount: 15, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Halora User",
    email: "user@halora.com",
    image: gs_logo,
    cart: {}
}

export const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 868000,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: dummyRatingsData[2],
        orderItems: [
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlydnx0017tat8h3rg92hz", quantity: 1, price: 389000, product: productDummyData[0], },
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlxgnk0015tat84qm8si5v", quantity: 1, price: 479000, product: productDummyData[1], }
        ],
        address: addressDummyData,
        user: dummyUserData
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 2967000,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm1f3y001dtat8liccisar", quantity: 1, price: 159000, product: productDummyData[2], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm0nh2001btat8glfvhry1", quantity: 1, price: 2590000, product: productDummyData[3], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemlz8640019tat8kz7emqca", quantity: 1, price: 229000, product: productDummyData[4], }
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Halora Official Store",
        description: "Halora Official Store is your trusted destination for authentic Korean and international skincare products",
        username: "haloraofficial",
        address: "Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190",
        status: "approved",
        isActive: true,
        logo: gs_logo,
        email: "official@halora.com",
        contact: "+62 812-3456-7890",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    },
    {
        id: "cmemkqnzm000htat8u7n8cpte",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        name: "Halora Beauty",
        description: "At Halora Beauty, we believe shopping should be simple, smart, and satisfying. Whether you're hunting for the latest skincare trends, top-notch beauty products, wellness essentials, or unique lifestyle products — we've got it all under one digital roof.",
        username: "halorabeauty",
        address: "Jl. Thamrin No. 88, Jakarta Pusat, DKI Jakarta 10350",
        status: "approved",
        isActive: true,
        logo: happy_store,
        email: "beauty@halora.com",
        contact: "+62 813-9876-5432",
        createdAt: "2025-08-22T08:34:15.155Z",
        updatedAt: "2025-08-22T08:34:47.162Z",
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 6,
    "stores": 2,
    "products": 12,
    "revenue": "8940000",
    "allOrders": [
        { "createdAt": "2025-08-20T08:46:58.239Z", "total": 548000 },
        { "createdAt": "2025-08-22T08:46:21.818Z", "total": 638000 },
        { "createdAt": "2025-08-22T08:45:59.587Z", "total": 354000 },
        { "createdAt": "2025-08-23T09:15:03.929Z", "total": 868000 },
        { "createdAt": "2025-08-23T09:14:35.923Z", "total": 2967000 },
        { "createdAt": "2025-08-23T11:44:29.713Z", "total": 424000 },
        { "createdAt": "2025-08-24T09:15:03.929Z", "total": 868000 },
        { "createdAt": "2025-08-24T09:14:35.923Z", "total": 2967000 },
        { "createdAt": "2025-08-24T11:44:29.713Z", "total": 424000 },
        { "createdAt": "2025-08-24T11:56:29.713Z", "total": 538000 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 424000 },
        { "createdAt": "2025-08-25T09:15:03.929Z", "total": 868000 },
        { "createdAt": "2025-08-25T09:14:35.923Z", "total": 2967000 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 424000 },
        { "createdAt": "2025-08-25T11:56:29.713Z", "total": 538000 },
        { "createdAt": "2025-08-25T11:30:29.713Z", "total": 1129000 }
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 2,
    "totalEarnings": 3835000,
    "totalProducts": 5
}