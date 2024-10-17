import Image from "next/image";
import app from "@/config/app";
import shape_186 from "@/public/assets/home/shape_186.svg";
import shape_132 from "@/public/assets/home/shape_132.svg";
import shape_188 from "@/public/assets/home/shape_188.svg";
import shape_189 from "@/public/assets/home/shape_189.svg";
import icon_175 from "@/public/assets/home/icon_175.svg";
import icon_176 from "@/public/assets/home/icon_176.svg";
import icon_177 from "@/public/assets/home/icon_177.svg";
import Link from "next/link";

export const metadata = {
    title: `About - ${app.name}`,
    description: `know more about ${app.name}.`,
    keywords: [...app.meta.keywords, "about", "about us", "about true root"],
    openGraph: {
        title: `About - ${app.name}`,
        description: `know more about ${app.name}.`,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
        url: `${app.url}/about`,
        type: 'website',
    },
    twitter: {
        title: `About - ${app.name}`,
        description: `know more about ${app.name}.`,
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
        canonical: `${app.url}/about`,
    }
};

export default function Support() {
    return <>
        <div className="fancy-feature-fiftyEight relative z-[2] pt-[180px]  md:pt-[150px] sm:pt-[150px] xsm:pt-[150px]">
            <div className="container relative">
                <div className="flex flex-wrap mx-[-12px]">
                    <div className="xl:w-9/12  lg:w-7/12  md:w-8/12  w-full flex-[0_0_auto] px-[12px] max-w-full m-auto">
                        <div className="title-style-fourteen text-center wow fadeInUp mb-[100px] lg:mb-[70px] md:mb-[70px] sm:mb-[70px] xsm:mb-[70px]">
                            <div className="sc-title text-[15px] tracking-[4px] uppercase text-[color:var(--prime-nine)] pb-4 lg:text-[13px] lg:pb-2.5 md:text-[13px] md:pb-2.5 sm:text-[13px] sm:pb-2.5 xsm:text-[13px] xsm:pb-2.5">ABOUT US</div>
                            <h2 className="main-title font-Recoleta font-normal text-black text-[86px] 2xl:text-[58px] lg:text-[48px] tracking-[0] leading-[1.17em] md:text-[40px] sm:text-[40px] xsm:text-[40px]">Our mission to make your business {" "}
                                <span className="relative">valuable <Image className=" absolute z-[-1] left-0 bottom-[9px]" src={shape_186} alt=""/></span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="container flex flex-wrap mx-[-12px] items-end">
                    <div className="w-full flex-[0_0_auto] px-[12px] xl:order-last lg:order-last md:order-last !ml-auto">
                        <div className="feedback-block-thirteen mb-[50px] wow fadeInRight">
                            <p className="text-[36px] leading-[1.58em] lg:text-[28px] lg:leading-[1.7em] md:text-[20px] sm:text-[20px] xsm:text-[20px] text-black mt-[35px] lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px] mb-[45px] lg:mb-[30px] md:mb-[30px] sm:mb-[30px] xsm:mb-[30px] text-center">
                                <Link href="https://kuboid.in/" className="underline">Kuboid&apos;s</Link> ability to deliver complex solutions quickly and efficiently is unmatched. They transformed our project, addressing every challenge with ease and improving our overall system performance. Their speed and skills are truly commendable.
                            </p>
                            <h6 className="text-black  text-[20px] lg:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px]  text-right"><span className=" text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em]  font-normal opacity-50"> - One of our client</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="fancy-feature-fiftyNine relative mt-[140px] wow fadeInUp">
            <div className="container">
                <div className="title-style-ten text-center wow fadeInUp">
                    <h2 className="main-title font-Recoleta font-normal  text-black  tracking-[0] leading-[1.17em] 2xl:text-[54px] md:text-[35px] sm:text-[35px] xsm:text-[35px] ">Kuboid. The <span className="relative"> Expert.<Image className=" absolute z-[-1] left-0 bottom-[9px]" src={shape_188} alt=""/></span></h2>
                </div>
                <div className="flex flex-wrap mx-[-12px]">
                    <div className="xl:w-9/12  w-full flex-[0_0_auto] px-[12px] max-w-full m-auto">
                        <p className="text-[24px] 2xl:text-[22px] lg:text-[19px] md:text-[19px] sm:text-[19px] xsm:text-[19px]  text-black text-center  !leading-[2]  mt-[25px]  md:mt-5 sm:mt-5 xsm:mt-5 wow fadeInUp">
                            Where innovation meets excellence. At Kuboid, we are passionate about transforming ideas into reality through cutting-edge technology and unparalleled expertise. Our mission is to empower businesses and individuals by delivering top-notch solutions that drive growth and success.
                        </p>
                    </div>
                </div>

                <div className="card-wrapper  pt-[45px] lg:pt-5 md:pt-5 sm:pt-5 xsm:pt-5 pb-[55px] lg:pb-[30px] md:pb-[30px] sm:pb-[30px] xsm:pb-[30px] mt-[85px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] xsm:mt-[50px] border-y-2 border-y-black border-solid">
                    <div className="flex flex-wrap mx-[-12px] justify-center">
                        <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="card-style-twentySix text-center mt-[25px]  wow fadeInUp">
                                <div className="icon rounded-[50%] m-auto flex items-center justify-center w-[75px] h-[75px] bg-black lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px]"><Image src={icon_175} alt="" className="lazy-img"/></div>
                                <h5 className=" text-black mt-10 lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px] mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Over 100+ Skills</h5>
                                <p className=" text-[18px] leading-[1.67em] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] ">Web & Mobile Development, DevOps, <br/> System Architect and more...</p>
                            </div>
                        </div>
                        <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="card-style-twentySix text-center mt-[25px]  wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon rounded-[50%] m-auto flex items-center justify-center w-[75px] h-[75px] bg-black lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px]"><Image src={icon_176} alt="" className="lazy-img"/></div>
                                <h5 className=" text-black mt-10 lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px] mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Ex-CTOs, Ex-Engineering Manager</h5>
                                <p className=" text-[18px] leading-[1.67em] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] ">From MNCs, Startups.</p>
                            </div>
                        </div>
                        <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="card-style-twentySix text-center mt-[25px]  wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon rounded-[50%] m-auto flex items-center justify-center w-[75px] h-[75px] bg-black lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px]"><Image src={icon_177} alt="" className="lazy-img"/></div>
                                <h5 className=" text-black mt-10 lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px] mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">High praises from our client</h5>
                                <p className=" text-[18px] leading-[1.67em] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] ">All Rounders, Experts and more...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper mt-[50px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px] xsm:mt-[10px] ">
                <div className="container">
                    <div className="flex flex-wrap mx-[-12px]">
                        <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="counter-block-five text-center mt-10  wow fadeInUp">
                                <div className="main-count font-Recoleta font-light text-[80px] text-[#151515] -mb-3 lg:text-[50px] lg:-mb-2 md:text-[50px] md:-mb-2 sm:text-[50px] sm:-mb-2 xsm:text-[50px] xsm:-mb-2">8+</div>
                                <p className=" text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] mb-[15px]">Years of experience</p>
                                <span className="block rounded-[50%] cicrle m-auto w-2 h-2" style={{background: "#FFC735"}}></span>
                            </div>
                        </div>
                        <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="counter-block-five text-center mt-10  wow fadeInUp" data-wow-delay="0.2s">
                                <div className="main-count font-Recoleta font-light text-[80px] text-[#151515] -mb-3 lg:text-[50px] lg:-mb-2 md:text-[50px] md:-mb-2 sm:text-[50px] sm:-mb-2 xsm:text-[50px] xsm:-mb-2">100+</div>
                                <p className=" text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] mb-[15px]">Skills</p>
                                <span className="block rounded-[50%] cicrle m-auto w-2 h-2" style={{background: "#F177FF"}}></span>
                            </div>
                        </div>
                        <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="counter-block-five text-center mt-10  wow fadeInUp" data-wow-delay="0.3s">
                                <div className="main-count font-Recoleta font-light text-[80px] text-[#151515] -mb-3 lg:text-[50px] lg:-mb-2 md:text-[50px] md:-mb-2 sm:text-[50px] sm:-mb-2 xsm:text-[50px] xsm:-mb-2">20+</div>
                                <p className=" text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] mb-[15px]">Industries & Domains</p>
                                <span className="block rounded-[50%] cicrle m-auto w-2 h-2" style={{background: "#00FCFC"}}></span>
                            </div>
                        </div>
                        <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                            <div className="counter-block-five text-center mt-10  wow fadeInUp" data-wow-delay="0.4s">
                                <div className="main-count font-Recoleta font-light text-[80px] text-[#151515] -mb-3 lg:text-[50px] lg:-mb-2 md:text-[50px] md:-mb-2 sm:text-[50px] sm:-mb-2 xsm:text-[50px] xsm:-mb-2">50+</div>
                                <p className=" text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] mb-[15px]">Successful Projects</p>
                                <span className="block rounded-[50%] cicrle m-auto w-2 h-2" style={{background: "#9671FF"}}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={shape_189} alt="" className="lazy-img shapes shape-one absolute z-[-1] left-0 top-[4%] sm:!hidden xsm:!hidden"/>
        </div>

        <div className="fancy-short-banner-twelve relative z-[2] pt-[160px] pb-[150px] lg:py-[120px] md:py-[120px] sm:py-[120px] xsm:py-[120px]">
            <div className="container">
                <div className="flex flex-wrap mx-[-12px]">
                    <div className="xxl:w-9/12 xl:w-10/12 w-full flex-[0_0_auto] px-[12px] max-w-full m-auto text-center">
                        <div className="title-style-ten wow fadeInUp">
                            <h1 className="main-title font-normal font-Recoleta text-black text-6xl tracking-[0] leading-[1.17em]">Have Any Project? <br/> <span className="relative">Let’s Talk <Image className=" absolute z-[-1] left-0 bottom-[9px]" src={shape_132} alt=""/></span> &amp; Grow your Business</h1>
                        </div>
                        <p className="text-[18px] 2xl:text-[22px] lg:text-[19px] md:text-[19px] sm:text-[19px] xsm:text-[19px] leading-[1.67em] mt-[45px] mb-[55px] lg:mb-[30px] md:mb-[30px] sm:mb-[30px] xsm:mb-[30px] lg:mt-10 md:mt-10 sm:mt-10 xsm:mt-10 wow fadeInUp" data-wow-delay="0.2s">We’r ready to help you.</p>

                        <Link href="https://www.kuboid.in/talk">
                            <button className="btn-twenty font-medium tran3s wow fadeInUp leading-[50px] text-black text-[17px] px-[35px] py-0 rounded-[30px] border-2 border-solid border-black hover:border-[color:var(--prime-eight)] hover:bg-[var(--prime-eight)]" data-wow-delay="0.3s">Let&apos;s Talk</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="shapes shape-one absolute z-[-1] w-[35px] h-[35px] right-[35%] top-[18%] bg-[#00FCFC]"></div>
        </div>
    </>;
}
