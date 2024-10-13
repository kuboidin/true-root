import SwiperComp from "@/components/comp/swiper";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Asterisk, Bean, Droplets, MoveRight, Shrub, Sprout} from "lucide-react";
import Image from "next/image";
import Nutrition from "@/components/pages/vegitable/nutrition";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFertilizerBag, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";
import {FaBacteria} from "react-icons/fa";
import {PiPlantFill} from "react-icons/pi";
import Share from "@/components/comp/share";
import app from "@/config/app";

export const metadata = {
    title: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}`,
    description: `Discover expert tips on growing tomatoes at home, in the garden, or commercially. Learn about tomato health benefits, Ayurvedic uses, nutritional value, ecological impact, myths, and more. ${app.name}`,
    keywords: ["how to grow tomatoes", "tomato growing tips", "tomato nutrition", "health benefits of tomatoes", "organic tomato farming", "grow tomatoes at home", "tomato planting guide", "tomato uses", "tomato seeds guide",
        "NPK for tomatoes", "eco-friendly tomato farming", "Ayurvedic benefits of tomatoes", "medicinal uses of tomatoes", "tomato diseases and cures", ...app.meta.keywords],
    openGraph: {
        title: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}`,
        description: `Discover expert tips on growing tomatoes at home, in the garden, or commercially. Learn about tomato health benefits, Ayurvedic uses, nutritional value, ecological impact, myths, and more. ${app.name}`,
        images: [`${app.url}/og/how-to-grow/tomato.png`],
    },
    twitter: {
        title: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}`,
        description: `Discover expert tips on growing tomatoes at home, in the garden, or commercially. Learn about tomato health benefits, Ayurvedic uses, nutritional value, ecological impact, myths, and more. ${app.name}`,
        images: [`${app.url}/og/how-to-grow/tomato.png`],
    }
};

export default function Page() {
    return <>
        {/* breadcrumbs */}
        <Breadcrumbs crumbs={[
            {name: "Home", link: "/"},
            {name: "How to grow", link: "/how-to-grow"},
            {name: "Tomato"},
        ]}/>

        <section>
            <div className="container-fluid">
                <div className="row flex flex-wrap">
                    <div className="md:w-1/2 w-full">
                        <div className="mb-7.5 sticky top-0 z-1">
                            <div className="relative">
                                <SwiperComp images={[
                                    {src: "/assets/plants/vegetable/tomato/t3.jpeg", alt: "How to grow tomatoes"},
                                    {src: "/assets/plants/vegetable/tomato/t1.webp", alt: "How to grow tomatoes"},
                                    {src: "/assets/plants/vegetable/tomato/t2.jpg", alt: "How to grow tomatoes"},
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
                                            <EcoBadge score={4} information="Tomatoes are relatively eco-friendly when grown in appropriate conditions. They have moderate water needs and, with proper mulching, irrigation, and organic practices, they can thrive with less water. Growing tomatoes locally and organically reduces the carbon footprint."/>
                                            <div className="flex flex-col justify-start text-left text-sm">
                                                <span>One of the easiest vegetables to grow</span>
                                                <span>Fruiting withing 60 to 85 days (depending on variety)</span>
                                                <span>Highly suitable for hydroponic cultivation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 mb-4 text-sm">
                                    Tomatoes are nutrient-packed and easy to grow, making them perfect for gardens, balconies, or even indoors. <br/>
                                    Rich in vitamins A and C, and loaded with lycopene, tomatoes offer numerous health benefits, including antioxidant properties that support heart health and may reduce cancer risks. <br/>
                                    Versatile in the kitchen, tomatoes enhance everything from fresh salads to hearty sauces. <br/>
                                    In Ayurveda, they balance digestion and improve skin vitality. <br/>
                                    Whether you&apos;re a beginner or an experienced gardener, tomatoes are rewarding to cultivate at home with minimal effort.
                                </p>
                                <Separator className="mt-4 mb-2"/>
                                <Nutrition heading="Growing Conditions" items={[
                                    {name: 'Temperature', value: "18°C - 30°C"},
                                    {name: 'pH', value: '6.0 - 6.8'},
                                    {name: 'Fruiting', value: '60 to 85 days'}
                                ]}/>
                                <Separator className="my-4"/>
                                <div className="flex flex-col flex-wrap gap-3">
                                    <div>
                                        <label className="font-bold mb-2.5 font-Lufga">Soil Conditions</label>
                                        <p>Soil type: Well-drained loamy or sandy soil</p>
                                        <p>Soil must be rich in organic matter, with good aeration and drainage to avoid water logging.</p>
                                    </div>
                                </div>
                                <Separator className="mt-2 mb-6"/>

                                <div className="flex flex-col gap-2 mb-10">
                                    <p className="text-sm"><strong>Share</strong> with your friends and gift them knowledge to plant tomatoes: </p>
                                    <Share url={`${app.url}/how-to-grow/tomato`} text="Learn how to grow tomatoes at home" subject="Learn how to grow tomatoes at home" tags="#grow #tomatoes #garden #plant" img_url={`${app.url}/og/how-to-grow/tomato.png`}/>
                                </div>

                                <Separator className="mt-2 mb-6"/>
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


        <section className="max-lg:pt-13.5">
            <div className="w-full">
                <div className="product-description">
                    <div>
                        <Tabs defaultValue="grow" className="w-full">
                            <TabsList className="flex justify-center flex-wrap border-b border-border bg-transparent p-12">
                                <TabsTrigger value="info" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Good to know</TabsTrigger>
                                <TabsTrigger value="grow" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">How to grow Tomatoes</TabsTrigger>
                                <TabsTrigger value="process" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Growing Process & Schedule</TabsTrigger>
                                {/*<TabsTrigger value="community" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Community</TabsTrigger>*/}
                            </TabsList>
                            <TabsContent value="info" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div className="row">
                                    <div className="w-full m-lg-b0 m-md-b30">
                                        <div className="mb-10 max-md:mb-5 px-20">
                                            <h2 className="mb-2">Good to know</h2>
                                            <p className="mb-4">
                                                Tomatoes grow well in pots, raised beds, or directly in the ground.
                                                Choose a sunny spot with at least 6-8 hours of sunlight daily.
                                                Ensure proper spacing between plants (45-60 cm apart) to allow for air circulation and prevent fungal infections.
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
                                                                <p className="sub_title text-base pb-[22px] mb-0">Many benefits of Tomatoes</p>
                                                                <h4 className="text-white font-bold lg:text-[32px] text-3xl xl:leading-[48px] leading-9">Health benefits</h4>
                                                            </div>
                                                            <div className="flex flex-col gap-2 text-sm mt-[23px] text-white">
                                                                <div><span className="font-bold text-lemonGreen">Heart Health: </span> Tomatoes are rich in potassium and lycopene, which are known to reduce blood pressure and lower the risk of heart disease by improving circulation and reducing inflammation.
                                                                    <span className="text-2xs">Source: <Link href="https://pubmed.ncbi.nlm.nih.gov/12587984/" target="_blank" className="green-link">PubMed</Link></span></div>
                                                                <div><span className="font-bold text-lemonGreen">Cancer Prevention: </span> The antioxidant properties of lycopene may help reduce the risk of several cancers, including prostate, lung, and stomach cancers.
                                                                    <span className="text-2xs">Source: <Link href="https://newsroom.osfhealthcare.org/cancer-fighting-power-of-tomatoes/#:~:text=Tomatoes%20contain%20phytochemicals%2C%20like%20lycopene,on%20an%20overall%20healthy%20diet" target="_blank" className="green-link">OSF Healthcare</Link></span></div>
                                                                <div><span className="font-bold text-lemonGreen">Skin Protection: </span> Vitamin C and lycopene in tomatoes help protect the skin against UV damage, reduce wrinkles, and improve skin elasticity.
                                                                    <span className="text-2xs">Source: <Link href="https://www.healthline.com/health/tomato-benefits-for-skin#potential-benefits" target="_blank" className="green-link">Healthline</Link></span></div>
                                                                <div><span className="font-bold text-lemonGreen">Eye Health: </span> Rich in vitamin A, tomatoes support vision, prevent night blindness, and protect against macular degeneration.
                                                                    <span className="text-2xs">Source: <Link href="https://www.webmd.com/food-recipes/ss/slideshow-tomato-health-benefits" target="_blank" className="green-link">WebMD</Link></span></div>
                                                                <div><span className="font-bold text-lemonGreen">Improved Digestion: </span> The fiber in tomatoes aids digestion, prevents constipation, and maintains a healthy gut flora.
                                                                    <span className="text-2xs">Source: <Link href="https://www.medanta.org/patient-education-blog/researchers-have-discovered-that-tomatoes-are-healthy-for-gut-bacteria#:~:text=Additionally%2C%20tomatoes%20contain%20vitamins%2C%20minerals,promote%20a%20healthy%20digestive%20system." target="_blank" className="green-link">Medanta</Link></span></div>
                                                                <div><span className="font-bold text-lemonGreen">Improved Digestion: </span> Tomatoes contain vitamin K and calcium, both crucial for maintaining bone density and preventing osteoporosis.
                                                                    <span className="text-2xs">Source: <Link href="https://www.health.com/nutrition/health-benefits-tomatoes" target="_blank" className="green-link">Health.com</Link></span></div>
                                                                <div><span className="font-bold text-lemonGreen">hypertension: </span> Some studies have found that eating tomatoes may help prevent and manage hypertension. One study found that people who ate more than 110 grams of tomatoes per day had a lower risk of hypertension.
                                                                    <span className="text-2xs">Source: <Link href="https://academic.oup.com/eurjpc/article/31/8/922/7450162" target="_blank" className="green-link">Oxford Academic</Link></span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex col-span-2 items-center justify-center content-center">
                                                        <Image className="rounded-full w-[500px] h-[500px] object-cover border-8 border-lightGreen" src="/assets/plants/vegetable/tomato/t3.jpeg" alt="How to grow tomatoes" width={700} height={700}/>
                                                    </div>
                                                    <div>
                                                        <div className="flex flex-col pb-7 gap-4">
                                                            <div className="flex flex-row items-center gap-4">
                                                                <Image className="h-[40px] w-[40px]" decoding="async" width={50} height={50} alt="icon" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/icon5-1.png"/>
                                                                <h4 className="text-lightGreen">Risk and Things to consider</h4>
                                                            </div>
                                                            <p className="text-white text-sm">
                                                                Make sure that you thoroughly wash or cook raw tomatoes before consuming them. As with other fresh produce, raw tomatoes can have germs that cause foodborne illnesses like Listeria and Salmonella. Foodborne illness is a greater concern for those who:
                                                                <span className="text-2xs">Source: <Link href="https://academic.oup.com/eurjpc/article/31/8/922/7450162" target="_blank" className="green-link">Oxford Academic</Link></span>
                                                            </p>

                                                            <ul className="list-disc text-sm mt-[23px] text-white">
                                                                <li>Are aged 65 and older or 5 and younger</li>
                                                                <li>Are pregnant</li>
                                                                <li>Have underlying health concerns (e.g., cancer, diabetes, and liver and kidney disease)</li>
                                                                <li>Take medications that lower the body&apos;s ability to fight germs and illness</li>
                                                            </ul>

                                                            <p className="text-white text-sm text-pretty"> Tomatoes may also worsen existing conditions like gastroesophageal reflux (GERD) and chronic migraine.
                                                                Talk with a healthcare provider to determine if you need to avoid tomatoes. </p>

                                                            <div className="flex flex-row items-center gap-4 mt-10">
                                                                <Image className="h-[40px] w-[40px]" decoding="async" width={50} height={50} alt="icon" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/icon5-3.png"/>
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
                                                <p className="sub-title text-base pb-2 mb-0 text-lightGreen">One whole raw tomato provides the following nutrients: <span className="text-2xs">Source: <Link href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/1103276/nutrients" target="_blank" className="green-link">USDA</Link></span></p>
                                                <Nutrition heading="Nutritional Value" items={[
                                                    {name: "Calories", value: "22.5"},
                                                    {name: "Fat", value: "0.25g"},
                                                    {name: "Sodium", value: "6.25mg"},
                                                    {name: "Carbohydrates", value: "4.86g"},
                                                    {name: "Fiber", value: "1.5g"},
                                                    {name: "Protein", value: "1.1g"},
                                                ]}/>
                                                <p className="sub-title text-sm py-2 text-white">Whole, fresh tomatoes are also a source of several micronutrients, including: Folate, Potassium, Vitamin C, Vitamin K</p>
                                            </div>
                                        </div>

                                        <div className="bg-transparent" style={{backgroundImage: "linear-gradient(0deg, #002B17 90%, #002112 100%)"}}>
                                            <div className="w-full bg-no-repeat bg-auto" style={{backgroundImage: "url(https://botanica.risingbamboo.com/wp-content/uploads/2023/05/bg-product2.jpg)", backgroundPosition: "bottom center"}}>

                                                <div className="container mx-auto py-40 text-white">
                                                    <div className="grid grid-cols-12 gap-4 py-8">
                                                        <div className="banner-left col-span-12 lg:col-span-6 lg:mt-0 mt-8 wow fadeInLeft">
                                                            <div className=" relative text-center">
                                                                <Image width={600} height={710} decoding="async" alt="Image" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/healthy-food.png" className=" inline-block  relative elementor-repeater-item-c225823"/>
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
                                                                <div className="flex flex-col gap-1">
                                                                    <h4 className="text-lightGreen"><GiBee className="text-yellow-400 -mt-2 mr-2" size={30}/>Biodiversity Support: </h4>
                                                                    <p className="box-description">Tomatoes attract pollinators such as bees, which enhance overall garden health.</p>
                                                                </div>

                                                                <div className="flex flex-col gap-1 my-8">
                                                                    <h4 className="text-lightGreen"><GiPlantRoots className="text-emerald-400 -mt-2 mr-2" size={30}/>Soil Health: </h4>
                                                                    <p className="box-description">Tomatoes are ideal for crop rotation and companion planting, particularly with legumes, as they can improve soil nitrogen levels.</p>
                                                                </div>

                                                                <div className="flex flex-col gap-1 my-8">
                                                                    <h4 className="text-lightGreen"><GiFarmTractor className="text-orange-400 -mt-2 mr-2" size={30}/>Sustainable Farming: </h4>
                                                                    <p className="box-description">When grown organically, tomatoes reduce the need for harmful pesticides and synthetic fertilizers, contributing to healthier ecosystems.</p>
                                                                </div>
                                                                <div className="flex flex-col gap-1 my-8">
                                                                    <h4 className="text-lightGreen"><GiWaterDrop className="text-teal-400 -mt-2 mr-2" size={30}/>Water Usage: </h4>
                                                                    <p className="box-description">While tomatoes require regular watering, efficient irrigation practices such as drip irrigation significantly reduce water waste, making them sustainable in water-limited regions.</p>
                                                                </div>
                                                                <div className="flex flex-col gap-1 my-8">
                                                                    <h4 className="text-lightGreen"><GiFootprint className="text-rose-400 -mt-2 mr-2" size={30}/>Carbon Sequestration: </h4>
                                                                    <p className="box-description">Homegrown tomatoes reduce food miles, thus lowering the carbon footprint associated with transportation and storage.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="grow" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div className="flex flex-col gap-2 px-20">
                                    <div className="m-lg-b0 m-md-b30">
                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">Growing Tomatoes at Home (In Pots or Grow Bags)</h2>
                                            <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                                                <div className="grid gap-6 row-gap-10 grid-cols-2">
                                                    <div className="lg:py-6 lg:pr-16 col-span-full">
                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">1.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Step 1: Choose the Right Variety</p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Determinate: </strong> Stay short, Dwarf, Good for pots and balcony</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Indeterminate: </strong> Keep on growing until they die, Good for Gardens</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Opt for compact or determinate varieties like ‘Patio’ or ‘Cherry Tomatoes’ if growing in pots or grow bags.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Key Info: Dwarf varieties perform better in containers due to their smaller size and faster fruiting.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">2.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Step 2: Prepare the seedling tray (Recommended for beginners)</p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Seeding soil is different, it should be light, airy, free of debris, natural pH, holds moisture.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the seeding tray has drainage holes.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Soil + Compost + Coco peat (Coco peat helps retain moisture for longer, if you do not have Coco peat it&apos;s Okay, just maintain the proper moisture).</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> See the <Link href="#seeding" className="lnk">Seeding process</Link> on this page for tips and thing to care.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">3.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 0: Seeding</p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Sow seeds at 0.5 - 2.5 cm depth, just cover with thin layer of coco peat, compost or soil and water them</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> If you are beginner then use seedling tray, seedling tray helps for easy movement, you can place them under sunlight during moving but move them inside during noon to protect from harsh heat and so on.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Keep in low sunlight or inside (not dark) if possible</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> See the <Link href="#seeding" className="lnk">Seeding process</Link> on this page for tips and temperature and environment conditions.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">4.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 7: Sprouting</p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Seed should sprout in a week.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> They need full light from day one of germination.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Shift them to 1-2 hour of sun light when you see 2 leaves, at this stage plants start looking for sun light, if you do not put them in sun light they will grow week but longer and in multi-direction in search of sun light (We don&apos;t want that).</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Seed provide all the required nutrients to support life of plant for 2 weeks</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Do not add any fertilizer of any kind.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <Link href="#watering" className="lnk">watering guide</Link> for more information</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">5.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 15: First organic fertilizer</p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Provide liquid onion peel fertilizer in small dosage</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, Magnesium, see <Link href="#nurtients" className="lnk">nutritional requirement</Link> section for more information.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Add bone meal and vermi-compost for nutrients</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Do not use NPK, DAP or chemical fertilizer at this stage, plant will not be able to handle and die</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <Link href="#watering" className="lnk">watering guide</Link> for more information</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">6.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 28: Shift to larger pot (Only if you planted in seedling tray)</p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li>From seeding to 1 months, plants are very delicate, do not remove them or shift them, only perform shifting after 4 weeks of seeding. At this stage seeds should have grown to small plants</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Use at least a 12-18 inch deep pot or grow bag.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>Add Neem powder (Neem Khali) to soil to protect the roots from fungus and other germs</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> When you shift the plants from seedling to ground, grow bags or pots, make sure the the roots should not be exposed to air. try not to disturb roots.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>Be slow and gentle when removing from seeding tray and planting in the pot or grow bags</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>If roots are exposed to air or you see no soil with root or if plant is weathered (when you borrow from your friend), then <strong>sock the plant&apos;s root in water for 5-7 minutes</strong>. If plants are in very bad condition add 1 spoon of sugar in water and dip plants for 15 minutes. It will revive the plants and stablize them.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>Perform shifting in the evening only and add plenty of water</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>Plants will/might show some stress like leaves withering after shifting, but they will recover soon if you have shifted correctly.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>To shift them in larger pots, put at least 40-50% of plant stem under the soil, this will help in grow stronger roots.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>After seedlings have grown and become plants, they need at least 5-6 hours of sunlight everyday.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom of growbag or pots to improve drainage.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">7.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 40: 2nd dose of fertilizer</p>
                                                                <p className="text-gray-700">
                                                                    At this point plants are bullet proof and road is going to get easy.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Add some organic fertilizers like peanut, banana leaves or similar fertilizers, make sure plants are twice the size when shifted, only then provide the liquid fertilizer.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> You can also add sea weed, bone meal, egg shell powder etc.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Try to use water soluble fertilizer at the beginning.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Recommendation: </strong> We recommend not to use chemical fertilizers, They are harmful or environment and you. Things grown organically taste much better and are healthier. But if you must then you can add them at this stage.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">8.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 52: Grooming and care (Pinching)</p>
                                                                <p className="text-gray-700">
                                                                    10-12 days after 2nd dose of fertilizer, You will see the plants has growing rapidly. Let&apos;s perform Pinching. The act of <strong>pinching</strong> involves the <strong>removal of the growing point of a shoot along with few leaves</strong>. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Make sure the main stem is thick enough and plant has grown to twice the height and you see clusters of small growing leaves at the end of stems.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> This will help plant to stop increasing height and focus on increasing width and number of stems</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Try to use water soluble fertilizer at the beginning.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <Link href="#nurtients" className="lnk">watering guide</Link> for more information</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">9.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 64: Add Support</p>
                                                                <p className="text-gray-700">
                                                                    You will see plant has grown dense and bigger
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> If your pot or grow bag is smaller, now is the time to shift them into bigger pots or grow bags.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Remove leaves and small stems near the soil, this will help plant grow in length and protect from soil based diseases.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Add support at this stage</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Important: </strong> If you see that plant is starting to grow flowers at this time, cut them.
                                                                        This will allow plants to grow further and yield more fruits at later stage.
                                                                        If you don&apos;t cut them at this time, plant growth will stop and plant will focus completely on flowers and fruits, this will result in small plant and low tomatoes yield.
                                                                    </li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> Until you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">10.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 87: Flowering & Remove Suckers</p>
                                                                <p className="text-gray-700">
                                                                    You might start seeing the flowers at this stage <br/>
                                                                    A <strong>&quot;sucker&quot;</strong> is <strong>an extra shoot or leaves growing between the main stalk of the tomato plant and an established branch, often growing at a 45° angle from the plant</strong>.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Clean the small leaves and thin stems up to 5-7 inches from soil, only keep the thick branches</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Remove suckers, (Suckers are leaves that are growing between two branches) they take plant&apos;s nutrients and we don&apos;t want them</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Important: </strong> If/When you see flowers/fruits, at this time plant need more nutrients then ever.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Remove suckers whenever you see them for a health plant.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Increase the dosage of fertilizer</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> When you see fruiting, then you must not let the soil dry, tomatoes may turn black if faces water scarcity at this stage</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> After you see bigger flowers and small fruits, add fertilizers containing micro nutrients, such as, sea weed (spray), onion peel liquid , banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, try not to repeat same fertilizer.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">11.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 112: Tomatoes will start turning red</p>
                                                                <p className="text-gray-700">
                                                                    At this stage tomatoes will start turning red and within few days they will be ready to harvest
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Increase the dosage/frequency of fertilizer</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> You must not let the soil dry, Water is very important</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> See Fertilizer section for homemade and nutrient rich fertilizers.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">12.</div>
                                                                </div>
                                                                <div className="w-px h-full bg-lightGreen"/>
                                                            </div>
                                                            <div className="pt-1 pb-8">
                                                                <p className="mb-2 text-lg font-bold">Day 120: Fruit of hard work</p>
                                                                <p className="text-gray-700">
                                                                    Harvest the fruit of your hard work. This is not the end, Tomatoes will keep on provide with minimal watering and care at this time.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Remove weeds and keep looking for diseases, check the diseases section of how to find and fix the plant diseases.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Keep proving fertilizer every 15-20 days</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> You must not let the soil dry, Water is very important</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> See Fertilizer section for homemade and nutrient rich fertilizers.</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">13.</div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="mb-2 text-lg font-bold">Continue</p>
                                                                <p className="text-gray-700">
                                                                    Along with these steps and stages, there are few things you need to perform throughout the process, each thing will take only 20-30 minutes a week of your time. <br/>
                                                                    Please see the related section for more information on each step, tips and home made recipes for fertilizers and plant care. <br/>
                                                                </p>

                                                                <p className="my-4 text-lg font-bold">Perform these steps every 3 weeks after 40 days of seeding (after shifting)</p>
                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> <br/>
                                                                    Until you see the flowers on the plant, you will water them normally i.e. Only water them if the top soil is dry.<br/>
                                                                    If you water excessively, plant might get fungus, attract more diseases, flowers will wither before time and fruiting will be delayed. <br/>
                                                                    When you see fruiting, then you must not let the soil dry, tomatoes may turn black if faces water scarcity at this stage <br/>
                                                                    Check <Link href="#watering" className="lnk">watering section</Link> for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Weeding & Caring: </strong> <br/>
                                                                    Remove weeds regularly. <br/>
                                                                    Perform Pinching <br/>
                                                                    Remove Suckers <br/>
                                                                    Check <Link href="#weeding" className="lnk">weeding & caring</Link> section for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> <br/>
                                                                    Until when you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.<br/>
                                                                    After you see bigger flowers and small fruits, add fertilizers containing micro nutrients, such as, sea weed (spray), onion peel liquid , banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, try not to repeat same fertilizer.<br/>
                                                                    Check <Link href="#fertilizer" className="lnk">fertilizer section</Link> for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Diseases: </strong> <br/>
                                                                    Plants are prone to diseases, you need to look for signs and take care before they spread of ruin your hard work. <br/>
                                                                    There are very less chance of diseases in a controlled environment <br/>
                                                                    Check <Link href="#diseases" className="lnk">diseases section</Link> for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Pollination: </strong> <br/>
                                                                    We believe in harmony, plants grow better with other plants and insects, try not to restrict your garden to birds, insects, bugs and other organism. <br/>
                                                                    Birds, Insects not only help in pollination but also improve the positivity of the environment, help in nutrition circulation. <br/>
                                                                    Birds can east small bugs and protect plant from diseases for free. <br/>
                                                                    Check <Link href="#pollination" className="lnk">pollination section</Link> for more information.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="process" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div className="flex flex-col gap-2 px-20">
                                    <div>
                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">Growing Process & Schedule</h2>
                                            <p className="mb-4">
                                                Tomatoes grow well in pots, raised beds, or directly in the ground.
                                                Choose a sunny spot with at least 6-8 hours of sunlight daily.
                                                Ensure proper spacing between plants (45-60 cm apart) to allow for air circulation and prevent fungal infections.
                                            </p>
                                        </div>

                                        <Separator className="mt-4 mb-2"/>
                                        <p className="my-4" id="nurtients">
                                            <MoveRight size={18} className="-mt-2 mr-2"/>Life of a tomato is 5-6 months <br/>
                                            <MoveRight size={18} className="-mt-2 mr-2"/>Tomatoes can be grown in spring (February), monsoon (July Mid) & Autumn (September end) <br/>
                                            <MoveRight size={18} className="-mt-2 mr-2"/>Summers are tough on tomatoes, when temperature increases, tomatoes ripen prematurely, and tomatoes cannot grow fully and ripen before time.
                                        </p>
                                        <Separator className="my-4"/>
                                        <Nutrition heading="Nutritional Requirements" items={[
                                            {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                                            {name: "Aids in root development and fruiting", value: "P (Phosphorus)"},
                                            {name: "Improving fruit & flower quality.", value: "K (Potassium)"},
                                            {name: "Prevents blossom-end rot", value: "Ca (Calcium)"},
                                            {name: "Photosynthesis and fruit ripening", value: "Mg (Magnesium)"},
                                        ]}/>
                                        <Separator className="my-4"/>

                                        <div className="xl:mb-6 md:mb-3.5 mb-2.5" id="seeding">
                                            <h4 className="font-bold text-xl max-md:text-lg"><Bean size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Seeding Process</h4>
                                            <p>Tomato seeds need water to sprout, infect it&apos;s all they need. <br/>
                                                The seed coats absorbs the water, swell & crack, allowing the tiny plant inside to emerge and begin it&apos;s life. <br/>
                                                Not enough moisture and the best, the seeds won&apos;t sprout until it&apos;s enough and worst, they manage to sprout but quickly perish. <br/>
                                                Too much water can drawn the seedlings.<br/>
                                                <strong>Testing moisture -</strong> The seeding soil must retain it&apos;s shape when squeezed tightly, yet it should not drip much water, if any at all.
                                            </p>
                                            <Separator className="my-4"/>
                                            <ul className="specification-list mb-10">
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Seed Selection:</strong> {" "} <span>Choose high-quality heirloom or hybrid seeds for your climate.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Sowing:</strong> {" "} <span>Sow seeds 0.5 cm - 2.5 cm deep in seed trays or pots indoors, 6-8 weeks before the last frost date.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Temperature:</strong> {" "} <span>Seeds germinate best at 23-29°C.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Environment:</strong> {" "} <span>Keep in a warm, sunny spot or use grow lights. Maintain high humidity.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Tips:</strong> {" "} <span>Avoid overwriting as it can lead to damping-off disease. Seedlings should be hardened off before transplanting outdoors.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Time to Seed:</strong> {" "} <span> Germination takes 5-10 days. Once seedlings develop 2-3 true leaves, they are ready for transplanting.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Note:</strong> {" "} <span> The initial soil mix plays very important role in seed germination. The soil needs to be light and rich in nutrients. Use soil + compost at the bottom and coco peat at the top. Coco peat alone is not good as it lack vital nutrients for growth.</span></li>
                                            </ul>
                                        </div>
                                        <div className="product-info">
                                            <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                                <h4 className="font-bold text-xl max-md:text-lg mb-2"><Sprout size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Germination Stages and Conditions</h4>
                                                <ul className="flex flex-col gap-4">
                                                    <li><h6>Radicle Emergence: <span className="font-normal">Within 3-4 days, the first root appears</span></h6></li>
                                                    <li><h6>Shoot Development: <span className="font-normal">Leaves begin to sprout after a week</span></h6></li>
                                                    <li><h6>True Leaves: <span className="font-normal">Typically appear by day 10. This is a critical phase for ensuring good light exposure and proper moisture</span></h6></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="watering">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Droplets size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> What Affects Taste and Quality of Fruit</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Sunlight: <span className="font-normal">More sunlight leads to sweeter tomatoes.</span></h6></li>
                                                <li><h6>Watering: <span className="font-normal">Consistent watering prevents flavor dilution.</span></h6></li>
                                                <li><h6>Soil Nutrients: <span className="font-normal">Adequate potassium improves flavor. Onion peel fertilizer is rich in potassium.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>
                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="fertilizer">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><GiFertilizerBag size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Fertilizer Requirements</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li>
                                                    <h6>Organic Fertilizer: <p className="font-normal">
                                                        Use compost, aged manure, bone meal, or worm castings. <br/>
                                                        Use sea weed which contains all the necessary nutrients, good for early stage of plantation. <br/>
                                                        Use onion peel fertilizer - Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, Magnesium.<br/>
                                                        Use banana peel fertilizer - Banana peels contain calcium, which promotes root growth, helps add oxygen to your soil. magnesium, which assists with photosynthesis. sulphur, which helps plants develop strong roots and repel pests.<br/>
                                                        {/*Learn how to make compost,*/}
                                                        {/*use potato leaves etc. which makes good compost.*/}
                                                        {/*use home waste, tell which waste contains what*/}
                                                    </p></h6>
                                                </li>
                                                <li><h6>Chemical Fertilizer: <span className="font-normal">A balanced NPK fertilizer such as 10:10:10 at planting, followed by a 5:10:10 fertilizer during flowering and fruiting stages.</span></h6></li>
                                                <li>
                                                    <h6>How to fertilize: <p className="font-normal">
                                                        - Until you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days. <br/>
                                                        - After bigger flowers and small fruits add other fertilizers containing micro nutrients every 15 days. <br/>
                                                        - keep on changing the type of fertilizers, try not to repeat same
                                                    </p></h6>
                                                </li>
                                                <li><h6>Tip: <span className="font-normal">Please dig and loosen the 6-10 inches soil around the plant when/before you add fertilizer. Plants thrive in loose soil because air and water can circulate better, and soil life remains healthy. Take care of root try not to damage them.</span></h6></li>
                                                <li><h6>Tip: <span className="font-normal">Add fertilizer in the evening only.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="watering">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Droplets size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Watering Schedule</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Early Stage: <span className="font-normal">Until you see the flowers on the plant, you will water them normally. i.e. only water them if the top soil is dry</span></h6></li>
                                                <li><h6>Flowering & Fruiting: <span className="font-normal">When you see fruiting, then you must not let the soil dry, tomatoes may turn black if faces water scarcity at this stage.</span></h6></li>
                                                <li><h6>Flowering & Fruiting: <span className="font-normal">Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages to prevent blossom end rot.</span></h6></li>
                                                <li><h6><span className="font-normal">If you water excessively, plant might get fungus, attract more diseases, flowers will wither before time and fruiting will be delayed.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="diseases">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><FaBacteria size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Diseases - Know & Treat</h4>


                                            <h6 className="font-bold text-base">Leaf miner</h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Sign: <span className="font-normal">White linings on leaves, germs & bugs</span></h6></li>
                                                <li><h6>When: <span className="font-normal">They often attack during flowering process, treat them then and there and they will not attack again.</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Neem oil + garlic water - treat/spray for 2-3 days regularly.</span></h6></li>
                                                <li><h6>Note: <span className="font-normal">It is important to remove/treat them completely at the very beginning to stop the spread, you can pluck/cut the leaves & stem if infection is high.</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3">Black Flies</h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Sign: <span className="font-normal">Small black insects size flies</span></h6></li>
                                                <li><h6>When: <span className="font-normal">Throughout but mostly at the time of fruiting</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Neem oil - treat/spray for 2-3 days regularly.</span></h6></li>
                                                <li><h6>Note: <span className="font-normal">You can use Neem oil to treat most germs and pests</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3">Leaf Curl</h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Sign: <span className="font-normal">You might see that some leaves curled-up.</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Remove the whole stem of curled leaves</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Buttermilk (25%) + Water (75%) - spray on leaves and whole plant</span></h6></li>
                                                <li><h6>Note: <span className="font-normal">Try to treat them at the very beginnings of when you see the curled leaves to avoid spread</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3">Bursting tomatoes </h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Treatment: <span className="font-normal">Remove the affected tomatoes</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Raw Milk (25%) + Water (75%) - spray on leaves and whole plant</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3">Black tomatoes </h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Why: <span className="font-normal">This happen because of nutrients scarcity, lack of calcium.</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Add proper nutrients and micro internet rich fertilizer specifically calcium.</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Use fertilizer as egg shell powder, bone meal, wood ash etc.</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3">Tomatoes not ripening </h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Why: <span className="font-normal">Tomatoes need heat to ripen</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Mustard cake fertilizer liquid - will provide the required heat</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Or maintain proper temperature</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3" id="pollination">Flowers withering (No Pollination) </h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Why: <span className="font-normal">Flowers may wither and fall down without turing into fruits, this happen when the environment is isolated and no birds or insects are available for pollination</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Manual pollination - When flower appear you can gently shake the plant for 1-2 minutes for manual pollination</span></h6></li>
                                                <li><h6>Treatment: <span className="font-normal">Open the garden or environment for birds, bees and insects, try to live in harmoney with nature and nuture will take care of rest.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="weeding">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><PiPlantFill size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Weeding & Caring</h4>

                                            <h6 className="font-bold text-base">Remove weeds regularly.</h6>

                                            <h6 className="font-bold text-base mt-3">Remove Suckers</h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6>Remove Suckers: <span className="font-normal">Suckers are leaves that are growing between two branches they take plant&apos;s nutrients and we don&apos;t want them</span></h6></li>
                                            </ul>

                                            <h6 className="font-bold text-base mt-3">Pinching</h6>
                                            <ul className="flex flex-col gap-1">
                                                <li><h6><span className="font-normal">The act of pinching involves the removal of the growing point of a shoot along with few leaves. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="mb-10 max-md:mb-5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Shrub size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> When to Know it’s Good for Cultivation</h4>
                                            <p className="mb-4">
                                                Tomatoes are ready for harvest when they have a uniform color and are firm yet yield slightly to pressure.
                                                Depending on the variety, fruit can be harvested when fully red (or the designated ripe color for the cultivar).
                                            </p>
                                        </div>

                                        <Separator className="my-4"/>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Asterisk size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Important Reminders/Tips at Each Stage</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Watering: <span className="font-normal">Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages to prevent blossom end rot.</span></h6></li>
                                                <li><h6>Fertilizing: <span className="font-normal">Apply a balanced fertilizer every 20 days during the growing season and every 15 days in fruiting season.</span></h6></li>
                                                <li><h6><span className="font-normal">Regularly prune and stake plants to promote airflow and prevent fungal diseases.</span></h6></li>
                                                <li><h6><span className="font-normal">Companion plants such as marigolds or basil can help repel common pests.</span></h6></li>
                                                <li><h6><span className="font-normal">Row covers or insecticidal soaps are effective against aphids and whiteflies.</span></h6></li>
                                                <li><h6><span className="font-normal">Tomatoes need at least 6-8 hours of sunlight a day for best growth.</span></h6></li>
                                                <li><h6><span className="font-normal">Prune suckers and diseased leaves to ensure proper airflow and focus energy on fruit production.</span></h6></li>
                                                <li><h6><span className="font-normal">Regularly inspect for pests and diseases, and use organic or biological controls to manage outbreaks early.</span></h6></li>
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