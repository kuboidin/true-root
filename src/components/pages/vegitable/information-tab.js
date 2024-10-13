import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function InformationTab() {

    return <>
        <Tabs defaultValue="grow" className="w-full">
            <TabsList className="flex justify-center flex-wrap border-b border-border bg-transparent p-12">
                <TabsTrigger value="scientific" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Scientific Guide</TabsTrigger>
                <TabsTrigger value="grow" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">To the point (No Bullsh*t Guide)</TabsTrigger>
                <TabsTrigger value="community" className="py-2.5 px-5 font-medium font-Lufga -mb-0.5 border-b-2 border-transparent text-secondary text-xl">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="scientific" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                <div className="row">
                    <div className="lg:w-1/2 m-lg-b0 m-md-b30">
                        <div className="mb-10 max-md:mb-5">
                            <h2 className="mb-2">Fits women</h2>
                            <p className="mb-4">Designed for superior child comfort, OneFit™ provides extra rear-facing legroom and multiple recline options in every mode of use. With the widest range of height adjustments, the easy-adjust headrest system adjusts with the harness to grow with your child. OneFit™ accommodates tiny passengers from the very start with a removable head and body support insert for newborns weighing 5-11 lbs. </p>
                        </div>
                        <div className="xl:mb-6 md:mb-3.5 mb-2.5">
                            <h4 className="font-bold text-xl max-md:text-lg">Specifications</h4>
                            <ul>
                                <li className="py-1.1 text-body max-md:text-sm">Assembled Dimensions (L x W x H): <span>71.1 x 45.7 x 7.6 cm; 700 Grams</span></li>
                                <li className="py-1.1 text-body max-md:text-sm">Assembled Product Weight: <span>25 lbs.</span></li>
                            </ul>
                        </div>
                        <ul className="specification-list mb-10">
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Manufacturer <span>Indra Hosiery Mills</span></li>
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">ASIN<span>B07WK128569</span></li>
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Country of Origin<span>India</span></li>
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Department<span>Women</span></li>
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Included Components<span>Women&apos;s Jacket</span></li>
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Item Dimensions LxWxH<span> 71.1 x 45.7 x 7.6 Centimeters</span></li>
                            <li className="flex justify-between items-center border-b border-border py-[7px] max-md:py-1.1 text-body">Manufacture<span> Indra Hosiery Mills</span></li>
                        </ul>
                        <div className="product-media row g-xl-4 g-2 mb-10">
                            <div className="w-1/4">
                                <a href="shop-list.html">
                                    <Image width={600} height={500} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress1.png" alt="/" className="rounded-xl w-full"/>
                                </a>
                            </div>
                            <div className="w-1/4">
                                <a href="shop-list.html">
                                    <Image width={600} height={500} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress2.png" alt="/" className="rounded-xl w-full"/>
                                </a>
                            </div>
                            <div className="w-1/4">
                                <a href="shop-list.html">
                                    <Image width={600} height={500} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress3.png" alt="/" className="rounded-xl w-full"/>
                                </a>
                            </div>
                            <div className="w-1/4">
                                <a href="shop-list.html">
                                    <Image width={600} height={500} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/products/dress4.png" alt="/" className="rounded-xl w-full"/>
                                </a>
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                <h4 className="font-bold text-xl max-md:text-lg">Fabric Content</h4>
                                <ul className="lg:flex block items-center">
                                    <li className="mr-14"><h6>Seatpad: <span className="font-normal">100% Cotton</span></h6></li>
                                    <li><h6>Insert: <span className="font-normal">100% Cotton</span></h6></li>
                                </ul>
                            </div>
                            <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                                <h4 className="font-bold text-xl max-md:text-lg">Chemical Statement</h4>
                                <p className="mb-4 text-body">The OneFit ClearTex All-In-One Car Seat is produced without the use of intentionally added fire retardant chemical treatments, PFAS, BPA and phthalates. </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="row">
                            <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                <a href="shop-standard.html" className="about-product-wrapper">
                                    <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                        <h4 className="font-bold text-xl max-md:text-lg">All-in-One Dress</h4>
                                        <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                <a href="shop-standard.html" className="about-product-wrapper">
                                    <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                        <h4 className="font-bold text-xl max-md:text-lg">Looking wise good</h4>
                                        <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                <a href="shop-standard.html" className="about-product-wrapper">
                                    <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                        <h4 className="font-bold text-xl max-md:text-lg">100% Made In India</h4>
                                        <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="md:w-1/2 max-md:mb-5 mb-7.5">
                                <a href="shop-standard.html" className="about-product-wrapper">
                                    <div className="text-center px-4 py-[38px] h-full flex flex-col justify-center items-center border border-secondary rounded-3xl bg-light">
                                        <h4 className="font-bold text-xl max-md:text-lg">100% Cotton</h4>
                                        <p className="text-body text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div><Image width={1500} height={1500} className="rounded-3xl w-full" src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product-details/product-style-1/product-details-1.png" alt="/"/></div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="grow" className="lg:pt-13.5 sm:pt-7.5 pt-5">To the point (No Bullsh*t Guide)</TabsContent>
            <TabsContent value="community" className="lg:pt-13.5 sm:pt-7.5 pt-5">
                <div id="comment-list">
                    <div>
                        <h4 className="mb-2">Comments (02)</h4>
                        <p className="text-sm mb-7.5 text-body">There are many variations of passages of Lorem Ipsum available.</p>
                        <div id="comment">
                            <ol className="mb-14.5 max-lg:mb-10">
                                <li className="comment even thread-even depth-1 comment" id="comment-2">
                                    <div className="relative pt-0.5 pb-7.5 pl-25 mb-7.5 min-h-[115px] border-b border-black/10">
                                        <div className="comment-author vcard">
                                            <Image width={250} height={250} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile4.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0"/>
                                            <cite className="font-Lufga not-italic text-base leading-[21px] font-semibold mb-2.5 block">Michel Poe</cite>
                                        </div>
                                        <div>
                                            <p className="text-sm text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="reply">
                                            <a rel="nofollow" className="absolute top-0 right-0 py-[3px] px-2.5 inline-block rounded-md text-xs bg-title font-medium text-white leading-[1.3] uppercase mb-2" href="#;">Reply</a>
                                        </div>
                                    </div>
                                    <ol className="sm:pl-13.5">
                                        <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                            <div className="relative pt-0.5 pb-7.5 pl-25 mb-7.5 min-h-[115px] border-b border-black/10" id="div-comment-3">
                                                <div className="comment-author vcard">
                                                    <Image width={250} height={250} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile3.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0"/>
                                                    <cite className="font-Lufga not-italic text-base leading-[21px] font-semibold mb-2.5 block">Celesto Anderson</cite>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                                            <Image width={250} height={250} src="https://pixio.dexignzone.com/tailwind/demo/assets/images/profile2.jpg" alt="/" className="rounded-full absolute left-0 size-[85px] top-0"/>
                                            <cite className="font-Lufga not-italic text-base leading-[21px] font-semibold mb-2.5 block">Monsur Rahman Lito</cite>
                                        </div>
                                        <div>
                                            <p className="text-sm text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
    </>;
}