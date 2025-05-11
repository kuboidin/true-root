import app from "@/config/app";
import Link from "next/link";

const plant = {
    "name": "Brinjals",
    "plural": "Brinjals",
    "singular": "Brinjal",
    "other_name": [
        "Eggplant",
        "बैंगन",
        "Baingan",
        "Vankaya",
        "Kathirikai",
        "Badanekayi",
        "Vangi"
    ],
    "path": "/how-to-grow/brinjals",
    "datePublished": "2025-05-11 03:40:00 PM",
    "dateModified": "2025-05-11 03:40:00 PM",
    "cover": "/assets/plants/vegetable/brinjal/b1.webp",
    search: "brinjal eggplant aubergine baingan solanum melongena vegetable gardening",
    images: [
        {src: "/assets/plants/vegetable/brinjal/b1.webp", alt: `How to Grow Brinjals (बैंगन) at Home in India: Complete Guide - ${app.name}` },
        {src: "/assets/plants/vegetable/brinjal/b2.jpg", alt: `How to Grow Brinjals (बैंगन) at Home in India: Complete Guide - ${app.name}` },
        {src: "/assets/plants/vegetable/brinjal/b3.jpg", alt: `How to Grow Brinjals (बैंगन) at Home in India: Complete Guide - ${app.name}` },
        {src: "/assets/plants/vegetable/brinjal/b4.webp", alt: `How to Grow Brinjals (बैंगन) at Home in India: Complete Guide - ${app.name}` },
    ],
    "seo": {
        images: [ // for structured markup - article
            "/assets/plants/vegetable/brinjal/b1.webp",
            "/assets/plants/vegetable/brinjal/b2.jpg",
            "/assets/plants/vegetable/brinjal/b3.jpg",
            "/assets/plants/vegetable/brinjal/b4.webp"
        ],
        title: "How to Grow Brinjals: Complete Guide & Care for Indian Gardens",
        description: "Learn how to grow healthy brinjals at home with our complete guide covering benefits, nutrition, care tips, and cultivation practices for Indian conditions.",
        keywords: ["grow brinjal", "grow eggplant", "how to grow brinjal", "brinjal growing tips", "eggplant nutrition", "health benefits of brinjal", "baingan cultivation"],
        thumbnail: `${app.url}/assets/og/how-to-grow/brinjal.png`,
    },
    "hero": {
        heading: "Brinjals (बैंगन)",
        sub_heading: "Solanum melongena, Vegetable (Fruit)",
        eco_badge: {
            score: 4,
            information: "Brinjals are relatively eco-friendly when grown in appropriate conditions. They have moderate water needs and can thrive in various agro-climatic regions of India with proper care and organic practices."
        },
        about_quick_list: [
            "Versatile crop that can be grown year-round in India",
            "Fruiting within 75 to 110 days (depending on variety)",
            "Suitable for diverse agro-climatic regions"
        ],
        snippet: "Brinjals are among India's most popular and versatile vegetables, thriving in diverse growing conditions across the country. <br/> Rich in antioxidants and dietary fiber, brinjals offer numerous health benefits including improved digestion and heart health, making them an excellent addition to any home garden.",
        growing_condition: [
            {name: 'Temperature', value: "21°C - 32°C"},
            {name: 'pH', value: '5.5 - 6.5'},
            {name: 'Fruiting', value: '75 to 110 days'}
        ],
        more_info: {
            heading: "Soil Conditions: ",
            items: [
                "Soil type: Well-drained loamy soil with high organic matter",
                "Prefers slightly acidic soil with good aeration and drainage to prevent waterlogging"
            ]
        }
    },
    share: {
        text: "Learn how to grow nutritious brinjals at home",
        subject: "Complete guide to growing brinjals at home in Indian conditions",
        tags: "#grow #brinjal #eggplant #garden #IndianGardening"
    },
    // Tab content sections
    tabs: {
        // "Good to know" section
        good_to_know: {
            heading: "Brinjals grow well in raised beds, containers, or directly in garden soil. Choose a spot with at least 6 hours of direct sunlight daily for optimal growth.",
            health_benefits: [
                {
                    heading: "Rich in Antioxidants",
                    detail: "Brinjals contain nasunin, a potent antioxidant found in the purple skin that protects cell membranes from damage. It specifically helps protect the lipids in brain cell membranes from free radical damage.",
                    source: {
                        link: "https://pubmed.ncbi.nlm.nih.gov/10962130/",
                        title: "PubMed"
                    }
                },
                {
                    heading: "Heart Health Support",
                    detail: "The chlorogenic acid present in brinjals helps lower LDL (bad cholesterol) levels and reduces the risk of heart disease. It also has anti-inflammatory properties that benefit cardiovascular health.",
                    source: {
                        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5409110/",
                        title: "National Center for Biotechnology Information"
                    }
                },
                {
                    heading: "Blood Sugar Management",
                    detail: "Brinjals have a low glycemic index and contain polyphenols that help reduce glucose absorption and increase insulin secretion, making them beneficial for managing blood sugar levels in diabetic individuals.",
                    source: {
                        link: "https://www.sciencedirect.com/science/article/abs/pii/S0308814611002275",
                        title: "Science Direct"
                    }
                },
                {
                    heading: "Digestive Health",
                    detail: "High dietary fiber content in brinjals promotes regular bowel movements and prevents constipation. The fiber also feeds beneficial gut bacteria, supporting overall digestive health and microbiome balance.",
                    source: {
                        link: "https://www.sciencedirect.com/science/article/abs/pii/S0308814619319508",
                        title: "Science Direct"
                    }
                },
                {
                    heading: "Weight Management",
                    detail: "Low in calories yet high in fiber, brinjals create a feeling of fullness, reducing overall calorie intake. The significant water content (about 92%) also contributes to satiety without adding substantial calories.",
                    source: {
                        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6571663/",
                        title: "National Center for Biotechnology Information"
                    }
                },
                {
                    heading: "Cancer Prevention",
                    detail: "Solasodine rhamnosyl glycosides (SRGs) found in brinjals have shown potential anti-cancer properties in multiple studies. These compounds may help in inducing apoptosis (programmed cell death) in cancer cells.",
                    source: {
                        link: "https://pubmed.ncbi.nlm.nih.gov/20623652/",
                        title: "PubMed"
                    }
                },
                {
                    heading: "Cognitive Function Support",
                    detail: "The nasunin in brinjal skin not only acts as an antioxidant but also helps remove excess iron from the body. This is beneficial as excess iron can lead to cognitive decline and increase risk of neurodegenerative diseases.",
                    source: {
                        link: "https://pubmed.ncbi.nlm.nih.gov/12590505/",
                        title: "PubMed"
                    }
                }
            ],
            right_section: {
                heading: "Risks and Things to Consider",
                information: "While brinjals offer many health benefits, there are some considerations to keep in mind. <span className=\"text-2xs\">Source: <Link href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3693607/\" target=\"_blank\" className=\"green-link\">NCBI</Link></span>",
                content: "<ul><li>Brinjals are part of the nightshade family, which some individuals may be sensitive to</li><li>They contain solanine, which in very large amounts could cause digestive issues</li><li>Individuals with kidney or gallbladder problems should consult healthcare providers before consuming large amounts</li><li>Some people may experience allergic reactions</li></ul>",
                footer_info: "Always wash brinjals thoroughly before cooking to remove any surface pesticides. Cooking brinjals properly reduces any potential anti-nutrient content."
            },
            nutrition: {
                top: <>One cup (82g) of raw brinjal provides the following nutrients: <span className="text-2xs">Source: <Link href="https://fdc.nal.usda.gov/fdc-app.html#/food-details/169228/nutrients" target="_blank" className="green-link">USDA</Link></span></>,
                list: [
                    {name: "Calories", value: "20 kcal"},
                    {name: "Carbohydrates", value: "4.82g"},
                    {name: "Protein", value: "0.83g"},
                    {name: "Dietary Fiber", value: "2.5g"},
                    {name: "Potassium", value: "188mg"},
                    {name: "Vitamin C", value: "1.8mg"},
                    {name: "Vitamin K", value: "2.9μg"},
                    {name: "Folate", value: "14μg"},
                    {name: "Manganese", value: "0.13mg"}
                ],
                bottom: "Brinjals are also a good source of anthocyanins (particularly in purple varieties), nasunin, and chlorogenic acid, which contribute to their antioxidant properties and health benefits."
            },
            ecological_effects: [
                {
                    icon: "GiBee",
                    title: "Supports Pollinators",
                    description: "Brinjal flowers attract bees and other beneficial insects, supporting local pollinator populations essential for ecosystem health and biodiversity."
                },
                {
                    icon: "GiPlantRoots",
                    title: "Soil Health Improvement",
                    description: "When grown with proper crop rotation practices, brinjals can help break pest cycles and improve soil structure through their root systems."
                },
                {
                    icon: "GiFarmTractor",
                    title: "Crop Diversity",
                    description: "As part of sustainable farming practices, brinjals contribute to crop diversity, reducing reliance on monocultures and improving overall agricultural resilience."
                },
                {
                    icon: "GiWaterDrop",
                    title: "Moderate Water Usage",
                    description: "While requiring regular watering, established brinjal plants with proper mulching can withstand short dry periods, making them suitable for water-conscious gardening."
                },
                {
                    icon: "GiFootprint",
                    title: "Reduced Carbon Footprint",
                    description: "Growing brinjals locally reduces the carbon footprint associated with transportation and storage of commercially produced vegetables."
                }
            ]
        },

        // How to grow section
        how_to_grow: [
            {
                heading: "Day 1-3: Seed Selection and Preparation",
                title: "Choosing the right seeds for your region",
                steps: [
                    "Select brinjal varieties suitable for your local climate - Pusa Purple Long and Pusa Purple Cluster are excellent choices for most Indian regions",
                    "Soak seeds in warm water for 24 hours before sowing to improve germination rate",
                    "For better germination, you can wrap soaked seeds in a damp cloth for another 24-48 hours until they show signs of sprouting"
                ]
            },
            {
                heading: "Day 4-7: Seed Sowing and Germination",
                title: "Starting your brinjal journey",
                steps: [
                    "Fill seedling trays or small pots with sterilized seed-starting mix",
                    "Sow seeds 1/4 inch (0.6 cm) deep and cover lightly with soil",
                    "Water gently and place in a warm location with temperatures between 24°C to 32°C",
                    "<strong>Important:</strong> Keep the soil consistently moist but not waterlogged during germination period"
                ]
            },
            {
                heading: "Day 8-21: Early Seedling Care",
                title: "Nurturing young seedlings",
                steps: [
                    "Once seedlings emerge (typically 7-14 days), move them to a spot with 6-8 hours of indirect sunlight",
                    "Maintain soil moisture with light watering whenever the top layer begins to dry",
                    "If growing indoors, rotate trays daily to prevent leggy growth",
                    "Thin seedlings when they develop 2-3 true leaves, keeping only the strongest plants"
                ]
            },
            {
                heading: "Day 22-30: Seedling Hardening",
                title: "Preparing seedlings for transplanting",
                steps: [
                    "Begin hardening off seedlings when they're 3-4 inches (7.5-10 cm) tall with 4-5 true leaves",
                    "Gradually expose plants to outdoor conditions over 7-10 days, increasing exposure time daily",
                    "Reduce watering slightly but don't allow seedlings to wilt",
                    "Protect seedlings from strong winds and direct afternoon sun during the hardening process"
                ]
            },
            {
                heading: "Day 31-35: Transplanting",
                title: "Moving seedlings to their permanent home",
                steps: [
                    "Prepare garden soil by adding well-rotted compost or manure at least one week before transplanting",
                    "Dig holes twice the size of the root ball, spaced 45-60 cm apart",
                    "Transplant on a cloudy day or in the evening to reduce transplant shock",
                    "Water thoroughly immediately after transplanting",
                    "Provide temporary shade for 2-3 days if weather is hot and sunny"
                ]
            },
            {
                heading: "Day 36-60: Early Growth Stage",
                title: "Supporting vegetative growth",
                steps: [
                    "Water regularly to maintain consistent soil moisture, especially during dry spells",
                    "Apply organic mulch (like straw or dried leaves) around plants to conserve moisture and suppress weeds",
                    "Support taller varieties with stakes installed at the time of transplanting to avoid root damage later",
                    "Begin fertilizing with balanced organic fertilizer when plants show vigorous growth"
                ]
            },
            {
                heading: "Day 61-75: Flowering Stage",
                title: "Encouraging healthy flower development",
                steps: [
                    "Switch to a fertilizer with higher phosphorus content when flower buds appear",
                    "Ensure consistent watering as moisture stress during flowering can cause blossom drop",
                    "Remove the first 2-3 flowers on young plants to encourage stronger plant development if plants are still small",
                    "Watch for pests like aphids and whiteflies that are attracted to flowering plants"
                ]
            },
            {
                heading: "Day 76-100: Fruiting Stage",
                title: "Supporting fruit development",
                steps: [
                    "Continue regular watering, maintaining consistent soil moisture",
                    "Apply additional support for branches bearing heavy fruits to prevent breakage",
                    "Side dress with compost or organic fertilizer to support continuous fruiting",
                    "Monitor for fruit-boring pests and diseases that can damage developing fruits",
                    "Remove any malformed or diseased fruits promptly"
                ]
            },
            {
                heading: "Day 100-110: Early Harvest",
                title: "Beginning to enjoy your brinjals",
                steps: [
                    "Harvest early varieties like Pusa Purple Cluster around 75 days after transplanting",
                    "Look for fruits with glossy skin and firm texture for optimal flavor and texture",
                    "Cut fruits with pruning shears or a sharp knife, leaving a short stem attached",
                    "Harvest regularly to encourage continued production",
                    "<strong>Note:</strong> Don't pull fruits off as this can damage the plant"
                ]
            },
            {
                heading: "Day 110-150: Continued Harvest and Maintenance",
                title: "Maximizing your brinjal harvest",
                steps: [
                    "For longer varieties like Pusa Purple Long, harvest may begin around 100-110 days after transplanting",
                    "Continue regular watering and fertilization to support extended harvesting season",
                    "Remove any overripe fruits promptly as they reduce plant vigor and attract pests",
                    "Prune away any diseased or yellowing leaves to maintain plant health",
                    "Harvest all mature fruits before the first frost in colder regions"
                ]
            }
        ],

        // Process section
        process: {
            quick_info: "Brinjals are warm-season crops that thrive in temperatures between 21°C - 32°C with well-drained, fertile soil and full sun exposure.",
            quick_points: [
                "Ideal growing season: February-March (spring) and June-July (monsoon) in most parts of India",
                "Prefers full sun exposure (6+ hours daily)",
                "Regular watering needed, especially during flowering and fruiting",
                "Moderately heavy feeders requiring regular fertilization"
            ],
            nutritional_requirements: [
                { name: "Nitrogen (N)", info: "Moderate to high - Essential for leafy growth during early development stage" },
                { name: "Phosphorus (P)", info: "High - Critical for root development, flowering, and fruit setting" },
                { name: "Potassium (K)", info: "High - Important for overall plant health, disease resistance, and fruit quality" },
                { name: "Calcium (Ca)", info: "Moderate - Prevents blossom end rot and strengthens cell walls" },
                { name: "Magnesium (Mg)", info: "Moderate - Essential component of chlorophyll for photosynthesis" }
            ],
            seeding_process: "Brinjal seeds require warm soil temperatures (24°C-32°C) for optimal germination. Seeds typically germinate within 7-14 days when conditions are favorable.",
            more_info: [
                { name: "Seed Depth", info: "1/4 inch (0.6 cm)" },
                { name: "Germination Temperature", info: "24°C - 32°C" },
                { name: "Days to Germination", info: "7-14 days" },
                { name: "Seed Viability", info: "3-4 years when properly stored in cool, dry conditions" }
            ],
            germination_stage: [
                { name: "Moistening", info: "Keep soil consistently moist but not waterlogged" },
                { name: "Lighting", info: "Seeds don't require light to germinate, but seedlings need bright light once emerged" },
                { name: "Heat", info: "Use of a heating mat can improve germination rates in cooler weather" },
                { name: "Covering", info: "Cover seed trays with plastic to maintain humidity until germination" }
            ],
            what_affect_quality: [
                { name: "Consistent Watering", info: "Irregular watering can cause bitter fruits and blossom end rot" },
                { name: "Sunlight Exposure", info: "Insufficient sunlight results in poor fruit development and pale coloration" },
                { name: "Nutrient Balance", info: "Excess nitrogen produces lush foliage at the expense of fruit production" },
                { name: "Temperature", info: "Extreme heat (above 35°C) or cold (below 10°C) affects fruit set and quality" },
                { name: "Pest Management", info: "Early detection and control of pests ensures unblemished fruits" }
            ],
            fertilizer_requirements: {
                organic: [
                    "Compost: Apply 2-3 kg per square meter during soil preparation and as a top dressing during the growing season",
                    "Vermicompost: Incorporate 1-2 kg per square meter before planting for slow-release nutrition",
                    "Neem cake: Add 100-150g per plant as a base application to provide nutrients and repel soil-borne pests",
                    "Fish emulsion: Dilute according to package instructions and apply every 2-3 weeks during vegetative growth for nitrogen boost"
                ],
                chemical: [
                    "NPK 10:10:10: Apply 10-15g per plant at transplanting stage as a basal dose",
                    "NPK 12:24:12: Apply 10-15g per plant when flower buds begin to form to support flowering and fruiting",
                    "Calcium nitrate: Apply 5g per plant dissolved in water to prevent blossom end rot",
                    "Micronutrient mixture: Foliar spray containing zinc, boron, and manganese at recommended doses during vegetative growth"
                ],
                how_to: [
                    "Apply basal fertilizer in a ring 10-15 cm away from the stem to prevent root burn",
                    "Top dress with fertilizers when plants are about 30 days old and again at flowering stage",
                    "Always water thoroughly after applying dry fertilizers to prevent root damage",
                    "Apply liquid fertilizers early in the morning or late evening to maximize absorption"
                ],
                tips: [
                    "Avoid excessive nitrogen during fruiting stage as it promotes vegetative growth at the expense of fruit production",
                    "Combine organic and mineral fertilizers for balanced nutrition and improved soil health",
                    "Conduct a soil test before planting to determine specific nutrient deficiencies and adjust fertilizer application accordingly"
                ]
            },
            watering_schedule: [
                {
                    heading: "Seedling Stage (1-3 weeks)",
                    info: "Water lightly but frequently to keep the top layer of soil consistently moist. Avoid waterlogging which can cause damping off disease."
                },
                {
                    heading: "Vegetative Stage (3-8 weeks)",
                    info: "Water deeply 2-3 times per week, allowing the top inch of soil to dry between waterings. Increase frequency during hot, dry weather."
                },
                {
                    heading: "Flowering Stage (8-10 weeks)",
                    info: "Maintain consistent soil moisture as water stress during this period can cause flower drop. Water at the base of plants to keep foliage dry."
                },
                {
                    heading: "Fruiting Stage (10+ weeks)",
                    info: "Consistent moisture is critical for fruit development. Water deeply 2-3 times weekly, adjusting for rainfall. Irregular watering can cause bitter fruits and blossom end rot."
                },
                {
                    heading: "Monsoon Season Adjustments",
                    info: "Reduce watering frequency during monsoon season to prevent waterlogging. Ensure proper drainage and consider raised beds in areas with heavy rainfall."
                }
            ],
            diseases: [
                {
                    heading: "Damping Off",
                    info: [
                        { label: "Sign", detail: "Seedlings wilt and collapse at soil level, stems appear water-soaked and thin" },
                        { label: "When", detail: "Early seedling stage, especially in cool, wet conditions with poor air circulation" },
                        { label: "Treatment", detail: "Improve drainage, avoid overwatering, use sterilized soil for seedlings, apply Trichoderma-based organic fungicides" },
                        { label: "Note", detail: "Prevention is key - use clean containers and tools, provide good ventilation" }
                    ]
                },
                {
                    heading: "Verticillium and Fusarium Wilt",
                    info: [
                        { label: "Sign", detail: "Yellowing of lower leaves, often on one side of plant; wilting despite adequate moisture; brown discoloration in stem cross-section" },
                        { label: "When", detail: "Mid to late season, especially during warm weather and in soils where solanaceous crops were previously grown" },
                        { label: "Treatment", detail: "No effective treatment once infected; remove and destroy affected plants, practice crop rotation with non-solanaceous crops for 3-4 years" },
                        { label: "Note", detail: "Use resistant varieties where available; solarize soil in severely infected areas" }
                    ]
                },
                {
                    heading: "Phomopsis Blight",
                    info: [
                        { label: "Sign", detail: "Circular, sunken lesions on fruits; small dark spots on leaves and stems that enlarge and develop grayish centers" },
                        { label: "When", detail: "Warm, humid conditions especially after rainfall or overhead irrigation" },
                        { label: "Treatment", detail: "Apply copper-based fungicides at early stages; remove infected plant parts; avoid overhead watering" },
                        { label: "Note", detail: "Maintain good air circulation between plants; mulch to prevent soil splash" }
                    ]
                },
                {
                    heading: "Fruit and Shoot Borer",
                    info: [
                        { label: "Sign", detail: "Wilting shoots with entry holes; fruits with boreholes containing white larvae and frass" },
                        { label: "When", detail: "Throughout the growing season, peak infestation during warm, humid conditions" },
                        { label: "Treatment", detail: "Install pheromone traps (5-6 per acre); apply neem oil or Bacillus thuringiensis; remove and destroy affected shoots and fruits" },
                        { label: "Note", detail: "Major pest of brinjal in India; regular monitoring is essential for early detection" }
                    ]
                },
                {
                    heading: "Spider Mites",
                    info: [
                        { label: "Sign", detail: "Fine webbing on undersides of leaves; stippled, yellowing leaves; tiny moving dots visible with magnification" },
                        { label: "When", detail: "Hot, dry conditions; often severe during summer months" },
                        { label: "Treatment", detail: "Spray plants forcefully with water to dislodge mites; apply neem oil or insecticidal soap focusing on leaf undersides" },
                        { label: "Note", detail: "Increase humidity around plants; maintain proper irrigation to prevent plant stress" }
                    ]
                },
                {
                    heading: "Bacterial Wilt",
                    info: [
                        { label: "Sign", detail: "Sudden wilting of entire plant despite moist soil; brown discoloration of vascular tissue; bacterial ooze visible when stem is cut and placed in water" },
                        { label: "When", detail: "High temperature and humidity conditions, common in lowland tropical areas" },
                        { label: "Treatment", detail: "No effective chemical control; remove and destroy infected plants; avoid planting in infected soil for at least 3 years" },
                        { label: "Note", detail: "Use resistant varieties in endemic areas; practice crop rotation with non-susceptible crops like cereals and legumes" }
                    ]
                }
            ],
            weeding_caring: [
                {
                    heading: "Staking and Support",
                    info: "Install stakes or cages when plants are 30cm tall. This prevents branches from breaking under fruit weight and keeps fruits off the ground, reducing disease risk and improving air circulation."
                },
                {
                    heading: "Mulching",
                    info: "Apply 5-7cm of organic mulch (straw, dried leaves, or compost) around plants after they are established. This suppresses weeds, conserves moisture, and adds nutrients as it decomposes."
                },
                {
                    heading: "Pruning",
                    info: "Remove lower leaves that touch the soil to prevent soil-borne diseases. For indeterminate varieties, limit to 4-5 main stems by removing excess suckers for better fruit production and air circulation."
                },
                {
                    heading: "Weed Control",
                    info: "Keep area around brinjal plants weed-free, especially during early growth stages when competition can significantly reduce yields. Hand weed carefully to avoid damaging shallow root systems."
                }
            ],
            good_for_cultivation: [
                "Brinjals are ready for harvest when fruits are firm, glossy, and have attained the typical size and color for the variety. The ideal size varies by variety - smaller fruits are generally more tender and less seedy.",
                "Properly ripe fruits should yield slightly to gentle pressure without being too soft. Over-mature fruits develop a dull appearance and become seedy and bitter.",
                "For long varieties like Pusa Purple Long, harvest when fruits are 25-30 cm long; for cluster varieties like Pusa Purple Cluster, harvest when fruits develop their characteristic purple color and firmness."
            ],
            tips: [
                "In hot regions, provide afternoon shade to prevent sunscald on fruits and improve overall plant vigor during extreme summer temperatures",
                "Practice crop rotation, avoiding planting in soil where other solanaceous crops (tomatoes, potatoes, peppers) have grown within the past three years",
                "Interplant with marigolds to repel nematodes and other soil-borne pests common in brinjal cultivation",
                "During monsoon season, grow brinjals on raised beds to improve drainage and prevent waterlogging and subsequent root diseases",
                "Apply calcium-rich amendments like crushed eggshells or gypsum to prevent blossom end rot, a common issue in brinjal cultivation",
                "Harvest regularly (every 3-4 days) once plants begin producing to encourage continued fruiting and higher overall yields",
                "For optimal flavor and texture, harvest in the morning when temperatures are cooler and plants are well-hydrated",
                "In areas with fruit and shoot borer prevalence, consider using floating row covers during early growth stages to prevent initial infestations"
            ]
        }
    }
};

export default plant;