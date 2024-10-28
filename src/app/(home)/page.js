import Image from "next/image";
import app from "@/config/app";
import gc from "@/json/global";
import {category} from '@/config/plant';
import PlantsTile from "@/components/pages/plants-tile";
import newDate from "@/lib/date";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Social from "@/components/pages/social";
import SubscriptionForm from "@/components/layout/subscription-form";

export const metadata = {
    title: app.title,
    description: app.meta.description,
    keywords: app.meta.keywords,
    openGraph: {
        title: app.title,
        description: app.meta.description,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
        url: app.url,
        type: 'website',
    },
    twitter: {
        title: app.title,
        description: app.meta.description,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
    },
    alternates: {
        canonical: app.url,
    }
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Website",
        "name": app.name,
        "url": app.url,
        "description": app.meta.description,
        "publisher": {
            "@type": "Organization",
            "name": app.name
        }
    };

    gc.sort((a, b) => newDate(b.created_on).toMillis() - newDate(a.created_on).toMillis());
    gc.sort((a, b) => (b.trending ?? 0) - (a.trending ?? 0));
    const plants = gc.filter(g => g.category.includes(category.PLANT));

    return <>
        {/* Add JSON-LD to your page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
        {/* ... */}

        {/* hero section */}
        <div className="overflow-hidden relative main-slider style-2">
            <div className="main-swiper2">
                <div className="container">
                    <div className="h-[800px] pt-7.5 pb-20 max-3xl:h-[700px] max-3xl:pb-13.5 max-xl:!h-[550px] max-xl:!pb-[75px] max-lg:mb-7.5 max-sm:!my-3.6 banner-content">
                        <div className="row">
                            <div className="lg:w-9/12 w-full self-center">
                                <div className="max-sm:mb-7.5">
                                    <div className="relative z-[2] pb-[45px] max-xl:pb-5">
                                        <h1 data-swiper-parallax="-20">Your Ultimate Guide to<span className="text-primary flex items-center">
                                          <svg className="mr-2.5" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                                            <path d="M34 0L43.6167 24.3833L68 34L43.6167 43.6167L34 68L24.3833 43.6167L0 34L24.3833 24.3833L34 0Z" fill="var(--primary)"/>
                                          </svg> Home Gardening
                                        </span>and Growing Any Plant (Literally).
                                        </h1>
                                        <p className="text-2xl max-xl:text-xl max-md:!text-lg" data-swiper-parallax="-40">
                                            Even if you are new to <span className="text-primary">Gardening</span> or a seasoned gardener. I promise you will become better.
                                        </p>
                                    </div>
                                    <div className="content-btn" data-swiper-parallax="-60">
                                        <Dialog>
                                            <DialogTrigger className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden xl:mr-4 mr-2">
                                                Subscribe to Newsletter
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                                                    <DialogDescription>
                                                        <>
                                                            <p className="text-[18px] leading-8 text-[#878787] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] mb-2">🤝 that&apos;s it, we only need you email, no spam! I Promise! 🤞</p>
                                                            <SubscriptionForm/>
                                                        </>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                        <Link href="/how-to-grow">
                                            <button className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden mt-10">
                                                View All Plants
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-3/12 w-full">
                                <div className="-mr-25 ml-13.5 relative z-1 max-3xl:!mr-0 max-4xl:-mr-10 max-md:ml-7.5 max-sm:!ml-0 max-sm:float-left max-sm:w-full banner-media">
                                    <div className="shap"></div>
                                    <div className="border border-[#DFDFDF] absolute top-[18%] left-[-13%] w-[61%] h-[54%] rounded-ss-[150px] -z-1"></div>
                                    <div className="border border-[#DFDFDF] absolute bottom-[-7%] right-[-7%] w-[50%] h-[35%] rounded-ee-[150px] -z-1"></div>

                                    <div className="overflow-hidden" data-swiper-parallax="-100">
                                        <Image width={450} height={525} src="/assets/other/bg_2.jpg" alt="You ultimate guide to growing anything and everything" className="w-full object-cover rounded-2xl border-2 border-white"/>
                                    </div>
                                    <Link href={plants[0].ref.path}>
                                        <div className="w-[250px] p-5 absolute top-[38%] right-[-5vw] duration-700 rounded-2xl bg-[#ffffffb3] shadow-wrapper backdrop-blur-[7px] flex items-center max-3xl:w-[200px] max-3xl:p-3.6 max-3xl:right-[1vw] max-md:hidden hover:-translate-y-2.5">
                                            <div className="relative overflow-hidden z-1 rounded-xl shadow-[0px_15px_40px_0px_rgba(0,0,0,0.1)] mr-2.5">
                                                <Image width={80} height={80} src={plants[0].ref.cover} alt={plants[0].ref.seo.title} className="w-full"/>
                                            </div>
                                            <div className="relative z-1 max-3xl:pt-3 ">
                                                <h5 className="text-base">How to grow {plants[0].name}?</h5>
                                                <div className="size-[45px] max-sm:size-7.5 max-sm:group-hover:-bottom-2.5 bg-primary flex items-center justify-center rounded-full mb-1.1 shadow-default absolute bottom-[-45px] right-0 overflow-hidden btn meta-icon dz-carticon">
                                                    <i className="flaticon flaticon-basket text-white"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="p-6.1 absolute bottom-[12%] left-[-3vw] duration-700 rounded-2xl bg-[#ffffffb3] shadow-wrapper backdrop-blur-[7px] flex items-center w-[270px] justify-center max-md:hidden">
                                        <i className="icon feather icon-heart-on dz-heart text-primary text-3xl mr-3.6"></i>
                                        <ul className="flex px-2.5">
                                            {plants.slice(1, 4).map((plant, i) => <li key={i} className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
                                                <Link href={plant.ref.path}>
                                                    <Image width={200} height={200} src={plant.ref.cover} alt={plant.ref.seo.title} className="border-2 border-white rounded-full size-full"/>
                                                </Link>
                                            </li>)}
                                        </ul>
                                    </div>
                                    <ul className="star-list">
                                        <li className="absolute animate-rotate top-13.5 left-25 max-xl:top-3.6 max-xl:left-[35px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57"
                                                 viewBox="0 0 57 57" fill="none">
                                                <path d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z"
                                                      fill="var(--rgba-primary-2)"/>
                                            </svg>
                                        </li>
                                        <li className="absolute animate-rotate top-[30%] right-[-15%]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57"
                                                 viewBox="0 0 57 57" fill="none">
                                                <path d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z"
                                                      fill="var(--rgba-primary-2)"/>
                                            </svg>
                                        </li>
                                        <li className="absolute animate-rotate bottom-[20%] left-[-25%]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57"
                                                 viewBox="0 0 57 57" fill="none">
                                                <path d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z"
                                                      fill="var(--rgba-primary-2)"/>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Social />
                <Link target="_blank" href="https://kuboid.in" className="max-lg:hidden btn py-3.6 px-1.5 text-sm uppercase font-Lufga block leading-[1.2] bg-[#24262B] text-white rounded-xl duration-700 absolute bottom-7 left-[26px] overflow-hidden rotate-180 [writing-mode:vertical-rl]">Let’s talk</Link>
            </div>
        </div>

        {/*  featured */}
        <div className="3xl:pt-25 3xl:pb-17 md:pt-17 md:pb-10 sm:pt-13.5 sm:pb-5 pt-10 pb-5 relative z-1 rounded-4xl bg-lightdark mx-20 max-3xl:mx-10 max-lg:mx-5 category-section mb-20">
            <div className="container">
                <div className="mb-10 max-md:mb-5 md:flex justify-between items-center">
                    <div className="left-content">
                        <h2 className="mb-2">Latest Addition</h2>
                        <p className="mb-4">Discover the most latest and trending plants you can grow at home.</p>
                    </div>
                    <Link href="/how-to-grow" className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden mb-7.5">View All</Link>
                </div>
                <div className="grid grid-cols-9 gap-3">
                    <PlantsTile plants={plants}/>
                </div>
            </div>
            <div className="w-[140px] p-2.5 absolute rounded-full inline-block left-1/2 top-[-7%] [transform:translate(-50%,_-7%)] max-lg:hidden icon-button">
                <div className="flex items-center justify-center size-[140px] rounded-full animate-pendulum text-center text-row word-rotate-box c-black border-white text-2xl font-bold">
                    How to grow
                </div>
            </div>
        </div>

        {/* DIY */}
        {/*<section className="3xl:pt-25 3xl:pb-17 md:pt-17 md:pb-10 sm:pt-13.5 sm:pb-5 pt-10 pb-5 ">*/}
        {/*    <div className="container">*/}
        {/*        <div className="mb-10 max-md:mb-5 wow fadeInUp md:flex justify-between items-center">*/}
        {/*            <div className="left-content">*/}
        {/*                <h2 className="title">Latest in DIY Natural Products</h2>*/}
        {/*                <p>Discover the latest and most trending DIY Natural Products.</p>*/}
        {/*            </div>*/}
        {/*            <Link className="btn btn-secondary " href="/how-to-make">View All</Link>*/}
        {/*        </div>*/}
        {/*        <div className="row blog-shap">*/}
        {/*            <div className="lg:w-1/2 w-full max-xl:mb-7.5 mb-13.5 wow fadeInUp">*/}
        {/*                <div className="relative mb-7.5 dz-card">*/}
        {/*                    <div className="rounded-3.5xl max-lg:rounded-b-none relative overflow-hidden">*/}
        {/*                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/blog/blogpost-3/pic1.jpg" alt="/" className="w-full"/>*/}
        {/*                    </div>*/}
        {/*                    <div className="bg-white py-6.1 px-7.5 w-[440px] bottom-0 absolute left-0 z-1 rounded-se-3.5xl rounded-es-3.5xl max-xl:p-5 max-xl:w-full max-lg:static max-lg:flex max-lg:flex-col max-lg:rounded-t-none max-lg:rounded-b-3.5xl">*/}
        {/*                        <div className="mb-2.5">*/}
        {/*                            <ul>*/}
        {/*                                <li className="py-1.1 px-3 inline-block rounded-md text-2xs bg-title text-white leading-[1.2] mb-[3px] font-semibold">17 May 2024</li>*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                        <h3 className="mb-2 max-xl:text-lg">*/}
        {/*                            <a href="post-standard.html">Trendsetter Chronicles: Unveiling the Latest in Fashion</a>*/}
        {/*                        </h3>*/}
        {/*                        <a href="post-standard.html" className="text-sm mt-auto flex items-center gap-[5px]">Read More*/}
        {/*                            <ChevronRight size={16}/>*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="lg:w-1/2 w-full max-xl:mb-7.5 mb-13.5 wow fadeInUp">*/}
        {/*                <div className="row">*/}
        {/*                    <div className="lg:w-full md:w-1/2 mb-7.5">*/}
        {/*                        <div className="flex bg-white rounded-3.5xl max-lg:block dz-card blog-half">*/}
        {/*                            <div className="relative overflow-hidden dz-media">*/}
        {/*                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/blog/blogpost-4/pic2.jpg" alt="/" className="object-cover rounded-l-3.5xl max-lg:rounded-t-3.5xl max-lg:rounded-b-none size-full"/>*/}
        {/*                            </div>*/}
        {/*                            <div className="p-6.1 pt-7.5 flex flex-col justify-center rounded-r-3.5xl max-lg:rounded-b-3.5xl max-lg:rounded-t-none">*/}
        {/*                                <div className="mb-2.5">*/}
        {/*                                    <ul>*/}
        {/*                                        <li className="py-1.1 px-3 inline-block rounded-md text-2xs bg-title font-medium text-white leading-[1.2] mb-[3px]">17 May 2024</li>*/}
        {/*                                    </ul>*/}
        {/*                                </div>*/}
        {/*                                <h3 className="mb-7.5">*/}
        {/*                                    <a href="blog-both-sidebar.html">Dress to Impress: Elevate Your Everyday Style</a>*/}
        {/*                                </h3>*/}
        {/*                                <a href="post-standard.html" className="text-sm mt-auto flex items-center gap-[5px] font-semibold">Read More*/}
        {/*                                    <ChevronRight size={16}/>*/}
        {/*                                </a>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="lg:w-full md:w-1/2 mb-7.5">*/}
        {/*                        <div className="flex bg-white rounded-3.5xl max-lg:block dz-card blog-half">*/}
        {/*                            <div className="relative overflow-hidden dz-media">*/}
        {/*                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/blog/blogpost-4/pic3.jpg" alt="/" className="object-cover rounded-l-3.5xl max-lg:rounded-t-3.5xl max-lg:rounded-b-none size-full"/>*/}
        {/*                            </div>*/}
        {/*                            <div className="p-6.1 pt-7.5 flex flex-col justify-center rounded-r-3.5xl max-lg:rounded-b-3.5xl max-lg:rounded-t-none">*/}
        {/*                                <div className="mb-2.5">*/}
        {/*                                    <ul>*/}
        {/*                                        <li className="py-1.1 px-3 inline-block rounded-md text-2xs bg-title font-medium text-white leading-[1.2] mb-[3px]">17 May 2024</li>*/}
        {/*                                    </ul>*/}
        {/*                                </div>*/}
        {/*                                <h3 className="mb-7.5">*/}
        {/*                                    <a href="blog-both-sidebar.html">Chic &amp; Unique: Personalized Fashion Finds</a>*/}
        {/*                                </h3>*/}
        {/*                                <a href="post-standard.html" className="text-sm mt-auto flex items-center gap-[5px] font-semibold">Read More*/}
        {/*                                    <ChevronRight size={16}/>*/}
        {/*                                </a>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}

        {/* Blog */}
        {/*<section className="3xl:pt-25 3xl:pb-17 md:pt-17 md:pb-10 sm:pt-13.5 sm:pb-5 pt-10 pb-5">*/}
        {/*    <div className="container">*/}
        {/*        <div className="mb-10 max-md:mb-5 md:flex justify-between items-center">*/}
        {/*            <div className="left-content">*/}
        {/*                <h2 className="mb-2">latest Post</h2>*/}
        {/*                <p className="mb-4">Discover the latest and most trending post on plants and nature.</p>*/}
        {/*            </div>*/}
        {/*            <Link href="/blog" className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden mb-7.5">View All</Link>*/}
        {/*        </div>*/}
        {/*        <div className="grid grid-cols-2 justify-between">*/}
        {/*            <div className="max-xl:mb-7.5 mb-13.5">*/}
        {/*                <div className="lg:flex rounded-3.5xl bg-white block">*/}
        {/*                    <div className="xl:w-[275px] xl:min-w-[275px] xl:h-[320px] lg:w-[200px] lg:min-w-[200px] lg:h-[260px] size-full min-w-full relative overflow-hidden">*/}
        {/*                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/blog/blogpost-4/pic1.jpg" alt="/" className="size-full object-cover [mask-size:100%_100%] [mask-image:url(/assets/theme/images/shape/shape-1.png)] max-lg:[mask-image:none] max-lg:rounded-t-3.5xl"/>*/}
        {/*                    </div>*/}
        {/*                    <div className="flex w-full flex-col justify-center p-6.1 max-2lg:p-5 pt-7.5 relative">*/}
        {/*                        <div className="mb-2.5">*/}
        {/*                            <ul className="flex items-center flex-wrap">*/}
        {/*                                <li className="py-1.1 px-3 inline-block rounded-md text-2xs bg-title font-medium text-white leading-[1.2] mb-[3px]">18 May 2024</li>*/}
        {/*                            </ul>*/}
        {/*                        </div>*/}
        {/*                        <h4 className="text-2xl max-2lg:text-lg mb-7.5 font-medium">*/}
        {/*                            <a href="blog-both-sidebar.html">Trendsetter Chronicles: Unveiling the Latest in Fashion</a>*/}
        {/*                        </h4>*/}
        {/*                        <a href="blog-both-sidebar.html" className="py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl uppercase mt-auto duration-700 hover:bg-primary hover:border-primary hover:text-white relative w-fit">*/}
        {/*                            Read more*/}
        {/*                            <ArrowRight className="border-secondary rounded-full absolute -right-3 z-9 bg-white text-center !text-title size-6.1 leading-6 -mt-[4px]"/>*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
    </>;
}
