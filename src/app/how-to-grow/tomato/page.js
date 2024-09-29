import SwiperComp from "@/components/comp/swiper";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {MoveRight} from "lucide-react";

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
                                            <EcoBadge score={4}/>
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
                                <div className="flex flex-col flex-wrap gap-3">
                                    <div>
                                        <label className="font-bold mb-2.5 font-Lufga">Temperature</label>
                                        <p>Optimal growing temperature: <strong>18°C to 30°C</strong></p>
                                    </div>
                                    <div>
                                        <label className="font-bold mb-2.5 font-Lufga">Soil Conditions</label>
                                        <p>Soil type: Well-drained loamy or sandy soil, pH range 6.0 to 6.8</p>
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


        <section className="pt-17 max-lg:pt-13.5">
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
                                            <div className="w-full h-14" style={{ backgroundImage: 'url("/assets/other/image/bg-slide5.webp")' }}></div>
                                            <div className="w-full bg-darkGreen bg-no-repeat bg-auto h-[600px] -mt-1" style={{backgroundImage: 'url("/assets/other/image/bg-bn5-1.webp")', backgroundPosition: "center left"}}>
                                                <div className="absolute top-52 left-0 w-full h-full background-overlay bg-no-repeat" style={{backgroundImage: 'url("/assets/other/image/bg-bn5-2.webp")', backgroundPosition: "center right"}}></div>
                                                <div className="grid grid-cols-6 gap-2 my-20">
                                                    <div></div>
                                                    <div>
                                                        <div className="text-left inline-block">
                                                            <div className="title_block">
                                                                <p className="sub_title text-base pb-[22px] mb-0">Health benefits of Tomatoes</p>
                                                                <h4 className="text-white font-bold lg:text-[32px] text-3xl xl:leading-[48px] leading-9">Health benefits</h4>
                                                            </div>
                                                            <div className="desc mt-[23px] text-white">
                                                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada pellentesque turpis eget facilisis. Sed sit amet efficitur ex. Fusce dapibus nulla vel ligula porttitor interdum.</div>
                                                                <div className="pt-6">Cras at vulputate felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse molestie est neque, vitae eleifend magna imperdiet sit amet</div>
                                                                <div className="how-to-order">
                                                                    <div className="icon-phone">
                                                                        <i className="rbb-icon-phone-4"></i>
                                                                    </div>
                                                                    <div className="title_block">
                                                                        <p>How to Order?</p>
                                                                        <span>Call Us: <span>0123-456-7890</span></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-[43px]">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2"></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="grow" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                                <div className="row px-20">
                                    <div className="lg:w-1/2 m-lg-b0 m-md-b30">
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
                                                                <p className="text-gray-700">
                                                                    <ul className="flex flex-col gap-2">
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Opt for compact or determinate varieties like ‘Patio’ or ‘Cherry Tomatoes’ if growing in pots or grow bags.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Key Info: Dwarf varieties perform better in containers due to their smaller size and faster fruiting.</li>
                                                                    </ul>
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 2: Prepare the Pot or Grow Bag</p>
                                                                <p className="text-gray-700">
                                                                    <ul className="flex flex-col gap-2">
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Use at least a 12-18 inch deep pot or grow bag.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom to improve drainage.</li>
                                                                    </ul>
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 3</p>
                                                                <p className="text-gray-700">
                                                                    Tell them I hate them. Is the Space Pope reptilian!? Tell her
                                                                    she looks thin. Hello, little man. I will destroy you!
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 4</p>
                                                                <p className="text-gray-700">
                                                                    If one examines precultural libertarianism, one is faced with a
                                                                    choice: either accept rationalism or conclude that context is a
                                                                    product.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">5.</div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="mb-2 text-lg font-bold">Success</p>
                                                                <p className="text-gray-700"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">Growing Tomatoes in the Garden (Directly in the Ground)</h2>
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
                                                                <p className="text-gray-700">
                                                                    <ul className="flex flex-col gap-2">
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Opt for compact or determinate varieties like ‘Patio’ or ‘Cherry Tomatoes’ if growing in pots or grow bags.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Key Info: Dwarf varieties perform better in containers due to their smaller size and faster fruiting.</li>
                                                                    </ul>
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 2: Prepare the Pot or Grow Bag</p>
                                                                <p className="text-gray-700">
                                                                    <ul className="flex flex-col gap-2">
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Use at least a 12-18 inch deep pot or grow bag.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom to improve drainage.</li>
                                                                    </ul>
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 3</p>
                                                                <p className="text-gray-700">
                                                                    Tell them I hate them. Is the Space Pope reptilian!? Tell her
                                                                    she looks thin. Hello, little man. I will destroy you!
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 4</p>
                                                                <p className="text-gray-700">
                                                                    If one examines precultural libertarianism, one is faced with a
                                                                    choice: either accept rationalism or conclude that context is a
                                                                    product.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">5.</div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="mb-2 text-lg font-bold">Success</p>
                                                                <p className="text-gray-700"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">Growing Tomatoes at a Large Scale (Commercial Farming)</h2>
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
                                                                <p className="text-gray-700">
                                                                    <ul className="flex flex-col gap-2">
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Opt for compact or determinate varieties like ‘Patio’ or ‘Cherry Tomatoes’ if growing in pots or grow bags.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Key Info: Dwarf varieties perform better in containers due to their smaller size and faster fruiting.</li>
                                                                    </ul>
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 2: Prepare the Pot or Grow Bag</p>
                                                                <p className="text-gray-700">
                                                                    <ul className="flex flex-col gap-2">
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> Use at least a 12-18 inch deep pot or grow bag.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</li>
                                                                        <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom to improve drainage.</li>
                                                                    </ul>
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 3</p>
                                                                <p className="text-gray-700">
                                                                    Tell them I hate them. Is the Space Pope reptilian!? Tell her
                                                                    she looks thin. Hello, little man. I will destroy you!
                                                                </p>
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
                                                                <p className="mb-2 text-lg font-bold">Step 4</p>
                                                                <p className="text-gray-700">
                                                                    If one examines precultural libertarianism, one is faced with a
                                                                    choice: either accept rationalism or conclude that context is a
                                                                    product.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <div className="flex flex-col items-center mr-4">
                                                                <div>
                                                                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">5.</div>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="mb-2 text-lg font-bold">Success</p>
                                                                <p className="text-gray-700"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="mb-10 max-md:mb-5">
                                            <h2 className="mb-2">Growing Process & Schedule</h2>
                                            <p className="mb-4">
                                                Tomatoes grow well in pots, raised beds, or directly in the ground.
                                                Choose a sunny spot with at least 6-8 hours of sunlight daily.
                                                Ensure proper spacing between plants (45-60 cm apart) to allow for air circulation and prevent fungal infections.
                                            </p>
                                        </div>
                                        <div className="xl:mb-6 md:mb-3.5 mb-2.5">
                                            <h4 className="font-bold text-xl max-md:text-lg">Seeding Process</h4>
                                            <ul className="specification-list mb-10">
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Seed Selection:</strong> {" "} <span>Choose high-quality heirloom or hybrid seeds for your climate.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Sowing:</strong> {" "} <span>Sow seeds 1/4 inch deep in seed trays or pots indoors, 6-8 weeks before the last frost date.</span></li>
                                                <li className="flex border-b border-border py-[7px] text-body gap-2"><strong>Temperature:</strong> {" "} <span>Seeds germinate best at 20-25°C.</span></li>
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