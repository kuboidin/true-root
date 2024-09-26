import Link from "next/link";
import SwiperComp from "@/components/comp/swiper";
import InformationTab from "@/components/pages/vegitable/information-tab";

export default function Page() {

    return <>
        {/* breadcrumbs */}
        <div className="sm:flex justify-between container-fluid py-4">
            <nav>
                <ul>
                    <li className="mr-[3px] inline-block text-base font-medium"><Link href="/"> Home</Link></li>
                    <li className="mr-[3px] pl-2 inline-block text-base font-medium before:content-['\f105'] before:font-['Font_Awesome_5_Free'] before:font-bold before:pr-3">Product Thumbnail</li>
                </ul>
            </nav>
        </div>

        <section>
            <div className="container-fluid">
                <div className="row flex flex-wrap">
                    <div className="md:w-1/2 w-full">
                        <div className="mb-7.5 sticky top-0 z-1">
                            <div className="relative">
                                <SwiperComp images={[
                                    {src: "https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-1.png", alt: "image"},
                                    {src: "https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-2.png", alt: "image"},
                                    {src: "https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-3.png", alt: "image"},
                                ]}/>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="max-w-[660px] mb-7.5 sm:pt-13.5 xl:pl-10">
                            <div className="dz-content">
                                <div className="flex mb-3.6">
                                    <div className="flex-1">
                                        <span className="py-[3px] px-2.5 inline-block rounded-md text-xs bg-[#5E5CC6] font-semibold text-white leading-[1.3] uppercase mb-2">SALE 20% Off</span>
                                        <h5 className="lg:text-4xl sm:text-3xl text-2xl mb-1">Women Red & White Striped Crepe Top</h5>
                                        <div className="flex">
                                            <ul className="flex gap-0.5 items-center mr-2">
                                                <li className="text-sm text-[#ff8a00] star-fill">
                                                    <i className="flaticon-star-1"></i>
                                                </li>
                                                <li className="text-sm text-[#ff8a00] star-fill">
                                                    <i className="flaticon-star-1"></i>
                                                </li>
                                                <li className="text-sm text-[#ff8a00] star-fill">
                                                    <i className="flaticon-star-1"></i>
                                                </li>
                                                <li className="text-sm text-[#e4e5e8]">
                                                    <i className="flaticon-star-1"></i>
                                                </li>
                                                <li className="text-sm text-[#e4e5e8]">
                                                    <i className="flaticon-star-1"></i>
                                                </li>
                                            </ul>
                                            <span className="text-2xs mr-2">4.7 Rating</span>
                                            <a className="text-2xs">(5 customer reviews)</a>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4 text-2sm">
                                    This comfortable cotton crop-top features the Divi Engine logo on the front expressing how easy “data Divi Engine life” is. It is the perfect tee for any occasion.
                                </p>
                                <div className="meta-content mb-5">
                                    <span className="block text-sm text-body">Price</span>
                                    <span className="font-medium text-2xl font-Lufga">$125.75 <del className="py-1.1 opacity-60 text-lg text-body">$132.17</del></span>
                                </div>
                                <div className="flex flex-wrap items-center md:gap-2 xl:gap-0 lg:mb-10 sm:mb-5 mb-3.6 max-sm:justify-between">
                                    <div className="mr-11 max-lg:mr-3.6 light xl:block hidden input-group">
                                        <label className="font-bold mb-2.5 block font-Lufga">Quantity</label>
                                    </div>
                                    <div className="mr-11 max-lg:mr-3.6">
                                        <label className="font-bold mb-2.5 block font-Lufga">Size</label>
                                    </div>
                                    <div>
                                        <label className="font-bold mb-2.5 block font-Lufga">Color</label>
                                    </div>
                                </div>
                                <div className="flex items-center lg:mb-10 sm:mb-5 mb-3.6 -mx-1.1">
                                    <a href="shop-cart.html" className="btn py-3 px-5 text-base font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 uppercase relative overflow-hidden m-1.1">Add To Cart</a>
                                    <a href="shop-wishlist.html" className="btn py-3 px-5 text-base inline-flex gap-2.5 items-center justify-center font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden m-1.1">
                                        <i className="icon feather icon-heart"></i>
                                        Add To Wishlist
                                    </a>
                                </div>
                                <div className="mb-10 pt-5 border-t border-border relative">
                                    <ul className="flex flex-wrap items-center mb-2.5">
                                        <li className="text-sm mr-2.5"><strong className="text-2sm font-Lufga">SKU:</strong></li>
                                        <li className="text-sm mr-2.5">PRT584E63A</li>
                                    </ul>
                                    <ul className="flex flex-wrap items-center mb-2.5">
                                        <li className="text-sm mr-2.5"><strong className="text-2sm font-Lufga">Category:</strong></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Dresses,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Jeans,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Swimwear,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Summer,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Clothing,</a></li>
                                    </ul>
                                    <ul className="flex flex-wrap items-center mb-2.5">
                                        <li className="text-sm mr-2.5"><strong className="text-2sm font-Lufga">Tags:</strong></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Casual,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Athletic,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Workwear,</a></li>
                                        <li className="text-sm mr-2.5"><a href="shop-standard.html">Accessories,</a></li>
                                    </ul>
                                    <ul className="flex flex-wrap items-center mb-2.5">
                                        <li className="text-base mr-5"><strong className="text-2sm font-Lufga">Share:</strong></li>
                                        <li className="text-base mr-5">
                                            <a className="hover:text-primary" href="https://www.facebook.com/dexignzone" target="_blank">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="text-base mr-5">
                                            <a className="hover:text-primary" href="https://www.linkedin.com/showcase/3686700/admin/" target="_blank">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li className="text-base mr-5">
                                            <a className="hover:text-primary" href="https://www.instagram.com/dexignzone/" target="_blank">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="text-base mr-5">
                                            <a className="hover:text-primary" href="https://twitter.com/dexignzones" target="_blank">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="md:flex hidden items-center">
                                    <li className="flex items-center xl:mr-6 mr-2">
                                        <div className="h-13.5 min-w-13.5 flex items-center justify-center">
                                            <i className="flaticon flaticon-ship text-body text-[46px]"></i>
                                        </div>
                                        <div className="xl:ml-5 ml-2.5">
                                            <span className="text-body text-sm">FREE</span>
                                            <h6>Shipping</h6>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="h-13.5 min-w-13.5 flex items-center justify-center">
                                            <i className="flaticon-fast-delivery-1 text-body text-[46px]"></i>
                                        </div>
                                        <div className="xl:ml-5 ml-2.5">
                                            <span className="text-body text-sm">Easy Returns</span>
                                            <h6>30 Days</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="absolute z-1 right-6.1 top-[250px] xl:block hidden">
                                <ul className="flex items-center flex-col">
                                    <li className="py-5 [writing-mode:tb-rl]">
                                        <a className="font-semibold text-sm uppercase tracking-widest" href="https://www.instagram.com/dexignzone/">Instagram</a>
                                    </li>
                                    <li className="py-5 [writing-mode:tb-rl]">
                                        <a className="font-semibold text-sm uppercase tracking-widest" href="https://www.facebook.com/dexignzone">Facebook</a>
                                    </li>
                                    <li className="py-5 [writing-mode:tb-rl]">
                                        <a className="font-semibold text-sm uppercase tracking-widest" href="https://twitter.com/dexignzones">twitter</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="pt-17 max-lg:pt-13.5">
            <div className="container">
                <div className="product-description">
                    <div>
                        <InformationTab />
                    </div>
                </div>
            </div>
        </section>
    </>;
}