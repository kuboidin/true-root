import Link from "next/link";
import Image from "next/image";
import Nutrition from "@/components/pages/vegitable/nutrition";

export default function InformationTab({ plant }) {
    return <>
        <div className="row">
            <div className="w-full m-lg-b0 m-md-b30">
                <div className="mb-10 max-md:mb-5 px-20">
                    <h2 className="mb-2">Good to know</h2>
                    <p className="mb-4">
                        {plant.tabs.good_to_know.heading}
                    </p>
                </div>

                <div className="flex flex-col gap-0">
                    <div className="w-full h-14" style={{backgroundImage: 'url("/assets/other/image/bg-slide5.webp")'}}></div>
                    <div className="w-full bg-darkGreen bg-no-repeat bg-auto -mt-1" style={{backgroundImage: 'url("/assets/other/image/bg-bn5-1.webp")', backgroundPosition: "center left"}}>
                        <div className="grid grid-cols-6 gap-2 my-20 background-overlay bg-no-repeat" style={{backgroundImage: 'url("/assets/other/image/bg-bn5-2.webp")', backgroundPosition: "center right"}}>
                            <div></div>
                            <div>
                                <div className="text-left inline-block">
                                    <div className="title_block">
                                        <p className="sub_title text-base pb-[22px] mb-0">Many benefits of {plant.plural}</p>
                                        <h4 className="text-white font-bold lg:text-[32px] text-3xl xl:leading-[48px] leading-9">Health benefits</h4>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm mt-[23px] text-white">
                                        {plant.tabs.good_to_know.health_benefits.map((benefit, i) => <div key={i}><span className="font-bold text-lemonGreen">{benefit.heading}: </span> {benefit.detail}
                                            {" "}  <span className="text-2xs">Source: <Link href={benefit.source.link} target="_blank" className="green-link">{benefit.source.title}</Link></span></div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex col-span-2 items-center justify-center content-center">
                                <Image className="rounded-full w-[500px] h-[500px] object-cover border-8 border-lightGreen" src={plant.tabs.good_to_know.hero_image.url} alt={plant.tabs.good_to_know.hero_image.title} width={700} height={700}/>
                            </div>
                            <div>
                                <div className="flex flex-col pb-7 gap-4 text-white">
                                    <div className="flex flex-row items-center gap-4">
                                        <Image className="h-[40px] w-[40px]" decoding="async" width={50} height={50} alt="icon" src="/assets/theme/icons/icon5-1.webp"/>
                                        <h4 className="text-lightGreen">{plant.tabs.good_to_know.right_section.heading}</h4>
                                    </div>
                                    <p className="text-white text-sm">{plant.tabs.good_to_know.right_section.information}</p>

                                    {plant.tabs.good_to_know.right_section.content}

                                    <p className="text-sm text-pretty">
                                        {plant.tabs.good_to_know.right_section.footer_info}
                                    </p>

                                    <div className="flex flex-row items-center gap-4 mt-10">
                                        <Image className="h-[40px] w-[40px]" decoding="async" width={50} height={50} alt="icon" src="/assets/theme/icons/icon5-3.webp"/>
                                        <h4 className="text-lightGreen">Disclaimer: </h4>
                                    </div>
                                    <h6 className="text-white text-sm">The health and medicinal benefits provided are for informational purposes only and are not a substitute for professional medical advice. Always consult a healthcare provider before making dietary changes, especially if you have any health conditions.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-1 bg-darkGreen -mt-1">
                    <div className="container mx-auto px-[15px] overflow-hidden my-10">
                        <p className="sub-title text-base pb-2 mb-0 text-lightGreen">{plant.tabs.good_to_know.nutrition.top}</p>
                        <Nutrition heading="Nutritional Value" items={plant.tabs.good_to_know.nutrition.list}/>
                        <p className="sub-title text-sm py-2 text-white">{plant.tabs.good_to_know.nutrition.bottom}</p>
                    </div>
                </div>

                <div className="bg-transparent" style={{backgroundImage: "linear-gradient(0deg, #002B17 90%, #002112 100%)"}}>
                    <div className="w-full bg-no-repeat bg-auto" style={{backgroundImage: "url(/assets/theme/images/background/bg-product2.webp)", backgroundPosition: "bottom center"}}>

                        <div className="container mx-auto py-40 text-white">
                            <div className="grid grid-cols-12 gap-4 py-8">
                                <div className="banner-left col-span-12 lg:col-span-6 lg:mt-0 mt-8 wow fadeInLeft">
                                    <div className=" relative text-center">
                                        <Image width={600} height={710} decoding="async" alt="Image" src="/assets/theme/images/background/healthy-food.webp" className=" inline-block  relative elementor-repeater-item-c225823"/>
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-6 relative lg:order-1 -order-1 wow fadeInRight">
                                    <div className="lg:text-left text-center">
                                        <div className="title_block">
                                            <p className="sub_title xl:text-4xl text-xl pb-4 mb-0">Good to know</p>
                                            <h2 className="title xl:leading-[55px] leading-9 text-white">Ecological Effects</h2>
                                        </div>
                                        <div className="desc mt-4 text-base"></div>
                                    </div>
                                    <div className="pt-4">
                                        {plant.tabs.good_to_know.ecological_effects.map((effect, i) => <div className="flex flex-col gap-1" key={i}>
                                            <h4 className="text-lightGreen"> {effect.icon} {effect.title}: </h4>
                                            <p className="box-description">{effect.description}</p>
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>;
}