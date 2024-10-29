import Link from "next/link";
import app from "@/config/app";
import {ChevronRight} from "lucide-react";
import gc from "@/json/global";
import newDate, {dateFormat} from "@/lib/date";
import {category} from "@/config/plant";
import Image from "next/image";
import common from "@/config/common";

export const metadata = {
    title: 'How to Grow any spices at Home - Complete Guide for spices.',
    description: 'Discover easy, step-by-step guides for growing spices at home, in the garden, or on your balcony. Learn soil requirements, watering schedules, and organic care tips for each plant.',
    keywords:  ["grow spices at home", "grow herbs indoors", "balcony gardening tips", "organic gardening guide", "grow fruits at home", "plant care tips", "watering schedule plants", "soil mix guide for plants", "beginner gardening tips"],
    openGraph: {
        title: 'How to Grow any spices at Home - Complete Guide for spices.',
        description: 'Discover easy, step-by-step guides for growing spices at home, in the garden, or on your balcony. Learn soil requirements, watering schedules, and organic care tips for each plant.',
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: 'How to Grow any spices at Home - Complete Guide for spices.',
            },
        ],
        url: `${app.url}/how-to-grow/spices`,
        type: 'website'
    },
    twitter: {
        title: 'How to Grow any spices at Home - Complete Guide for spices.',
        description: 'Discover easy, step-by-step guides for growing spices at home, in the garden, or on your balcony. Learn soil requirements, watering schedules, and organic care tips for each plant.',
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: 'How to Grow any spices at Home - Complete Guide for spices.',
            },
        ],
    },
    alternates: {
        canonical: `${app.url}/how-to-grow/spices`,
    }
};

export default function Page() {
    gc.sort((a, b) => newDate(b.created_on).toMillis() - newDate(a.created_on).toMillis());
    gc.sort((a, b) => (b.trending ?? 0) - (a.trending ?? 0));
    const plants = gc.filter(g => g.category.includes(category.SPICE));

    return <>
        <div className="relative min-h-[250px] max-sm:min-h-[230px] bg-cover bg-center z-[2] w-full overlay-black-light before:bg-black before:opacity-40 bg-[url('/assets/img/img_7.jpg')]">
            <div className="container relative z-1 table h-full">
                <div className="text-center py-[90px] max-sm:py-10 table-cell align-middle h-[250px] max-sm:h-[230px]">
                    <h1 className="mb-2.5 lg:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl text-white">How to grow spices</h1>
                    <h2 className="mb-2.5 text-white text-sm">Discover easy, step-by-step guides for growing spices at home, in the garden, or on your balcony. Learn soil requirements, watering schedules, and organic care tips for each plant.</h2>
                    <nav>
                        <ul className="text-white">
                            <li className="mr-[3px] inline-block text-base font-medium"><Link href="/" className="text-white"> Home</Link></li>
                            <li className="mr-[3px] pl-2 inline-block text-base font-medium"><ChevronRight size={16} className="inline-block -mt-[6px] mr-2"/> <Link href="/how-to-grow" className="text-white"> How to grow </Link></li>
                            <li className="mr-[3px] pl-2 inline-block text-base font-medium"><ChevronRight size={16} className="inline-block -mt-[6px] mr-2"/> Spices</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <section className="3xl:py-25 md:py-17 sm:py-13.5 py-10">
            <div className="container">
                <div className="row">
                    {plants.slice(0, 50).map((plant, i) => <div key={i} className="lg:w-1/2 sm:w-1/2 max-xl:mb-7.5 mb-13.5">
                        <div className="flex rounded-3.5xl max-lg:block dz-card blog-half">
                            <div className="relative overflow-hidden dz-media">
                                <Image width={315} height={290} src={plant.ref.cover} alt={plant.ref.seo.title} className="object-cover rounded-l-3.5xl max-lg:rounded-t-3.5xl max-lg:rounded-b-none size-full"/>
                            </div>
                            <div className="bg-secondary p-6.1 pt-7.5 max-lg:p-3.6 flex flex-col justify-center rounded-r-3.5xl max-lg:rounded-b-3.5xl max-lg:rounded-t-none">
                                <div className="mb-2.5">
                                    <ul><li className="py-1.1 px-3 inline-block rounded-md text-2xs bg-white text-secondary leading-[1.2] mb-[3px]">
                                        {dateFormat(plant.ref.datePublished, common.format.longDate)}
                                    </li></ul>
                                </div>
                                <h4 className="mb-2">
                                    <Link className="text-white" href={plant.ref.path}>How to grow {plant.ref.hero.heading}</Link>
                                </h4>
                                <Link href={plant.ref.path} className="text-sm mt-auto flex items-center gap-[5px] text-white">Read More
                                    <ChevronRight size={16}/>
                                </Link>
                            </div>
                        </div>
                    </div>)}
                    {/*<div className="w-full text-center sm:mt-6 mt-2">*/}
                    {/*    <button className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden ">*/}
                    {/*        more*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    </>;
}