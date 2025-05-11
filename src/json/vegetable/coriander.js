import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiInsectJaws, GiPlantRoots, GiWaterDrop} from "react-icons/gi";

const plant = {
    name: "Coriander",
    plural: "Coriander",
    singular: "Coriander",
    other_name: ["Coriander", "Cilantro", "धनिया"],
    path: "/how-to-grow/coriander",
    datePublished: "2024-10-11 09:00:00 AM",
    dateModified: "2024-10-11 09:00:00 AM",
    cover: "/assets/plants/spice/coriander/coriander_1.jpg",
    search: `coriander, धनिया, cilantro, coriander leaves`,
    images: [
        {src: "/assets/plants/spice/coriander/coriander_1.jpg", alt: `How to Grow Coriander (Cilantro) at Home: Easy Organic Tips for Beginners - ${app.name}` },
        {src: "/assets/plants/spice/coriander/coriander_2.jpg", alt: `How to Grow Coriander (Cilantro) at Home: Easy Organic Tips for Beginners - ${app.name}` },
        // {src: "/assets/plants/spice/coriander/coriander_3.jpg", alt: `How to Grow Coriander (Cilantro) at Home: Easy Organic Tips for Beginners - ${app.name}` },
        {src: "/assets/plants/spice/coriander/coriander_4.jpg", alt: `How to Grow Coriander (Cilantro) at Home: Easy Organic Tips for Beginners - ${app.name}` },
    ],
    seo: {
        images: [ // for structured markup - article
            "/assets/plants/spice/coriander/coriander_1.jpg",
            "/assets/plants/spice/coriander/coriander_2.jpg",
            // "/assets/plants/spice/coriander/coriander_3.jpg",
            "/assets/plants/spice/coriander/coriander_4.jpg"
        ],
        title: `How to Grow Coriander (Cilantro) at Home: Easy Organic Tips for Beginners - ${app.name}`,
        description: `Learn how to grow coriander at home effortlessly. Discover tips on planting, care, and harvesting for fresh, flavorful coriander leaves and more only on ${app.name}.`,
        keywords: ["grow coriander", "how to grow coriander", "coriander plant care", "plant coriander at home", "coriander growing tips", "coriander gardening", "coriander harvest", "homegrown coriander", "coriander planting guide", ...app.meta.keywords],
        thumbnail: `${app.url}/assets/og/how-to-grow/coriander.png`,
    },
    hero: {
        heading: "Coriander (Cilantro) (धनिया)? A Fragrant Herb for Home Gardens and Kitchens.",
        sub_heading: "Coriandrum sativum, Herb (leafy vegetable)",
        eco_badge: {
            score: 5,
            information: "Coriander is an environmentally friendly crop. It requires moderate water and grows well in a variety of soil types with minimal fertilizer use. It is beneficial in small, sustainable gardening practices and does not require significant resources like large-scale crops do."
        },
        about_quick_list: [ // keep it to max 3
            "One of the easiest herbs to grow",
            "Packed with nutrients like vitamins A, K, and C",
            "Harvest within 25 to 35 days",
            "Highly suitable for hydroponic cultivation"
        ],
        snippet: <>
            Coriander, or cilantro, is an easy-to-grow herb that thrives in both pots and gardens, making it perfect for urban gardening or small spaces. <br/>
            Packed with nutrients like vitamins A, K, and C, it also offers several health benefits such as digestive aid and anti-inflammatory properties. <br/>
            It is a staple in kitchens around the world for flavoring dishes, and its leaves and seeds are used medicinally in Ayurveda. <br/>
            Coriander is low-maintenance, making it an ideal herb to grow on your balcony or in a garden.
        </>,
        growing_condition: [
            {name: 'Temperature', value: "17°C - 27°C"},
            {name: 'pH', value: '6.2 - 6.8'},
            {name: 'Harvest', value: '25 to 35 days'}
        ],
        more_info: {
            heading: "Soil Conditions: ",
            items: [
                "Soil type: Well-drained loamy or sandy soil",
                "Coriander does not do well in heavy, compact soil.",
                "Moderate humidity levels are ideal, as coriander does not like excessive moisture around its roots."
            ]
        }
    },
    share: {
        text: "🌿 Grow Fresh Coriander at Home! 🌱",
        subject: "🌿 Grow Fresh Coriander at Home! 🌱",
        tags: "#GrowCoriander #HomeGardening #OrganicGardening #HerbGarden #CorianderPlant #KitchenHerbs #GardenTips #CorianderGrowing #GreenThumb #FreshCoriander #grow #garden #plant"
    },
    tabs: {
        good_to_know: {
            heading: ``,
            health_benefits: [
                {
                    heading: "Improve digestion",
                    detail: `Supports digestion by aiding in the production of digestive enzymes.`,
                    source: {
                        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8747064/#:~:text=The%20seeds%20have%20been%20prescribed,are%20presented%20in%20Table%202.",
                        title: "pmc.ncbi.nlm.nih.gov"
                    }
                },
                {
                    heading: "Anti-inflammatory",
                    detail: `Has anti-inflammatory properties, which can help reduce swelling and pain.`,
                    source: {
                        link: "https://www.webmd.com/diet/health-benefits-coriander",
                        title: "WebMD"
                    }
                },
                {
                    heading: "Regulate blood sugar",
                    detail: `Helps regulate blood sugar levels in people with diabetes.`,
                    source: {
                        link: "https://www.webmd.com/diet/health-benefits-coriander",
                        title: "WebMD"
                    }
                },
                {
                    heading: "Promote kidney health",
                    detail: `Acts as a natural diuretic, promoting kidney health.`,
                    source: {
                        link: "https://www.medicoverhospitals.in/articles/coriander-leaves-benefits-for-liver#:~:text=Coriander's%20Impact%20on%20Kidney%20Health,as%20an%20effective%20kidney%20cleanse.",
                        title: "Medicover Hospitals"
                    }
                },{
                    heading: "Improve sleep disorder",
                    detail: `May help reduce anxiety and improve sleep due to its calming effects.`,
                    source: {
                        link: "https://www.aromatics.com/blogs/wellness/benefits-of-coriander-oil#:~:text=The%20Relaxing%20Properties%20of%20Coriander,in%20the%20mind%20and%20body.",
                        title: "aromatics.com"
                    }
                }
            ],
            right_section: {
                heading: "Risks and Things to Consider",
                information: <>Coriander has been rarely seen to harm the body. In some individuals, it was seen to cause irritation of the skin and making the skin prone to sunburn. Pregnant women should avoid excess consumption of coriander without consulting with a trained medical professional.:
                    <span className="text-2xs">Source: <Link href="https://www.lybrate.com/topic/benefits-of-coriander-and-its-side-effects" target="_blank" className="green-link">lybrate.com</Link></span>
                </>,
                content: <>
                    <h4 className="text-lightGreen">Ayurvedic/Medicinal Information:</h4>
                    <ul className="list-disc text-sm mt-[23px]">
                        <li>Used as a digestive aid in Ayurveda to relieve gas and bloating.</li>
                        <li>Known to cool the body, making it useful in treating heat-related conditions.</li>
                        <li>Helps in the treatment of urinary tract infections by acting as a mild diuretic.</li>
                        <li>Detoxifies the liver, helping to purify blood.</li>
                        <li>Used in remedies for joint pain due to its anti-inflammatory properties.</li>
                        <li>Beneficial for skin health, used to treat rashes and irritation.</li>
                    </ul>
                </>,
                footer_info: <>
                    Coriander is widely used in culinary dishes for its fragrant leaves and seeds, and medicinally in Ayurveda for improving digestion, reducing inflammation, and managing blood sugar levels. It’s also used in natural remedies for skin irritation and headaches.
                </>
            },
            nutrition: {
                top: <>One teaspoon of dried coriander leaves contains:
                    <span className="text-2xs">Source: <Link href="https://www.webmd.com/diet/health-benefits-coriander" target="_blank" className="green-link">
                        WebMD</Link>
                    </span></>,
                list: [
                    {name: "Calories", value: "2"},
                    {name: "Protein", value: "< 1g"},
                    {name: "Fat", value: "< 1g"},
                    {name: "Carbohydrates", value: "< 1g"},
                    {name: "Fiber", value: "< 1g"},
                ],
                bottom: <>Coriander also a source of several micronutrients, including Vitamin A, C, K Iron, Calcium</>
            },
            ecological_effects: [
                {
                    icon: <GiBee className="-mt-2 mr-2" color="#facc15" size={30}/>,
                    title: "Biodiversity Support",
                    description: "Coriander attract pollinators such as bees, which enhance overall garden health. Encourages biodiversity by attracting beneficial insects like bees."
                },
                {
                    icon: <GiPlantRoots className="-mt-2 mr-2" color="#34d399" size={30}/>,
                    title: "Soil Health",
                    description: "Coriander improves soil health by reducing erosion when grown in clusters."
                },
                {
                    icon: <GiInsectJaws className="text-orange-400 -mt-2 mr-2" size={30}/>,
                    title: "Natural pesticides",
                    description: "Can act as a natural insect repellent for other plants. Reduces the need for synthetic pesticides when grown organically."
                },
                {
                    icon: <GiWaterDrop className="-mt-2 mr-2" color="#2dd4bf" size={30}/>,
                    title: "Water Usage",
                    description: "Requires relatively low water, making it sustainable for home gardening."
                },
            ]
        }
    }
};

export default plant;