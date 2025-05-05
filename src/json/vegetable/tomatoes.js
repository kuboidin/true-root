import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";
import TabLink from "@/components/pages/tab-link";

const plant = {
    name: "Tomatoes",
    plural: "Tomatoes",
    singular: "Tomato",
    other_name: ["Tomato", "टमाटर"],
    path: "/how-to-grow/tomatoes",
    datePublished: "2024-10-10 09:00:00 AM",
    dateModified: "2024-10-10 09:00:00 AM",
    cover: "/assets/plants/vegetable/tomato/t4.webp",
    search: `Tomato, टमाटर, Tomatoes`, // used for search algorithm
    images: [
        {src: "/assets/plants/vegetable/tomato/t3.jpeg", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/tomato/t1.webp", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/tomato/t2.jpg", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/tomato/t4.webp", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
    ],
    seo: {
        images: [ // for structured markup - article
            "/assets/plants/vegetable/tomato/t3.jpeg",
            "/assets/plants/vegetable/tomato/t1.webp",
            "/assets/plants/vegetable/tomato/t2.jpg",
            "/assets/plants/vegetable/tomato/t4.webp"
        ],
        title: `How to Grow Tomatoes: Complete Guide & Care - ${app.name}`,
        description: `A full guide on growing tomatoes at home and garden. Learn about benefits, nutritional value, ecological impact, fertilisers and more only on ${app.name}.`,
        keywords: ["grow tomato", "grow tomatoes", "how to grow tomatoes", "tomato growing tips", "tomato nutrition", "health benefits of tomatoes", "organic tomato farming", "grow tomatoes at home", "tomato planting guide", "tomato uses", "tomato seeds guide",
            "NPK for tomatoes", "eco-friendly tomato farming", "Ayurvedic benefits of tomatoes", "medicinal uses of tomatoes", "tomato diseases and cures", ...app.meta.keywords],
        thumbnail: `${app.url}/assets/og/how-to-grow/tomato.png`,
    },
    hero: {
        heading: "Tomatoes (टमाटर)",
        sub_heading: "Solanum lycopersicum, Vegetable (Fruit)",
        eco_badge: {
            score: 4,
            information: "Tomatoes are relatively eco-friendly when grown in appropriate conditions. They have moderate water needs and, with proper mulching, irrigation, and organic practices, they can thrive with less water. Growing tomatoes locally and organically reduces the carbon footprint."
        },
        about_quick_list: [ // keep it to max 3
            "One of the easiest vegetables to grow",
            "Fruiting within 60 to 85 days (depending on variety)",
            "Highly suitable for hydroponic cultivation"
        ],
        snippet: <>
            Tomatoes are nutrient-packed and easy to grow, making them perfect for gardens, balconies, or even indoors. <br/>
            Rich in vitamins A and C, and loaded with lycopene, tomatoes offer numerous health benefits, including antioxidant properties that support heart health and may reduce cancer risks. <br/>
            Versatile in the kitchen, tomatoes enhance everything from fresh salads to hearty sauces. <br/>
            In Ayurveda, they balance digestion and improve skin vitality. <br/>
            Whether you&apos;re a beginner or an experienced gardener, tomatoes are rewarding to cultivate at home with minimal effort.
        </>,
        growing_condition: [
            {name: 'Temperature', value: "18°C - 30°C"},
            {name: 'pH', value: '6.0 - 6.8'},
            {name: 'Fruiting', value: '60 to 85 days'}
        ],
        more_info: {
            heading: "Soil Conditions: ",
            items: [
                "Soil type: Well-drained loamy or sandy soil",
                "Soil must be rich in organic matter, with good aeration and drainage to avoid water logging."
            ]
        }
    },
    share: {
        text: "Learn how to grow tomatoes at home",
        subject: "Learn how to grow tomatoes at home",
        tags: "#grow #tomatoes #garden #plant"
    },
    tabs: {
        good_to_know: {
            heading: `Tomatoes grow well in pots, raised beds, or directly in the ground. Choose a sunny spot with at least 6-8 hours of sunlight daily. Ensure proper spacing between plants (45-60 cm apart) to allow air circulation and prevent fungal infections.`,
            health_benefits: [
                {
                    heading: "Heart Health",
                    detail: `Tomatoes are rich in potassium and lycopene, which are known to reduce blood pressure and lower the risk of heart disease by improving circulation and reducing inflammation`,
                    source: {
                        link: "https://pubmed.ncbi.nlm.nih.gov/12587984/",
                        title: "PubMed"
                    }
                },
                {
                    heading: "Cancer Prevention",
                    detail: `The antioxidant properties of lycopene may help reduce the risk of several cancers, including prostate, lung, and stomach cancers.`,
                    source: {
                        link: "https://newsroom.osfhealthcare.org/cancer-fighting-power-of-tomatoes/#:~:text=Tomatoes%20contain%20phytochemicals%2C%20like%20lycopene,on%20an%20overall%20healthy%20diet",
                        title: "OSF Healthcare"
                    }
                },
                {
                    heading: "Skin Protection",
                    detail: `Vitamin C and lycopene in tomatoes help protect the skin against UV damage, reduce wrinkles, and improve skin elasticity.`,
                    source: {
                        link: "https://www.healthline.com/health/tomato-benefits-for-skin#potential-benefits",
                        title: "Healthline"
                    }
                },
                {
                    heading: "Eye Health",
                    detail: `Rich in vitamin A, tomatoes support vision, prevent night blindness, and protect against macular degeneration.`,
                    source: {
                        link: "https://www.webmd.com/food-recipes/ss/slideshow-tomato-health-benefits",
                        title: "WebMD"
                    }
                },
                {
                    heading: "Improved Digestion",
                    detail: `The fiber in tomatoes aids digestion, prevents constipation and maintains a healthy gut flora.`,
                    source: {
                        link: "https://www.medanta.org/patient-education-blog/researchers-have-discovered-that-tomatoes-are-healthy-for-gut-bacteria#:~:text=Additionally%2C%20tomatoes%20contain%20vitamins%2C%20minerals,promote%20a%20healthy%20digestive%20system.",
                        title: "Medanta"
                    }
                },
                {
                    heading: "Improved Digestion",
                    detail: `Tomatoes contain vitamin K and calcium, both crucial for maintaining bone density and preventing osteoporosis.`,
                    source: {
                        link: "https://www.health.com/nutrition/health-benefits-tomatoes",
                        title: "Health.com"
                    }
                },
                {
                    heading: "Hypertension",
                    detail: `Some studies have found that eating tomatoes may help prevent and manage hypertension. One study found that people who ate more than 110 grams of tomatoes per day had a lower risk of hypertension.`,
                    source: {
                        link: "https://academic.oup.com/eurjpc/article/31/8/922/7450162",
                        title: "Oxford Academic"
                    }
                }
            ],
            right_section: {
                heading: "Risks and Things to Consider",
                information: <>Make sure that you thoroughly wash or cook raw tomatoes before consuming them. As with other fresh produce, raw tomatoes can have germs that cause foodborne illnesses like Listeria and Salmonella. Foodborne illness is a greater concern for those who:
                    <span className="text-2xs">Source: <Link href="https://academic.oup.com/eurjpc/article/31/8/922/7450162" target="_blank" className="green-link">Oxford Academic</Link></span>
                </>,
                content: <>
                    <ul className="list-disc text-sm mt-[23px]">
                        <li>Are aged 65 and older or 5 and younger</li>
                        <li>Are pregnant</li>
                        <li>Have underlying health concerns (e.g., cancer, diabetes, and liver and kidney disease)</li>
                        <li>Take medications that lower the body&apos;s ability to fight germs and illness</li>
                    </ul>
                </>,
                footer_info: <>
                    Tomatoes may also worsen existing conditions like gastroesophageal reflux (GERD) and chronic migraine.
                    Talk with a healthcare provider to determine if you need to avoid tomatoes.
                </>
            },
            nutrition: {
                top: <>One whole raw tomato provides the following nutrients: <span className="text-2xs">Source: <Link href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/1103276/nutrients" target="_blank" className="green-link">USDA</Link></span></>,
                list: [
                    {name: "Calories", value: "22.5"},
                    {name: "Fat", value: "0.25g"},
                    {name: "Sodium", value: "6.25mg"},
                    {name: "Carbohydrates", value: "4.86g"},
                    {name: "Fiber", value: "1.5g"},
                    {name: "Protein", value: "1.1g"},
                ],
                bottom: <>Whole, fresh tomatoes are also a source of several micronutrients, including Folate, Potassium, Vitamin C, and Vitamin K.</>
            },
            ecological_effects: [
                {
                    icon: <GiBee className="text-yellow-400 -mt-2 mr-2" size={30}/>,
                    title: "Biodiversity Support",
                    description: "Tomatoes attract pollinators such as bees, which enhance overall garden health."
                },
                {
                    icon: <GiPlantRoots className="text-emerald-400 -mt-2 mr-2" size={30}/>,
                    title: "Soil Health",
                    description: "Tomatoes are ideal for crop rotation and companion planting, particularly with legumes, as they can improve soil nitrogen levels."
                },
                {
                    icon: <GiFarmTractor className="text-orange-400 -mt-2 mr-2" size={30}/>,
                    title: "Sustainable Farming",
                    description: "When grown organically, tomatoes reduce the need for harmful pesticides and synthetic fertilizers, contributing to healthier ecosystems."
                },
                {
                    icon: <GiWaterDrop className="text-teal-400 -mt-2 mr-2" size={30}/>,
                    title: "Water Usage",
                    description: "While tomatoes require regular watering, efficient irrigation practices such as drip irrigation significantly reduce water waste, making them sustainable in water-limited regions."
                },
                {
                    icon: <GiFootprint className="text-rose-400 -mt-2 mr-2" size={30}/>,
                    title: "Carbon Sequestration",
                    description: "Homegrown tomatoes reduce food miles, thus lowering the carbon footprint associated with transportation and storage."
                }
            ]
        },
        how_to_grow: [
            {
                heading: "Step 1: Choose the Right Variety to grow tomatoes",
                steps: [
                    <><strong>Determinate: </strong> Stay short, Dwarf, Good for pots and balcony</>,
                    <><strong>Indeterminate: </strong> Keep on growing until they die, Good for Gardens</>,
                    "Opt for compact or determinate varieties like ‘Patio’ or ‘Cherry Tomatoes’ if growing in pots or grow bags.",
                    "Key Info: Dwarf varieties perform better in containers due to their smaller size and faster fruiting."
                ]
            },
            {
                heading: "Step 2: Prepare the seedling tray (Recommended for beginners)",
                steps: [
                    "Seeding soil is different, it should be light, airy, free of debris, neutral pH, and hold moisture.",
                    <><strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the seeding tray has drainage holes.</>,
                    <><strong>Tip: </strong> Soil + Compost + Coco peat (Coco peat helps retain moisture for longer, if you do not have Coco peat it&apos;s Okay, just maintain the proper moisture).</>,
                    <><strong>Tip: </strong> See the <TabLink section="Seeding Process">Seeding process</TabLink> on this page for tips and things to care about.</>
                ]
            },
            {
                heading: "Day 0: Seeding",
                steps: [
                    "Sow seeds at 0.5 - 2.5 cm depth, just cover them with a thin layer of coco peat, compost, or soil and water them.",
                    "If you are a beginner then use a seedling tray, seedling tray helps for easy movement, you can place them under sunlight during moving but move them inside during noon to protect them from harsh heat and so on.",
                    "Keep in low sunlight or inside (not dark) if possible.",
                    <><strong>Tip: </strong> See the <TabLink section="Seeding Process">Seeding process</TabLink> on this page for tips and temperature and environment conditions.</>
                ]
            },
            {
                heading: "Day 7: Sprouting",
                steps: [
                    "The Seed should sprout in a week.",
                    "They need full light from day one of germination.",
                    "Shift them to 1-2 hours of sunlight when you see 2 leaves, at this stage plants start looking for sunlight, if you do not put them in sunlight they will grow weak but longer and in multi-direction in search of sunlight (We don&apos;t want that).",
                    "Seed provides all the required nutrients to support the life of the plant for 2 weeks.",
                    <><strong>Tip: </strong> Do not add any fertilizer of any kind.</>,
                    <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Watering Schedule">watering guide</TabLink> for more information</>
                ]
            },
            {
                heading: "Day 15: First organic fertilizer",
                steps: [
                    "Provide liquid onion peel fertilizer in small dosages.",
                    <>Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, and Magnesium, see the <TabLink section="Nutritional Requirements">nutritional requirement</TabLink> section for more information.</>,
                    "Add bone meal and vermicompost for nutrients.",
                    <><strong>Tip: </strong> Do not use NPK, DAP, or chemical fertilizer at this stage, the plant will not be able to handle and die</>,
                    <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Watering Schedule">watering guide</TabLink> for more information</>
                ]
            },
            {
                heading: "Day 28: Shift to a larger pot (Only if you planted it in the seedling tray)",
                steps: [
                    "From seeding to 1 month, plants are very delicate, do not remove them or shift them, only perform shifting after 4 weeks of seeding. At this stage, seeds should have grown into small plants.",
                    "Use at least a 12-18 inch deep pot or grow bag.",
                    <><strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</>,
                    "Add Neem powder (Neem Khali) to the soil to protect the roots from fungus and other germs.",
                    "When you shift the plants from seedling to ground, grow bags or pots, make sure the roots are not exposed to air. Try not to disturb the roots.",
                    "Be slow and gentle when removing from the seeding tray and planting in the pot or grow bags.",
                    <>If roots are exposed to air or you see no soil with roots or if the plant is weathered (when you borrow from your friend), then <strong>sock the plant&apos;s root in water for 5-7 minutes</strong>. If plants are in very bad condition add 1 spoon of sugar in water and dip plants for 15 minutes. It will revive the plants and stabilize them.</>,
                    "Perform shifting in the evening only and add plenty of water.",
                    "Plants will/might show some stress like leaves withering after shifting, but they will recover soon if you have shifted correctly.",
                    "To shift them in larger pots, put at least 40-50% of the plant stem under the soil, this will help in growing stronger roots.",
                    "After seedlings have grown and become plants, they need at least 5-6 hours of sunlight every day.",
                    <><strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom of the grow bag or pots to improve drainage.</>
                ]
            },
            {
                heading: "Day 40: 2nd dose of fertilizer",
                title: "At this point, plants are bulletproof and the road is going to get easy.",
                steps: [
                    "Add some organic fertilizers like peanuts, banana leaves, or similar fertilizers, and make sure plants are twice the size when shifted, only then provide the liquid fertilizer.",
                    "You can also add seaweed, bone meal, eggshell powder, etc.",
                    "Try to use water-soluble fertilizer at the beginning.",
                    <><strong>Recommendation: </strong> We recommend not to use chemical fertilizers, They are harmful to the environment and you. Things grown organically taste much better and are healthier. But if you must then you can add them at this stage.</>
                ]
            },
            {
                heading: "Day 52: Grooming and caring (Pinching) of tomato plants",
                title: <>10-12 days after 2nd dose of fertilizer, You will see the plants have grown rapidly. Let&apos;s perform Pinching. The act of <strong>pinching</strong> involves the <strong>removal of the growing point of a shoot along with a few leaves</strong>. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers.</>,
                steps: [
                    "Make sure the main stem is thick enough and the plant has grown to twice the height and you see clusters of small growing leaves at the end of stems.",
                    "This will help the plant to stop increasing height and focus on increasing the width and number of stems.",
                    "Try to use water-soluble fertilizer at the beginning.",
                    <><strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</>,
                    <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Nutritional Requirements">watering guide</TabLink> for more information</>
                ]
            },
            {
                heading: "Day 64: Add Support",
                title: "You will see plant has grown dense and bigger",
                steps: [
                    "If your pot or grow bag is smaller, now is the time to shift them into bigger pots or grow bags.",
                    "Remove leaves and small stems near the soil, this will help the plant grow in length and protect it from soil-based diseases.",
                    "Add support at this stage.",
                    <><strong>Important: </strong> If you see that the plant is starting to grow flowers at this time, cut them.
                        This will allow plants to grow further and yield more fruits at a later stage.
                        If you don&apos;t cut them at this time, plant growth will stop and the plant will focus completely on flowers and fruits, this will result in small plants and low tomato yield.
                    </>,
                    <><strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</>,
                    <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information.</>,
                    <><strong>Fertilizer: </strong> Until you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.</>
                ]
            },
            {
                heading: "Day 87: Flowering & Remove Suckers",
                title: <>You might start seeing the flowers at this stage <br/>
                    A <strong>&quot;sucker&quot;</strong> is <strong>an extra shoot or leaves growing between the main stalk of the tomato plant and an established branch, often growing at a 45° angle from the plant</strong>.
                </>,
                steps: [
                    "Clean the small leaves and thin stems up to 5-7 inches from the soil, only keep the thick branches.",
                    "Remove suckers, (Suckers are leaves that are growing between two branches) they take plant&apos;s nutrients and we don&apos;t want them.",
                    <><strong>Important: </strong> If/When you see flowers/fruits, at this time plants need more nutrients than ever.</>,
                    <><strong>Tip: </strong> Remove suckers whenever you see them for a health plant.</>,
                    <><strong>Tip: </strong> Increase the dosage of fertilizer.</>,
                    <><strong>Watering: </strong> When you see fruit, then you must not let the soil dry, tomatoes may turn black if face water scarcity at this stage.</>,
                    <><strong>Fertilizer: </strong> After you see bigger flowers and small fruits, add fertilizers containing micronutrients, such as seaweed (spray), onion peel liquid, and banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, and try not to repeat the same fertilizer.</>
                ]
            },
            {
                heading: "Day 112: Tomatoes will start turning red",
                title: "At this stage, tomatoes will start turning red and within a few days they will be ready to harvest.",
                steps: [
                    <><strong>Tip: </strong> Increase the dosage/frequency of fertilizer</>,
                    <><strong>Watering: </strong> You must not let the soil dry, Water is very important</>,
                    <><strong>Fertilizer: </strong> See the Fertilizer section for homemade and nutrient-rich fertilizers.</>
                ]
            },
            {
                heading: "Day 120: Fruit of hard work",
                title: "Harvest the fruit of your hard work. This is not the end, Tomatoes will keep on provided with minimal watering and care at this time.",
                steps: [
                    <><strong>Tip: </strong> Remove weeds and keep looking for diseases, check the diseases section of how to find and fix the plant diseases.</>,
                    <><strong>Tip: </strong> Keep providing fertilizer every 15-20 days.</>,
                    <><strong>Watering: </strong> You must not let the soil dry, Water is very important.</>,
                    <><strong>Fertilizer: </strong> See the Fertilizer section for homemade and nutrient-rich fertilizers.</>
                ]
            },
            {
                heading: "Continue",
                title: <>Along with these steps and stages, there are a few things you need to perform throughout the process to grow tomatoes, each thing will take only 20-30 minutes a week of your time. <br/>
                    Please see the related section for more information on each step, tips, and homemade recipes for fertilizers and plant care. <br/>
                    Perform these steps every 3 weeks after 40 days of seeding (after shifting).
                </>,
                steps: [
                    <><strong>Watering: </strong> <br/>
                        Until you see the flowers on the plant, you will water them normally i.e. Only water them if the top soil is dry.<br/>
                        If you water excessively, plants might get fungus, and attract more diseases, flowers will wither before time and fruiting will be delayed. <br/>
                        When you see fruit, then you must not let the soil dry, tomatoes may turn black if face water scarcity at this stage. <br/>
                        Check the <TabLink section="Watering Schedule">watering section</TabLink> for more information.
                    </>,
                    <><strong>Weeding & Caring: </strong> <br/>
                        Remove weeds regularly. <br/>
                        Perform Pinching. <br/>
                        Remove Suckers. <br/>
                        Check the <TabLink section="Weeding & Caring">weeding & caring</TabLink> section for more information.
                    </>,
                    <><strong>Fertilizer: </strong> <br/>
                        Until when you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.<br/>
                        After you see bigger flowers and small fruits, add fertilizers containing micronutrients, such as seaweed (spray), onion peel liquid, and banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, and try not to repeat the same fertilizer.<br/>
                        Check the <TabLink section="Fertilizer Requirements">fertilizer section</TabLink> for more information.
                    </>,
                    <><strong>Diseases: </strong> <br/>
                        Plants are prone to diseases, you need to look for signs and take care before they spread or ruin your hard work. <br/>
                        There is very little chance of diseases in a controlled environment. <br/>
                        Check the <TabLink section="Diseases - Know & Treat">diseases section</TabLink> for more information.
                    </>,
                    <><strong>Pollination: </strong> <br/>
                        We believe in harmony, plants grow better with other plants and insects, try not to restrict your garden to birds, insects, bugs, and other organisms. <br/>
                        Birds, and insects not only help in pollination but also improve the positivity of the environment, and help in nutrition circulation. <br/>
                        Birds can eat small bugs and protect plants from diseases for free. <br/>
                        Check the <TabLink section="Diseases - Know & Treat">Flowers Withering (No Pollination) section</TabLink> for more information.
                    </>
                ]
            }
        ],
        process: {
            quick_info: `Tomatoes grow well in pots, raised beds, or directly in the ground.
                        Choose a sunny spot with at least 6-8 hours of sunlight daily.
                        Ensure proper spacing between plants (45-60 cm apart) to allow air circulation and prevent fungal infections.`,
            quick_points: [
                "The Life of a tomato plant is 5-6 months.",
                "Tomatoes can be grown in spring (February), monsoon (July Mid) & Autumn (September end).",
                "Summers are tough on tomatoes, when temperature increases, tomatoes ripen prematurely, and tomatoes cannot grow fully and ripen before time."
            ],
            nutritional_requirements: [
                {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                {name: "Aids in root development and fruiting", value: "P (Phosphorus)"},
                {name: "Improving fruit & flower quality.", value: "K (Potassium)"},
                {name: "Prevents blossom-end rot", value: "Ca (Calcium)"},
                {name: "Photosynthesis and fruit ripening", value: "Mg (Magnesium)"},
            ],
            seeding_process: <>Tomato seeds need water to sprout, infect it&apos;s all they need. <br/>
                The seed coat absorbs the water, swells & cracks, allowing the tiny plant inside to emerge and begin its life. <br/>
                Not enough moisture and the best thing is that the seeds won&apos;t sprout until it&apos;s enough, and worst. The worst thing is that they manage to sprout but quickly perish. <br/>
                Too much water can draw the seedlings.<br/>
                <strong>Testing moisture -</strong> The seeding soil must retain its shape when squeezed tightly, yet it should not drip much water if any at all.
            </>,
            more_info: [
                {
                    heading: "Seed Selection",
                    info: "Choose high-quality heirloom or hybrid seeds for your climate."
                },
                {
                    heading: "Sowing",
                    info: "Sow seeds 0.5 cm - 2.5 cm deep in seed trays or pots indoors, 6-8 weeks before the last frost date."
                },
                {
                    heading: "Temperature",
                    info: "Seeds germinate best at 23-29°C."
                },
                {
                    heading: "Environment",
                    info: "Keep in a warm, sunny spot or use grow lights. Maintain high humidity."
                },
                {
                    heading: "Tips",
                    info: "Avoid over watering as it can lead to damping-off disease. Seedlings should be hardened off before transplanting outdoors."
                },
                {
                    heading: "Time to Seed",
                    info: "Germination takes 5-10 days. Once seedlings develop 2-3 true leaves, they are ready for transplanting."
                },
                {
                    heading: "Note",
                    info: "The initial soil mix plays a very important role in seed germination. The soil needs to be light and rich in nutrients. Use soil + compost at the bottom and coco peat at the top. Coco peat alone is not good as it lacks vital nutrients for growth."
                }
            ],
            germination_stage: [
                { heading: "Radicle Emergence", info: "Within 3-4 days, the first root appears." },
                { heading: "Shoot Development", info: "Leaves begin to sprout after a week." },
                { heading: "True Leaves", info: "Typically appear by day 10. This is a critical phase for ensuring good light exposure and proper moisture." }
            ],
            what_affect_quality: [
                { heading: "Sunlight", info: "More sunlight leads to sweeter tomatoes." },
                { heading: "Watering", info: "Consistent watering prevents flavor dilution." },
                { heading: "Soil Nutrients", info: "Adequate potassium improves flavor. Onion peel fertilizer is rich in potassium." }
            ],
            fertilizer_requirements: {
                organic: [
                    "Use compost, aged manure, bone meal, or worm castings.",
                    "Use seaweed, it contains all the necessary nutrients, good for the early stage of plantation.",
                    "Use onion peel fertilizer - Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, and Magnesium.",
                    "Use banana peel fertilizer - Banana peels contain calcium, which promotes root growth, and helps add oxygen to your soil. Magnesium, which assists with photosynthesis. Sulfur, helps plants develop strong roots and repel pests."
                ],
                chemical: [
                    "A balanced NPK fertilizer such as 10:10:10 at planting, followed by a 5:10:10 fertilizer during flowering and fruiting stages."
                ],
                how_to: [
                    "Until you don't see the small tomatoes, you will have to provide liquid fertilizer every 20 days.",
                    "After bigger flowers and small fruits add other fertilizers containing micronutrients every 15 days.",
                    "keep on changing the type of fertilizers, and try not to the repeat same."
                ],
                tips: [
                    "Please dig and loosen the 6-10 inches of soil around the plant when/before you add fertilizer. Plants thrive in loose soil because air and water can circulate better, and soil life remains healthy. Take care of the roots and try not to damage them.",
                    "Add fertilizer in the evening only."
                ]
            },
            watering_schedule: [
                {
                    heading: "Early Stage",
                    info: "Until you see the flowers on the plant, you will water them normally, i.e., only water them if the top soil is dry."
                },
                {
                    heading: "Flowering & Fruiting",
                    info: "When you see fruit, then you must not let the soil dry; tomatoes may turn black if they face water scarcity at this stage."
                },
                {
                    heading: "Flowering & Fruiting",
                    info: "Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages to prevent blossom end rot."
                },
                {
                    heading: "Excess Watering",
                    info: "If you water excessively, plants might get fungus, attract more diseases, flowers will wither before time, and fruiting will be delayed."
                }
            ],
            diseases: [
                {
                    heading: "Black Flies",
                    info: [
                        { label: "Sign", detail: "Small black insect-sized flies." },
                        { label: "When", detail: "Throughout but mostly at the time of fruiting." },
                        { label: "Treatment", detail: "Neem oil - treat/spray for 2-3 days regularly." },
                        { label: "Note", detail: "You can use Neem oil to treat most germs and pests." }
                    ]
                },
                {
                    heading: "Leaf Curl",
                    info: [
                        { label: "Sign", detail: "You might see that some leaves curled up." },
                        { label: "Treatment", detail: "Remove the whole stem of curled leaves." },
                        { label: "Treatment", detail: "Buttermilk (25%) + Water (75%) - spray on leaves and whole plant." },
                        { label: "Note", detail: "Try to treat them at the very beginning to avoid spread." }
                    ]
                },
                {
                    heading: "Bursting Tomatoes",
                    info: [
                        { label: "Treatment", detail: "Remove the affected tomatoes." },
                        { label: "Treatment", detail: "Raw Milk (25%) + Water (75%) - spray on leaves and whole plant." }
                    ]
                },
                {
                    heading: "Black Tomatoes",
                    info: [
                        { label: "Why", detail: "This happens because of nutrient scarcity and lack of calcium." },
                        { label: "Treatment", detail: "Add proper nutrients and micro nutrient-rich fertilizer specifically calcium." },
                        { label: "Treatment", detail: "Use fertilizer such as eggshell powder, bone meal, wood ash, etc." }
                    ]
                },
                {
                    heading: "Tomatoes Not Ripening",
                    info: [
                        { label: "Why", detail: "Tomatoes need heat to ripen." },
                        { label: "Treatment", detail: "Mustard cake fertilizer liquid - will provide the required heat." },
                        { label: "Treatment", detail: "Maintain proper temperature." }
                    ]
                },
                {
                    heading: "Flowers Withering (No Pollination)",
                    info: [
                        { label: "Why", detail: "Flowers may wither and fall down without turning into fruits due to lack of pollination." },
                        { label: "Treatment", detail: "Manual pollination - gently shake the plant for 1-2 minutes for manual pollination." },
                        { label: "Treatment", detail: "Open the garden or environment for birds, bees, and insects." }
                    ]
                }
            ],
            weeding_caring: [
                { heading: "Remove weeds regularly", info: "" },
                { heading: "Remove Suckers", info: "Suckers are leaves that are growing between two branches they take plant's nutrients and we don't want them." },
                { heading: "Pinching", info: "The act of pinching involves the removal of the growing point of a shoot along with a few leaves. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers." },
            ],
            good_for_cultivation: [
                "Tomatoes are ready for harvest when they have a uniform color and are firm yet yield slightly to pressure. Depending on the variety, fruit can be harvested when fully red (or the designated ripe color for the cultivar)."
            ],
            tips: [
                "Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages to prevent blossom end rot.",
                "Apply a balanced fertilizer every 20 days during the growing season and every 15 days in fruiting season.",
                "Regularly prune and stake plants to promote airflow and prevent fungal diseases.",
                "Companion plants such as marigolds or basil can help repel common pests.",
                "Row covers or insecticidal soaps are effective against aphids and whiteflies.",
                "Tomatoes need at least 6-8 hours of sunlight a day for best growth.",
                "Prune suckers and diseased leaves to ensure proper airflow and focus energy on fruit production.",
                "Regularly inspect for pests and diseases, and use organic or biological controls to manage outbreaks early."
            ]
        }
    }
};

export default plant;
