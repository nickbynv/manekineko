"use client"
import { Keyboard, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import "./styles.css"

export default function Carousel() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="1.webp" alt="slide" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="2.webp" alt="slide" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="3.webp" alt="slide" />
            </SwiperSlide>

            <SwiperSlide>
                <img src="4.webp" alt="slide" />
            </SwiperSlide>
        </Swiper>
    )
}