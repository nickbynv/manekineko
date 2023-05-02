"use client"
import { Button, IconButton, MobileNav, Navbar } from "@material-tailwind/react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1140) {
                setOpenNav(false)
            }
        })
    }, [])

    const navList = (
        <ul className="mb-4 mt-2 pl-1.5 flex flex-col gap-2 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-6">
            <li className="flex items-center">
                <div className="p-1 pb-2 mr-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 23 23"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className="w-7 h-7 text-black"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                    </svg>

                </div>

                <div className="flex flex-col justify-center font-semibold text-lg leading-6 text-black">
                    <span>Бесплатная доставка</span>
                    <span className="text-sm text-blue-gray-800 font-light">при заказе от 600 руб.</span>
                </div>
            </li>

            <li className="flex items-center">
                <div className="mr-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.4}
                        stroke="currentColor"
                        className="w-8 h-8 text-black"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <div className="flex flex-col justify-center font-semibold text-lg leading-6 text-black">
                    <span>C 10:00 до 23:00</span>
                    <span className="text-sm text-blue-gray-800 font-light">7 дней в неделю</span>
                </div>
            </li>

            <li className="flex items-center">
                <div className="ring-[1.9px] ring-red-500 rounded-full p-[3.5px] mr-2.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#ff3a3a"
                        viewBox="0 0 24 24"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                    </svg>
                </div>


                <div className="flex flex-col font-semibold text-lg leading-6 text-red-500">
                    <Link
                        href="tel:+78003334374"
                        className="transition-colors hover:text-red-900"
                    >
                        +7 (800) 333-43-74
                    </Link>

                    <Link
                        href="tel:+79780519373"
                        className="transition-colors hover:text-red-900"
                    >
                        +7 (978) 051-93-73
                    </Link>
                </div>
            </li>
        </ul>
    )

    return (
        <Navbar className="sticky inset-0 border-b border-b-[#f0f0f0] z-40 h-max max-w-full rounded-none py-1 px-4 xl:px-8 shadow-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href="/home">
                    <img
                        src="logo.svg"
                        alt="logo"
                        className="w-32 lg:w-60"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden xl:block">
                        {navList}
                    </div>

                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>

                    <Button
                        color="blue-gray"
                        variant="outlined"
                        className="p-1.5 rounded-full xl:ring-[1.7px] xl:ring-blue-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 xl:w-7 xl:h-7"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            <MobileNav open={openNav}>
                {navList}
            </MobileNav>
        </Navbar>
    );
}