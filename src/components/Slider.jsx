import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Page1 from "../assets/mainSlider/1.webp"
import Page2 from "../assets/mainSlider/2.webp"
import Page3 from "../assets/mainSlider/3.webp"
import Page4 from "../assets/mainSlider/4.webp"
import Page5 from "../assets/mainSlider/5.webp"
import Page6 from "../assets/mainSlider/6.webp"
import Page7 from "../assets/mainSlider/7.webp"
import Page8 from "../assets/mainSlider/8.webp"
import Page9 from "../assets/mainSlider/9.webp"
import Page10 from "../assets/mainSlider/10.webp"
import Page11 from "../assets/mainSlider/11.webp"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderImage = [
    Page1, Page2, Page3, Page4, Page5, Page6,
    Page7, Page8, Page9, Page10, Page11
]

function Slider() {
    return(
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.custom-swiper-button-prev',
                    nextEl: '.custom-swiper-button-next'
                }}
                speed={500}
                autoplay={{
                    delay:4000,
                    disableOnInteraction: false,
                }}
            >
                {sliderImage.map((image, index) =>(
                    <SwiperSlide key={index}>
                    <a href="">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </a>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </div>
            <div className="custom-swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        </div>
    )
}
export default Slider;