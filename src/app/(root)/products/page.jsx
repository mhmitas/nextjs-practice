import { Button } from '@/components/ui/button';
import { connectDB } from '@/db/db'
import React from 'react'

const Page = async () => {
    const products = await getProducts();

    return (
        <section>
            <h1 className='title-1 mb-4'>Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10'>
                {products.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        </section>
    )
}

export default Page

async function getProducts() {
    const db = await connectDB()
    const productColl = db.collection("products")
    const products = await productColl.find().limit(10).toArray()
    return products
}

// -------------
const ProductCard = ({ product }) => {
    const { productName, description, price, ratings, _d, category, productImage } = product;

    return (
        <div className="shadow border rounded-lg">
            <figure className='bg-white aspect-[4/3] rounded-t-lg'>
                <img src={productImage} alt={productName} className='rounded-t-lg h-full' />
            </figure>
            <div className="p-4">
                <div className='mb-1'>
                    <h1 className="text-lg">{productName}</h1>
                    <h1 className='line-clamp-2'>{description}</h1>
                    <p className='font-semibold'>${price}</p>
                </div>
                <div className="flex justify-end mt-auto">
                    <Button>Buy Now</Button>
                </div>
            </div>
        </div>
    );
};