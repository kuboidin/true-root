import Link from "next/link";

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
                <div className="row">
                    <div className="md:w-1/2 w-full">
                        <div className="mb-7.5 sticky top-29 z-1">
                            <div className="relative swiper-btn-center-lr">
                                <div className="swiper product-gallery-swiper2 rounded-3xl">
                                    <div className="swiper-wrapper" id="lightgallery">
                                        <div className="swiper-slide">
                                            <div className="relative overflow-hidden DZoomImage group">
                                                <a className="mfp-link lg-item" href="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-1.png" data-src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-1.png">
                                                    <i className="feather icon-maximize dz-maximize absolute top-5 right-5 size-10 flex items-center justify-center bg-white text-2xl rounded-xl duration-500 opacity-0 group-hover:opacity-100"></i>
                                                </a>
                                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-1.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative overflow-hidden DZoomImage group">
                                                <a className="mfp-link lg-item" href="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-2.png" data-src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-2.png">
                                                    <i className="feather icon-maximize dz-maximize absolute top-5 right-5 size-10 flex items-center justify-center bg-white text-2xl rounded-xl duration-500 opacity-0 group-hover:opacity-100"></i>
                                                </a>
                                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-2.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative overflow-hidden DZoomImage group">
                                                <a className="mfp-link lg-item" href="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-3.png" data-src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-3.png">
                                                    <i className="feather icon-maximize dz-maximize absolute top-5 right-5 size-10 flex items-center justify-center bg-white text-2xl rounded-xl duration-500 opacity-0 group-hover:opacity-100"></i>
                                                </a>
                                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/lady-3.png" alt="image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper product-gallery-swiper thumb-swiper-lg swiper-vertical absolute top-7.5 left-7.5">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide mb-3.6 !size-17 max-lg:!size-13.5">
                                            <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products//thumb-img/lady-1.png" alt="image" className="border-2 border-white rounded-xl"/>
                                        </div>
                                        <div className="swiper-slide mb-3.6 !size-17 max-lg:!size-13.5">
                                            <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products//thumb-img/lady-2.png" alt="image" className="border-2 border-white rounded-xl"/>
                                        </div>
                                        <div className="swiper-slide mb-3.6 !size-17 max-lg:!size-13.5">
                                            <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products//thumb-img/lady-3.png" alt="image" className="border-2 border-white rounded-xl"/>
                                        </div>
                                    </div>
                                </div>
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
                                            <a className="text-2xs" href="javascript:void(0);">(5 customer reviews)</a>
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
                                        <span className="flex">
                                            <input type="button" value="-" data-field="quantity" className="button-minus size-10 leading-[27px] rounded-full text-center text-xl border border-secondary mr-2.5 mb-1.1 bg-secondary text-white"/>
                                            <input type="number" step="1" value="1" name="quantity" className="touchspin size-10 leading-[27px] rounded-full text-center border border-secondary mr-2.5 mb-1.1 bg-light outline-none"/>
                                            <input type="button" value="+" data-field="quantity" className="button-plus size-10 leading-[27px] rounded-full text-center text-xl border border-secondary mr-2.5 mb-1.1 bg-secondary text-white"/>
                                        </span>
                                    </div>
                                    <div className="mr-11 max-lg:mr-3.6">
                                        <label className="font-bold mb-2.5 block font-Lufga">Size</label>
                                        <div className="btn-group product-size m-0">
                                            <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1" id="btnradio101" checked=""/>
                                            <label className="size-[34px] rounded-full border border-secondary mr-2.5 mb-1.1 inline-flex items-center justify-center" htmlFor="btnradio101">S</label>
                                            <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1" id="btnradiol02"/>
                                            <label className="size-[34px] rounded-full border border-secondary mr-2.5 mb-1.1 inline-flex items-center justify-center" htmlFor="btnradiol02">M</label>
                                            <input type="radio" className="opacity-0 absolute pointer-events-none btn-check" name="btnradio1" id="btnradiol03"/>
                                            <label className="size-[34px] rounded-full border border-secondary mr-2.5 mb-1.1 inline-flex items-center justify-center" htmlFor="btnradiol03">L</label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-bold mb-2.5 block font-Lufga">Color</label>
                                        <div className="flex items-center color-filter">
                                            <div className="form-check">
                                                <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel11" value="#24262B" aria-label="..." checked/>
                                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                                            </div>
                                            <div className="form-check">
                                                <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel12" value="#8CB2D1" aria-label="..."/>
                                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                                            </div>
                                            <div className="form-check">
                                                <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel13" value="#0D775E" aria-label="..."/>
                                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                                            </div>
                                            <div className="form-check">
                                                <input className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel24" value="#FEC4C4" aria-label="..."/>
                                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                                            </div>
                                        </div>
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
    </>;
}