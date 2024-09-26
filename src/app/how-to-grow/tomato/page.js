import SwiperComp from "@/components/comp/swiper";
import InformationTab from "@/components/pages/vegitable/information-tab";
import Breadcrumbs from "@/components/comp/breadcrumbs";
import EcoBadge from "@/components/comp/eco-badge";
import { Separator } from "@/components/ui/separator";

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
                                                <span>One of the easiest vegetables to grow</span>
                                                <span>Fruiting withing 60 to 85 days (depending on variety)</span>
                                                <span>Highly suitable for hydroponic cultivation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-2 mb-4 text-sm">
                                    Tomatoes are not only nutrient-dense but also easy to grow, making them an ideal choice for home gardeners, whether in backyards, community gardens, or even balconies. <br/>
                                    Rich in vitamins A and C, and loaded with lycopene, tomatoes offer numerous health benefits, including antioxidant properties that support heart health and may reduce cancer risks. <br/>
                                    Additionally, they have applications in Ayurvedic medicine, promoting digestion and skin health. <br/>
                                    Their versatility in culinary uses—from fresh salads to savory sauces—combined with their relatively low maintenance requirements, encourages anyone to cultivate their own supply of this vibrant fruit.
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