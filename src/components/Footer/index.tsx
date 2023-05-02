"use client"
import { Typography } from "@material-tailwind/react"
import './styles.css'

export default function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#f8f8f8] border-t border-blue-gray-50 py-10 px-8 text-center md:justify-between xl:mt-4">
            <div className="mb-7 md:mb-0">
                <Typography variant="h5" color="black" className="font-bold mb-3">
                    &copy; 2023 Maneki Neko
                </Typography>

                <div>
                    <Typography color="blue-gray" className="font-bold mb-1.5">
                        Давайте дружить!
                    </Typography>

                    <div className="flex justify-center items-center">
                        <div className="social vk">
                            <a href="https://vk.com/manekinekosev" target="_blank">
                                <svg role="img" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" />
                                </svg>
                            </a>
                        </div>

                        <div className="social facebook">
                            <a href="https://www.facebook.com/manekinekosev17" target="_blank">
                                <svg role="img" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </svg>
                            </a>
                        </div>

                        <div className="social instagram">
                            <a href="https://www.instagram.com/manekinekosev/" target="_blank">
                                <svg role="img" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <img src="logo.svg" alt="logo" className="w-[15rem] mb-7 md:mb-0" />

            <div>
                <Typography color="black" className="font-bold text-sm mb-1.5">
                    г. Севастополь, ул. Гоголя, 36
                </Typography>

                <Typography color="black" className="font-bold text-sm mb-1.5">
                    <span className="font-normal">Заказ по телефону:</span> <br />
                    <a href="tel:+78003334374" className="text-red-900 cursor-pointer hover:text-[#660404] transition-colors">+7 (800) 333-43-74</a> <span className="font-normal">(звонок бесплатный)</span> <br />
                    <a href="tel:+79780519373" className="text-red-900 cursor-pointer hover:text-[#660404] transition-colors">+7 (978) 051-93-73</a> <br />
                    <a href="tel:+78692777047" className="text-red-900 cursor-pointer hover:text-[#660404] transition-colors">+7 (869) 277-70-47</a>
                </Typography>

                <Typography color="black" className="font-bold text-sm">
                    С 10:00 до 23:00 без выходных
                </Typography>
            </div>
        </footer>
    )
}