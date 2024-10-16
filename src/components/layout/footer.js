import Link from "next/link";
import app from "@/config/app";
import Image from "next/image";
import SubscriptionForm from "@/components/layout/subscription-form";
import {Mail} from "lucide-react";

export default function Footer() {
    return <>
        <div className="relative z-1 image-wrapper h-[400px]">
            <div className="container-fluid !px-0">
                <div className="row gx-0">
                    <div className="xl:w-1/6 w-1/3">
                        <div className="block relative overflow-hidden group">
                            <Image width={318} height={318} src="/assets/img/img_1.jpg" alt={app.seo_title} className="duration-300 group-hover:[transform:scale(1.3)_rotate(-20deg)] w-full"/>
                        </div>
                    </div>
                    <div className="xl:w-1/6 w-1/3">
                        <div className="block relative overflow-hidden group">
                            <Image width={318} height={318} src="/assets/img/img_2.jpg" alt={app.seo_title} className="duration-300 group-hover:[transform:scale(1.3)_rotate(-20deg)] w-full"/>
                        </div>
                    </div>
                    <div className="xl:w-1/6 w-1/3">
                        <div className="block relative overflow-hidden group">
                            <Image width={318} height={318} src="/assets/img/img_3.jpg" alt={app.seo_title} className="duration-300 group-hover:[transform:scale(1.3)_rotate(-20deg)] w-full"/>
                        </div>
                    </div>
                    <div className="xl:w-1/6 w-1/3">
                        <div className="block relative overflow-hidden group">
                            <Image width={318} height={318} src="/assets/img/img_4.jpg" alt={app.seo_title} className="duration-300 group-hover:[transform:scale(1.3)_rotate(-20deg)] w-full"/>
                        </div>
                    </div>
                    <div className="xl:w-1/6 w-1/3">
                        <div className="block relative overflow-hidden group">
                            <Image width={318} height={318} src="/assets/img/img_5.jpg" alt={app.seo_title} className="duration-300 group-hover:[transform:scale(1.3)_rotate(-20deg)] w-full"/>
                        </div>
                    </div>
                    <div className="xl:w-1/6 w-1/3">
                        <div className="block relative overflow-hidden group">
                            <Image width={318} height={318} src="/assets/img/img_6.jpg" alt={app.seo_title} className="duration-300 group-hover:[transform:scale(1.3)_rotate(-20deg)] w-full"/>
                        </div>
                    </div>
                    <a href="https://www.instagram.com/dexignzone/" className="absolute left-1/2 top-1/2 [transform:translate(-50%,_-50%)] w-fit">
                        <div className="py-3.6 px-7.5 rounded-xl bg-[#ffffffb3] backdrop-blur-[7px] flex items-center">
                            <div className="w-7 mr-2.5">
                                <Image width={64} height={64} src="/assets/img/insta-follow.png" alt={app.seo_title}/>
                            </div>
                            <div>
                                <p className="font-medium">Follow @{app.social.insta}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <footer className="relative bg-light overflow-hidden z-1">
            <div className="pt-[90px] max-lg:pt-13.5 pb-14.5 max-lg:pb-5 max-md:!pb-0">
                <div className="container">
                    <div className="row">
                        <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="flex flex-col gap-2 mb-7.5 widget_about mr-2">
                                <div className="flex align-middle float-left items-center relative py-3 mb-6">
                                    <Link href="/" className="mr-6 flex flex-row items-center gap-2 w-fit">
                                        <Image src={app.logo.default} alt={app.name} title={app.name} width={64} height={64}/>
                                        <div className="flex flex-col gap-1">
                                            <span className="hidden font-bold sm:inline-block text-3xl">{app.name}</span>
                                            <span className="text-xs text-primary">A Kuboid Product</span>
                                        </div>
                                    </Link>
                                </div>
                                <p>
                                    Helping you grow a greener future! {app.name} provides expert guidance on organic gardening, sustainable farming, and home crop cultivation.
                                    Whether you&apos;re a beginner or an experienced grower, explore eco-friendly practices to nurture your plants and harvest the healthiest produce.
                                    Join us in cultivating a more sustainable world!
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="mb-7.5">
                                <h5 className="text-xl leading-[1.2] mb-5">Recent Posts</h5>
                                <ul>
                                    <li className="flex items-center mb-4">
                                        <div className="size-14.5 min-w-14.5 mr-3.6">
                                            <Image width={100} height={100} src="/assets/theme/images/shop/product/small/1.png" alt=""
                                                   className="rounded-xl w-full"/>
                                        </div>
                                        <div>
                                            <h6><a href="post-standard.html">Cozy Knit Cardigan Sweater</a></h6>
                                            <span className="text-2xs">July 23, 2024</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="size-14.5 min-w-14.5 mr-3.6">
                                            <Image width={100} height={100} src="/assets/theme/images/shop/product/small/2.png" alt=""
                                                   className="rounded-xl w-full"/>
                                        </div>
                                        <div>
                                            <h6><a href="post-standard.html">Sophisticated Swagger Suit</a></h6>
                                            <span className="text-2xs">July 23, 2024</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="size-14.5 min-w-14.5 mr-3.6">
                                            <Image width={100} height={100} src="/assets/theme/images/shop/product/small/3.png" alt=""
                                                   className="rounded-xl w-full"/>
                                        </div>
                                        <div>
                                            <h6><a href="post-standard.html">Athletic Mesh Sports Leggings</a></h6>
                                            <span className="text-2xs">July 23, 2024</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="xl:w-1/6 sm:w-1/3 w-1/2">
                            <div className="mb-7.5 font-medium">
                                <h5 className="text-xl leading-[1.2] mb-5">Our Stores</h5>
                                <ul>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="#">New
                                        York</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="#">London
                                        SF</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="#">Edinburgh</a>
                                    </li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="#">Los
                                        Angeles</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="#">Chicago</a>
                                    </li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="#">Las
                                        Vegas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="xl:w-2/6 sm:w-2/3 w-full items-center content-center text-center">
                            <h5 className="title text-black mt-[25px] mb-[10px] text-[26px] lg:text-[22px] md:text-[22px] sm:text-[22px] xsm:text-[22px]"><Mail size={30} className="-mt-2 mr-2"/> Subscribe to Our Newsletter</h5>
                            <p className=" text-[18px] leading-8 text-[#878787] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] mb-2">🤝 that&apos;s it, we only need you email, no spam! I Promise! 🤞</p>
                            <SubscriptionForm/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row py-7 max-sm:py-5 border-t border-black/10 font-semibold text-2sm max-sm:text-sm">
                        <div className="lg:w-1/2 w-full text-start max-lg:text-center">
                            <p className="copyright-text">© <span className="current-year"> {new Date().getFullYear()} </span> <Link className="text-primary" target="_blank" href="/">
                                {app.name}</Link>. All Rights Reserved.</p>
                        </div>
                        <div className="lg:w-1/2 w-full text-end max-lg:text-center max-lg:mt-3.6">
                            <div className="flex items-center justify-center md:justify-center xl:justify-end">
                                <span className="mr-4">Social media: </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}