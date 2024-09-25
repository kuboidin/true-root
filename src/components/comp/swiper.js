"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SwiperComp({images = []}) {
    return <>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
        >
            {images.map((img, i) => <SwiperSlide key={i}>
                <img src={img.src} alt={img.alt} title={img.alt}/>
            </SwiperSlide>)}
        </Swiper>

        <div className="absolute top-7.5 left-7.5 z-1">
            <div>
                {images.map((img, i) => <div className="mb-3.6 !size-17 max-lg:!size-13.5" key={i}>
                    <img src={img.src} alt={img.alt} title={img.alt} className="border-2 border-white rounded-xl"/>
                </div>)}
            </div>
        </div>
    </>;
}