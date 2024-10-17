import SwiperComp from "@/components/comp/swiper";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Asterisk, Bean, Droplets, MoveRight, Shrub, Sprout} from "lucide-react";
import Nutrition from "@/components/pages/vegitable/nutrition";
import {GiFertilizerBag} from "react-icons/gi";
import {FaBacteria} from "react-icons/fa";
import {PiPlantFill} from "react-icons/pi";
import Share from "@/components/comp/share";
import app from "@/config/app";
import InformationTab from "@/components/pages/vegitable/information-tab";
import Social from "@/components/pages/social";
import Step from "@/components/pages/vegitable/step";
import TabLink from "@/components/pages/tab-link";
import newDate from "@/lib/date";
import metaSEO from "@/service/meta";

// plant JSON
import plant from "@/json/vegetable/coriander";

export function generateMetadata() {
    return metaSEO(plant, {
        img_width: 1318,
        img_height: 661
    }, "article");
}

export default function Page() {
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
                                    <p className="text-sm">Please <strong>Share</strong> with your friends and gift them knowledge to plant coriander: </p>
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


        <section className="max-lg:pt-13.5">
            <div className="w-full">
                <div className="product-description">
                    <div>
                        <Tabs defaultValue="grow" className="w-full">
                            <TabsList className="flex flex-row justify-start md:justify-center flex-wrap px-0 md:px-12 mb-28 gap-2">
                                <TabsTrigger value="info" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark">Good to know</TabsTrigger>
                                <TabsTrigger value="grow" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark">How to Grow Coriander</TabsTrigger>
                                <TabsTrigger value="process" className="font-bold font-Lufga text-secondary text-xl md:text-2xl lg:text-4xl bg-lightdark">Growing Process & Schedule</TabsTrigger>
                            </TabsList>
                            <TabsContent value="info" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <InformationTab plant={plant}/>
                            </TabsContent>
                            <TabsContent value="grow" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div className="container flex flex-col gap-2">
                                    <div className="m-lg-b0 m-md-b30">
                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">How to grow coriander at Home (In Pots or Grow Bags)</h2>
                                            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                                                <div className="grid gap-6 row-gap-10 grid-cols-2">
                                                    <div className="lg:py-6 lg:pr-16 col-span-full">
                                                        <Step step={1} heading="Step 1: Choose the Right Variety to grow coriander">
                                                            <ul className="flex flex-col gap-2 text-gray-700">
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Determinate: </strong> Stay short, Dwarf, Good for pots and balcony</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Indeterminate: </strong> Keep on growing until they die, Good for Gardens</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Opt for compact or determinate varieties like ‘Patio’ or ‘Cherry Coriander’ if growing in pots or grow bags.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Key Info: Dwarf varieties perform better in containers due to their smaller size and faster fruiting.</li>
                                                            </ul>
                                                        </Step>

                                                        <Step step={2} heading="Step 2: Prepare the seedling tray (Recommended for beginners)">
                                                            <ul className="flex flex-col gap-2 text-gray-700">
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Seeding soil is different, it should be light, airy, free of debris, neutral pH, and hold moisture.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the seeding tray has drainage holes.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Soil + Compost + Coco peat (Coco peat helps retain moisture for longer, if you do not have Coco peat it&apos;s Okay, just maintain the proper moisture).</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> See the <TabLink section="Seeding Process">Seeding process</TabLink> on this page for tips and things to care about.</li>
                                                            </ul>
                                                        </Step>

                                                        <Step step={3} heading="Day 0: Seeding">
                                                            <ul className="flex flex-col gap-2 text-gray-700">
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Sow seeds at 0.5 - 2.5 cm depth, just cover them with a thin layer of coco peat, compost, or soil and water them.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> If you are a beginner then use a seedling tray, seedling tray helps for easy movement, you can place them under sunlight during moving but move them inside during noon to protect them from harsh heat and so on.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Keep in low sunlight or inside (not dark) if possible.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> See the <TabLink section="Seeding Process">Seeding process</TabLink> on this page for tips and temperature and environment conditions.</li>
                                                            </ul>
                                                        </Step>

                                                        <Step step={4} heading="Day 7: Sprouting">
                                                            <ul className="flex flex-col gap-2 text-gray-700">
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> The Seed should sprout in a week.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> They need full light from day one of germination.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Shift them to 1-2 hours of sunlight when you see 2 leaves, at this stage plants start looking for sunlight, if you do not put them in sunlight they will grow weak but longer and in multi-direction in search of sunlight (We don&apos;t want that).</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Seed provides all the required nutrients to support the life of the plant for 2 weeks.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Do not add any fertilizer of any kind.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Watering Schedule">watering guide</TabLink> for more information</li>
                                                            </ul>
                                                        </Step>

                                                        <Step step={5} heading="Day 15: First organic fertilizer">
                                                            <ul className="flex flex-col gap-2 text-gray-700">
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Provide liquid onion peel fertilizer in small dosages.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, and Magnesium, see the <TabLink section="Nutritional Requirements">nutritional requirement</TabLink> section for more information.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> Add bone meal and vermicompost for nutrients.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Do not use NPK, DAP, or chemical fertilizer at this stage, the plant will not be able to handle and die</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Watering Schedule">watering guide</TabLink> for more information</li>
                                                            </ul>
                                                        </Step>

                                                        <Step step={6} heading="Day 28: Shift to a larger pot (Only if you planted it in the seedling tray)">
                                                            <ul className="flex flex-col gap-2 text-gray-700">
                                                                <li>From seeding to 1 month, plants are very delicate, do not remove them or shift them, only perform shifting after 4 weeks of seeding. At this stage, seeds should have grown into small plants.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>Use at least a 12-18 inch deep pot or grow bag.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/><strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>Add Neem powder (Neem Khali) to the soil to protect the roots from fungus and other germs.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>When you shift the plants from seedling to ground, grow bags or pots, make sure the roots are not exposed to air. Try not to disturb the roots.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>Be slow and gentle when removing from the seeding tray and planting in the pot or grow bags.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>If roots are exposed to air or you see no soil with roots or if the plant is weathered (when you borrow from your friend), then <strong>sock the plant&apos;s root in water for 5-7 minutes</strong>. If plants are in very bad condition add 1 spoon of sugar in water and dip plants for 15 minutes. It will revive the plants and stabilize them.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>Perform shifting in the evening only and add plenty of water.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>Plants will/might show some stress like leaves withering after shifting, but they will recover soon if you have shifted correctly.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>To shift them in larger pots, put at least 40-50% of the plant stem under the soil, this will help in growing stronger roots.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/>After seedlings have grown and become plants, they need at least 5-6 hours of sunlight every day.</li>
                                                                <li><MoveRight size={18} className="-mt-2 mr-2"/><strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom of the grow bag or pots to improve drainage.</li>
                                                            </ul>
                                                        </Step>

                                                        <Step step={12} heading="Day 120: Fruit of hard work">
                                                            <>
                                                                <p className="text-gray-700">
                                                                    Harvest the fruit of your hard work. This is not the end, Coriander will keep on provided with minimal watering and care at this time.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Remove weeds and keep looking for diseases, check the diseases section of how to find and fix the plant diseases.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Keep providing fertilizer every 15-20 days.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> You must not let the soil dry, Water is very important.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> See the Fertilizer section for homemade and nutrient-rich fertilizers.</li>
                                                                </ul>
                                                            </>
                                                        </Step>

                                                        <Step step={13} is_last={true} heading="Continue">
                                                            <>
                                                                <p className="text-gray-700">
                                                                    Along with these steps and stages, there are a few things you need to perform throughout the process to grow Coriander, each thing will take only 20-30 minutes a week of your time. <br/>
                                                                    Please see the related section for more information on each step, tips, and homemade recipes for fertilizers and plant care. <br/>
                                                                </p>

                                                                <p className="my-4 text-lg font-bold">Perform these steps every 3 weeks after 40 days of seeding (after shifting).</p>
                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> <br/>
                                                                    Until you see the flowers on the plant, you will water them normally i.e. Only water them if the top soil is dry.<br/>
                                                                    If you water excessively, plants might get fungus, and attract more diseases, flowers will wither before time and fruiting will be delayed. <br/>
                                                                    When you see fruit, then you must not let the soil dry, Coriander may turn black if face water scarcity at this stage. <br/>
                                                                    Check the <TabLink section="Watering Schedule">watering section</TabLink> for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Weeding & Caring: </strong> <br/>
                                                                    Remove weeds regularly. <br/>
                                                                    Perform Pinching. <br/>
                                                                    Remove Suckers. <br/>
                                                                    Check the <TabLink section="Weeding & Caring">weeding & caring</TabLink> section for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> <br/>
                                                                    Until when you don&apos;t see the small Coriander, you will have to provide liquid fertilizer every 20 days.<br/>
                                                                    After you see bigger flowers and small fruits, add fertilizers containing micronutrients, such as seaweed (spray), onion peel liquid, and banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, and try not to repeat the same fertilizer.<br/>
                                                                    Check the <TabLink section="Fertilizer Requirements">fertilizer section</TabLink> for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Diseases: </strong> <br/>
                                                                    Plants are prone to diseases, you need to look for signs and take care before they spread or ruin your hard work. <br/>
                                                                    There is very little chance of diseases in a controlled environment. <br/>
                                                                    Check the <TabLink section="Diseases - Know & Treat">diseases section</TabLink> for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Pollination: </strong> <br/>
                                                                    We believe in harmony, plants grow better with other plants and insects, try not to restrict your garden to birds, insects, bugs, and other organisms. <br/>
                                                                    Birds, and insects not only help in pollination but also improve the positivity of the environment, and help in nutrition circulation. <br/>
                                                                    Birds can eat small bugs and protect plants from diseases for free. <br/>
                                                                    Check the <TabLink section="Diseases - Know & Treat">Flowers Withering (No Pollination) section</TabLink> for more information.
                                                                </p>
                                                            </>
                                                        </Step>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="process" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div className="container flex flex-col gap-2">
                                    <div>
                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">Process & Schedule (Grow Coriander)</h2>
                                            <p className="mb-4">
                                                Coriander grow well in pots, raised beds, or directly in the ground.
                                                Choose a sunny spot with at least 2-4 hours of sunlight daily.
                                                Coriander can be grown indoors in various climates, but hot summer weather often causes it to bolt quickly, reducing its foliage growth.
                                            </p>
                                        </div>

                                        <Separator className="mt-4 mb-2"/>
                                        <p className="my-4" id="nurtients">
                                            <MoveRight size={18} className="-mt-2 mr-2"/>The Life of a Coriander plant is 40-45 days.<br/>
                                            <MoveRight size={18} className="-mt-2 mr-2"/>Coriander is best sown between October and March. This period provides the optimal climate for its growth.<br/>
                                            <MoveRight size={18} className="-mt-2 mr-2"/>Summers are tough on Coriander, when temperature increases, bolt quickly, reducing its foliage growth.
                                        </p>
                                        <Separator className="my-4"/>
                                        <Nutrition heading="Nutritional Requirements" items={[
                                            {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                                            {name: "Aids in root development", value: "P (Phosphorus)"},
                                            {name: "Enhances overall plant health", value: "K (Potassium)"},
                                            {name: "Prevents blossom-end rot", value: "Ca (Calcium)"},
                                            {name: "Photosynthesis", value: "Mg (Magnesium)"},
                                        ]}/>
                                        <Separator className="my-4"/>

                                        <div className="xl:mb-6 md:mb-3.5 mb-2.5" id="seeding">
                                            <h4 className="font-bold text-xl max-md:text-lg"><Bean size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Seeding Process of Coriander</h4>
                                            <p>Coriander seeds need water to sprout, infect it&apos;s all they need. <br/>
                                                The seed coat absorbs the water, swells & cracks, allowing the tiny plant inside to emerge and begin its life. <br/>
                                                Not enough moisture and the best thing is that the seeds won&apos;t sprout until it&apos;s enough, and worst. The worst thing is that they manage to sprout but quickly perish. <br/>
                                                Too much water can draw the seedlings.<br/>
                                                <strong>Testing moisture -</strong> The seeding soil must retain its shape when squeezed tightly, yet it should not drip much water if any at all.
                                            </p>
                                            <Separator className="my-4"/>
                                            <ul className="specification-list mb-10">
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Seed Selection:</strong> {" "} <span>Choose high-quality heirloom or hybrid seeds for your climate.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Sowing:</strong> {" "} <span>Sow seeds 0.5 cm - 1 cm deep in pots indoors. Coriander dislikes being transplanted, so sow directly where it will grow.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Temperature:</strong> {" "} <span>Seeds germinate best at 17-27°C.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Environment:</strong> {" "} <span>Keep in 2-3 hours of direct sunlight, sunny spot or use grow lights. Maintain high humidity.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Time to Seed:</strong> {" "} <span> Germination takes 7-10 days.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Note:</strong> {" "} <span> The soil mix plays a very important role in seed germination. The soil needs to be light and rich in nutrients.</span></li>
                                            </ul>
                                        </div>

                                        <div className="product-info">
                                            <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                                <h4 className="font-bold text-xl max-md:text-lg mb-2"><Sprout size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Soil Mix</h4>
                                                <ul className="flex flex-col gap-4">
                                                    <li><span className="font-normal">1 part garden soil</span></li>
                                                    <li><span className="font-normal">½ part compost</span></li>
                                                    <li><span className="font-normal">½ part sand</span></li>
                                                    <li><span className="font-normal">¼ part cocopeat</span></li>
                                                    <li><span className="font-normal">Neem khali (Neem powder) (optional, for additional pest control)</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="product-info">
                                            <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                                <h4 className="font-bold text-xl max-md:text-lg mb-2"><Sprout size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Germination Stages and Conditions</h4>
                                                <ul className="flex flex-col gap-4">
                                                    <li><h6>Radicle Emergence: <span className="font-normal">Within 7-8 days, the first root appears.</span></h6></li>
                                                    <li><h6>Shoot Development: <span className="font-normal">Leaves begin to sprout after a week.</span></h6></li>
                                                    <li><h6>True Leaves: <span className="font-normal">Typically appear by day 16. This is a critical phase for ensuring good light exposure and proper moisture.</span></h6></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="watering">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Droplets size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> What Affects Taste and Quality of Fruit</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Sunlight: <span className="font-normal">Coriander grown in partial shade can have a milder taste.</span></h6></li>
                                                <li><h6>Watering: <span className="font-normal">Consistent watering prevents flavor dilution. Over watering can reduce the intensity of flavor.</span></h6></li>
                                                <li><h6>Soil Nutrients: <span className="font-normal">Adequate potassium improves flavor. Onion peel fertilizer is rich in potassium.</span></h6></li>
                                                <li><h6>Soil Nutrients: <span className="font-normal">Low nitrogen can lead to poor leaf development.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>
                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="fertilizer">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><GiFertilizerBag size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Fertilizer Requirements</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li>
                                                    <h6>Organic Fertilizer: <p className="font-normal">
                                                        Use mustard cake liquid fertilizer once in coriander lifetime (recommended). <br/>
                                                        Use compost, aged manure, bone meal, or worm castings. <br/>
                                                        Use seaweed, it contains all the necessary nutrients, good for the early stage of plantation. <br/>
                                                        Use onion peel fertilizer - Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, and Magnesium.<br/>
                                                        Use banana peel fertilizer - Banana peels contain calcium, which promotes root growth, and helps add oxygen to your soil. Magnesium, which assists with photosynthesis. Sulfur, helps plants develop strong roots and repel pests.<br/>
                                                    </p></h6>
                                                </li>
                                                <li>
                                                    <h6>How to fertilize (Only Once): <p className="font-normal">
                                                        - If compost was not used in the initial soil mix, apply a light dose of organic fertilizer (mustard cake, cow dung cake, or homemade fertilizers like banana or onion peel fertilizers) on Day 20. <br/>
                                                        - After the first harvest, add mustard cake fertilizer to restore nutrients to the soil. <br />
                                                        - No further fertilization is needed after this application as mustard cake provides enough nutrients for the entire growing cycle.
                                                    </p></h6>
                                                </li>
                                                <li><h6>Tip: <span className="font-normal">Add fertilizer in the evening only.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="watering">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Droplets size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Watering Schedule</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Early Stage: <span className="font-normal">Only water when the top layer of soil feels dry. Coriander prefers a consistently moist environment, but avoid over watering.</span></h6></li>
                                                <li><h6><span className="font-normal">Once the coriander leaves grow larger, refrain from watering from above. This could cause the leaves to fall over. Instead, water gently from the side of the pot, and the moisture will naturally distribute throughout the soil.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="diseases">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><FaBacteria size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Diseases - Know & Treat</h4>


                                            <h6 className="font-bold text-base">Leaf miner</h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Sign: <span className="font-normal">White linings on leaves, germs & bugs.</span></h6></li>
                                                <li><h6>When: <span className="font-normal">They often attack during the flowering process, treat them then and there and they will not attack again.</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Neem oil + garlic water - treat/spray for 2-3 days regularly.</span></h6></li>
                                                <li><h6>Note: <span className="font-normal">It is important to remove/treat them completely at the very beginning to stop the spread, you can pluck/cut the leaves & stem if infection is high.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="mb-10 max-md:mb-5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Shrub size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> When to Know it’s Good for Cultivation</h4>
                                            <p className="mb-4">
                                                When the plant has developed several true leaves (around 4-5 weeks after sowing), the coriander is ready for harvest. Cut the outer leaves first for continual harvesting. <br/>
                                                For continued growth, make sure to cut the leaves 3 inches above the soil. This allows the plant to regenerate, enabling multiple harvests (up to 3-4 times). <br/>
                                                After three harvests, the plants may take longer to regenerate and the quality of the leaves may decrease. By the fourth harvest, it’s time to pull the plants out by the roots and restart the cycle with new seeds.
                                            </p>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Asterisk size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Important Reminders/Tips at Each Stage to grow Coriander</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><span className="font-normal">Coriander prefers cooler temperatures, so grow it in partial shade if your area is too hot.</span></li>
                                                <li><span className="font-normal">Continuous harvesting of leaves encourages new growth.</span></li>
                                                <li><span className="font-normal">Ensure proper spacing between plants to avoid overcrowding.</span></li>
                                                <li><span className="font-normal">Pesticides are rarely needed, but always wash thoroughly before consumption</span></li>
                                                <li><span className="font-normal"> </span></li>
                                                <li><span className="font-normal"> </span></li>
                                                <li><span className="font-normal"> </span></li>
                                                <li><span className="font-normal"> </span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    </>;
}