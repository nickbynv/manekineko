"use client"
import { products } from "@/data"
import { ICategory } from "@/interfaces"
import { Navbar } from "@material-tailwind/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const pathname = usePathname()

    const categories = {
        common: [
            {
                label: "Главная",
                value: "home",
                path: '/home'
            },
            {
                label: "Информация",
                value: "info",
                path: '/info'
            }
        ],
        food: () => {
            const uniqueCategories = [] as ICategory[]

            products.forEach(product => {
                const existingCategories = uniqueCategories.find(uniqueCategory => (
                    uniqueCategory.value === product.category.value
                ))

                if (!existingCategories && product.category.value !== 'popular') {
                    const newCategory = {
                        label: product.category.label,
                        value: product.category.value,
                        path: '/' + product.category.value
                    }

                    uniqueCategories.push(newCategory)
                }
            })

            return uniqueCategories
        }
    }

    const NavLink = (props: {
        category: ICategory
    }) => {
        const { label, path } = props.category

        return (
            <Link
                href={path}
                className={`${path === pathname && 'text-red-500'} w-full text-center antialiased text-sm leading-normal text-blue-gray-900 p-1.5 rounded-xl font-bold uppercase transition-colors hover:bg-[#eaf0f3]`}
            >
                {label}
            </Link>
        )
    }

    return (
        <Navbar className="w-full h-max max-w-full py-1.5 rounded-none flex flex-col justify-center items-center shadow-none border-b border-b-[#f0f0f0] md:border-none md:flex-row md:sticky z-30 md:shadow-md md:top-[2.68rem] lg:top-[4.28rem] xl:top-[4.28rem]">
            <NavLink category={categories.common[0]} />

            <span className="my-1.5 md:my-0 md:mx-10 lg:mx-20" />

            {categories.food().map(category => (
                <NavLink
                    key={category.value}
                    category={category}
                />
            ))}

            <span className="my-1.5 md:my-0 md:mx-10 lg:mx-20" />

            <NavLink category={categories.common[1]} />
        </Navbar>
    )
}