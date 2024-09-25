import Link from "next/link";
import app from "@/config/app";
import Image from "next/image";

export default function Footer() {
    return <>
        <footer className="relative bg-light overflow-hidden z-1">
            <div className="pt-[90px] max-lg:pt-13.5 pb-14.5 max-lg:pb-5 max-md:!pb-0">
                <div className="container">
                    <div className="row">
                        <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full wow fadeInUp" data-wow-delay="0.1s">
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
                                <ul className="mb-6">
                                    <li className="py-1 text-2sm font-medium">
                                        <p><span>Address</span> : 451 Wall Street, UK, London</p>
                                    </li>
                                    <li className="py-1 text-2sm font-medium">
                                        <p><span>E-mail</span> : example@info.com</p>
                                    </li>
                                    <li className="py-1 text-2sm font-medium">
                                        <p><span>Phone</span> : (064) 332-1233</p>
                                    </li>
                                </ul>
                                <h6 className="capitalize mb-2">subscribe to our newsletter</h6>
                                <form className="dzSubscribe style-1"
                                      action="https://pixio.dexignzone.com/tailwind/demo/script/mailchamp.php"
                                      method="post">
                                    <div className="dzSubscribeMsg"></div>
                                    <div className="form-group">
                                        <div className="relative flex flex-wrap items-stretch w-full">
                                            <input name="dzEmail" required="required" type="email"
                                                   className="w-[1%] flex-auto h-[45px] py-2.5 px-5 border border-white rounded-xl bg-light2 outline-none focus:shadow-focus"
                                                   placeholder="Your Email Address"/>
                                            <div className="absolute right-0 top-1/2 z-9 -translate-y-1/2">
                                                <button name="submit" value="Submit" type="submit" className="size-13.5 group">
                                                    <i className="icon feather icon-arrow-right text-xl group-hover:animate-toLeftFromRight"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full wow fadeInUp" data-wow-delay="0.2s">
                            <div className="mb-7.5">
                                <h5 className="text-xl leading-[1.2] mb-5">Recent Posts</h5>
                                <ul>
                                    <li className="flex items-center mb-4">
                                        <div className="size-14.5 min-w-14.5 mr-3.6">
                                            <img src="/assets/theme/images/shop/product/small/1.png" alt=""
                                                 className="rounded-xl w-full"/>
                                        </div>
                                        <div>
                                            <h6><a href="post-standard.html">Cozy Knit Cardigan Sweater</a></h6>
                                            <span className="text-2xs">July 23, 2024</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="size-14.5 min-w-14.5 mr-3.6">
                                            <img src="/assets/theme/images/shop/product/small/2.png" alt=""
                                                 className="rounded-xl w-full"/>
                                        </div>
                                        <div>
                                            <h6><a href="post-standard.html">Sophisticated Swagger Suit</a></h6>
                                            <span className="text-2xs">July 23, 2024</span>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="size-14.5 min-w-14.5 mr-3.6">
                                            <img src="/assets/theme/images/shop/product/small/3.png" alt=""
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
                        <div className="xl:w-1/6 sm:w-1/3 w-1/2 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="mb-7.5 font-medium">
                                <h5 className="text-xl leading-[1.2] mb-5">Our Stores</h5>
                                <ul>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">New
                                        York</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">London
                                        SF</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Edinburgh</a>
                                    </li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Los
                                        Angeles</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Chicago</a>
                                    </li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Las
                                        Vegas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="xl:w-1/6 sm:w-1/3 w-1/2 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="mb-7.5 font-medium">
                                <h5 className="text-xl leading-[1.2] mb-5">Useful Links</h5>
                                <ul>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Privacy
                                        Policy</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Returns</a>
                                    </li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Terms
                                        & Conditions</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Contact
                                        Us</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Latest
                                        News</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Our
                                        Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="xl:w-1/6 sm:w-1/3 w-full wow fadeInUp" data-wow-delay="0.5s">
                            <div className="mb-7.5 font-medium">
                                <h5 className="text-xl leading-[1.2] mb-5">Footer Menu</h5>
                                <ul>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Instagram
                                        profile</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">New
                                        Collection</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Woman
                                        Dress</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Contact
                                        Us</a></li>
                                    <li className="py-2 text-2sm"><a className="hover:text-primary" href="javascript:void(0);">Latest
                                        News</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row py-7 max-sm:py-5 border-t border-black/10 font-semibold text-2sm max-sm:text-sm wow fadeInUp"
                         data-wow-delay="0.1s">
                        <div className="lg:w-1/2 w-full text-start max-lg:text-center">
                            <p className="copyright-text">© <span className="current-year"> {new Date().getFullYear()} </span> <Link className="text-primary" target="_blank" href="/">
                                {app.name}</Link>. All Rights Reserved.</p>
                        </div>
                        <div className="lg:w-1/2 w-full text-end max-lg:text-center max-lg:mt-3.6">
                            <div className="flex items-center justify-center md:justify-center xl:justify-end">
                                <span className="mr-4">Social media: </span>
                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/footer-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}