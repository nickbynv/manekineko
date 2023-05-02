"use client"
import { products } from "@/data"
import { useState } from "react"
import ProductCard from "./ProductCard"

export default function ProductPanel(props: {
    category: string
}) {
    const [searchItem, setSearchItem] = useState('')

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[98%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-800 absolute left-2 top-1.5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>

                <input
                    className="rounded-full mb-4 bg-gray-100 border border-gray-300 w-full text-md px-3 py-1 pl-10 outline-none text-gray-800"
                    placeholder="Поиск"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </div>

            <div className="w-full grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.filter(product => (
                    product.category.value === props.category
                    && product.title.toLowerCase().includes(searchItem.toLowerCase())
                )).map(product => (
                    <ProductCard
                        key={`${product.title}_${product.category.value}`}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}