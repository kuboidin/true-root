/**
 * PLANT TEMPLATE FOR LLM GENERATION
 *
 * This template provides the structure for creating JSON data for plant profiles.
 * Follow the instructions and descriptions for each field to generate accurate and comprehensive plant data.
 * Replace all placeholder values with actual data for the specific plant.
 * 
 * IMPORTANT GUIDELINES FOR LLM RESEARCHERS:
 * 1. The examples provided in this template are for reference only.
 *    DO NOT copy them verbatim. Instead, use them as inspiration to create unique,
 *    accurate content specific to the plant you are documenting.
 * 2. For each field, provide detailed, plant-specific information based on scientific research.
 * 3. Ensure all content is factually accurate and tailored to the Indian gardening context.
 * 4. Include citations and sources where appropriate, especially for health benefits and nutritional information.
 * 5. Adapt growing instructions to match the specific requirements of your plant.
 * 6. The tomato examples shown are NOT applicable to all plants - each plant has unique needs and characteristics.
 * 7. Focus on creating comprehensive, educational content that helps home gardeners successfully grow the plant.
 */

import app from "@/config/app";
import Link from "next/link";
import {GiBee, GiFarmTractor, GiFootprint, GiPlantRoots, GiWaterDrop} from "react-icons/gi";
import TabLink from "@/components/pages/tab-link";

const plant = {
    // Basic plant information - Essential details about the plant for identification and categorization
    name: "", // The common name of the plant in plural form (e.g., "Tomatoes", "Carrots", "Bell Peppers")
    plural: "", // The plural form of the plant name (e.g., "Tomatoes", "Carrots", "Bell Peppers")
    singular: "", // The singular form of the plant name (e.g., "Tomato", "Carrot", "Bell Pepper")
    other_name: [], // Array of alternative names, including translations in Hindi and other Indian languages
                    // Example: ["Tomato", "टमाटर", "Tamatar"] or ["Carrot", "गाजर", "Gajar"] or ["Brinjal", "Eggplant", "बैंगन", "Baingan"]
                    // Include all common names and regional variations to improve searchability
    path: "", // LLM Ignore this - it will be populated manually - URL path for the plant page, should be lowercase and hyphenated
                // Example: "/how-to-grow/tomatoes" or "/how-to-grow/carrots" or "/how-to-grow/bell-peppers"
    datePublished: "", // LLM Ignore this - it will be populated manually - Publication date in format "YYYY-MM-DD HH:MM:SS AM/PM" (e.g., "2024-05-15 10:30:00 AM")
    dateModified: "", // LLM Ignore this - it will be populated manually - Last modification date in format "YYYY-MM-DD HH:MM:SS AM/PM" (e.g., "2024-05-20 02:15:00 PM")
    cover: "", // Leave this field empty to be filled manually - Path to the main cover image
    search: "", // Keywords for search functionality, including translations and common search terms
               // Example: "Tomato, टमाटर, Tamatar, Tomatoes, growing tomatoes, tomato plant"
               // Include variations, misspellings, and related terms people might search for

    // Leave this field empty to be filled manually - Image gallery for the plant
    images: [
        // Array of image objects with src and alt text
        // {src: "/assets/plants/vegetable/plant-name/image1.jpeg", alt: "Description of the plant - ${app.name}" },
    ],

    // SEO-related information - Critical for search engine visibility and user engagement
    seo: {
        images: [ // Leave this field empty to be filled manually - Will be populated with image paths for structured data markup
        ],
        title: "", // SEO title - Should be compelling, include the plant name, and be under 60 characters
                  // Example: "How to Grow Tomatoes: Complete Guide & Care" or 
                  // "Growing Carrots: A Comprehensive Guide for Indian Gardens" or
                  // "Bell Peppers: From Seed to Harvest - Complete Growing Guide"
                  // Include keywords that people search for and make it descriptive of the content
        description: "", // Meta description - Summarize the guide in 150-160 characters to encourage clicks from search results
                        // Example: "Learn how to grow tomatoes at home with our complete guide covering soil preparation, planting, care, and harvesting techniques for Indian climate conditions."
                        // Example: "Master carrot cultivation with our expert tips on soil requirements, watering schedules, and common pest management for successful home gardening in India."
                        // Should highlight unique value and include main keywords
        keywords: [], // Array of keywords related to the plant - Include variations and long-tail keywords
                     // Example for tomatoes: [
                     //   "grow tomatoes", "tomato growing tips", "tomato nutrition", 
                     //   "health benefits of tomatoes", "organic tomato farming", 
                     //   "grow tomatoes at home", "tomato planting guide", 
                     //   "tomato diseases and cures", "growing tomatoes in India"
                     // ]
                     // Include at least 10-15 relevant keywords and phrases
        thumbnail: "", // Leave this field empty to be filled manually - Path to the OG image for social sharing
    },

    // Hero section information - The first content users see, should be engaging and informative
    hero: {
        heading: "", // Main heading with local name - Include both English and Hindi names
                    // Example: "Tomatoes (टमाटर)" or "Carrots (गाजर)" or "Bell Peppers (शिमला मिर्च)"
                    // Format consistently with plant name first, followed by Hindi name in parentheses
        sub_heading: "", // Scientific name and category - Include botanical classification
                        // Example: "Solanum lycopersicum, Vegetable (Fruit)" or 
                        // "Daucus carota, Root Vegetable" or 
                        // "Capsicum annuum, Vegetable"
                        // Include any special classification notes (e.g., botanically a fruit but used as vegetable)
        eco_badge: {
            score: 0, // Eco-friendliness score from 1-5 (5 being most eco-friendly)
                     // Base this on water usage, pesticide requirements, soil impact, and overall sustainability
                     // 1 = Not eco-friendly, requires high resources and interventions
                     // 3 = Moderately eco-friendly with average resource needs
                     // 5 = Highly eco-friendly, minimal environmental impact
            information: "" // Description of the plant's environmental impact - Be specific about resource needs
                          // Example: "Tomatoes are relatively eco-friendly when grown in appropriate conditions. 
                          // They have moderate water needs and, with proper mulching, irrigation, and organic 
                          // practices, they can thrive with less water. Growing tomatoes locally and organically 
                          // reduces the carbon footprint."
                          // Example: "Carrots are highly eco-friendly, requiring minimal water and pesticides 
                          // when grown organically. Their deep roots help aerate the soil and they can be grown 
                          // without chemical fertilizers."
                          // Include water usage, fertilizer needs, pest resistance, and sustainability factors
        },
        about_quick_list: [ // Maximum 3 key points about the plant - Choose the most distinctive features
            // Examples for tomatoes:
            // "One of the easiest vegetables to grow",
            // "Fruiting within 60 to 85 days (depending on variety)",
            // "Highly suitable for hydroponic cultivation"

            // Examples for carrots:
            // "Perfect for beginners and children to grow",
            // "Harvest in 70-80 days from sowing",
            // "Grows well in containers and raised beds"

            // Examples for bell peppers:
            // "Rich in vitamins A, C, and antioxidants",
            // "Takes 60-90 days from transplant to harvest",
            // "Thrives in warm weather and full sun"

            // Focus on unique selling points: ease of growing, time to harvest, space requirements,
            // special growing conditions, or exceptional nutritional benefits
        ],
        snippet: "", // Brief description of the plant, its benefits and uses (use JSX with <br/> tags for formatting)
                    // This should be a comprehensive yet concise introduction to the plant (5-6 lines)
                    // Include information about:
                    // 1. Growing difficulty and suitability for home gardening
                    // 2. Key nutritional benefits and health properties
                    // 3. Culinary uses and versatility
                    // 4. Any Ayurvedic or traditional medicinal properties
                    // 5. Why it's rewarding to grow at home

        // Example for tomatoes:
        // <>
        //    Tomatoes are nutrient-packed and easy to grow, making them perfect for gardens, balconies, or even indoors. <br/>
        //    Rich in vitamins A and C, and loaded with lycopene, tomatoes offer numerous health benefits, including antioxidant properties that support heart health and may reduce cancer risks. <br/>
        //    Versatile in the kitchen, tomatoes enhance everything from fresh salads to hearty sauces. <br/>
        //    In Ayurveda, they balance digestion and improve skin vitality. <br/>
        //    Whether you're a beginner or an experienced gardener, tomatoes are rewarding to cultivate at home with minimal effort.
        // </>

        // Example for carrots:
        // <>
        //    Carrots are versatile root vegetables that are nutritious, delicious, and relatively easy to grow. <br/>
        //    Packed with beta-carotene, fiber, and antioxidants, they offer excellent health benefits. <br/>
        //    With proper soil preparation, carrots can be grown successfully in gardens, raised beds, or containers.
        // </>

        growing_condition: [
            // Array of key growing conditions (typically 3) - Choose the most critical parameters for successful cultivation
            // Each condition should include a name and specific value range appropriate for the plant
            // Always include temperature requirements, pH level, and harvest/fruiting time

            // Examples for tomatoes:
            // {name: 'Temperature', value: "18°C - 30°C"},  // Optimal temperature range for growth
            // {name: 'pH', value: '6.0 - 6.8'},            // Soil pH requirement
            // {name: 'Fruiting', value: '60 to 85 days'}   // Time from transplant to harvest

            // Examples for carrots:
            // {name: 'Temperature', value: "15°C - 25°C"},  // Optimal temperature range for growth
            // {name: 'pH', value: '6.0 - 7.0'},            // Soil pH requirement
            // {name: 'Harvest', value: '70 to 80 days'}    // Time from sowing to harvest

            // Examples for bell peppers:
            // {name: 'Temperature', value: "21°C - 32°C"},  // Optimal temperature range for growth
            // {name: 'pH', value: '5.8 - 6.5'},            // Soil pH requirement
            // {name: 'Harvest', value: '60 to 90 days'}    // Time from transplant to harvest

            // Other possible conditions to include:
            // {name: 'Sunlight', value: "Full sun (6-8 hours daily)"}
            // {name: 'Water', value: "Regular, consistent moisture"}
            // {name: 'Spacing', value: "45-60 cm apart"}
            // {name: 'Depth', value: "1-2 cm deep"}
        ],
        more_info: {
            heading: "", // Additional information heading - Focus on the most critical growing factor
                        // Example: "Soil Conditions: " or "Water Requirements: " or "Sunlight Needs: "
                        // This should highlight a key aspect of cultivation not covered in growing_condition
            items: [
                // Array of additional information points - Provide specific, actionable advice
                // Include at least 2-3 detailed points about the heading topic

                // Examples for tomatoes soil conditions:
                // "Soil type: Well-drained loamy or sandy soil with pH 6.0-6.8",
                // "Soil must be rich in organic matter, with good aeration and drainage to avoid water logging.",
                // "Add compost or well-rotted manure before planting to improve soil structure and fertility."

                // Examples for carrots soil conditions:
                // "Soil type: Light, sandy, loose soil free of rocks and clumps for straight root development",
                // "Avoid fresh manure as it can cause forking of roots",
                // "Soil should be worked to a depth of at least 30 cm to allow proper root development"

                // Examples for bell peppers soil conditions:
                // "Soil type: Rich, well-draining soil with plenty of organic matter",
                // "Consistent moisture is essential, especially during flowering and fruiting",
                // "Mulch around plants to retain moisture and suppress weeds"

                // Be specific about measurements, timing, and techniques
                // Provide practical advice that home gardeners can easily implement
            ]
        }
    },

    // Social sharing information - Content for when users share the article on social media or via email
    share: {
        text: "", // Text for social sharing - Brief, engaging message that encourages clicks
                 // Example: "Learn how to grow tomatoes at home with our complete guide!"
                 // Example: "Discover the secrets to growing perfect carrots in your garden"
                 // Keep under 100 characters, include a call to action, and highlight a key benefit
        subject: "", // Email subject for sharing - Similar to text but formatted for email context
                    // Example: "Complete Guide: How to Grow Tomatoes at Home"
                    // Example: "Expert Tips for Growing Carrots in Your Garden"
                    // Keep concise but descriptive, 40-60 characters is ideal
        tags: "" // Trending Hashtags for social media - Include plant name and gardening-related tags
               // Example: "#grow #tomatoes #garden #plant #organicgardening #homegrown"
               // Example: "#carrots #gardening #growyourown #vegetables #healthyliving"
               // Use 4-6 relevant hashtags, research popular gardening hashtags for better reach
    },

    // Tab content sections - Detailed information organized into tabs for better user experience
    tabs: {
        // "Good to know" section - Educational content about the plant's benefits, risks, and properties
        good_to_know: {
            heading: "", // Introductory text for the good to know section - Brief overview of growing conditions
                        // Example: "Tomatoes grow well in pots, raised beds, or directly in the ground. Choose a sunny spot with at least 6-8 hours of sunlight daily. Ensure proper spacing between plants (45-60 cm apart) to allow air circulation and prevent fungal infections."
                        // Example: "Carrots prefer cool weather and grow best in loose, sandy soil free from rocks and clumps. They require consistent moisture and full sun to partial shade for optimal root development."
                        // Summarize key growing requirements in 2-3 sentences

            // Health benefits section - Evidence-based health advantages of consuming the plant
            health_benefits: [
                // Array of health benefit objects (provide at least 5-7 scientifically supported benefits), each point must include a trusted source, strictly follow the schema from example
                // Schema - [ { heading: "Benefit name - Keep concise but descriptive", detail: "Detailed explanation - Explain the mechanism and specific compounds responsible", source: { link: "Scientific source URL - Use peer-reviewed sources when possible", title: "Name of the source (e.g., 'PubMed', 'Harvard Health', 'Mayo Clinic')" } ]
                // Each benefit must include a credible scientific source with link
                // Example for tomatoes:
                // {
                //     heading: "Heart Health", // Benefit name - Keep concise but descriptive
                //     detail: "Tomatoes are rich in potassium and lycopene, which are known to reduce blood pressure and lower the risk of heart disease by improving circulation and reducing inflammation", // Detailed explanation - Explain the mechanism and specific compounds responsible
                //     source: {
                //         link: "https://pubmed.ncbi.nlm.nih.gov/12587984/", // Scientific source URL - Use peer-reviewed sources when possible
                //         title: "PubMed" // Name of the source (e.g., "PubMed", "Harvard Health", "Mayo Clinic")
                //     }
                // },
                // Example for carrots:
                // {
                //     heading: "Eye Health", 
                //     detail: "Carrots are rich in beta-carotene, which the body converts to vitamin A, essential for good vision. Regular consumption may help prevent night blindness and age-related macular degeneration.",
                //     source: {
                //         link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6523787/",
                //         title: "PMC"
                //     }
                // },
                // Focus on benefits with strong scientific support
                // Include a diverse range of benefits (cardiovascular, digestive, immune, etc.)
            ],

            // Risks section - Potential concerns and contraindications
            right_section: {
                heading: "Risks and Things to Consider", // Section heading - Keep as is
                information: "", // HTML content describing risks with source citation (use JSX)
                                // Example: "Make sure that you thoroughly wash or cook raw tomatoes before consuming them. As with other fresh produce, raw tomatoes can have germs that cause foodborne illnesses like Listeria and Salmonella. Foodborne illness is a greater concern for those who: <span className=\"text-2xs\">Source: <Link href=\"https://academic.oup.com/eurjpc/article/31/8/922/7450162\" target=\"_blank\" className=\"green-link\">Oxford Academic</Link></span>"
                                // Include a credible source citation
                content: "", // HTML content with list of risk factors (use JSX)
                            // Example: "<ul className=\"list-disc text-sm mt-[23px]\"><li>Are aged 65 and older or 5 and younger</li><li>Are pregnant</li><li>Have underlying health concerns (e.g., cancer, diabetes, and liver and kidney disease)</li><li>Take medications that lower the body's ability to fight germs and illness</li></ul>"
                            // Format as a bulleted list for readability
                footer_info: "" // Additional risk information (use JSX)
                              // Example: "Tomatoes may also worsen existing conditions like gastroesophageal reflux (GERD) and chronic migraine. Talk with a healthcare provider to determine if you need to avoid tomatoes."
                              // Include any special warnings or advice for consulting healthcare providers
            },

            // Nutritional information - Detailed breakdown of nutritional content
            nutrition: {
                top: "", // Introduction to nutritional content with source (use JSX)
                       // Example: "One whole raw tomato provides the following nutrients: <span className=\"text-2xs\">Source: <Link href=\"https://fdc.nal.usda.gov/fdc-app.html#/food-details/1103276/nutrients\" target=\"_blank\" className=\"green-link\">USDA</Link></span>"
                       // Always cite a reliable nutritional database like USDA
                list: [
                    // Array of nutritional values (provide at least 5-7 key nutrients)
                    // Schema - [ {name: "string", value: "string with unit if applicable"}, ]
                    // Example for tomatoes:
                    // {name: "Calories", value: "22.5"},
                    // {name: "Fat", value: "0.25g"},
                    // {name: "Sodium", value: "6.25mg"},
                    // {name: "Carbohydrates", value: "4.86g"},
                    // {name: "Fiber", value: "1.5g"},
                    // {name: "Protein", value: "1.1g"},
                    // Example for carrots:
                    // {name: "Calories", value: "41"},
                    // {name: "Fat", value: "0.2g"},
                    // {name: "Carbohydrates", value: "9.6g"},
                    // {name: "Fiber", value: "2.8g"},
                    // {name: "Protein", value: "0.9g"},
                    // {name: "Vitamin A", value: "509% DV"},
                    // Include macronutrients and any standout micronutrients
                    // Use standard units (g, mg, mcg) and be consistent
                ],
                bottom: "" // Additional nutritional information (use JSX)
                          // Example: "Whole, fresh tomatoes are also a source of several micronutrients, including Folate, Potassium, Vitamin C, and Vitamin K."
                          // Example: "Carrots are exceptionally rich in vitamin A (from beta-carotene) and also contain significant amounts of vitamin K, potassium, and antioxidants."
                          // Highlight any exceptional nutritional properties not covered in the list
            },

            // Ecological effects - Environmental impact and sustainability aspects
            ecological_effects: [
                // Array of ecological effect objects (provide at least 5 distinct environmental impacts)
                // Schema: [{ icon: "JSX React icon component - Choose the most appropriate icon", title: "Effect title - Keep concise but descriptive", description: "Detailed explanation - Explain the specific ecological benefit" }],
                // Example for tomatoes:
                // {
                //     icon: <GiBee className="-mt-2 mr-2" color="#facc15" size={30}/>, // React icon component - Choose the most appropriate icon
                //     title: "Biodiversity Support", // Effect title - Keep concise but descriptive
                //     description: "Tomatoes attract pollinators such as bees, which enhance overall garden health." // Detailed explanation - Explain the specific ecological benefit
                // },
                // Example for carrots:
                // {
                //     icon: <GiPlantRoots className="-mt-2 mr-2" color="#34d399" size={30}/>,
                //     title: "Soil Health",
                //     description: "Carrot cultivation, especially when practiced with crop rotation, helps break up compacted soil and improve its structure through their deep taproots."
                // },
                // Available icons: GiBee (for pollination/biodiversity), GiPlantRoots (for soil health), 
                // GiFarmTractor (for sustainable farming), GiWaterDrop (for water usage), GiFootprint (for carbon footprint)
                // Cover diverse aspects: biodiversity, soil health, water usage, carbon footprint, pest management
            ]
        },

        // How to grow section - Comprehensive step-by-step guide for successful cultivation
        how_to_grow: [
            // Array of growing step objects - Create a chronological sequence from seed/seedling to harvest
            // IMPORTANT: The steps below are tomato-specific examples. You MUST create unique, plant-specific
            // instructions tailored to your plant's growth cycle, needs, and characteristics.
            // Do NOT copy these steps directly - they will not be appropriate for most other plants.
            // Follow the schema from example strictly
            // Provide at least 5 steps

            // Example for first step (variety selection) - Customize for your specific plant:
            // {
            //     heading: "Step 1: Choose the Right Variety for Your Space",
            //     steps: [
            //         <><strong>Determinate varieties: </strong> Compact, bushy plants that grow to a predetermined height, ideal for containers and small spaces</>,
            //         <><strong>Indeterminate varieties: </strong> Vining plants that continue growing until killed by frost, better for gardens with trellises or cages</>,
            //         "For beginners, choose disease-resistant varieties suited to your local climate conditions.",
            //         <><strong>Tip: </strong> Research varieties that perform well in your specific region of India.</>
            //     ]
            // },
            // {
            //     heading: "Step 2: Prepare the seedling tray (Recommended for beginners)",
            //     steps: [
            //         "Seeding soil is different, it should be light, airy, free of debris, neutral pH, and hold moisture.",
            //         <><strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the seeding tray has drainage holes.</>,
            //         <><strong>Tip: </strong> Soil + Compost + Coco peat (Coco peat helps retain moisture for longer, if you do not have Coco peat it&apos;s Okay, just maintain the proper moisture).</>,
            //         <><strong>Tip: </strong> See the <TabLink section="Seeding Process">Seeding process</TabLink> on this page for tips and things to care about.</>
            //     ]
            // },
            // {
            //     heading: "Day 0: Seeding",
            //     steps: [
            //         "Sow seeds at 0.5 - 2.5 cm depth, just cover them with a thin layer of coco peat, compost, or soil and water them.",
            //         "If you are a beginner then use a seedling tray, seedling tray helps for easy movement, you can place them under sunlight during moving but move them inside during noon to protect them from harsh heat and so on.",
            //         "Keep in low sunlight or inside (not dark) if possible.",
            //         <><strong>Tip: </strong> See the <TabLink section="Seeding Process">Seeding process</TabLink> on this page for tips and temperature and environment conditions.</>
            //     ]
            // },
            // {
            //     heading: "Day 7: Sprouting",
            //     steps: [
            //         "The Seed should sprout in a week.",
            //         "They need full light from day one of germination.",
            //         "Shift them to 1-2 hours of sunlight when you see 2 leaves, at this stage plants start looking for sunlight, if you do not put them in sunlight they will grow weak but longer and in multi-direction in search of sunlight (We don&apos;t want that).",
            //         "Seed provides all the required nutrients to support the life of the plant for 2 weeks.",
            //         <><strong>Tip: </strong> Do not add any fertilizer of any kind.</>,
            //         <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Watering Schedule">watering guide</TabLink> for more information</>
            //     ]
            // },
            // {
            //     heading: "Day 15: First organic fertilizer",
            //     steps: [
            //         "Provide liquid onion peel fertilizer in small dosages.",
            //         <>Onion peel fertilizer is rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, and Magnesium, see the <TabLink section="Nutritional Requirements">nutritional requirement</TabLink> section for more information.</>,
            //         "Add bone meal and vermicompost for nutrients.",
            //         <><strong>Tip: </strong> Do not use NPK, DAP, or chemical fertilizer at this stage, the plant will not be able to handle and die</>,
            //         <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Watering Schedule">watering guide</TabLink> for more information</>
            //     ]
            // },
            // {
            //     heading: "Day 28: Shift to a larger pot (Only if you planted it in the seedling tray)",
            //     steps: [
            //         "From seeding to 1 month, plants are very delicate, do not remove them or shift them, only perform shifting after 4 weeks of seeding. At this stage, seeds should have grown into small plants.",
            //         "Use at least a 12-18 inch deep pot or grow bag.",
            //         <><strong>Soil Mix: </strong> Use a well-draining potting mix enriched with compost. Ensure the pot has drainage holes.</>,
            //         "Add Neem powder (Neem Khali) to the soil to protect the roots from fungus and other germs.",
            //         "When you shift the plants from seedling to ground, grow bags or pots, make sure the roots are not exposed to air. Try not to disturb the roots.",
            //         "Be slow and gentle when removing from the seeding tray and planting in the pot or grow bags.",
            //         <>If roots are exposed to air or you see no soil with roots or if the plant is weathered (when you borrow from your friend), then <strong>sock the plant&apos;s root in water for 5-7 minutes</strong>. If plants are in very bad condition add 1 spoon of sugar in water and dip plants for 15 minutes. It will revive the plants and stabilize them.</>,
            //         "Perform shifting in the evening only and add plenty of water.",
            //         "Plants will/might show some stress like leaves withering after shifting, but they will recover soon if you have shifted correctly.",
            //         "To shift them in larger pots, put at least 40-50% of the plant stem under the soil, this will help in growing stronger roots.",
            //         "After seedlings have grown and become plants, they need at least 5-6 hours of sunlight every day.",
            //         <><strong>Tip: </strong> Add a layer of small stones or broken pots at the bottom of the grow bag or pots to improve drainage.</>
            //     ]
            // },
            // {
            //     heading: "Day 40: 2nd dose of fertilizer",
            //     title: "At this point, plants are bulletproof and the road is going to get easy.",
            //     steps: [
            //         "Add some organic fertilizers like peanuts, banana leaves, or similar fertilizers, and make sure plants are twice the size when shifted, only then provide the liquid fertilizer.",
            //         "You can also add seaweed, bone meal, eggshell powder, etc.",
            //         "Try to use water-soluble fertilizer at the beginning.",
            //         <><strong>Recommendation: </strong> We recommend not to use chemical fertilizers, They are harmful to the environment and you. Things grown organically taste much better and are healthier. But if you must then you can add them at this stage.</>
            //     ]
            // },
            // {
            //     heading: "Day 52: Grooming and caring (Pinching) of tomato plants",
            //     title: <>10-12 days after 2nd dose of fertilizer, You will see the plants have grown rapidly. Let&apos;s perform Pinching. The act of <strong>pinching</strong> involves the <strong>removal of the growing point of a shoot along with a few leaves</strong>. About 1-2 cm of a growing shoot of a young plant is snapped off with fingers.</>,
            //     steps: [
            //         "Make sure the main stem is thick enough and the plant has grown to twice the height and you see clusters of small growing leaves at the end of stems.",
            //         "This will help the plant to stop increasing height and focus on increasing the width and number of stems.",
            //         "Try to use water-soluble fertilizer at the beginning.",
            //         <><strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</>,
            //         <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the <TabLink section="Nutritional Requirements">watering guide</TabLink> for more information</>
            //     ]
            // },
            // {
            //     heading: "Day 64: Add Support",
            //     title: "You will see plant has grown dense and bigger",
            //     steps: [
            //         "If your pot or grow bag is smaller, now is the time to shift them into bigger pots or grow bags.",
            //         "Remove leaves and small stems near the soil, this will help the plant grow in length and protect it from soil-based diseases.",
            //         "Add support at this stage.",
            //         <><strong>Important: </strong> If you see that the plant is starting to grow flowers at this time, cut them.
            //             This will allow plants to grow further and yield more fruits at a later stage.
            //             If you don&apos;t cut them at this time, plant growth will stop and the plant will focus completely on flowers and fruits, this will result in small plants and low tomato yield.
            //         </>,
            //         <><strong>Tip: </strong> Perform this pinching after every 10 days until you see flowers.</>,
            //         <><strong>Watering: </strong> Only water them if the top soil is dry, Avoid excess water at this stage, see the watering guide for more information.</>,
            //         <><strong>Fertilizer: </strong> Until you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.</>
            //     ]
            // },
            // {
            //     heading: "Day 87: Flowering & Remove Suckers",
            //     title: <>You might start seeing the flowers at this stage <br/>
            //         A <strong>&quot;sucker&quot;</strong> is <strong>an extra shoot or leaves growing between the main stalk of the tomato plant and an established branch, often growing at a 45° angle from the plant</strong>.
            //     </>,
            //     steps: [
            //         "Clean the small leaves and thin stems up to 5-7 inches from the soil, only keep the thick branches.",
            //         "Remove suckers, (Suckers are leaves that are growing between two branches) they take plant&apos;s nutrients and we don&apos;t want them.",
            //         <><strong>Important: </strong> If/When you see flowers/fruits, at this time plants need more nutrients than ever.</>,
            //         <><strong>Tip: </strong> Remove suckers whenever you see them for a health plant.</>,
            //         <><strong>Tip: </strong> Increase the dosage of fertilizer.</>,
            //         <><strong>Watering: </strong> When you see fruit, then you must not let the soil dry, tomatoes may turn black if face water scarcity at this stage.</>,
            //         <><strong>Fertilizer: </strong> After you see bigger flowers and small fruits, add fertilizers containing micronutrients, such as seaweed (spray), onion peel liquid, and banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, and try not to repeat the same fertilizer.</>
            //     ]
            // },
            // {
            //     heading: "Day 112: Tomatoes will start turning red",
            //     title: "At this stage, tomatoes will start turning red and within a few days they will be ready to harvest.",
            //     steps: [
            //         <><strong>Tip: </strong> Increase the dosage/frequency of fertilizer</>,
            //         <><strong>Watering: </strong> You must not let the soil dry, Water is very important</>,
            //         <><strong>Fertilizer: </strong> See the Fertilizer section for homemade and nutrient-rich fertilizers.</>
            //     ]
            // },
            // {
            //     heading: "Day 120: Fruit of hard work",
            //     title: "Harvest the fruit of your hard work. This is not the end, Tomatoes will keep on provided with minimal watering and care at this time.",
            //     steps: [
            //         <><strong>Tip: </strong> Remove weeds and keep looking for diseases, check the diseases section of how to find and fix the plant diseases.</>,
            //         <><strong>Tip: </strong> Keep providing fertilizer every 15-20 days.</>,
            //         <><strong>Watering: </strong> You must not let the soil dry, Water is very important.</>,
            //         <><strong>Fertilizer: </strong> See the Fertilizer section for homemade and nutrient-rich fertilizers.</>
            //     ]
            // },
            // {
            //     heading: "Continue",
            //     title: <>Along with these steps and stages, there are a few things you need to perform throughout the process to grow tomatoes, each thing will take only 20-30 minutes a week of your time. <br/>
            //         Please see the related section for more information on each step, tips, and homemade recipes for fertilizers and plant care. <br/>
            //         Perform these steps every 3 weeks after 40 days of seeding (after shifting).
            //     </>,
            //     steps: [
            //         <><strong>Watering: </strong> <br/>
            //             Until you see the flowers on the plant, you will water them normally i.e. Only water them if the top soil is dry.<br/>
            //             If you water excessively, plants might get fungus, and attract more diseases, flowers will wither before time and fruiting will be delayed. <br/>
            //             When you see fruit, then you must not let the soil dry, tomatoes may turn black if face water scarcity at this stage. <br/>
            //             Check the <TabLink section="Watering Schedule">watering section</TabLink> for more information.
            //         </>,
            //         <><strong>Weeding & Caring: </strong> <br/>
            //             Remove weeds regularly. <br/>
            //             Perform Pinching. <br/>
            //             Remove Suckers. <br/>
            //             Check the <TabLink section="Weeding & Caring">weeding & caring</TabLink> section for more information.
            //         </>,
            //         <><strong>Fertilizer: </strong> <br/>
            //             Until when you don&apos;t see the small tomatoes, you will have to provide liquid fertilizer every 20 days.<br/>
            //             After you see bigger flowers and small fruits, add fertilizers containing micronutrients, such as seaweed (spray), onion peel liquid, and banana peel liquid, provide liquid fertilizer every 15 days, keep on changing, and try not to repeat the same fertilizer.<br/>
            //             Check the <TabLink section="Fertilizer Requirements">fertilizer section</TabLink> for more information.
            //         </>,
            //         <><strong>Diseases: </strong> <br/>
            //             Plants are prone to diseases, you need to look for signs and take care before they spread or ruin your hard work. <br/>
            //             There is very little chance of diseases in a controlled environment. <br/>
            //             Check the <TabLink section="Diseases - Know & Treat">diseases section</TabLink> for more information.
            //         </>,
            //         <><strong>Pollination: </strong> <br/>
            //             We believe in harmony, plants grow better with other plants and insects, try not to restrict your garden to birds, insects, bugs, and other organisms. <br/>
            //             Birds, and insects not only help in pollination but also improve the positivity of the environment, and help in nutrition circulation. <br/>
            //             Birds can eat small bugs and protect plants from diseases for free. <br/>
            //             Check the <TabLink section="Diseases - Know & Treat">Flowers Withering (No Pollination) section</TabLink> for more information.
            //         </>
            //     ]
            // }
        ],

        // Process section - Detailed technical information about growing the plant
        process: {
            quick_info: "", // Brief overview of growing process - 2-3 sentences summarizing key requirements
                          // Example: "Tomatoes grow well in pots, raised beds, or directly in the ground.
                          // Choose a sunny spot with at least 6-8 hours of sunlight daily.
                          // Ensure proper spacing between plants (45-60 cm apart) to allow air circulation and prevent fungal infections."
                          // Focus on location, light, spacing, and any critical requirements

            quick_points: [
                // Array of key points about growing the plant - Include 3-5 essential facts
                // Example for tomatoes:
                // "The life of a tomato plant is 5-6 months.",
                // "Tomatoes can be grown in spring (February), monsoon (July Mid) & Autumn (September end).",
                // "Summers are tough on tomatoes; when temperature increases, tomatoes ripen prematurely."

                // Example for carrots:
                // "The life cycle of carrots is 70-80 days from sowing to harvest.",
                // "Best growing seasons in India are winter and early spring.",
                // "Carrots prefer cool weather between 15-25°C for optimal root development."

                // Include plant lifespan, optimal growing seasons for India, and key climate considerations
            ],

            // Nutritional requirements for the plant - What nutrients the plant needs to thrive
            nutritional_requirements: [
                // Array of nutrient objects (provide at least 3-5 major nutrients)
                // For each nutrient, explain its function in the plant's development
                // Schema - [ {name: "string", value: "string with unit if applicable"}, ]
                // Example for tomatoes:
                // {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                // {name: "Aids in root development and fruiting", value: "P (Phosphorus)"},
                // {name: "Improving fruit & flower quality", value: "K (Potassium)"},
                // {name: "Prevents blossom-end rot", value: "Ca (Calcium)"},
                // {name: "Photosynthesis and fruit ripening", value: "Mg (Magnesium)"},

                // Example for root vegetables:
                // {name: "Promotes root development", value: "P (Phosphorus)"},
                // {name: "Enhances overall plant health", value: "K (Potassium)"},
                // {name: "Supports early growth stages", value: "N (Nitrogen)"},

                // Be specific about how each nutrient affects the particular plant
                // Include both macronutrients and important micronutrients
            ],

            // Seeding process information - Detailed explanation of seed germination requirements
            seeding_process: "", // Description of the seeding process (use JSX for formatting)
                               // Example for tomatoes:
                               // <>Tomato seeds need water to sprout, in fact it's all they need. <br/>
                               // The seed coat absorbs the water, swells & cracks, allowing the tiny plant inside to emerge and begin its life. <br/>
                               // Not enough moisture and the seeds won't sprout; too much water can drown the seedlings.<br/>
                               // <strong>Testing moisture -</strong> The seeding soil must retain its shape when squeezed tightly, yet it should not drip much water if any at all.</>

                               // Include information about:
                               // 1. Optimal conditions for germination (moisture, temperature, light)
                               // 2. The germination process specific to this plant
                               // 3. Common issues and how to avoid them
                               // 4. How to test for proper conditions

            // Additional seeding information - Specific details about the seeding process
            more_info: [
                // Array of information objects - Include at least 5-7 detailed points
                // Schema - { heading: "Information category - Keep concise but descriptive", info: "Detailed explanation - Provide specific, actionable advice" }
                // Example for tomatoes:
                // {
                //     heading: "Seed Selection", // Information category - Keep concise but descriptive
                //     info: "Choose high-quality heirloom or hybrid seeds for your climate." // Detailed explanation - Provide specific, actionable advice
                // },
                // {
                //     heading: "Sowing",
                //     info: "Sow seeds 0.5 cm - 2.5 cm deep in seed trays or pots indoors, 6-8 weeks before the last frost date."
                // },
                // {
                //     heading: "Temperature",
                //     info: "Seeds germinate best at 23-29°C."
                // },

                // Include categories such as:
                // - Seed Selection
                // - Sowing Depth and Method
                // - Temperature Requirements
                // - Environment/Light Needs
                // - Watering Practices
                // - Time to Germination
                // - Special Considerations
            ],

            // Germination stages - Detailed breakdown of the germination process
            germination_stage: [
                // Array of germination stage objects - Include 3-4 key stages
                // Schema - { heading: "Information category - Keep concise but descriptive", info: "Detailed explanation" }
                // Example for tomatoes:
                // { heading: "Radicle Emergence", info: "Within 3-4 days, the first root appears." },
                // { heading: "Shoot Development", info: "Leaves begin to sprout after a week." },
                // { heading: "True Leaves", info: "Typically appear by day 10. This is a critical phase for ensuring good light exposure and proper moisture." }

                // Example for carrots:
                // { heading: "Germination", info: "Seeds typically germinate in 7-14 days, depending on soil temperature." },
                // { heading: "Seedling Emergence", info: "Delicate seedlings emerge with two narrow cotyledon leaves." },
                // { heading: "True Leaf Development", info: "The characteristic feathery true leaves appear 10-15 days after germination." }

                // Provide specific timeframes and descriptions for each stage
                // Include any critical care requirements at each stage
            ],

            // Factors affecting quality - What influences the taste, appearance, and nutritional value
            what_affect_quality: [
                // Array of quality factor objects - Include at least 3-5 factors
                // Schema - { heading: "Information category - Keep concise but descriptive", info: "Detailed explanation" }
                // Example for tomatoes:
                // { heading: "Sunlight", info: "More sunlight leads to sweeter tomatoes." },
                // { heading: "Watering", info: "Consistent watering prevents flavor dilution." },
                // { heading: "Soil Nutrients", info: "Adequate potassium improves flavor. Onion peel fertilizer is rich in potassium." }

                // Example for carrots:
                // { heading: "Soil Texture", info: "Sandy, loose soil produces straighter, more uniform carrots." },
                // { heading: "Watering", info: "Consistent moisture results in sweeter, crisper carrots. Irregular watering can cause splitting." },
                // { heading: "Harvest Timing", info: "Carrots harvested in cool weather tend to be sweeter than those harvested in hot conditions." }

                // Focus on factors that gardeners can control
                // Explain how each factor specifically affects the quality of this particular plant
            ],

            // Fertilizer requirements - Detailed guidance on plant nutrition
            fertilizer_requirements: {
                organic: [
                    // Array of organic fertilizer recommendations - Include at least 3-4 options
                    // Example for tomatoes:
                    // "Use compost, aged manure, bone meal, or worm castings.",
                    // "Use seaweed extract, which contains all necessary nutrients, good for the early stage of plantation.",
                    // "Use onion peel fertilizer - rich in Potassium, Phosphorus, Nitrogen, Calcium, Iron, and Magnesium.",
                    // "Use banana peel fertilizer - contains calcium for root growth, magnesium for photosynthesis, and sulfur for pest resistance."

                    // Example for leafy greens:
                    // "Apply compost tea as a foliar spray for quick nutrient absorption.",
                    // "Use vermicompost which is rich in nitrogen for leafy growth.",
                    // "Apply neem cake as a soil amendment to add nutrients and repel pests."

                    // Focus on locally available, sustainable options
                    // Explain the specific benefits of each fertilizer for this particular plant
                    // Include homemade fertilizer recipes when possible
                ],

                chemical: [
                    // Array of chemical fertilizer recommendations - Include only if necessary
                    // Example for tomatoes:
                    // "A balanced NPK fertilizer such as 10:10:10 at planting, followed by a 5:10:10 fertilizer during flowering and fruiting stages."

                    // Example for root vegetables:
                    // "Low nitrogen, high phosphorus and potassium fertilizer (like 5:10:10) to promote root development rather than leaf growth."

                    // Specify exact NPK ratios appropriate for the plant's growth stage
                    // Always recommend the minimal effective amount to prevent over-fertilization
                    // Include a note about environmental impact when possible
                ],

                how_to: [
                    // Array of fertilizer application instructions - Include at least 3-4 specific instructions
                    // Example for tomatoes:
                    // "Until you don't see small tomatoes, provide liquid fertilizer every 20 days.",
                    // "After flowers and small fruits appear, add micronutrient-rich fertilizers every 15 days.",
                    // "Vary the type of fertilizers used; try not to repeat the same one consecutively."

                    // Include specific timing, frequency, and application methods
                    // Adjust recommendations based on plant growth stages
                    // Provide measurements when possible (e.g., dilution ratios, amounts per plant)
                ],

                tips: [
                    // Array of fertilizer tips - Include at least 2-3 practical tips
                    // Example for tomatoes:
                    // "Loosen 6-10 inches of soil around the plant before adding fertilizer. Plants thrive in loose soil because air and water can circulate better.",
                    // "Add fertilizer in the evening only to prevent nutrient burn from sun exposure."

                    // Focus on practical advice that improves fertilizer effectiveness
                    // Include warnings about common fertilizer mistakes
                    // Provide troubleshooting tips for nutrient deficiencies
                ]
            },

            // Watering schedule - Stage-specific watering guidance
            watering_schedule: [
                // Array of watering instruction objects - Include at least 3-4 growth stages
                // Schema - { heading: "Information category - Keep concise but descriptive", info: "Detailed explanation" }
                // Example for tomatoes:
                // {
                //     heading: "Early Stage", // Growth stage - Be specific about the plant's development phase
                //     info: "Until you see flowers, water only when the top soil is dry. Overwatering at this stage can lead to fungal diseases and delayed fruiting." // Detailed explanation - Include frequency, amount, and cautions
                // },
                // {
                //     heading: "Flowering & Fruiting",
                //     info: "When you see fruit, maintain consistent soil moisture. Tomatoes may develop blossom-end rot if they face water scarcity at this stage."
                // },
                // {
                //     heading: "Excess Watering Warning",
                //     info: "If you water excessively, plants might develop fungus, attract more diseases, and flowers will wither before time, delaying fruiting."
                // }

                // Example for root vegetables:
                // {
                //     heading: "Germination Stage",
                //     info: "Keep soil consistently moist but not waterlogged until seedlings emerge. Water gently to avoid displacing seeds."
                // },
                // {
                //     heading: "Early Growth",
                //     info: "Once seedlings are established, water deeply once or twice a week depending on weather conditions."
                // },
                // {
                //     heading: "Root Development",
                //     info: "Maintain even moisture during the critical root development phase. Inconsistent watering can cause roots to split or become misshapen."
                // }

                // Tailor instructions to the specific water needs of the plant
                // Include seasonal adjustments for Indian climate conditions
                // Provide specific indicators for when to water (e.g., soil appearance, plant behavior)
            ],

            // Common diseases and treatments - Identification and management of plant health issues
            diseases: [
                // Array of disease objects - Include at least 4-6 common problems
                // Schema - { heading: "Information category - Keep concise but descriptive", info: [ { label: "string", detail: "string - disease description" } ] }
                // Example for tomatoes:
                // {
                //     heading: "Black Flies", // Disease or pest name - Use common, recognizable terms
                //     info: [ // Structured information about the problem
                //         { label: "Sign", detail: "Small black insect-sized flies on leaves and stems." }, // Symptoms to look for - Be specific and descriptive
                //         { label: "When", detail: "Throughout the growing season but mostly at the time of fruiting." }, // When the problem typically occurs
                //         { label: "Treatment", detail: "Neem oil spray for 2-3 days regularly. Ensure coverage on both sides of leaves." }, // How to treat - Provide organic solutions when possible
                //         { label: "Note", detail: "Neem oil can be used to treat most insect pests in the garden." } // Additional helpful information
                //     ]
                // },
                // {
                //     heading: "Leaf Curl",
                //     info: [
                //         { label: "Sign", detail: "Leaves curl upward or downward and may become thick and leathery." },
                //         { label: "Treatment", detail: "Remove the entire affected stem. Spray a mixture of buttermilk (25%) and water (75%) on remaining leaves and stems." },
                //         { label: "Note", detail: "Treat at the very beginning to prevent spread to the rest of the plant." }
                //     ]
                // }

                // Example for root vegetables:
                // {
                //     heading: "Root Rot",
                //     info: [
                //         { label: "Sign", detail: "Stunted growth, yellowing leaves, and soft, discolored roots." },
                //         { label: "When", detail: "Most common in poorly drained soils and during periods of excessive rainfall." },
                //         { label: "Treatment", detail: "Improve drainage, reduce watering, and apply a fungicidal solution if necessary." },
                //         { label: "Prevention", detail: "Plant in raised beds or well-draining soil and avoid overwatering." }
                //     ]
                // }

                // Include both diseases and pest problems
                // Focus on issues common in Indian growing conditions
                // Prioritize organic/natural treatments when possible
                // Include both treatment and prevention information
            ],

            // Weeding and caring instructions - Ongoing maintenance practices
            weeding_caring: [
                // Array of care instruction objects - Include at least 3-4 key maintenance tasks
                // Schema - { heading: "Information category - Keep concise but descriptive", info: "Detailed explanation" }
                // Example for tomatoes:
                // { 
                //     heading: "Remove weeds regularly", // Care task - Use action verbs
                //     info: "Weeds compete for nutrients and can harbor pests and diseases. Hand pull them when small." // Detailed explanation - Include why and how
                // },
                // { 
                //     heading: "Remove Suckers", 
                //     info: "Suckers are shoots that grow between two branches. They divert the plant's energy from fruit production and should be pinched off regularly." 
                // },
                // { 
                //     heading: "Pinching", 
                //     info: "The act of pinching involves removing the growing point of a shoot along with a few leaves. About 1-2 cm of a growing shoot is snapped off with fingers to encourage bushier growth." 
                // }

                // Example for climbing plants:
                // { 
                //     heading: "Provide Support", 
                //     info: "Install trellises or stakes early to support climbing growth and keep fruit off the ground." 
                // },
                // { 
                //     heading: "Train Vines", 
                //     info: "Gently guide young vines onto supports and secure with soft plant ties if necessary." 
                // }

                // Focus on plant-specific care requirements
                // Explain both the what and why of each task
                // Include frequency recommendations when applicable
            ],

            // Harvest readiness indicators - How to know when the plant is ready to harvest
            good_for_cultivation: [
                // Array of harvest readiness indicators - Include at least 2-3 specific indicators
                // Example for tomatoes:
                // "Tomatoes are ready for harvest when they have a uniform color (red, yellow, or other variety-specific color) and are firm yet yield slightly to pressure.",
                // "Depending on the variety, fruit can be harvested when fully colored or slightly before full ripening to prevent cracking.",
                // "For best flavor, allow tomatoes to fully ripen on the vine, but harvest before they become too soft."

                // Example for root vegetables:
                // "Carrots are typically ready when the top of the root is 1-2 cm in diameter. Baby carrots can be harvested earlier.",
                // "The color should be vibrant and consistent throughout the visible portion of the root.",
                // "For sweeter carrots, wait until after a light frost in cooler regions."

                // Include visual cues, size indicators, timing information
                // Mention taste or quality considerations
                // Provide harvest window information (too early vs. too late)
            ],

            // General growing tips - Practical advice for successful cultivation
            tips: [
                // Array of general tips for growing the plant - Include at least 5-8 diverse tips
                // Example for tomatoes:
                // "Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages.",
                // "Apply a balanced fertilizer every 20 days during the growing season and every 15 days during fruiting.",
                // "Regularly prune and stake plants to promote airflow and prevent fungal diseases.",
                // "Companion plants such as marigolds or basil can help repel common pests.",
                // "Mulch around plants to retain moisture, suppress weeds, and prevent soil-borne diseases from splashing onto leaves."

                // Example for leafy greens:
                // "Harvest outer leaves first to extend the productive life of the plant.",
                // "Provide afternoon shade in hot summer months to prevent bolting.",
                // "Succession planting every 2-3 weeks ensures a continuous harvest.",
                // "Apply liquid seaweed fertilizer as a foliar spray to boost growth and stress resistance."

                // Include a mix of tips covering different aspects:
                // - Watering best practices
                // - Fertilization strategies
                // - Pest and disease prevention
                // - Companion planting suggestions
                // - Harvesting techniques
                // - Season-specific advice for Indian climate
                // - Space-saving or container gardening tips when applicable
            ]
        }
    }
};

export default plant;
