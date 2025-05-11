import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";

const plant = {
    "name": "Bottle Gourds",
    "plural": "Bottle Gourds",
    "singular": "Bottle Gourd",
    "other_name": [
        "Lauki",
        "Ghia",
        "Doodhi",
        "Lau",
        "Sorakaya",
        "Chorakaa",
        "Calabash",
        "Long Melon",
        "लौकी",
        "घिया",
        "दूधी",
        "लाउ",
        "सोरकाया",
        "चोरक्का"
    ],
    "path": "/how-to-grow/bottle-guard",
    "datePublished": "2025-05-11 09:00:00 AM",
    "dateModified": "2025-05-11 09:00:00 AM",
    cover: "/assets/plants/vegetable/bottle-guard/b1.webp",
    "search": "bottle gourd, lauki, ghia, doodhi, calabash, lagenaria siceraria, लौकी, घिया, दूधी, लाउ, sorakaya, chorakaa, long melon, Indian vegetables, summer vegetables",
    images: [
        {src: "/assets/plants/vegetable/bottle-guard/b1.webp", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/bottle-guard/b2.webp", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/bottle-guard/b3.webp", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
        {src: "/assets/plants/vegetable/bottle-guard/b4.jpg", alt: `How to Grow Tomatoes: Complete Guide for Home, Garden, & Large-Scale Farming | Health Benefits & Uses - ${app.name}` },
    ],
    "seo": {
        images: [ // for structured markup - article
            "/assets/plants/vegetable/bottle-guard/b1.webp",
            "/assets/plants/vegetable/bottle-guard/b2.webp",
            "/assets/plants/vegetable/bottle-guard/b3.webp",
            "/assets/plants/vegetable/bottle-guard/b4.jpg"
        ],
        "title": "Bottle Gourd (Lauki): How to Grow, Benefits, and Care Guide",
        "description": "Learn how to grow Bottle Gourd (Lauki) at home in India. Discover its health benefits, nutrition, step-by-step cultivation, and eco-friendly impact.",
        "keywords": [
            "bottle gourd",
            "lauki",
            "ghia",
            "doodhi",
            "lagenaria siceraria",
            "calabash",
            "Indian vegetables",
            "how to grow lauki",
            "lauki health benefits",
            "bottle gourd nutrition"
        ],
        thumbnail: `${app.url}/assets/og/how-to-grow/bottle-guard.png`,
    },
    "hero": {
        "heading": "Bottle Gourd (Lauki/लौकी)",
        "sub_heading": "Lagenaria siceraria – Family: Cucurbitaceae (Gourd family)",
        "eco_badge": {
            "score": 5,
            "information": "Bottle gourds are highly eco-friendly, requiring minimal pesticides and supporting pollinators. Their vigorous vines help prevent soil erosion and can be grown organically with ease."
        },
        "about_quick_list": [
            "Low-calorie, hydrating summer vegetable",
            "Easy to grow in Indian climates",
            "Versatile in Indian cuisine and Ayurveda"
        ],
        "snippet": <>Bottle gourd, also called Lauki or Ghia, is a nutritious summer vegetable popular across India.<br/>It is valued for its cooling properties, high water content, and versatility in cooking.<br/>Easy to grow at home, it supports a healthy diet and sustainable gardening.</>,
        "growing_condition": [
            {name: 'Temperature', value: "18°C - 35°C"},
            {name: 'pH', value: '6.0 - 7.5'},
            {name: 'Fruiting', value: '55 to 75 days'}
        ],
        "more_info": {
            "heading": "Did you know?",
            "items": [
                "Bottle gourd has been cultivated in India for thousands of years, both as food and for making utensils.",
                "The plant's dried shell can be used to create traditional containers and musical instruments.",
                "Young leaves and stems are also edible and used in regional dishes.",
                "Requires sturdy support or trellis for vigorous vines"
            ]
        }
    },
    "share": {
        "text": "Discover how to grow Bottle Gourd (Lauki) at home! Learn its health benefits, step-by-step care, and eco-friendly impact.",
        "subject": "How to Grow Bottle Gourd (Lauki) – Benefits & Guide",
        "tags": "#BottleGourd #Lauki #HomeGardening #IndianVegetables #GrowYourOwn"
    },
    "tabs": {
        "good_to_know": {
            "heading": "Why Bottle Gourd (Lauki) is a Must-Have in Your Garden",
            "health_benefits": [
                {
                    "heading": "Supports Hydration",
                    "detail": "Bottle gourd is over 90% water, making it excellent for hydration and cooling the body, especially in hot Indian summers.",
                    "source": {
                        "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4325028/",
                        "title": "NCBI"
                    }
                },
                {
                    "heading": "Aids Digestion",
                    "detail": "High fiber content in bottle gourd helps regulate bowel movements and supports digestive health.",
                    "source": {
                        "link": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/169124/nutrients",
                        "title": "USDA"
                    }
                },
                {
                    "heading": "Promotes Heart Health",
                    "detail": "Its potassium content helps regulate blood pressure, contributing to cardiovascular health.",
                    "source": {
                        "link": "https://pubmed.ncbi.nlm.nih.gov/24596454/",
                        "title": "PubMed"
                    }
                },
                {
                    "heading": "Supports Weight Loss",
                    "detail": "Low in calories and high in fiber, bottle gourd promotes satiety and is ideal for weight management.",
                    "source": {
                        "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4325028/",
                        "title": "NCBI"
                    }
                },
                {
                    "heading": "Liver Protective Effects",
                    "detail": "Traditionally used in Ayurveda to support liver function and detoxification.",
                    "source": {
                        "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4325028/",
                        "title": "NCBI"
                    }
                },
                {
                    "heading": "May Help Manage Diabetes",
                    "detail": "The vegetable’s low glycemic index and fiber content help regulate blood sugar levels.",
                    "source": {
                        "link": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4325028/",
                        "title": "NCBI"
                    }
                },
                {
                    "heading": "Rich in Antioxidants",
                    "detail": "Contains vitamin C and other antioxidants that help fight oxidative stress.",
                    "source": {
                        "link": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/169124/nutrients",
                        "title": "USDA"
                    }
                }
            ],
            "right_section": {
                "heading": "Risks and Things to Consider",
                "information": <><strong>Raw bottle gourd juice can be toxic if bitter due to high levels of cucurbitacins.</strong> Always taste a small piece before juicing or cooking. <br/>Source: <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4325028/" target="_blank">NCBI</Link></>,
                "content": <><ul><li>Never consume bitter bottle gourd – it may cause vomiting, diarrhea, or more severe reactions.</li><li>People with sensitive digestion should cook thoroughly to avoid discomfort.</li><li>Consult a doctor before consuming large quantities if you have kidney issues.</li></ul></>,
                "footer_info": "If you experience nausea or vomiting after consuming bottle gourd, seek medical attention immediately."
            },
            "nutrition": {
                "top": <>A 100g serving of raw bottle gourd provides the following nutrients: <span className="text-2xs">Source: <Link href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/169124/nutrients" target="_blank" className="green-link">USDA</Link></span></>,
                "list": [
                    {"name": "Calories", "value": "14 kcal"},
                    {"name": "Protein", "value": "0.62 g"},
                    {"name": "Dietary Fiber", "value": "3.90 g"},
                    {"name": "Potassium", "value": "150 mg"},
                ],
                "bottom": "Bottle gourd is also a source of vitamin C, folate, and has a very low glycemic index, making it suitable for diabetics."
            },
            "ecological_effects": [
                {
                    "icon": <GiBee className="-mt-2 mr-2" color="#facc15" size={30}/>,
                    "title": "Supports Pollinators",
                    "description": "Bottle gourd flowers attract bees and other pollinators, supporting local biodiversity."
                },
                {
                    "icon": <GiPlantRoots className="-mt-2 mr-2" color="#34d399" size={30}/>,
                    "title": "Improves Soil Health",
                    "description": "Dense vines and roots help prevent soil erosion and increase organic matter in the soil."
                },
                {
                    "icon": <GiFarmTractor className="-mt-2 mr-2" color="#fb923c" size={30}/>,
                    "title": "Low Input Requirement",
                    "description": "Thrives with minimal chemical inputs, making it ideal for organic and sustainable gardening."
                },
                {
                    "icon": <GiWaterDrop className="-mt-2 mr-2" color="#2dd4bf" size={30}/>,
                    "title": "Efficient Water Usage",
                    "description": "Requires moderate irrigation and adapts well to monsoon patterns in India."
                },
                {
                    "icon": <GiFootprint className="-mt-2 mr-2" color="#fb7185" size={30}/>,
                    "title": "Low Carbon Footprint",
                    "description": "Rapid growth and high yield per plant reduce the need for frequent replanting, lowering its environmental impact."
                }
            ]
        },
        "how_to_grow": [
            {
                "heading": "Step 1: Select the Right Variety (Day 0)",
                "title": "Choose a suitable hybrid or local variety",
                "steps": [
                    "Pick disease-resistant varieties like Pusa Aveen or Pusa Hybrid-3 for best results.",
                    <>Check with local nurseries for regionally adapted seeds.</>,
                    <>Use only fresh, healthy seeds for optimal germination.</>
                ]
            },
            {
                "heading": "Step 2: Prepare the Soil (Day 1-2)",
                "title": "Soil preparation for healthy roots",
                "steps": [
                    "Choose a sunny location with well-drained, fertile sandy loam soil.",
                    "Mix in 1-2 kg of well-rotted compost or manure per planting spot.",
                    <>Ensure soil pH is between 6.0 and 7.5 for best growth.</>
                ]
            },
            {
                "heading": "Step 3: Sowing Seeds (Day 3)",
                "title": "Direct sowing or transplanting",
                "steps": [
                    "Sow seeds 2-3 cm deep, spacing plants 1.5 m apart.",
                    "Water gently after sowing.",
                    <>In cooler climates, start seeds indoors and transplant seedlings after 2-3 weeks.</>
                ]
            },
            {
                "heading": "Step 4: Provide Support (Day 10-15)",
                "title": "Install trellis or support structure",
                "steps": [
                    "Set up a sturdy trellis or vertical support for vines to climb.",
                    <>This prevents fruits from touching the ground and reduces rot risk.</>,
                    <>Use bamboo poles or wire mesh for cost-effective support.</>
                ]
            },
            {
                "heading": "Step 5: Watering and Mulching (Throughout Growth)",
                "title": "Maintain consistent moisture",
                "steps": [
                    "Irrigate every 4-5 days in summer; less often during monsoon.",
                    "Mulch around plants to retain soil moisture and suppress weeds.",
                    <>Avoid waterlogging, which can cause root rot.</>
                ]
            },
            {
                "heading": "Step 6: Fertilization (Day 15-30 and Beyond)",
                "title": "Feed for vigorous growth",
                "steps": [
                    "Apply balanced organic fertilizer or NPK (100:60:60 kg/ha) at planting.",
                    "Top-dress with compost or split nitrogen dose during flowering.",
                    <>Do not over-fertilize; excess nitrogen may reduce fruiting.</>
                ]
            },
            {
                "heading": "Step 7: Pest and Disease Management (Ongoing)",
                "title": "Monitor and act early",
                "steps": [
                    "Inspect plants weekly for signs of pests or disease.",
                    "Use neem oil or organic sprays for aphids and beetles.",
                    <>Remove and destroy infected leaves to prevent spread.</>,
                    <>Practice crop rotation to reduce soil-borne diseases.</>
                ]
            },
            {
                "heading": "Step 8: Training and Pruning (After 3-4 Weeks)",
                "title": "Encourage healthy vine growth",
                "steps": [
                    "Train vines along the trellis for better air circulation.",
                    "Pinch off side shoots to focus energy on fruit production.",
                    <>Regularly remove yellowing or dead leaves.</>
                ]
            },
            {
                "heading": "Step 9: Harvesting (55-75 Days After Sowing)",
                "title": "Pick at peak tenderness",
                "steps": [
                    "Harvest when fruits are green, tender, and glossy.",
                    "Use a sharp knife, leaving a small stem attached.",
                    <>Do not delay harvest – overripe fruits become tough and fibrous.</>
                ]
            }
        ],
        "process": {
            "quick_info": "Bottle gourd grows rapidly from seed to harvest in about 2-2.5 months, requiring warm weather, support, and regular care.",
            "quick_points": [
                "Direct sow seeds after last frost or at the start of summer/monsoon.",
                "Provide a strong trellis for climbing vines.",
                "Water regularly but avoid waterlogging.",
                "Harvest fruits when young and tender for best flavor."
            ],
            "nutritional_requirements": [
                {"name": "Promotes leafy and vine growth", "value": "N (Nitrogen)"},
                {"name": "Aids in root development and fruiting", "value": "P (Phosphorus)"},
                {"name": "Supports fruit quality and disease resistance", "value": "K (Potassium)"},
                {"name": "Improves overall vigor and chlorophyll production", "value": "Mg (Magnesium)"}
            ],
            "seeding_process": <>Sow bottle gourd seeds 2-3 cm deep in moist, well-prepared soil.<br/>Optimal germination temperature is 20-30°C.<br/>Keep the soil consistently moist but not soggy.<br/><strong>Testing moisture –</strong> The soil should feel damp but not waterlogged.<br/>Seeds typically sprout within 7-10 days.<br/><em>Tip:</em> Soak seeds overnight before sowing to improve germination rate.</>,
            "more_info": [
                {"heading": "Seed Selection", "info": "Choose fresh, disease-free seeds from a reliable source or nursery."},
                {"heading": "Sowing Depth", "info": "Plant seeds 2-3 cm deep for optimal emergence."},
                {"heading": "Temperature Requirements", "info": "Germination is best at 20-30°C; avoid sowing in cold weather."},
                {"heading": "Light Needs", "info": "Choose a location with full sun (at least 6 hours daily)."},
                {"heading": "Watering Practices", "info": "Keep soil moist but not soggy during germination and early growth."},
                {"heading": "Soil Preparation", "info": "Incorporate compost or manure before sowing to enrich soil."},
                {"heading": "Transplanting", "info": "If starting indoors, transplant seedlings after 2-3 weeks when true leaves appear."}
            ],
            "germination_stage": [
                {"heading": "Seed Swelling and Root Emergence (Day 2-4)", "info": "Seeds absorb water, swell, and the radicle (root) emerges."},
                {"heading": "Shoot Emergence (Day 5-10)", "info": "The shoot breaks through the soil and the first seed leaves (cotyledons) appear."},
                {"heading": "True Leaf Development (Day 10-15)", "info": "First true leaves form, and the seedling begins rapid vine growth."}
            ],
            "what_affect_quality": [
                {"heading": "Harvest Timing", "info": "Harvesting at the right stage ensures tender, flavorful fruits; late harvest leads to tough, fibrous gourds."},
                {"heading": "Soil Fertility", "info": "Rich, well-drained soil produces larger, tastier fruits."},
                {"heading": "Watering Consistency", "info": "Irregular watering can cause bitterness or poor fruit development."},
                {"heading": "Sunlight", "info": "Full sun exposure results in vigorous growth and better fruit quality."}
            ],
            "fertilizer_requirements": {
                "organic": [
                    "Apply well-rotted compost or farmyard manure at planting for slow-release nutrients.",
                    "Use vermicompost or leaf mold as a top dressing during growth.",
                    "Bone meal can be added to boost phosphorus for root and fruit development."
                ],
                "chemical": [
                    "Apply a balanced NPK fertilizer (10:10:10) at planting.",
                    "Split-apply nitrogen (urea) during vegetative and flowering stages.",
                    "Use minimal chemical inputs to avoid residue in edible fruits."
                ],
                "how_to": [
                    "Incorporate compost into the soil before sowing.",
                    "Apply fertilizer in a ring around the plant base, not directly on the stem.",
                    "Top-dress with compost or NPK every 3-4 weeks during active growth.",
                    "Reduce nitrogen once flowering begins to encourage fruiting."
                ],
                "tips": [
                    "Fertilize in the evening to prevent nutrient burn.",
                    "Water after fertilizing to help nutrients reach the roots.",
                    "Avoid over-fertilizing, which can cause excessive leaf growth and poor fruit set."
                ]
            },
            "watering_schedule": [
                {
                    "heading": "Seedling Stage",
                    "info": "Water lightly every 2-3 days to keep soil moist but not soggy."
                },
                {
                    "heading": "Vegetative Growth",
                    "info": "Irrigate every 4-5 days in summer; adjust frequency during monsoon."
                },
                {
                    "heading": "Flowering and Fruiting",
                    "info": "Maintain consistent moisture; do not let soil dry out or become waterlogged."
                },
                {
                    "heading": "Rainy Season",
                    "info": "Reduce watering and ensure good drainage to prevent root rot."
                }
            ],
            "diseases": [
                {
                    "heading": "Fusarium Wilt",
                    "info": [
                        {"label": "Sign", "detail": "Yellowing and wilting of leaves despite adequate watering."},
                        {"label": "When", "detail": "Usually appears during warm, humid conditions."},
                        {"label": "Treatment", "detail": "Remove and destroy affected plants. Practice crop rotation and use disease-resistant varieties."},
                        {"label": "Note", "detail": "Soil-borne fungus; avoid overwatering."}
                    ]
                },
                {
                    "heading": "Gummy Stem Blight",
                    "info": [
                        {"label": "Sign", "detail": "Water-soaked lesions on stems with gummy exudate."},
                        {"label": "When", "detail": "Common in humid, wet weather."},
                        {"label": "Treatment", "detail": "Remove infected parts, improve air circulation, and use organic fungicides if needed."},
                        {"label": "Note", "detail": "Avoid overhead watering."}
                    ]
                },
                {
                    "heading": "Powdery Mildew",
                    "info": [
                        {"label": "Sign", "detail": "White, powdery patches on leaves and stems."},
                        {"label": "When", "detail": "Occurs in dry weather with high humidity."},
                        {"label": "Treatment", "detail": "Spray with neem oil or baking soda solution; remove affected leaves."},
                        {"label": "Note", "detail": "Ensure good air circulation."}
                    ]
                },
                {
                    "heading": "Downy Mildew",
                    "info": [
                        {"label": "Sign", "detail": "Yellow spots on upper leaf surfaces, grayish fuzz underneath."},
                        {"label": "When", "detail": "Spreads rapidly during rainy season."},
                        {"label": "Treatment", "detail": "Remove infected leaves, use copper-based fungicides if needed."},
                        {"label": "Note", "detail": "Water early in the day to allow leaves to dry."}
                    ]
                },
                {
                    "heading": "Aphids & Beetles",
                    "info": [
                        {"label": "Sign", "detail": "Sticky residue, distorted leaves, visible insects."},
                        {"label": "When", "detail": "Throughout the growing season."},
                        {"label": "Treatment", "detail": "Spray with neem oil or soapy water; encourage natural predators."},
                        {"label": "Note", "detail": "Monitor regularly for early detection."}
                    ]
                },
                {
                    "heading": "Squash Vine Borer",
                    "info": [
                        {"label": "Sign", "detail": "Sudden vine wilting, holes in stems."},
                        {"label": "When", "detail": "Common in mid to late season."},
                        {"label": "Treatment", "detail": "Remove and destroy infested vines; cover base of stems with soil to encourage new roots."},
                        {"label": "Note", "detail": "Rotate crops and use physical barriers."}
                    ]
                }
            ],
            "weeding_caring": [
                {
                    "heading": "Mulch Regularly",
                    "info": "Apply organic mulch to suppress weeds, retain moisture, and regulate soil temperature."
                },
                {
                    "heading": "Train Vines",
                    "info": "Guide vines onto trellis to improve air flow and fruit quality."
                },
                {
                    "heading": "Remove Old Leaves",
                    "info": "Prune yellow or diseased leaves to prevent spread and improve plant vigor."
                },
                {
                    "heading": "Inspect for Pests",
                    "info": "Check plants weekly and act at first sign of infestation."
                }
            ],
            "good_for_cultivation": [
                "Harvest when fruits are medium-sized, green, and tender with a glossy surface.",
                "Pick before the skin hardens; overripe gourds become fibrous and less tasty.",
                "Cut with a small portion of stem attached to prolong shelf life."
            ],
            tips: [
                "Always use fresh, disease-free seeds for better germination.",
                "Soak seeds overnight before sowing to improve germination rates.",
                "Install a sturdy trellis early to support vigorous vine growth.",
                "Water regularly but avoid waterlogging to prevent root diseases.",
                "Mulch around plants to conserve moisture and suppress weeds.",
                "Harvest bottle gourds while young and tender for best taste.",
                "Never consume bitter bottle gourd due to risk of toxicity.",
                "Practice crop rotation to reduce soil-borne diseases.",
                "Inspect plants weekly for pests and act promptly if needed.",
                "Prune yellow or diseased leaves to keep plants healthy."
            ]
        }
    }
};

export default plant;