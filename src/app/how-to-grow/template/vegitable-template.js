import SwiperComp from "@/components/comp/swiper";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import {Separator} from "@/components/ui/separator";
// Tabs removed in favor of anchor navigation
import Nutrition from "@/components/pages/vegitable/nutrition";
import Share from "@/components/comp/share";
import app from "@/config/app";
import InformationTab from "@/components/pages/vegitable/information-tab";
import Social from "@/components/pages/social";
import HowToGrowTab from "@/components/pages/vegitable/how-to-grow-tab";
import ProcessTab from "@/components/pages/vegitable/process-tab";

export default function VegitableTemplate({plant}) {
    if (!plant) return null;
    const cropName = plant?.singular || plant?.name || "this plant";
    const cropPlural = plant?.plural || plant?.name || cropName;

    return (
        <>
            {/* breadcrumbs */}
            <Breadcrumbs
                crumbs={[
                    {name: "Home", link: "/"},
                    {name: "How to grow", link: "/how-to-grow"},
                    {name: plant.name},
                ]}
            />

            <section>
                <div className="container-fluid">
                    <div className="row flex flex-wrap">
                        <div className="md:w-1/2 w-full">
                            <div className="mb-7.5 sticky top-0 z-1">
                                <div className="relative">
                                    <SwiperComp images={plant.images}/>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="max-w-[660px] mb-7.5 sm:pt-13.5 xl:pl-10">
                                <div className="dz-content">
                                    <div className="flex mb-3.6">
                                        <div className="flex-1">
                      <span className="py-[3px] px-2.5 inline-block rounded-md text-xs bg-[#5E5CC6] font-semibold text-white leading-[1.3] uppercase mb-2">
                        {plant.hero.sub_heading}
                      </span>
                                            <h1 className="lg:text-4xl sm:text-3xl text-2xl mb-1">How to grow {plant.hero.heading}.</h1>
                                            <div className="flex flex-col md:flex-row justify-start gap-4">
                                                <EcoBadge
                                                    score={plant.hero.eco_badge.score}
                                                    information={plant.hero.eco_badge.information}
                                                />
                                                <div className="flex flex-col justify-start text-left text-sm">
                                                    {plant.hero.about_quick_list.map((about, i) => (
                                                        <span key={i}>{about}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 mb-4 text-sm">{plant.hero.snippet}</p>
                                    <Separator className="mt-4 mb-2"/>
                                    <Nutrition heading="Growing Conditions" items={plant.hero.growing_condition}/>
                                    <Separator className="my-4"/>
                                    <div className="flex flex-col flex-wrap gap-3">
                                        <div>
                                            <label className="font-bold mb-2.5 font-Lufga">{plant.hero.more_info.heading}</label>
                                            {plant.hero.more_info.items.map((item, i) => (
                                                <p key={i}>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <Separator className="mt-2 mb-6"/>

                                    <div className="flex flex-col gap-2 mb-10">
                                        <p className="text-sm">
                                            Please <strong>Share</strong> with your friends and gift them knowledge to plant {cropPlural.toLowerCase()}:
                                        </p>
                                        <Share
                                            url={`${app.url}${plant.path}`}
                                            text={plant.share.text}
                                            subject={plant.share.subject}
                                            tags={plant.share.tags}
                                            img_url={plant.seo.thumbnail}
                                        />
                                    </div>

                                    <Separator className="mt-2 mb-6"/>
                                </div>
                                <Social/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-lg:pt-13.5 mb-20">
                <div className="w-full">
                    <div className="product-description">
                        <div>
                            {/* Anchor-style navigation keeping tab look */}
                            <div className="w-full">
                                <div className="flex flex-row justify-start md:justify-center flex-wrap px-0 md:px-12 mb-28 gap-2">
                                    <a href="#info" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark px-4 py-2 rounded-md">Good to know</a>
                                    <a href="#process" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark px-4 py-2 rounded-md">Growing Process & Schedule</a>
                                    <a href="#grow" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark px-4 py-2 rounded-md">{`How to Grow ${cropPlural}`}</a>
                                </div>

                                {/* Sections rendered sequentially without tabs */}
                                <div id="info" className="lg:pt-13.5 sm:pt-7.5 pt-5 scroll-mt-28">
                                    <InformationTab plant={plant}/>
                                </div>

                                <Separator className="my-10"/>

                                <div id="process" className="lg:pt-13.5 sm:pt-7.5 pt-5 scroll-mt-28">
                                    <ProcessTab plant={plant}/>
                                </div>

                                <Separator className="my-10"/>

                                <div id="grow" className="lg:pt-13.5 sm:pt-7.5 pt-5 scroll-mt-28">
                                    <HowToGrowTab plant={plant}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
