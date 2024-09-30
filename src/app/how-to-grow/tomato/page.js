import SwiperComp from "@/components/comp/swiper";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {MoveRight, Sprout, Tractor} from "lucide-react";
import Image from "next/image";
import CustomSwiper from "@/components/comp/custom-swiper";
import Nutrition from "@/components/pages/vegitable/nutrition";

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
                                    Whether you're a beginner or an experienced gardener, tomatoes are rewarding to cultivate at home with minimal effort.
                                </p>
                                <Separator className="mt-4 mb-2"/>
                                <Nutrition heading="Growing Conditions" items={[
                                    { name: 'Temperature', value: "18°C - 30°C" },
                                    { name: 'pH', value: '6.0 - 6.8' },
                                    { name: 'Fruiting', value: '60 to 85 days' }
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

                                social share

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
                                <TabsTrigger value="scientific" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Good to know (Scientific Information)</TabsTrigger>
                                <TabsTrigger value="grow" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">How to grow Tomatoes (No Bullsh*t Guide)</TabsTrigger>
                                <TabsTrigger value="community" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Community</TabsTrigger>
                            </TabsList>
                            <TabsContent value="scientific" className="lg:pt-13.5 sm:pt-7.5 pt-5">
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
                                            <div className="w-full bg-darkGreen bg-no-repeat bg-auto h-[600px] -mt-1" style={{backgroundImage: 'url("/assets/other/image/bg-bn5-1.webp")', backgroundPosition: "center left"}}>
                                                <div className="grid grid-cols-6 gap-2 my-20 background-overlay bg-no-repeat" style={{backgroundImage: 'url("/assets/other/image/bg-bn5-2.webp")', backgroundPosition: "center right"}}>
                                                    <div></div>
                                                    <div>
                                                        <div className="text-left inline-block">
                                                            <div className="title_block">
                                                                <p className="sub_title text-base pb-[22px] mb-0">Health benefits of Tomatoes</p>
                                                                <h4 className="text-white font-bold lg:text-[32px] text-3xl xl:leading-[48px] leading-9">Health benefits</h4>
                                                            </div>
                                                            <div className="text-sm mt-[23px] text-white">
                                                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada pellentesque turpis eget facilisis. Sed sit amet efficitur ex. Fusce dapibus nulla vel ligula porttitor interdum.</div>
                                                                <div className="pt-6">Cras at vulputate felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse molestie est neque, vitae eleifend magna imperdiet sit amet</div>
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
                                                                <h4 className="text-lightGreen">100% Fresh food</h4>
                                                            </div>
                                                            <p className="text-white text-sm">Botanica Shop is always committed to 100% fresh, organic food has a certificate of food safety certification</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1 bg-darkGreen -mt-1">
                                            <div className="container mx-auto px-[15px] overflow-hidden my-40">
                                                <div className="block_title text-center flex justify-center items-center mb-3">
                                                    <div className="title_block inline-block">
                                                        <p className="sub-title font-bold text-lg pb-2 mb-0 text-lightGreen">Day-to-day uses</p>
                                                        <h2 className="text-white">Uses</h2>
                                                    </div>
                                                </div>

                                                <CustomSwiper swipes={[
                                                    (<div className="flex flex-col gap-4 text-center rounded-[26px] px-3 lg:px-4 pt-4 pb-[66px]">
                                                        <div className="xl:min-h-[341px] min-h-[250px] mb-5">
                                                            <Image width={306} height={341} decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/Fruits-2.png" alt="Fresh Fruits" />
                                                        </div>
                                                        <div className="flex flex-col gap-2 pb-2.5">
                                                            <h4 className="text-base font-bold text-white hover:text-[color:var(--dark-green)]">Fresh Fruits</h4>
                                                            <p className="text-center mb-0 inline-block text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lorem diam volutpat consequat metus ac</p>
                                                        </div>
                                                    </div>),
                                                    (<div className="flex flex-col gap-4 text-center rounded-[26px] px-3 lg:px-4 pt-4 pb-[66px]">
                                                        <div className="xl:min-h-[341px] min-h-[250px] mb-5">
                                                            <Image width={306} height={341} decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/Fruits-2.png" alt="Fresh Fruits" />
                                                        </div>
                                                        <div className="flex flex-col gap-2 pb-2.5">
                                                            <h4 className="text-base font-bold text-white hover:text-[color:var(--dark-green)]">Fresh Fruits</h4>
                                                            <p className="text-center mb-0 inline-block text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lorem diam volutpat consequat metus ac</p>
                                                        </div>
                                                    </div>),
                                                    (<div className="flex flex-col gap-4 text-center rounded-[26px] px-3 lg:px-4 pt-4 pb-[66px]">
                                                        <div className="xl:min-h-[341px] min-h-[250px] mb-5">
                                                            <Image width={306} height={341} decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/Fruits-2.png" alt="Fresh Fruits" />
                                                        </div>
                                                        <div className="flex flex-col gap-2 pb-2.5">
                                                            <h4 className="text-base font-bold text-white hover:text-[color:var(--dark-green)]">Fresh Fruits</h4>
                                                            <p className="text-center mb-0 inline-block text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lorem diam volutpat consequat metus ac</p>
                                                        </div>
                                                    </div>),
                                                    (<div className="flex flex-col gap-4 text-center rounded-[26px] px-3 lg:px-4 pt-4 pb-[66px]">
                                                        <div className="xl:min-h-[341px] min-h-[250px] mb-5">
                                                            <Image width={306} height={341} decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/Fruits-2.png" alt="Fresh Fruits" />
                                                        </div>
                                                        <div className="flex flex-col gap-2 pb-2.5">
                                                            <h4 className="text-base font-bold text-white hover:text-[color:var(--dark-green)]">Fresh Fruits</h4>
                                                            <p className="text-center mb-0 inline-block text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lorem diam volutpat consequat metus ac</p>
                                                        </div>
                                                    </div>),
                                                    (<div className="flex flex-col gap-4 text-center rounded-[26px] px-3 lg:px-4 pt-4 pb-[66px]">
                                                        <div className="xl:min-h-[341px] min-h-[250px] mb-5">
                                                            <Image width={306} height={341} decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/05/Fruits-2.png" alt="Fresh Fruits" />
                                                        </div>
                                                        <div className="flex flex-col gap-2 pb-2.5">
                                                            <h4 className="text-base font-bold text-white hover:text-[color:var(--dark-green)]">Fresh Fruits</h4>
                                                            <p className="text-center mb-0 inline-block text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non lorem diam volutpat consequat metus ac</p>
                                                        </div>
                                                    </div>)
                                                ]}/>
                                            </div>
                                        </div>

                                        <div className="bg-transparent" style={{ backgroundImage: "linear-gradient(0deg, #002B17 90%, #002112 100%)" }}>
                                            <div className="w-full bg-no-repeat bg-auto" style={{backgroundImage: "url(https://botanica.risingbamboo.com/wp-content/uploads/2023/05/bg-product2.jpg)", backgroundPosition: "bottom center"}}>

                                                <div className="container mx-auto py-40 text-white">
                                                    <div className="grid grid-cols-12 gap-4 py-8">
                                                        <div className="banner-left col-span-12 lg:col-span-6 lg:mt-0 mt-8 wow fadeInLeft">
                                                            <div className=" relative text-center">
                                                                <img decoding="async" alt="Image" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/healthy-food.png" className=" inline-block  relative elementor-repeater-item-c225823"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-span-12 lg:col-span-6 relative lg:order-1 -order-1 wow fadeInRight">
                                                            <div className="lg:text-left text-center">
                                                                <div className="title_block">
                                                                    <p className="sub_title xl:text-4xl text-xl pb-4 mb-0">Why Choose us</p>
                                                                    <h2 className="title xl:leading-[55px] leading-9">Healthy Food is The Key to Your <br/>Good Mood</h2>
                                                                </div>
                                                                <div className="desc mt-4 text-base"></div>
                                                            </div>
                                                            <div className="pt-4">
                                                                <div className="custom-html flex items-center justify-items-center xl:pb-10 lg:pb-5 pb-[30px] last:pb-0 elementor-repeater-item-f6aeb7a relative">
                                                                    <div className="image-box">
                                                                        <img decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/01/icon-2.png" title="icon-2" alt="icon-2"/>
                                                                    </div>
                                                                    <div className="box-content">
                                                                        <h3 className="box-title">100% Fresh food</h3>
                                                                        <p className="box-description">
                                                                            Botanica Shop is always committed to 100% fresh, organic
                                                                            <br/>food has a certificate of food safety certification</p>
                                                                    </div>
                                                                </div>
                                                                <div className="custom-html flex items-center justify-items-center xl:pb-10 lg:pb-5 pb-[30px] last:pb-0 elementor-repeater-item-3ab01fa relative">
                                                                    <div className="image-box">
                                                                        <img decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/04/icon-3.png" title="icon-2" alt="icon-2"/>
                                                                    </div>
                                                                    <div className="box-content">
                                                                        <h3 className="box-title">Premium quality food products</h3>
                                                                        <p className="box-description">The quality and safety of our products is our top priority.<br/>
                                                                            We continue to quest for even greater product quality</p>
                                                                    </div>
                                                                </div>
                                                                <div className="custom-html flex items-center justify-items-center xl:pb-10 lg:pb-5 pb-[30px] last:pb-0 elementor-repeater-item-2ffe273 relative">
                                                                    <div className="image-box">
                                                                        <img decoding="async" src="https://botanica.risingbamboo.com/wp-content/uploads/2023/04/icon-4.png" title="icon-2" alt="icon-2"/>
                                                                    </div>
                                                                    <div className="box-content">
                                                                        <h3 className="box-title">Organic farming</h3>
                                                                        <p className="box-description">Organic farming, agricultural system that uses ecologically<br/>
                                                                            based pest controls and biological fertilizers derived<br/>
                                                                            largely from animal</p>
                                                                    </div>
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
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Soil + Compost + Coco peat (Coco peat helps retain moisture for longer, if you do not have Coco peat it's Okay, just maintain the proper moisture).</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> See the Seeding process on this page for tips and thing to care.</li>
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
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> See the Seeding process on this page for tips and temperature and environment conditions.</li>
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
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Shift them to 1-2 hour of sun light when you see 2 leaves, at this stage plants start looking for sun light, if you do not put them in sun light they will grow week but longer and in multi-direction in search of sun light (We don't want that).</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Seed provide all the required nutrients to support life of plant for 2 weeks</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Do not add any fertilizer of any kind.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information</li>
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
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, Magnesium, see nutritional requirement section for more information.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Add bone meal and vermi-compost for nutrients</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Do not use NPK, DAP or chemical fertilizer at this stage, plant will not be able to handle and die</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information</li>
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
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/>If roots are exposed to air or you see no soil with root or if plant is weathered (when you borrow from your friend), then <strong>sock the plant's root in water for 5-7 minutes</strong>. It will revive the plants and stablize them.</li>
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
                                                                    10-12 days after 2nd dose of fertilizer, You will see the plants has growing rapidly. Let's perform Pinching. The act of <strong>pinching</strong> involves the <strong>removal of the growing point of a shoot along with few leaves</strong>. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Make sure the main stem is thick enough and plant has grown to twice the height and you see clusters of small growing leaves at the end of stems.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> This will help plant to stop increasing height and focus on increasing width and number of stems</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Try to use water soluble fertilizer at the beginning.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information</li>
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
                                                                        If you don't cut them at this time, plant growth will stop and plant will focus completely on flowers and fruits, this will result in small plant and low tomatoes yield.
                                                                    </li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> Until you don't see the small tomatoes, you will have to provide liquid fertilizer every 20 days.</li>
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
                                                                    A <strong>"sucker"</strong> is <strong>an extra shoot or leaves growing between the main stalk of the tomato plant and an established branch, often growing at a 45° angle from the plant</strong>.
                                                                </p>
                                                                <ul className="flex flex-col gap-2 text-gray-700">
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Clean the small leaves and thin stems up to 5-7 inches from soil, only keep the thick branches</li>
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> Remove suckers, (Suckers are leaves that are growing between two branches) they take plant's nutrients and we don't want them</li>
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
                                                                    <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Remove weeds and keep looking for diseases, check the diseases section of how to find and fix the plant diseases. </li>
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
                                                                    Check watering section for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Weeding & Caring: </strong> <br/>
                                                                    Remove weeds regularly. <br/>
                                                                    Perform Pinching <br/>
                                                                    Remove Suckers <br/>
                                                                    Check weeding & caring section for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> <br/>
                                                                    Until when you don't see the small tomatoes, you will have to provide liquid fertilizer every 20 days.<br/>
                                                                    After you see bigger flowers and small fruits, add fertilizers containing micro nutrients, such as, sea weed (spray), onion peel liquid , banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, try not to repeat same fertilizer.<br/>
                                                                    Check fertilizer section for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Diseases: </strong> <br/>
                                                                    Plants are prone to diseases, you need to look for signs and take care before they spread of ruin your hard work. <br/>
                                                                    There are very less chance of diseases in a controlled environment <br/>
                                                                    Check diseases section for more information.
                                                                </p>

                                                                <p className="my-2">
                                                                    <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Pollination: </strong> <br/>
                                                                    We believe in harmony, plants grow better with other plants and insects, try not to restrict your garden to birds, insects, bugs and other organism. <br/>
                                                                    Birds, Insects not only help in pollination but also improve the positivity of the environment, help in nutrition circulation. <br/>
                                                                    Birds can east small bugs and protect plant from diseases for free. <br/>
                                                                    Check pollination section for more information.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <p className="my-4">
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

                                        <div className="xl:mb-6 md:mb-3.5 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg">Seeding Process</h4>
                                            <p>Tomato seeds need water to sprout, infect it's all they need. <br/>
                                                The seed coats absorbs the water, swell & crack, allowing the tiny plant inside to emerge and begin it's life. <br/>
                                                Not enough moisture and the best, the seeds won't sprout until it's enough and worst, they manage to sprout but quickly perish. <br/>
                                                Too much water can drawn the seedlings.<br/>
                                                <strong>Testing moisture -</strong> The seeding soil must retain it's shape when squeezed tightly, yet it should not drip much water, if any at all.
                                            </p>
                                            <Separator className="my-4"/>
                                            <ul className="specification-list mb-10">
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Seed Selection:</strong> {" "} <span>Choose high-quality heirloom or hybrid seeds for your climate.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Sowing:</strong> {" "} <span>Sow seeds 0.5 cm - 2.5 cm deep in seed trays or pots indoors, 6-8 weeks before the last frost date.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Temperature:</strong> {" "} <span>Seeds germinate best at 23-29°C.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Environment:</strong> {" "} <span>Keep in a warm, sunny spot or use grow lights. Maintain high humidity.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Tips:</strong> {" "} <span>Avoid overwriting as it can lead to damping-off disease. Seedlings should be hardened off before transplanting outdoors.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Time to Seed:</strong> {" "} <span> Germination takes 5-10 days. Once seedlings develop 2-3 true leaves, they are ready for transplanting.</span></li>
                                            </ul>
                                        </div>
                                        <div className="product-info">
                                            <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                                <h4 className="font-bold text-xl max-md:text-lg mb-2">Germination Stages and Conditions</h4>
                                                <ul className="flex flex-col gap-4">
                                                    <li><h6>Radicle Emergence: <span className="font-normal">Within 3-4 days, the first root appears</span></h6></li>
                                                    <li><h6>Shoot Development: <span className="font-normal">Leaves begin to sprout after a week</span></h6></li>
                                                    <li><h6>True Leaves: <span className="font-normal">Typically appear by day 10. This is a critical phase for ensuring good light exposure and proper moisture</span></h6></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <Separator className="my-4"/>
                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Sprout size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Fertilizer Requirements</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li>
                                                    <h6>Organic Fertilizer: <p className="font-normal">
                                                        Use compost, aged manure, bone meal, or worm castings. <br/>
                                                        Learn how to make compost,
                                                        use potato leaves etc. which makes good compost.
                                                        use home waste, tell which waste contains what
                                                    </p></h6>
                                                </li>
                                                <li><h6>Chemical Fertilizer: <span className="font-normal">A balanced NPK fertilizer such as 10:10:10 at planting, followed by a 5:10:10 fertilizer during flowering and fruiting stages.</span></h6></li>
                                            </ul>
                                        </div>

                                        <Separator className="my-4"/>
                                        <div className="mb-10 max-md:mb-5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2">When to Know it’s Good for Cultivation</h4>
                                            <p className="mb-4">
                                                Tomatoes are ready for harvest when they have a uniform color and are firm yet yield slightly to pressure.
                                                Depending on the variety, fruit can be harvested when fully red (or the designated ripe color for the cultivar).
                                            </p>
                                        </div>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2">Watering and Fertilizer Schedule</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Watering: <span className="font-normal">Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages to prevent blossom end rot.</span></h6></li>
                                                <li><h6>Fertilizing: <span className="font-normal">Apply a balanced fertilizer every 3 weeks during the growing season.</span></h6></li>
                                            </ul>
                                        </div>

                                        <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg mb-2">Important Reminders at Each Stage</h4>
                                            <ul className="flex flex-col gap-4">
                                                <li><h6>Watering: <span className="font-normal">Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages to prevent blossom end rot.</span></h6></li>
                                                <li><h6>Fertilizing: <span className="font-normal">Apply a balanced fertilizer every 3 weeks during the growing season.</span></h6></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="community" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div id="comment-list" className="px-20">
                                    <div>
                                        <h4 className="mb-2">Comments (02)</h4>
                                        <p className="text-sm mb-7.5 text-body">There are many variations of passages of Lorem Ipsum available.</p>
                                        <div id="comment">
                                            <ol className="mb-14.5 max-lg:mb-10">
                                                <li className="comment even thread-even depth-1 comment" id="comment-2">
                                                    <div className="relative pt-0.5 pb-7.5 pl-25 mb-7.5 min-h-[115px] border-b border-black/10">
                                                        <div className="comment-author vcard">
                                                            <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile4.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0"/>
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
                                                                <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile3.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0"/>
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
                                                            <img src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile2.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0"/>
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
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    </>;
}