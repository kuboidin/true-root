import SwiperComp from "@/components/comp/swiper";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Nutrition from "@/components/pages/vegitable/nutrition";
import Share from "@/components/comp/share";
import app from "@/config/app";
import InformationTab from "@/components/pages/vegitable/information-tab";
import Social from "@/components/pages/social";
import newDate from "@/lib/date";
import metaSEO from "@/service/meta";
import HowToGrowTab from "@/components/pages/vegitable/how-to-grow-tab";
import ProcessTab from "@/components/pages/vegitable/process-tab";
import gc from "@/json/global";

export async function generateMetadata({params}) {
    const {slug} = await params;
    const crop = gc.find(c => c.slug === slug);
    const plant = crop.ref;
    return metaSEO(plant, {
        img_width: 1582,
        img_height: 718
    }, "article");
}

export default async function Page({ params }) {
    const {slug} = await params;
    const crop = gc.find(c => c.slug === slug);
    const plant = crop.ref;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": plant.seo.title,
        "description": plant.seo.description,
        "image": plant.seo.images,
        "datePublished": newDate(plant.datePublished).toString(),
        "dateModified": newDate(plant.dateModified).toString(),
        "author": {
            "@type": "Organization",
            "name": app.og.author
        }
    };

    return <>
        {/* Add JSON-LD to your page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
        {/* ... */}

        {/* breadcrumbs */}
        <Breadcrumbs crumbs={[
            {name: "Home", link: "/"},
            {name: "How to grow", link: "/how-to-grow"},
            {name: plant.name},
        ]}/>

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
                                        <div className="flex flex-col md:flex-row justify-start md:justify-between gap-4">
                                            <EcoBadge score={plant.hero.eco_badge.score} information={plant.hero.eco_badge.information}/>
                                            <div className="flex flex-col justify-start text-left text-sm">
                                                {plant.hero.about_quick_list.map((about, i) => <span key={i}>{about}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 mb-4 text-sm">
                                    {plant.hero.snippet}
                                </p>
                                <Separator className="mt-4 mb-2"/>
                                <Nutrition heading="Growing Conditions" items={plant.hero.growing_condition}/>
                                <Separator className="my-4"/>
                                <div className="flex flex-col flex-wrap gap-3">
                                    <div>
                                        <label className="font-bold mb-2.5 font-Lufga">{plant.hero.more_info.heading}</label>
                                        {plant.hero.more_info.items.map((item, i) => <p key={i}>{item}</p>)}
                                    </div>
                                </div>
                                <Separator className="mt-2 mb-6"/>

                                <div className="flex flex-col gap-2 mb-10">
                                    <p className="text-sm">Please <strong>Share</strong> with your friends and gift them knowledge to plant tomatoes: </p>
                                    <Share url={`${app.url}${plant.path}`} text={plant.share.text} subject={plant.share.subject} tags={plant.share.tags} img_url={plant.seo.thumbnail}/>
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
                        <Tabs defaultValue="grow" className="w-full">
                            <TabsList className="flex flex-row justify-start md:justify-center flex-wrap px-0 md:px-12 mb-28 gap-2">
                                <TabsTrigger value="info" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark">Good to know</TabsTrigger>
                                <TabsTrigger value="grow" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark">How to Grow Tomatoes</TabsTrigger>
                                <TabsTrigger value="process" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark">Growing Process & Schedule</TabsTrigger>
                            </TabsList>
                            <TabsContent value="info" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <InformationTab plant={plant}/>
                            </TabsContent>
                            <TabsContent value="grow" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <HowToGrowTab plant={plant}/>
                            </TabsContent>
                            <TabsContent value="process" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <ProcessTab plant={plant}/>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    </>;
}