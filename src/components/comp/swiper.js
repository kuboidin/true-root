"use client";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from "next/image";

export default function SwiperComp({images = []}) {
    return <>
        <div className="hidden md:block">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
            >
                {images.map((img, i) => <SwiperSlide key={i}>
                    <Image width={725} height={568} src={img.src} alt={img.alt} title={img.alt} priority={i === 0}/>
                </SwiperSlide>)}
            </Swiper>

            <div className="absolute top-7.5 left-7.5 z-1">
                <div>
                    {images.map((img, i) => <div className="mb-1 !size-17 max-lg:!size-13.5" key={i}>
                        <Image width={70} height={42} src={img.src} alt={img.alt} title={img.alt} className="border-2 border-white rounded-xl"/>
                    </div>)}
                </div>
            </div>
        </div>

        <div className="md:hidden">
            {images.length > 0 && <Image width={500} height={500} src={images[0].src} alt={images[0].alt} title={images[0].alt} className="border-2 border-white rounded-xl" priority/>}
        </div>
    </>;
}