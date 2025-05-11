import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";
import TabLink from "@/components/pages/tab-link";

const plant = {
    name: "Cucumber",
    plural: "Cucumbers",
    singular: "Cucumber",
    other_name: ["Cucumber", "खीरा", "Kheera", "Kakdi", "Vellarikkai", "Kakara"],
    path: "/how-to-grow/cucumber",
    datePublished: "2025-05-05 09:00:00 AM",
    dateModified: "2025-05-05 09:00:00 AM",
    cover: "/assets/plants/vegetable/cucumber/c1.webp",
    search: `Cucumber, खीरा, Kheera, Kakdi, Vellarikkai, Kakara, Cucumbers`, // used for search algorithm
    images: [
        {src: "/assets/plants/vegetable/cucumber/c0.jpg", alt: `How to Grow Cucumbers: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/cucumber/c1.webp", alt: `How to Grow Cucumbers: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/cucumber/c2.webp", alt: `How to Grow Cucumbers: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/cucumber/c3.webp", alt: `How to Grow Cucumbers: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
    ],
    seo: {
        images: [ // for structured markup - article
            "/assets/plants/vegetable/cucumber/c0.jpg",
            "/assets/plants/vegetable/cucumber/c1.webp",
            "/assets/plants/vegetable/cucumber/c2.webp",
            "/assets/plants/vegetable/cucumber/c3.webp"
        ],
        title: `How to Grow Cucumbers: Complete Guide & Care - ${app.name}`,
        description: `A full guide on growing cucumbers at home and garden. Learn about benefits, nutritional value, ecological impact, fertilisers and more only on ${app.name}.`,
        keywords: ["grow cucumber", "grow cucumbers", "how to grow cucumbers", "cucumber growing tips", "cucumber nutrition", "health benefits of cucumbers", "organic cucumber farming", "grow cucumbers at home", "cucumber planting guide", "cucumber uses", "cucumber seeds guide",
            "NPK for cucumbers", "eco-friendly cucumber farming", "Ayurvedic benefits of cucumbers", "medicinal uses of cucumbers", "cucumber diseases and cures", ...app.meta.keywords],
        thumbnail: `${app.url}/assets/og/how-to-grow/cucumber.png`,
    },
    hero: {
        heading: "Cucumbers (खीरा)",
        sub_heading: "Cucumis sativus L., Vegetable (Fruit)",
        eco_badge: {
            score: 4,
            information: "Cucumbers are mostly eco-friendly when grown in appropriate conditions. They have moderate water needs and with proper mulching, irrigation, and organic practices, they can thrive with less water. Growing cucumbers vertically maximizes space and improves air circulation, reducing fungal disease issues."
        },
        about_quick_list: [ // keep it to max 3
            "One of the most rewarding vegetables to grow",
            "Fruiting within 45 to 60 days after planting",
            "Highly suitable for hydroponic cultivation"
        ],
        snippet: <>
            Cucumbers are one of the most rewarding vegetables to grow in home gardens across India, offering crisp, refreshing produce with minimal effort. <br/>
            Low in calories but high in water content, cucumbers are nutritionally valuable and offer numerous health benefits including hydration support and weight management. <br/>
            In Ayurvedic medicine, cucumber (known as Trapusha) is considered cooling and is used to treat conditions like difficulty in urination, excessive thirst, headaches, and insomnia. <br/>
            Whether you&apos;re a beginner or an experienced gardener, cucumbers are rewarding to cultivate at home with minimal effort and thrive in India&apos;s diverse climate conditions.
        </>,
        growing_condition: [
            {name: 'Temperature', value: "24°C - 30°C"},
            {name: 'pH', value: '6.0 - 7.5'},
            {name: 'Fruiting', value: '45 to 60 days'}
        ],
        more_info: {
            heading: "Soil Conditions: ",
            items: [
                "Soil type: Well-drained sandy loam rich in organic matter",
                "Ensure good drainage to prevent waterlogging, especially during monsoon season."
            ]
        }
    },
    share: {
        text: "Learn how to grow cucumbers at home",
        subject: "Learn how to grow cucumbers at home",
        tags: "#grow #cucumbers #garden #plant"
    },
    tabs: {
        good_to_know: {
            heading: `Cucumbers grow well in pots, raised beds, or directly in the ground. Choose a sunny location receiving at least 6 hours of direct sunlight. Vertical growing promotes better air circulation and prevents soil-borne diseases.`,
            health_benefits: [
                {
                    heading: "Weight Management",
                    detail: `With high water content, low calories, and good fiber, cucumbers help promote satiety while supporting weight management efforts.`,
                    source: {
                        link: "https://pubmed.ncbi.nlm.nih.gov/30627212/",
                        title: "PubMed"
                    }
                },
                {
                    heading: "Hydration Support",
                    detail: `Consisting of 95% water and rich in electrolytes, cucumbers help prevent dehydration, especially valuable during India's hot summers.`,
                    source: {
                        link: "https://www.healthline.com/nutrition/7-health-benefits-of-cucumber",
                        title: "Healthline"
                    }
                },
                {
                    heading: "Cancer Prevention Potential",
                    detail: `Contain antioxidants called cucurbitacins with anti-cancerous properties that may interfere with the growth of cancerous and pre-cancerous cells.`,
                    source: {
                        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3834722/",
                        title: "NCBI"
                    }
                },
                {
                    heading: "Cardiovascular Health",
                    detail: `The fibers and antioxidants in cucumbers promote fat burning, particularly reducing triglycerides and LDL cholesterol, which helps prevent diseases like atherosclerosis and heart attacks.`,
                    source: {
                        link: "https://www.medicalnewstoday.com/articles/283006",
                        title: "Medical News Today"
                    }
                },
                {
                    heading: "Blood Pressure Regulation",
                    detail: `High water content plus significant magnesium and potassium help reduce blood pressure by promoting vasodilation and flushing excess sodium through urine.`,
                    source: {
                        link: "https://www.webmd.com/diet/health-benefits-cucumber",
                        title: "WebMD"
                    }
                },
                {
                    heading: "Diabetes Management",
                    detail: `Cucumbers contain compounds that help regulate blood sugar levels, making them beneficial for people with diabetes.`,
                    source: {
                        link: "https://www.medicalnewstoday.com/articles/283006",
                        title: "Medical News Today"
                    }
                }
            ],
            right_section: {
                heading: "Risks and Things to Consider",
                information: <>Cucumbers are generally safe for consumption, but there are some considerations to keep in mind:
                    <span className="text-2xs">Source: <Link href="https://www.healthline.com/nutrition/cucumber-benefits" target="_blank" className="green-link">Healthline</Link></span>
                </>,
                content: <>
                    <ul className="list-disc text-sm mt-[23px]">
                        <li>May cause digestive discomfort in some individuals if consumed in large quantities</li>
                        <li>Those with cucumber allergies should avoid cultivation and consumption</li>
                        <li>Prone to certain pests and diseases in humid conditions</li>
                        <li>Regular monitoring is required during India&#39;s monsoon season to prevent fungal issues</li>
                    </ul>
                </>,
                footer_info: <>
                    As with other fresh produce, raw cucumbers can have germs that cause foodborne illnesses. 
                    Always wash cucumbers thoroughly before consumption, especially if you&#39;re growing them organically.
                </>
            },
            nutrition: {
                top: <>One whole raw cucumber (100g) provides the following nutrients: <span className="text-2xs">Source: <Link href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/168409/nutrients" target="_blank" className="green-link">USDA</Link></span></>,
                list: [
                    {name: "Calories", value: "14 kcal"},
                    {name: "Protein", value: "1g"},
                    {name: "Carbohydrates", value: "1.2g"},
                    {name: "Fat", value: "0.6g"},
                    {name: "Fiber", value: "0.7g (NSP)"},
                ],
                bottom: <>Cucumbers also contain folic acid and Vitamin A (carotene) in the skin, making them nutritionally valuable despite their low calorie content.</>
            },
            ayurvedic_info: {
                heading: "Ayurvedic/Medicinal Information",
                content: <>
                    In Ayurvedic medicine, cucumber (known as Trapusha) is considered cooling and is used to treat conditions like difficulty in urination, excessive thirst, headaches, and insomnia. It has pitta-pacifying properties and is recommended for liver conditions. Modern Ayurvedic practitioners note its potential in supporting liver cancer treatments.
                </>
            },
            ecological_effects: [
                {
                    icon: <GiWaterDrop className="text-teal-400 -mt-2 mr-2" size={30}/>,
                    title: "Water Efficiency",
                    description: "Cucumber cultivation is relatively water-efficient, producing 1 kg of cucumber from just 30-35 liters of water."
                },
                {
                    icon: <GiFarmTractor className="text-orange-400 -mt-2 mr-2" size={30}/>,
                    title: "Protected Cultivation",
                    description: "Can be grown in various protected structures, reducing the need for pesticides and optimizing resource use."
                },
                {
                    icon: <GiPlantRoots className="text-emerald-400 -mt-2 mr-2" size={30}/>,
                    title: "Soil Health Support",
                    description: "Rotation with cucumbers can help break pest and disease cycles in garden soil."
                },
                {
                    icon: <GiBee className="text-yellow-400 -mt-2 mr-2" size={30}/>,
                    title: "Biodiversity Support",
                    description: "Flowering cucumber plants attract pollinators when grown outdoors, enhancing garden biodiversity."
                },
                {
                    icon: <GiFootprint className="text-rose-400 -mt-2 mr-2" size={30}/>,
                    title: "Efficient Space Utilization",
                    description: "Vertical growing methods maximize space and improve air circulation, reducing fungal disease issues."
                }
            ]
        },
        how_to_grow: [
            {
                heading: "Step 1: Seed Selection and Preparation (Day 1)",
                steps: [
                    <><strong>Varieties: </strong> Japanese Long Green, Straight Eight, Poinsettee, or hybrids like KPCH 2 and Pant C 2</>,
                    <><strong>Protected Cultivation: </strong> Consider parthenocarpic varieties like Terminator, Y-225, Fadia, Multistar, Kingstar, Kafea, or Gurka</>,
                    "Treat seeds with Trichoderma viride (4 g/kg) or Pseudomonas fluorescens (10 g/kg) or Carbendazim (2 g/kg) to prevent soil-borne diseases",
                    "Key Info: Select appropriate varieties for your specific growing conditions and climate zone"
                ]
            },
            {
                heading: "Step 2: Soil Preparation (Days 2-3)",
                steps: [
                    "Choose a sunny location receiving at least 6 hours of direct sunlight",
                    "For container gardening, use a mix of garden soil, compost, and cocopeat in equal proportions",
                    "Ensure the soil pH is between 6.0-7.5, ideal for cucumber growth",
                    "Add generous organic matter like well-rotted farmyard manure",
                    "Create raised beds or mounds if growing during monsoon season to prevent waterlogging"
                ]
            },
            {
                heading: "Step 3: Sowing (Day 4)",
                steps: [
                    "For field planting: Create channels 1.5 m apart and sow seeds on one side of the channel with 0.6 m spacing between hills",
                    "For container growing: Use minimum 12-inch deep containers and plant 2-3 seeds per container",
                    "Sow seeds about 1 inch deep in the soil",
                    "Water thoroughly but gently after sowing to avoid seed displacement"
                ]
            },
            {
                heading: "Step 4: Early Growth (Days 5-14)",
                steps: [
                    "Keep soil consistently moist but not waterlogged",
                    "When seedlings emerge, ensure they receive adequate sunlight",
                    "Thin seedlings to two per hill at 15 days after planting in field cultivation",
                    "For container growing, retain the strongest seedling and remove others"
                ]
            },
            {
                heading: "Step 5: Training and Support (Days 15-30)",
                steps: [
                    "Install trellises, stakes, or other vertical supports when plants develop 3-4 true leaves",
                    "Guide young vines to climb the support structure",
                    "Vertical growing promotes better air circulation and prevents soil-borne diseases",
                    "Ensure supports are sturdy enough to hold the weight of mature plants with fruits"
                ]
            },
            {
                heading: "Step 6: Fertilizing (Days 30-45)",
                steps: [
                    "Apply 35 kg of N/ha at 30 days after sowing for field cultivation",
                    "For home gardens, apply balanced organic fertilizer or compost tea every 2 weeks",
                    "Consider Azospirillum and Phosphobacteria (2 kg/ha) and Pseudomonas (2.5 kg/ha) along with FYM and neem cake for organic cultivation",
                    "Avoid over-fertilizing, which can lead to excessive foliage at the expense of fruit production"
                ]
            },
            {
                heading: "Step 7: Maintenance and Care (Throughout growth cycle)",
                steps: [
                    "Irrigate once a week, more frequently during dry periods",
                    "For container growing, water when the top inch of soil feels dry",
                    "Mulch around plants with straw or dry leaves to conserve moisture and prevent weed growth",
                    "Monitor for pests like cucumber beetles, aphids, and spider mites",
                    "Check for powdery mildew and downy mildew, especially during humid conditions"
                ]
            },
            {
                heading: "Step 8: Harvesting (Days 45-60)",
                steps: [
                    "Harvest cucumbers when they reach desired size but before they turn yellow",
                    "For slicing varieties, harvest when they're 6-8 inches long",
                    "For pickling varieties, harvest when they're 2-4 inches long",
                    "Harvest in the morning when temperatures are cooler",
                    "Cut rather than pull fruits to avoid damaging vines",
                    "Regular harvesting encourages continued production"
                ]
            },
            {
                heading: "Continue",
                title: <>Along with these steps and stages, there are a few things you need to perform throughout the process to grow cucumbers, each thing will take only 20-30 minutes a week of your time. <br/>
                    Please see the related section for more information on each step, tips, and homemade recipes for fertilizers and plant care. <br/>
                    Perform these steps every 2-3 weeks after the plants start flowering.
                </>,
                steps: [
                    <><TabLink tab="process" section="watering">Watering</TabLink>: Consistent moisture is crucial for cucumber development</>,
                    <><TabLink tab="process" section="fertilizer_requirements">Fertilizing</TabLink>: Apply balanced nutrients to support growth and fruiting</>,
                    <><TabLink tab="process" section="diseases">Pest and Disease Management</TabLink>: Regular monitoring and preventive measures</>,
                    <><TabLink tab="process" section="pruning">Pruning</TabLink>: Remove yellowing leaves and manage vine growth</>,
                    <><TabLink tab="process" section="harvesting">Harvesting</TabLink>: Pick regularly to encourage continued production</>
                ]
            }
        ],
        process: {
            quick_info: `Cucumbers are one of the most rewarding vegetables to grow in home gardens across India, offering crisp, refreshing produce with minimal effort. This comprehensive guide provides everything Indian home gardeners need to know about growing cucumbers successfully, from planting to harvest.`,
            quick_points: [
                "Cucumbers need at least 6 hours of direct sunlight daily",
                "Consistent moisture is crucial for cucumber development",
                "Vertical growing improves air circulation and prevents disease",
                "Regular harvesting encourages continued production",
                "Ideal temperature range: 24-30°C (75-85°F)",
                "Fruiting period: 45-60 days after planting"
            ],
            nutritional_requirements: [
                {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                {name: "Aids in root development and flowering", value: "P (Phosphorus)"},
                {name: "Critical for fruit development", value: "K (Potassium)"},
                {name: "Strengthens cell walls", value: "Ca (Calcium)"},
                {name: "Supports photosynthesis", value: "Mg (Magnesium)"},
            ],
            seeding_process: <>Cucumber seeds need consistent moisture to germinate properly. <br/>
                The seed coat absorbs water, swells, and cracks, allowing the embryo to emerge and begin growing. <br/>
                Not enough moisture and the seeds won&#39;t sprout; too much water can cause the seedlings to rot. <br/>
                <strong>Testing moisture -</strong> The seeding soil should retain its shape when squeezed tightly, yet should not drip water when pressed.
            </>,
            more_info: [
                {
                    heading: "Seed Selection",
                    info: "Choose high-quality seeds appropriate for your climate and growing conditions."
                },
                {
                    heading: "Sowing",
                    info: "Sow seeds about 1 inch deep in warm soil after all danger of frost has passed."
                },
                {
                    heading: "Temperature",
                    info: "Seeds germinate best at 24-30°C (75-85°F)."
                },
                {
                    heading: "Spacing",
                    info: "Space plants 45-60 cm apart to allow for proper air circulation."
                },
                {
                    heading: "Environment",
                    info: "Choose a sunny location with good air circulation to prevent fungal diseases."
                },
                {
                    heading: "Tips",
                    info: "Avoid overwatering as it can lead to root rot. Seedlings should be hardened off before transplanting outdoors."
                },
                {
                    heading: "Time to Seed",
                    info: "Germination takes 3-7 days. Once seedlings develop 2-3 true leaves, they are ready for transplanting."
                },
                {
                    heading: "Note",
                    info: "The initial soil mix plays a very important role in seed germination. The soil needs to be light and rich in nutrients. Use soil + compost at the bottom and coco peat at the top."
                },
                {
                    heading: "Planting Seasons in India",
                    info: "Main Season: June (with monsoon onset); Secondary Season: January to April; Protected Cultivation: Year-round possibility with appropriate structures."
                }
            ],
            germination_stage: [
                { heading: "Radicle Emergence", info: "Within 2-3 days, the first root appears." },
                { heading: "Shoot Development", info: "Cotyledons (seed leaves) emerge after 3-5 days." },
                { heading: "True Leaves", info: "Typically appear by day 7-10. This is when seedlings should receive adequate sunlight." }
            ],
            month_by_month: [
                {
                    heading: "Month 1: Preparation and Planting",
                    info: "Week 1: Soil preparation, compost addition; Week 2: Seed treatment and sowing; Week 3: Seedling emergence, monitoring moisture; Week 4: Thinning seedlings, initial pest monitoring."
                },
                {
                    heading: "Month 2: Growth and Care",
                    info: "Week 1: Training vines on supports, applying first side dressing of nitrogen; Week 2: Regular watering, monitoring for flowering; Week 3: Continued training of vines, pest management; Week 4: Flower formation, pollination (for open-pollinated varieties)."
                },
                {
                    heading: "Month 3: Fruiting and Harvest",
                    info: "Week 1: Beginning of fruit formation; Week 2: Early harvest of pickling varieties if grown; Week 3: Main harvest begins for slicing varieties; Week 4: Peak harvest period, continuous picking to encourage production."
                }
            ],
            what_affect_quality: [
                { heading: "Sunlight", info: "Adequate sunlight ensures proper development and flavor." },
                { heading: "Watering", info: "Consistent moisture prevents bitterness and improves texture." },
                { heading: "Soil Nutrients", info: "Balanced nutrients, especially potassium, improve flavor and texture." }
            ],
            watering: {
                heading: "Watering Requirements",
                info: [
                    "Cucumbers need consistent moisture due to their high water content",
                    "Water deeply once or twice a week rather than frequent shallow watering",
                    "For container growing, water when the top inch of soil feels dry",
                    "Mulch around plants to conserve moisture and prevent weed growth",
                    "Avoid overhead watering to prevent fungal diseases; use drip irrigation if possible",
                    "Increase watering frequency during flowering and fruiting stages"
                ]
            },
            watering_schedule: [
                {
                    heading: "Early Stage",
                    info: "Water moderately, keeping soil consistently moist but not waterlogged."
                },
                {
                    heading: "Flowering & Fruiting",
                    info: "Increase watering during flowering and fruiting stages to ensure consistent moisture."
                },
                {
                    heading: "Hot Weather",
                    info: "During hot weather, water more frequently to prevent stress and bitter fruits."
                },
                {
                    heading: "Excess Watering",
                    info: "Overwatering can lead to root rot and fungal diseases. Ensure good drainage."
                }
            ],
            weeding_caring: [
                { heading: "Remove weeds regularly", info: "Weeds compete for nutrients and can harbor pests and diseases." },
                { heading: "Prune excess foliage", info: "Remove yellowing leaves and thin out dense growth to improve air circulation." },
                { heading: "Train vines", info: "Guide vines onto supports to keep fruits off the ground and prevent disease." },
            ],
            good_for_cultivation: [
                "Cucumbers are ready for harvest when they reach the desired size but before they turn yellow. For slicing varieties, harvest when they're 6-8 inches long. For pickling varieties, harvest when they're 2-4 inches long."
            ],
            tips: [
                "Water deeply but infrequently, ensuring the soil remains moist but not waterlogged.",
                "Harvest regularly to encourage continued production.",
                "Grow vertically to save space and improve air circulation.",
                "Companion plants such as marigolds, nasturtiums, or radishes can help repel common pests.",
                "Apply mulch around plants to conserve moisture and prevent weed growth.",
                "Avoid overhead watering to prevent fungal diseases; use drip irrigation if possible.",
                "Regularly inspect for pests and diseases, and use organic or biological controls to manage outbreaks early.",
                "Plant in succession every 2-3 weeks for continuous harvest throughout the growing season.",
                "Cucumbers grow best when temperatures range between 24-30°C (75-85°F).",
                "During monsoon season, focus on drainage and fungal disease prevention.",
                "Protected cultivation can extend growing seasons and improve yields.",
                "Choose varieties suited to your specific region in India."
            ],
            fertilizer_requirements: {
                organic: [
                    "Apply well-rotted farmyard manure (40 t/ha) as basal dressing",
                    "Use compost or vermicompost to enrich soil before planting",
                    "Apply neem cake (100 kg/ha) before last plowing to deter pests",
                    "Consider biofertilizers like Azospirillum and Phosphobacteria (2 kg/ha)",
                    "Compost tea can be applied every 2-3 weeks during growing season"
                ],
                chemical: [
                    "For field cultivation: Apply NPK at 150:75:75 kg/ha",
                    "Apply 75% of phosphorus as basal dose",
                    "Apply 35 kg of N/ha at 30 days after sowing",
                    "For container growing: Use balanced water-soluble fertilizer (NPK 20:20:20) every 2-3 weeks",
                    "Reduce nitrogen application once fruiting begins to prevent excessive foliage growth"
                ],
                how_to: [
                    "Mix compost into soil before planting",
                    "Apply liquid fertilizer around root zone every 2 weeks",
                    "Top-dress with vermicompost or wood ash during fruiting"
                ],
                tips: []
            },
            harvesting: {
                heading: "Harvesting Cucumbers",
                info: [
                    "Harvest cucumbers when they reach desired size but before they turn yellow",
                    "For slicing varieties, harvest when they're 6-8 inches long",
                    "For pickling varieties, harvest when they're 2-4 inches long",
                    "Harvest in the morning when temperatures are cooler",
                    "Cut rather than pull fruits to avoid damaging vines",
                    "Regular harvesting encourages continued production",
                    "Harvest every 2-3 days during peak production"
                ]
            },
            pruning: {
                heading: "Pruning and Training",
                info: [
                    "Train vines to grow vertically on supports",
                    "Remove yellowing or diseased leaves promptly",
                    "Pinch off side shoots if growing in limited space",
                    "For indeterminate varieties, prune to maintain air circulation",
                    "Remove any fruits that show signs of disease or damage",
                    "Avoid heavy pruning during hot weather to prevent stress"
                ]
            },
            diseases: [
                {
                    heading: "Powdery Mildew",
                    info: [
                        { label: "Sign", detail: "White powdery substance on leaves" },
                        { label: "Cause", detail: "Fungal infection, common in humid conditions" },
                        { label: "Prevention", detail: "Ensure good air circulation, avoid overhead watering" },
                        { label: "Cure", detail: "Spray sulfur-based fungicides or baking soda solution (1 tbsp in 1 liter water with few drops of soap)" }
                    ]
                },
                {
                    heading: "Downy Mildew",
                    info: [
                        { label: "Sign", detail: "Yellow spots on leaf upper surface, gray fuzz underneath" },
                        { label: "Cause", detail: "Fungal infection, spreads in cool, wet conditions" },
                        { label: "Prevention", detail: "Improve air circulation, avoid overhead watering" },
                        { label: "Cure", detail: "Copper-based fungicides, remove affected leaves" }
                    ]
                },
                {
                    heading: "Cucumber Beetles",
                    info: [
                        { label: "Sign", detail: "Small striped or spotted beetles feeding on leaves and stems" },
                        { label: "Cause", detail: "Insect pest that can also spread bacterial wilt" },
                        { label: "Prevention", detail: "Use row covers until flowering, practice crop rotation" },
                        { label: "Cure", detail: "Apply diatomaceous earth around plants, use neem oil spray" }
                    ]
                },
                {
                    heading: "Aphids",
                    info: [
                        { label: "Sign", detail: "Small green or black insects clustering on new growth" },
                        { label: "Cause", detail: "Sap-sucking insects that can spread viral diseases" },
                        { label: "Prevention", detail: "Encourage beneficial insects, use reflective mulch" },
                        { label: "Cure", detail: "Spray neem oil solution or soapy water, use strong water spray to dislodge" }
                    ]
                },
                {
                    heading: "Bacterial Wilt",
                    info: [
                        { label: "Sign", detail: "Sudden wilting despite adequate moisture" },
                        { label: "Cause", detail: "Bacterial infection spread by cucumber beetles" },
                        { label: "Prevention", detail: "Control cucumber beetles, practice crop rotation" },
                        { label: "Cure", detail: "No cure; remove infected plants, practice crop rotation for at least 2 years" }
                    ]
                }
            ]
        }
    }
};

export default plant;
