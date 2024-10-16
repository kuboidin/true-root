import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";

const plant = {
    name: "Tomato",
    plural: "Tomatoes",
    path: "/how-to-grow/tomato",
    datePublished: "2024-10-10 09:00:00 AM",
    dateModified: "2024-10-10 09:00:00 AM",
    cover: "/assets/plants/vegetable/tomato/t4.webp",
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
        title: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}`,
        description: `Discover expert tips on growing tomatoes at home, in the garden, or commercially. Learn about tomato health benefits, Ayurvedic uses, nutritional value, ecological impact, myths, and more. ${app.name}`,
        keywords: ["how to grow tomatoes", "tomato growing tips", "tomato nutrition", "health benefits of tomatoes", "organic tomato farming", "grow tomatoes at home", "tomato planting guide", "tomato uses", "tomato seeds guide",
            "NPK for tomatoes", "eco-friendly tomato farming", "Ayurvedic benefits of tomatoes", "medicinal uses of tomatoes", "tomato diseases and cures", ...app.meta.keywords],
        thumbnail: `${app.url}/assets/og/how-to-grow/tomato.png`,
    },
    hero: {
        heading: "Tomato (टमाटर)",
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
        }
    }
};

export default plant;