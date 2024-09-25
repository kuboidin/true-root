import Link from "next/link";
import SwiperComp from "@/components/comp/swiper";

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
                <div x-data="{ tab: 'home-tab' }">
                    <ul className="flex justify-center flex-wrap border-b border-border" id="myTab1" role="tablist">
                        <li>
                            <button className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent">Description
                        </button>
                    </li>
                    <li>
                        <button className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent">Reviews (12)
                    </button>
                </li>
            </ul>
            <div className="lg:pt-13.5 sm:pt-7.5 pt-5" id="myTabContent">
                <div>
                    <div className="row">
                        <div className="lg:w-1/2 m-lg-b0 m-md-b30">
                            <div className="mb-10 max-md:mb-5">
                                <h2 className="mb-2">Fits women</h2>
                                <p className="mb-4">Designed for superior child comfort, OneFit™ provides extra rear-facing legroom and multiple recline options in every mode of use. With the widest range of height adjustments, the easy-adjust headrest system adjusts with the harness to grow with your child. OneFit™ accommodates tiny passengers from the very start with a removable head and body support insert for newborns weighing 5-11 lbs. </p>
                            </div>
                            <div className="xl:mb-6 md:mb-3.5 mb-2.5">
                                <h4 className="font-bold text-xl max-md:text-lg">Specifications</h4>
                                <ul>
                                    <li className="py-1.1 text-body max-md:text-sm">Assembled Dimensions (L x W x H): <span>71.1 x 45.7 x 7.6 cm; 700 Grams</span></li>
                                    <li className="py-1.1 text-body max-md:text-sm">Assembled Product Weight: <span>25 lbs.</span></li>
                                </ul>
                            </div>
                            <ul className="specification-list mb-10">
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Manufacturer <span>Indra Hosiery Mills</span></li>
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">ASIN<span>B07WK128569</span></li>
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Country of Origin<span>India</span></li>
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Department<span>Women</span></li>
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Included Components<span>Women's Jacket</span></li>
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Item Dimensions LxWxH<span> 71.1 x 45.7 x 7.6 Centimeters</span></li>
                                <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Manufacture<span> Indra Hosiery Mills</span></li>
                            </ul>
                            <div className="product-media row g-xl-4 g-2 mb-10">
                                <div className="w-1/4">
                                    <a href="shop-list.html">
                                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress1.png" alt="/" className="rounded-xl w-full" />
                                    </a>
                                </div>
                                <div className="w-1/4">
                                    <a href="shop-list.html">
                                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress2.png" alt="/" className="rounded-xl w-full" />
                                    </a>
                                </div>
                                <div className="w-1/4">
                                    <a href="shop-list.html">
                                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress3.png" alt="/" className="rounded-xl w-full" />
                                    </a>
                                </div>
                                <div className="w-1/4">
                                    <a href="shop-list.html">
                                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress4.png" alt="/" className="rounded-xl w-full" />
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                    <h4 className="font-bold text-xl max-md:text-lg">Fabric Content</h4>
                                    <ul className="lg:flex block items-center">
                                        <li className="mr-14"><h6>Seatpad: <span className="font-normal">100% Cotton</span></h6></li>
                                        <li><h6>Insert: <span className="font-normal">100% Cotton</span></h6></li>
                                    </ul>
                                </div>
                                <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                    <h4 className="font-bold text-xl max-md:text-lg">Chemical Statement</h4>
                                    <p className="mb-4 text-body">The OneFit ClearTex All-In-One Car Seat is produced without the use of intentionally added fire retardant chemical treatments, PFAS, BPA and phthalates. </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="row">
                                <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                    <a href="shop-standard.html" className="about-product-wrapper">
                                        <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                            <h4 className="font-bold text-xl max-md:text-lg">All-in-One Dress</h4>
                                            <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                    <a href="shop-standard.html" className="about-product-wrapper">
                                        <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                            <h4 className="font-bold text-xl max-md:text-lg">Looking wise good</h4>
                                            <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                    <a href="shop-standard.html" className="about-product-wrapper">
                                        <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                            <h4 className="font-bold text-xl max-md:text-lg">100% Made In India</h4>
                                            <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                    <a href="shop-standard.html" className="about-product-wrapper">
                                        <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                            <h4 className="font-bold text-xl max-md:text-lg">100% Cotton</h4>
                                            <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div><img className="rounded-3xl w-full" src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product-details/product-style-1/product-details-1.png" alt="/" /></div>
                        </div>
                    </div>
                </div>
                <div>

                    <div id="comment-list">
                        <div>
                            <h4 className="mb-2">Comments (02)</h4>
                            <p className="text-sm mb-7.5 text-body">There are many variations of passages of Lorem Ipsum available.</p>
                            <div id="comment">
                                <ol className="mb-14.5 max-lg:mb-10">
                                    <li className="comment even thread-even depth-1 comment" id="comment-2">
                                        <div className="relative pt-0.5 pb-7.5 pl-25 mb-7.5 min-h-[115px] border-b border-black/10">
                                            <div className="comment-author vcard">
                                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile4.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0" />
                                                    <cite className="font-Lufga not-italic text-base leading-[21px] font-semibold mb-2.5 block">Michel Poe</cite>
                                            </div>
                                            <div>
                                                <p className="text-sm text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="reply">
                                                <a rel="nofollow" className="absolute top-0 right-0 py-[3px] px-2.5 inline-block rounded-md text-xs bg-title font-medium text-white leading-[1.3] uppercase mb-2" href="#;">Reply</a>
                                            </div>
                                        </div>
                                        <ol className="sm:pl-13.5">
                                            <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                <div className="relative pt-0.5 pb-7.5 pl-25 mb-7.5 min-h-[115px] border-b border-black/10" id="div-comment-3">
                                                    <div className="comment-author vcard">
                                                        <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile3.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0" />
                                                            <cite className="font-Lufga not-italic text-base leading-[21px] font-semibold mb-2.5 block">Celesto Anderson</cite>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                    </div>
                                                    <div className="reply">
                                                        <a className="absolute top-0 right-0 py-[3px] px-2.5 inline-block rounded-md text-xs bg-title font-medium text-white leading-[1.3] uppercase mb-2" href="#;"> Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                        <div className="relative pt-0.5 pb-7.5 pl-25 mb-7.5 min-h-[115px] border-b border-black/10" id="div-comment-4">
                                            <div className="comment-author vcard">
                                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile2.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0" />
                                                    <cite className="font-Lufga not-italic text-base leading-[21px] font-semibold mb-2.5 block">Monsur Rahman Lito</cite>
                                            </div>
                                            <div>
                                                <p className="text-sm text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                            <div className="reply">
                                                <a className="absolute top-0 right-0 py-[3px] px-2.5 inline-block rounded-md text-xs bg-title font-medium text-white leading-[1.3] uppercase mb-2" href="#;"> Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <div id="respond">
                                <h4 className="comment-reply-title mb-2" id="reply-title">Good Comments</h4>
                                <p className="text-sm mb-7.5 text-body">There are many variations of passages of Lorem Ipsum available.</p>
                                <div className="clearfix">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
</>;
}