import Image from "next/image";

export default function Home() {
  return <>
    {/* hero section */}
    <div className="overflow-hidden relative main-slider style-2">
      <div className="main-swiper2">
        <div className="container">
          <div className="h-[800px] pt-7.5 pb-20 max-3xl:h-[700px] max-3xl:pb-13.5 max-xl:!h-[550px] max-xl:!pb-[75px] max-lg:mb-7.5 max-sm:!my-3.6 banner-content">
            <div className="row">
              <div className="xl:w-7/12 lg:w-7/12 w-full self-center">
                <div className="max-sm:mb-7.5">
                  <div className="relative z-[2] pb-[45px] max-xl:pb-5">
                    <h1 data-swiper-parallax="-20">Your Ultimate <span
                        className="text-primary flex items-center"><svg className="mr-2.5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="68" height="68"
                                                                        viewBox="0 0 68 68"
                                                                        fill="none">
											<path d="M34 0L43.6167 24.3833L68 34L43.6167 43.6167L34 68L24.3833 43.6167L0 34L24.3833 24.3833L34 0Z"
                                                  fill="var(--primary)"/>
										  </svg> Online Store</span>for All Your Needs.
                    </h1>
                    <p className="text-2xl max-xl:text-xl max-md:!text-lg" data-swiper-parallax="-40">No
                      code need. Plus free shippng on <span className="text-primary">$99+</span>
                      orders!</p>
                  </div>
                  <div className="content-btn" data-swiper-parallax="-60">
                    <a href="shop-cart.html"
                       className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden xl:mr-4 mr-2">ADD
                      TO CART</a>
                    <a href="shop-standard.html"
                       className="btn py-3 px-7.5 max-sm:px-6 text-base max-sm:text-sm inline-block font-medium font-Lufga leading-[1.2] border border-secondary rounded-xl duration-700 hover:bg-secondary hover:text-white relative overflow-hidden ">VIEW
                      DETAILS</a>
                  </div>
                </div>
              </div>
              <div className="xl:w-5/12 lg:w-5/12 w-full">
                <div className="-mr-25 ml-13.5 relative z-1 max-3xl:!mr-0 max-4xl:-mr-10 max-md:ml-7.5 max-sm:!ml-0 max-sm:float-left max-sm:w-full banner-media">
                  <div className="shap"></div>
                  <div className="border border-[#DFDFDF] absolute top-[18%] left-[-13%] w-[61%] h-[54%] rounded-ss-[150px] -z-1"></div>
                  <div className="border border-[#DFDFDF] absolute bottom-[-7%] right-[-7%] w-[50%] h-[35%] rounded-ee-[150px] -z-1"></div>

                  <div className="overflow-hidden" data-swiper-parallax="-100">
                    <Image width={860} height={1044} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/main-slider/slider2/pic1.png"
                         alt="banner-media" className="w-full object-cover"/>
                  </div>
                  <div className="w-[250px] p-5 absolute top-[38%] right-[-5vw] duration-700 rounded-2xl bg-[#ffffffb3] shadow-wrapper backdrop-blur-[7px] flex items-center max-3xl:w-[200px] max-3xl:p-3.6 max-3xl:right-[1vw] max-md:hidden hover:-translate-y-2.5">
                    <div className="relative overflow-hidden z-1 rounded-xl shadow-[0px_15px_40px_0px_rgba(0,0,0,0.1)] mr-2.5">
                      <Image width={100} height={100} src="/assets/theme/images/shop/product/small/1.png" alt="" className="w-full"/>
                    </div>
                    <div className="relative z-1 max-3xl:pt-3 ">
                      <h5 className="text-base">Cozy Knit Cardigan</h5>
                      <h6 className="text-primary">$80</h6>
                      <div className="size-[45px] max-sm:size-7.5 max-sm:group-hover:-bottom-2.5 bg-primary flex items-center justify-center rounded-full mb-1.1 shadow-default absolute bottom-[-45px] right-0 overflow-hidden btn meta-icon dz-carticon">
                        <i className="flaticon flaticon-basket text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="p-6.1 absolute bottom-[12%] left-[-3vw] duration-700 rounded-2xl bg-[#ffffffb3] shadow-wrapper backdrop-blur-[7px] flex items-center w-[270px] justify-center max-md:hidden">
                    <i className="icon feather icon-heart-on dz-heart text-primary text-3xl mr-3.6"></i>
                    <ul className="flex px-2.5">
                      <li className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
                        <Image width={200} height={200} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/testimonial/testimonial1.jpg"
                             alt="" className="border-2 border-white rounded-full size-full"/>
                      </li>
                      <li className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
                        <Image width={200} height={200} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/testimonial/testimonial2.jpg"
                             alt="" className="border-2 border-white rounded-full size-full"/>
                      </li>
                      <li className="min-w-14.5 size-14.5 rounded-full -ml-2.5">
                        <Image width={200} height={200} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/testimonial/testimonial3.jpg"
                             alt="" className="border-2 border-white rounded-full size-full"/>
                      </li>
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
        <div className="absolute top-5 left-6.1 xl:block hidden">
          <ul className="flex items-center flex-col">
            <li className="py-5 [writing-mode:tb-rl]">
              <a className="text-sm font-semibold uppercase tracking-widest"
                 href="https://www.instagram.com/dexignzone/" target="_blank">Instagram</a>
            </li>
            <li className="py-5 [writing-mode:tb-rl]">
              <a className="text-sm font-semibold uppercase tracking-widest"
                 href="https://www.facebook.com/dexignzone" target="_blank">Facebook</a>
            </li>
            <li className="py-5 [writing-mode:tb-rl]">
              <a className="text-sm font-semibold uppercase tracking-widest"
                 href="https://twitter.com/dexignzones" target="_blank">twitter</a>
            </li>
          </ul>
        </div>
        <a href="https://pixio.dexignzone.com/tailwind/demo/contact-us-2.html"
           className="max-lg:hidden btn py-3.6 px-1.5 text-sm uppercase font-Lufga block leading-[1.2] bg-[#24262B] text-white rounded-xl duration-700 absolute bottom-7 left-[26px] overflow-hidden rotate-180 [writing-mode:vertical-rl]">Let’s
          talk</a>
      </div>
    </div>

    {/*  featured */}

    <div className="3xl:pt-25 3xl:pb-17 md:pt-17 md:pb-10 sm:pt-13.5 sm:pb-5 pt-10 pb-5 relative z-1 rounded-4xl bg-lightdark mx-20 max-3xl:mx-10 max-lg:mx-5 category-section">
      <div className="container">
        <div className="row gx-xl-4 g-3">
          <div className="md:w-1/3 w-1/2 animate__bounceIn animate__delay-0-2s">
            <div className="relative z-1 mb-13.5 max-lg:mb-0 pl-10 max-lg:pl-0">
              <a href="shop-with-category.html">
                <Image width={555} height={450} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/category/pic1.jpg"
                     alt=""
                     className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3.5xl rounded-ee-7xl max-md:rounded-ee-4xl"/>
                <div className="absolute left-0 max-lg:left-[-15px] max-sm:!-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3.5xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 hover:bg-primary hover:text-white">
                  Jacket
                </div>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/3 w-1/2 animate__bounceIn animate__delay-0-3s">
            <div className="relative z-1 mb-13.5 max-lg:mb-0 pl-10 max-lg:pl-0">
              <a href="shop-with-category.html">
                <Image width={555} height={450} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/category/pic2.jpg"
                     alt=""
                     className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3.5xl rounded-es-7xl max-md:rounded-es-4xl"/>
                <div className="absolute left-0 max-lg:left-[-15px] max-sm:!-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3.5xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 hover:bg-primary hover:text-white">
                  Jeans
                </div>
              </a>
            </div>
          </div>
          <div className="xl:w-5/12 md:w-1/3 w-1/2 animate__bounceIn animate__delay-0-4s">
            <div className="relative z-1 mb-13.5 max-lg:mb-0 pl-10 max-lg:pl-0">
              <a href="shop-with-category.html">
                <Image width={555} height={450} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/category/pic3.jpg"
                     alt=""
                     className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3.5xl rounded-ee-7xl max-md:rounded-ee-4xl"/>
                <div className="absolute left-0 max-lg:left-[-15px] max-sm:!-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3.5xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 hover:bg-primary hover:text-white">
                  Shirts
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 w-1/2 animate__bounceIn animate__delay-0-5s">
            <div className="relative z-1 mb-13.5 max-lg:mb-0 pr-10 max-lg:pr-0">
              <a href="shop-with-category.html">
                <Image width={555} height={450} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/category/pic4.jpg"
                     alt=""
                     className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3.5xl rounded-ss-7xl max-md:rounded-ss-4xl"/>
                <div className="absolute right-0 max-lg:right-[-15px] max-sm:!right-auto max-sm:-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3.5xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 hover:bg-primary hover:text-white">
                  Shorts
                </div>
              </a>
            </div>
          </div>
          <div className="xl:w-5/12 md:w-1/3 w-1/2 animate__bounceIn animate__delay-0-6s">
            <div className="relative z-1 mb-13.5 max-lg:mb-0 pr-10 max-lg:pr-0">
              <a href="shop-with-category.html">
                <Image width={555} height={450} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/category/pic5.jpg"
                     alt=""
                     className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3.5xl rounded-ss-7xl max-md:rounded-ss-4xl"/>
                <div className="absolute right-0 max-lg:right-[-15px] max-sm:!right-auto max-sm:-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3.5xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 hover:bg-primary hover:text-white">
                  t-shirt
                </div>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/3 w-1/2 animate__bounceIn animate__delay-0-7s">
            <div className="relative z-1 mb-13.5 max-lg:mb-0 pr-10 max-lg:pr-0">
              <a href="shop-with-category.html">
                <Image width={555} height={450} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/category/pic6.jpg"
                     alt=""
                     className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3.5xl rounded-ss-7xl max-md:rounded-ss-4xl"/>
                <div className="absolute right-0 max-lg:right-[-15px] max-sm:!right-auto max-sm:-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3.5xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 hover:bg-primary hover:text-white">
                  Blazer
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[140px] p-2.5 absolute rounded-full inline-block left-1/2 top-[-7%] [transform:translate(-50%,_-7%)] max-lg:hidden icon-button">
        <div className="flex items-center justify-center size-[140px] rounded-full animate-rotate text-center text-row word-rotate-box c-black border-white">
          Category
        </div>
      </div>
    </div>
  </>;
}
