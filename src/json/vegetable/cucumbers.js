import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";

const plant = {
    name: "Cucumbers",
    plural: "Cucumbers",
    singular: "Cucumber",
    other_name: ["Cucumber", "खीरा", "Kheera"],
    path: "/how-to-grow/cucumbers",
    datePublished: "2024-05-05 09:00:00 AM",
    dateModified: "2024-05-05 09:00:00 AM",
    cover: "/assets/plants/vegetable/cucumber/c1.webp",
    search: `Cucumber, खीरा, Kheera, Cucumbers`, // used for search algorithm
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
        description: `A full guide on growing cucumbers at home and garden in India. Learn about benefits, nutritional value, ecological impact, fertilizers and more only on ${app.name}.`,
        keywords: ["grow cucumber", "grow cucumbers", "how to grow cucumbers", "cucumber growing tips", "cucumber nutrition", "health benefits of cucumbers", "organic cucumber farming", "grow cucumbers at home", "cucumber planting guide", "cucumber uses", "cucumber seeds guide",
            "NPK for cucumbers", "eco-friendly cucumber farming", "Ayurvedic benefits of cucumbers", "medicinal uses of cucumbers", "cucumber diseases and cures", ...app.meta.keywords],
        thumbnail: `${app.url}/assets/og/how-to-grow/cucumber.png`,
    },
    hero: {
        heading: "Cucumbers (खीरा)",
        sub_heading: "Cucumis sativus, Vegetable (Fruit)",
        eco_badge: {
            score: 4,
            information: "Cucumbers are relatively eco-friendly when grown in appropriate conditions. They have moderate water needs and, with proper mulching, irrigation, and organic practices, they can thrive with less water. Growing cucumbers locally and organically reduces the carbon footprint."
        },
        about_quick_list: [ // keep it to max 3
            "Easy to grow in warm Indian climate",
            "Harvesting within 50 to 70 days",
            "Suitable for hydroponic cultivation"
        ],
        snippet: <>
            Cucumbers are refreshing, water-rich vegetables that are perfect for growing in Indian home gardens and balconies. <br/>
            Rich in vitamins K, C, and potassium, cucumbers offer numerous health benefits, including hydration, antioxidant properties, and digestive support. <br/>
            Versatile in the kitchen, cucumbers enhance salads, raitas, and can be pickled for longer preservation. <br/>
            In Ayurveda, cucumbers are valued for their cooling properties that balance pitta dosha and improve skin health. <br/>
            Whether you&#39;re a beginner or an experienced gardener, cucumbers are rewarding to cultivate at home with minimal effort.
        </>,
        growing_condition: [
            {name: 'Temperature', value: "20°C - 32°C"},
            {name: 'pH', value: '6.0 - 7.0'},
            {name: 'Harvesting', value: '50 to 70 days'}
        ],
        more_info: {
            heading: "Soil Conditions: ",
            items: [
                "Soil type: Well-drained loamy soil rich in organic matter",
                "Soil must have good aeration and drainage to avoid water logging and root diseases."
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
            heading: `Cucumbers grow well in pots, raised beds, or directly in the ground. Choose a sunny spot with at least 6-8 hours of sunlight daily. Ensure proper spacing between plants (45-60 cm apart) to allow air circulation and prevent fungal infections.`,
            health_benefits: [
                {
                    heading: "Hydration",
                    detail: `Cucumbers are 96% water, making them excellent for hydration, especially during hot Indian summers. Proper hydration supports all bodily functions and helps maintain healthy skin.`,
                    source: {
                        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4473081/",
                        title: "PubMed"
                    }
                },
                {
                    heading: "Antioxidant Properties",
                    detail: `Cucumbers contain antioxidants like flavonoids and tannins that help prevent oxidative stress and reduce inflammation in the body.`,
                    source: {
                        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3614697/",
                        title: "PubMed"
                    }
                },
                {
                    heading: "Digestive Health",
                    detail: `The fiber and water content in cucumbers support healthy digestion and regular bowel movements, helping prevent constipation.`,
                    source: {
                        link: "https://www.healthline.com/nutrition/7-health-benefits-of-cucumber",
                        title: "Healthline"
                    }
                },
                {
                    heading: "Blood Sugar Management",
                    detail: `Cucumbers have a low glycemic index and may help regulate blood sugar levels, making them suitable for people with diabetes.`,
                    source: {
                        link: "https://www.medicalnewstoday.com/articles/283006",
                        title: "Medical News Today"
                    }
                },
                {
                    heading: "Weight Management",
                    detail: `Low in calories but high in fiber and water, cucumbers can help with weight management by promoting fullness and reducing overall calorie intake.`,
                    source: {
                        link: "https://www.webmd.com/diet/ss/slideshow-health-benefits-cucumber",
                        title: "WebMD"
                    }
                },
                {
                    heading: "Skin Health",
                    detail: `The high water content and vitamin C in cucumbers help maintain skin hydration and elasticity, while silica supports collagen production for healthier skin.`,
                    source: {
                        link: "https://www.healthline.com/health/cucumber-on-eyes",
                        title: "Healthline"
                    }
                }
            ],
            right_section: {
                heading: "Risks and Things to Consider",
                information: <>While cucumbers are generally safe for consumption, there are a few considerations to keep in mind:
                    <span className="text-2xs">Source: <Link href="https://www.medicalnewstoday.com/articles/283006" target="_blank" className="green-link">Medical News Today</Link></span>
                </>,
                content: <>
                    <ul className="list-disc text-sm mt-[23px]">
                        <li>Some people may experience digestive discomfort due to cucurbitacin, a compound found in cucumbers</li>
                        <li>Allergic reactions are rare but possible, especially in people with pollen allergies</li>
                        <li>Commercially grown cucumbers may contain pesticide residues, so washing thoroughly or choosing organic is recommended</li>
                        <li>Those on blood-thinning medications should consult healthcare providers due to cucumber&#39;s vitamin K content</li>
                    </ul>
                </>,
                footer_info: <>
                    In Ayurveda, cucumbers are considered cooling and can aggravate vata dosha if consumed in excess, especially during cold weather.
                    Always wash cucumbers thoroughly before consumption to remove potential pathogens.
                </>
            },
            nutrition: {
                top: <>One medium raw cucumber (approximately 300g) provides the following nutrients: <span className="text-2xs">Source: <Link href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/168409/nutrients" target="_blank" className="green-link">USDA</Link></span></>,
                list: [
                    {name: "Calories", value: "45"},
                    {name: "Water", value: "95%"},
                    {name: "Carbohydrates", value: "11g"},
                    {name: "Fiber", value: "2g"},
                    {name: "Protein", value: "2g"},
                    {name: "Vitamin K", value: "62% of RDI"},
                ],
                bottom: <>Cucumbers also contain significant amounts of vitamin C, potassium, magnesium, and various B vitamins. They&#39;re particularly rich in antioxidants including flavonoids and tannins.</>
            },
            ecological_effects: [
                {
                    icon: <GiBee className="text-yellow-400 -mt-2 mr-2" size={30}/>,
                    title: "Biodiversity Support",
                    description: "Cucumber flowers attract pollinators like bees and butterflies, supporting local biodiversity and enhancing garden ecosystem health."
                },
                {
                    icon: <GiPlantRoots className="text-emerald-400 -mt-2 mr-2" size={30}/>,
                    title: "Soil Health",
                    description: "When grown with proper crop rotation and companion planting, cucumbers can help maintain soil health and fertility."
                },
                {
                    icon: <GiFarmTractor className="text-orange-400 -mt-2 mr-2" size={30}/>,
                    title: "Sustainable Farming",
                    description: "Organic cucumber cultivation reduces the need for synthetic pesticides and fertilizers, promoting healthier ecosystems and safer food."
                },
                {
                    icon: <GiWaterDrop className="text-teal-400 -mt-2 mr-2" size={30}/>,
                    title: "Water Usage",
                    description: "While cucumbers need regular watering, techniques like mulching and drip irrigation can significantly reduce water consumption, making them suitable for sustainable gardening."
                },
                {
                    icon: <GiFootprint className="text-rose-400 -mt-2 mr-2" size={30}/>,
                    title: "Carbon Sequestration",
                    description: "Growing cucumbers at home reduces food miles and carbon emissions associated with commercial production, transportation, and refrigeration."
                }
            ]
        }
    }
};

export default plant;