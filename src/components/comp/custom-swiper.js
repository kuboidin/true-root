"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CustomSwiper({swipes = [], slidesPerView = 3, spaceBetween = 0}) {
    return <>
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
        >
            {swipes.map((swipe, i) => <SwiperSlide key={i}>
                {swipe ?? null}
            </SwiperSlide>)}
        </Swiper>
    </>;
}