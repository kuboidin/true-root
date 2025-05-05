import Step from "@/components/pages/vegitable/step";
import {MoveRight} from "lucide-react";
import TabLink from "@/components/pages/tab-link";


export default function HowToGrowTab({ plant }) {
    return <>
        <div className="container flex flex-col gap-2">
            <div className="m-lg-b0 m-md-b30">
                <div className="mb-10 max-md:mb-5">
                    <h2 className="mb-2">How to grow {plant.plural} at Home (In Pots or Grow Bags)</h2>
                    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="grid gap-6 row-gap-10 grid-cols-2">
                            <div className="lg:py-6 lg:pr-16 col-span-full">
                                {plant.tabs.how_to_grow.map((step, i) => <Step key={i} step={i + 1} heading={step.heading} is_last={i === plant.tabs.how_to_grow.length - 1}>{step.slice(1)}
                                    <ul className="flex flex-col gap-2 text-gray-700">
                                        {step.steps.map((s, j) => <li key={j}><MoveRight size={18} className="-mt-2 mr-2"/>{s}</li>)}
                                    </ul>
                                </Step>)}

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

                                <Step step={7} heading="Day 40: 2nd dose of fertilizer">
                                    <>
                                        <p className="text-gray-700">
                                            At this point, plants are bulletproof and the road is going to get easy.
                                        </p>
                                        <ul className="flex flex-col gap-2 text-gray-700">
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Add some organic fertilizers like peanuts, banana leaves, or similar fertilizers, and make sure plants are twice the size when shifted, only then provide the liquid fertilizer.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> You can also add seaweed, bone meal, eggshell powder, etc.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Try to use water-soluble fertilizer at the beginning.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Recommendation: </strong> We recommend not to use chemical fertilizers, They are harmful to the environment and you. Things grown organically taste much better and are healthier. But if you must then you can add them at this stage.</li>
                                        </ul>
                                    </>
                                </Step>

                                <Step step={8} heading="Day 52: Grooming and caring (Pinching) of tomato plants">
                                    <>
                                        <p className="text-gray-700">
                                            10-12 days after 2nd dose of fertilizer, You will see the plants have grown rapidly. Let&apos;s perform Pinching. The act of <strong>pinching</strong> involves the <strong>removal of the growing point of a shoot along with a few leaves</strong>. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers.
                                        </p>
                                        <ul className="flex flex-col gap-2 text-gray-700">
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Make sure the main stem is thick enough and the plant has grown to twice the height and you see clusters of small growing leaves at the end of stems.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> This will help the plant to stop increasing height and focus on increasing the width and number of stems.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Try to use water-soluble fertilizer at the beginning.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Nutritional Requirements">watering guide</TabLink> for more information</li>
                                        </ul>
                                    </>
                                </Step>

                                <Step step={9} heading="Day 64: Add Support">
                                    <>
                                        <p className="text-gray-700">
                                            You will see plant has grown dense and bigger
                                        </p>
                                        <ul className="flex flex-col gap-2 text-gray-700">
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> If your pot or grow bag is smaller, now is the time to shift them into bigger pots or grow bags.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Remove leaves and small stems near the soil, this will help the plant grow in length and protect it from soil-based diseases.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Add support at this stage.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Important: </strong> If you see that the plant is starting to grow flowers at this time, cut them.
                                                This will allow plants to grow further and yield more fruits at a later stage.
                                                If you don&apos;t cut them at this time, plant growth will stop and the plant will focus completely on flowers and fruits, this will result in small plants and low tomato yield.
                                            </li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> Until you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.</li>
                                        </ul>
                                    </>
                                </Step>

                                <Step step={10} heading="Day 87: Flowering & Remove Suckers">
                                    <>
                                        <p className="text-gray-700">
                                            You might start seeing the flowers at this stage <br/>
                                            A <strong>&quot;sucker&quot;</strong> is <strong>an extra shoot or leaves growing between the main stalk of the tomato plant and an established branch, often growing at a 45° angle from the plant</strong>.
                                        </p>
                                        <ul className="flex flex-col gap-2 text-gray-700">
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Clean the small leaves and thin stems up to 5-7 inches from the soil, only keep the thick branches.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> Remove suckers, (Suckers are leaves that are growing between two branches) they take plant&apos;s nutrients and we don&apos;t want them.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Important: </strong> If/When you see flowers/fruits, at this time plants need more nutrients than ever.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Remove suckers whenever you see them for a health plant.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Increase the dosage of fertilizer.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> When you see fruit, then you must not let the soil dry, tomatoes may turn black if face water scarcity at this stage.</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> After you see bigger flowers and small fruits, add fertilizers containing micronutrients, such as seaweed (spray), onion peel liquid, and banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, and try not to repeat the same fertilizer.</li>
                                        </ul>
                                    </>
                                </Step>

                                <Step step={11} heading="Day 112: Tomatoes will start turning red">
                                    <>
                                        <p className="text-gray-700">
                                            At this stage, tomatoes will start turning red and within a few days they will be ready to harvest.
                                        </p>
                                        <ul className="flex flex-col gap-2 text-gray-700">
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Tip: </strong> Increase the dosage/frequency of fertilizer</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> You must not let the soil dry, Water is very important</li>
                                            <li><MoveRight size={18} className="-mt-2 mr-2"/> <strong>Fertilizer: </strong> See the Fertilizer section for homemade and nutrient-rich fertilizers.</li>
                                        </ul>
                                    </>
                                </Step>

                                <Step step={12} heading="Day 120: Fruit of hard work">
                                    <>
                                        <p className="text-gray-700">
                                            Harvest the fruit of your hard work. This is not the end, Tomatoes will keep on provided with minimal watering and care at this time.
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
                                            Along with these steps and stages, there are a few things you need to perform throughout the process to grow tomatoes, each thing will take only 20-30 minutes a week of your time. <br/>
                                            Please see the related section for more information on each step, tips, and homemade recipes for fertilizers and plant care. <br/>
                                        </p>

                                        <p className="my-4 text-lg font-bold">Perform these steps every 3 weeks after 40 days of seeding (after shifting).</p>
                                        <p className="my-2">
                                            <MoveRight size={18} className="-mt-2 mr-2"/> <strong>Watering: </strong> <br/>
                                            Until you see the flowers on the plant, you will water them normally i.e. Only water them if the top soil is dry.<br/>
                                            If you water excessively, plants might get fungus, and attract more diseases, flowers will wither before time and fruiting will be delayed. <br/>
                                            When you see fruit, then you must not let the soil dry, tomatoes may turn black if face water scarcity at this stage. <br/>
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
                                            Until when you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.<br/>
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
    </>;
}