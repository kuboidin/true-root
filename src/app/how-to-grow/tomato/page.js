import SwiperComp from "@/components/comp/swiper";
import InformationTab from "@/components/pages/vegitable/information-tab";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";

export default function Page() {

    return <>
        {/* breadcrumbs */}
        <Breadcrumbs crumbs={[
            { name: "Home", link: "/" },
            { name: "How to grow", link: "/how-to-grow" },
            { name: "Tomato" },
        ]} />

        <section>
            <div className="container-fluid">
                <div className="row flex flex-wrap">
                    <div className="md:w-1/2 w-full">
                        <div className="mb-7.5 sticky top-0 z-1">
                            <div className="relative">
                                <SwiperComp images={[
                                    {src: "/assets/plants/vegetable/tomato/t1.webp", alt: "How to grow tomatoes"},
                                    {src: "/assets/plants/vegetable/tomato/t2.jpg", alt: "How to grow tomatoes"},
                                    {src: "/assets/plants/vegetable/tomato/t3.jpeg", alt: "How to grow tomatoes"},
                                    {src: "/assets/plants/vegetable/tomato/t4.webp", alt: "How to grow tomatoes"},
                                ]}/>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="max-w-[660px] mb-7.5 sm:pt-13.5 xl:pl-10">
                            <div className="dz-content">
                                <div className="flex mb-3.6">
                                    <div className="flex-1">
                                        <span className="py-[3px] px-2.5 inline-block rounded-md text-xs bg-[#5E5CC6] font-semibold text-white leading-[1.3] uppercase mb-2">
                                            Solanum lycopersicum, Vegetable (Fruit)
                                        </span>
                                        <h5 className="lg:text-4xl sm:text-3xl text-2xl mb-1">Tomato (टमाटर)</h5>
                                        <div className="flex flex-row justify-between items-center text-center content-center">
                                            <EcoBadge score={4} />
                                            <div className="flex flex-col justify-start text-left text-sm">
                                                <span>one of the easiest vegetables to grow</span>
                                                <span>Fruiting withing 60-100 days</span>
                                                <span>Can be grown hydroponically</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 mb-4 text-2sm">
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