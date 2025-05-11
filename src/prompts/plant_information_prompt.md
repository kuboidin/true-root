# Comprehensive Plant Information Generator for TrueRoot.in

## Task Description
You are tasked with creating comprehensive, accurate, and detailed information about **PLANT_NAME_GOES_HERE** for TrueRoot.in, a platform for home gardeners in India. Your response must strictly follow the JSON structure defined in the template below and should be inspired by the example provided.

## Output Requirements
- Generate a complete JavaScript object following the exact structure of the template
- The output must be in valid JSON format that can be directly used in the TrueRoot.in codebase
- Include all required sections with detailed, accurate information specific to PLANT_NAME_GOES_HERE
- Ensure all content is factually accurate and tailored to Indian gardening conditions
- Use JSX format for all content containing HTML or React tags:
  - Incorrect: "This is <strong>bold</strong> text" (as a string)
  - Correct: <>This is <strong>bold</strong> text</> (as JSX)
  - Always wrap JSX content in fragment tags: <> content </>
- Highlight important information using appropriate formatting:
  - Use <strong> tags for critical information that must not be overlooked
  - Use <em> tags for helpful tips and suggestions

## Template JSON Schema
```javascript
const plant = {
    // Basic plant information
    name: "", // The common name of the plant in plural form (e.g., "Tomatoes")
    plural: "", // The plural form of the plant name (e.g., "Tomatoes")
    singular: "", // The singular form of the plant name (e.g., "Tomato")
    other_name: [], // Array of alternative names, including Hindi translations
    path: "", // URL path for the plant page, lowercase and hyphenated
    datePublished: "", // Publication date in format "YYYY-MM-DD HH:MM:SS AM/PM"
    dateModified: "", // Last modification date in format "YYYY-MM-DD HH:MM:SS AM/PM"
    cover: "", // Leave empty - Path to the main cover image
    search: "", // Keywords for search functionality, including translations
    images: [], // Leave empty - Will be populated with image paths
    // SEO-related information
    seo: {
        images: [], // Leave empty - Will be populated with image paths
        title: "", // SEO title - Compelling, include plant name, under 60 characters
        description: "", // Meta description - 150-160 characters
        keywords: [], // Array of keywords related to the plant - Include variations
        thumbnail: "", // Leave empty - Path to the OG image for social sharing
    },

    // Hero section information
    hero: {
        heading: "", // Main heading with local name - Include both English and Hindi names
        sub_heading: "", // Scientific name and category - Include botanical classification
        eco_badge: {
            score: 0, // Eco-friendliness score from 1-5 (5 being most eco-friendly)
            information: "" // Description of the plant's environmental impact
        },
        about_quick_list: [], // Maximum 3 key points about the plant
        snippet: "", // Brief description of the plant, its benefits and uses (use JSX with <br/> tags)
        growing_condition: [], // Array of key growing conditions (typically 3)
        more_info: {
            heading: "", // Additional information heading
            items: [] // Array of additional information points
        }
    },

    // Social sharing information
    share: {
        text: "", // Text for social sharing - Brief, engaging message
        subject: "", // Email subject for sharing
        tags: "" // Trending Hashtags for social media
    },

    // Tab content sections
    tabs: {
        // "Good to know" section
        good_to_know: {
            heading: "", // Introductory text for the good to know section
            health_benefits: [
                // Array of health benefit objects (provide at least 5-7 scientifically supported benefits)
                // Schema: [
                //   { 
                //     heading: "Benefit name - Keep concise but descriptive", 
                //     detail: "Detailed explanation - Explain the mechanism and specific compounds responsible", 
                //     source: { 
                //       link: "Scientific source URL - Use peer-reviewed sources when possible", 
                //       title: "Name of the source (e.g., 'PubMed', 'Harvard Health', 'Mayo Clinic')" 
                //     } 
                //   }
                // ]
            ],
            right_section: {
                heading: "Risks and Things to Consider", // Keep as is
                information: "", // HTML content describing risks with source citation
                content: "", // HTML content with list of risk factors
                footer_info: "" // Additional risk information
            },
            nutrition: {
                top: "", // Introduction to nutritional content with source citation (use JSX)
                        // Example: "One whole raw tomato provides the following nutrients: <span className=\"text-2xs\">Source: <Link href=\"https://fdc.nal.usda.gov/fdc-app.html#/food-details/1103276/nutrients\" target=\"_blank\" className=\"green-link\">USDA</Link></span>"
                        // Always cite a reliable nutritional database like USDA
                list: [
                    // Array of nutritional values (provide at least 5-7 key nutrients)
                    // Schema: [ {name: "Nutrient name", value: "Amount with unit"}, ]
                    // Example: {name: "Calories", value: "22.5"},
                    // Example: {name: "Fat", value: "0.25g"},
                    // Example: {name: "Carbohydrates", value: "4.86g"},
                    // Include macronutrients and any standout micronutrients
                    // Use standard units (g, mg, mcg) and be consistent
                ],
                bottom: "" // Additional nutritional information (use JSX)
                          // Example: "Whole, fresh tomatoes are also a source of several micronutrients, including Folate, Potassium, Vitamin C, and Vitamin K."
                          // Highlight any exceptional nutritional properties not covered in the list
            },
            ecological_effects: [
                // Array of ecological effect objects (provide at least 5 distinct environmental impacts)
                // Schema: [
                //   { 
                //     icon: "JSX React icon component - Choose the most appropriate icon", 
                //     title: "Effect title - Keep concise but descriptive", 
                //     description: "Detailed explanation - Explain the specific ecological benefit" 
                //   }
                // ]
                // Available icons: GiBee (for pollination/biodiversity), GiPlantRoots (for soil health), 
                // GiFarmTractor (for sustainable farming), GiWaterDrop (for water usage), GiFootprint (for carbon footprint)
            ]
        },

        // How to grow section - Comprehensive step-by-step guide for successful cultivation
        how_to_grow: [
            // Array of growing step objects - Create a chronological sequence from seed/seedling to harvest
            // Schema: [
            //   {
            //     heading: "Step title - Include day number or growth stage", 
            //     title: "Optional subtitle - Additional context about this stage",
            //     steps: [
            //       "Step instruction 1 - Be specific and actionable",
            //       "Step instruction 2 - Include measurements and timing",
            //       <><strong>Important:</strong> Highlight critical information using bold formatting</>,
            //       <><em>Tip:</em> Use italic formatting for helpful tips and suggestions</>
            //     ]
            //   }
            // ]
            // IMPORTANT: 
            // 1. Use JSX format for all content containing HTML or React tags
            //    - Incorrect: "This is <strong>bold</strong> text" (as a string)
            //    - Correct: <>This is <strong>bold</strong> text</> (as JSX)
            // 2. Highlight important parts of instructions using <strong> or <em> tags
            // 3. Use <strong> for critical information that must not be overlooked
            // 4. Use <em> for helpful tips and suggestions
            // 5. Wrap JSX content in fragment tags: <> content </>
            // Provide at least 8-10 detailed steps covering the entire growing cycle
        ],

        // Process section
        process: {
            quick_info: "", // Brief overview of growing process
            quick_points: [], // Array of key points about growing the plant
            nutritional_requirements: [
                // Array of nutrient objects (provide at least 3-5 major nutrients)
                // For each nutrient, explain its function in the plant's development
                // Schema: [ { name: "Function description", value: "Nutrient name/symbol" }, ]
                // Example: { name: "Promotes leafy growth", value: "N (Nitrogen)" },
                // Example: { name: "Aids in root development and fruiting", value: "P (Phosphorus)" },
                // Be specific about how each nutrient affects the particular plant
                // Include both macronutrients and important micronutrients
            ],
            seeding_process: "", // Description of the seeding process (use JSX for formatting)
                               // Example: <>Tomato seeds need water to sprout, in fact it's all they need. <br/>
                               // The seed coat absorbs the water, swells & cracks, allowing the tiny plant inside to emerge and begin its life. <br/>
                               // Not enough moisture and the seeds won't sprout; too much water can drown the seedlings.<br/>
                               // <strong>Testing moisture -</strong> The seeding soil must retain its shape when squeezed tightly, yet it should not drip much water if any at all.</>
                               // Provide comprehensive, detailed information about:
                               // 1. Optimal conditions for germination (moisture, temperature, light)
                               // 2. The germination process specific to this plant
                               // 3. Common issues and how to avoid them
                               // 4. How to test for proper conditions
                               // 5. Include specific details about soil preparation, depth of planting, and care during germination
                               // Use JSX format with <br/> for line breaks and <strong> for emphasis
            more_info: [
                // Array of information objects about seeding - Include at least 5-7 detailed points
                // Schema: [ { heading: "Information category - Keep concise but descriptive", info: "Detailed explanation - Provide specific, actionable advice" } ]
                // Example: { heading: "Seed Selection", info: "Choose high-quality heirloom or hybrid seeds for your climate." },
                // Example: { heading: "Sowing", info: "Sow seeds 0.5 cm - 2.5 cm deep in seed trays or pots indoors, 6-8 weeks before the last frost date." },
                // Include categories such as Seed Selection, Sowing Depth, Temperature Requirements, Environment/Light Needs, Watering Practices, etc.
            ],
            germination_stage: [
                // Array of germination stage objects - Include 3-4 key stages
                // Schema: [ { heading: "Stage name - Be specific about the development phase", info: "Detailed explanation" } ]
                // Example: { heading: "Radicle Emergence", info: "Within 3-4 days, the first root appears." },
                // Example: { heading: "Shoot Development", info: "Leaves begin to sprout after a week." },
                // Provide specific timeframes and descriptions for each stage
                // Include any critical care requirements at each stage
            ],
            what_affect_quality: [
                // Array of quality factor objects - Include at least 3-5 factors
                // Schema: [ { heading: "Factor name - Be specific about what influences quality", info: "Detailed explanation" } ]
                // Example: { heading: "Sunlight", info: "More sunlight leads to sweeter tomatoes." },
                // Example: { heading: "Watering", info: "Consistent watering prevents flavor dilution." },
                // Focus on factors that gardeners can control
                // Explain how each factor specifically affects the quality of this particular plant
            ],
            fertilizer_requirements: {
                organic: [
                    // Array of organic fertilizer recommendations - Include at least 3-4 options
                    // Example: "Use compost, aged manure, bone meal, or worm castings."
                    // Focus on locally available, sustainable options
                    // Explain the specific benefits of each fertilizer for this particular plant
                ],
                chemical: [
                    // Array of chemical fertilizer recommendations - Include only if necessary
                    // Example: "A balanced NPK fertilizer such as 10:10:10 at planting, followed by a 5:10:10 fertilizer during flowering and fruiting stages."
                    // Specify exact NPK ratios appropriate for the plant's growth stage
                    // Always recommend the minimal effective amount to prevent over-fertilization
                ],
                how_to: [
                    // Array of fertilizer application instructions - Include at least 3-4 specific instructions
                    // Example: "Until you don't see small tomatoes, provide liquid fertilizer every 20 days."
                    // Include specific timing, frequency, and application methods
                    // Adjust recommendations based on plant growth stages
                ],
                tips: [
                    // Array of fertilizer tips - Include at least 2-3 practical tips
                    // Example: "Add fertilizer in the evening only to prevent nutrient burn from sun exposure."
                    // Focus on practical advice that improves fertilizer effectiveness
                    // Include warnings about common fertilizer mistakes
                ]
            },
            watering_schedule: [
                // Array of watering instruction objects - Include at least 3-4 growth stages
                // Schema: [
                //   { 
                //     heading: "Growth stage - Be specific about the plant's development phase", 
                //     info: "Detailed explanation - Include frequency, amount, and cautions" 
                //   }
                // ]
                // Example: { heading: "Early Stage", info: "Until you see flowers, water only when the top soil is dry. Overwatering at this stage can lead to fungal diseases and delayed fruiting." }
                // Tailor instructions to the specific water needs of the plant
                // Include seasonal adjustments for Indian climate conditions
            ],
            diseases: [
                // Array of disease objects - Include at least 4-6 common problems
                // Schema: [
                //   {
                //     heading: "Disease or pest name - Use common, recognizable terms", 
                //     info: [
                //       { label: "Sign", detail: "Symptoms to look for - Be specific and descriptive" },
                //       { label: "When", detail: "When the problem typically occurs" },
                //       { label: "Treatment", detail: "How to treat - Provide organic solutions when possible" },
                //       { label: "Note", detail: "Additional helpful information" }
                //     ]
                //   }
                // ]
                // Include both diseases and pest problems common in Indian growing conditions
            ],
            weeding_caring: [
                // Array of care instruction objects - Include at least 3-4 key maintenance tasks
                // Schema: [
                //   { 
                //     heading: "Care task - Use action verbs", 
                //     info: "Detailed explanation - Include why and how" 
                //   }
                // ]
                // Example: { heading: "Remove Suckers", info: "Suckers are shoots that grow between two branches. They divert the plant's energy from fruit production and should be pinched off regularly." }
                // Focus on plant-specific care requirements
                // Explain both the what and why of each task
            ],
            good_for_cultivation: [
                // Array of harvest readiness indicators (string) - Include at least 2-3 specific indicators
                // Example: "Tomatoes are ready for harvest when they have a uniform color (red, yellow, or other variety-specific color) and are firm yet yield slightly to pressure."
                // Include visual cues, size indicators, timing information
                // Mention taste or quality considerations
            ],
            tips: [
                // Array of general tips for growing the plant (string) - Include at least 5-8 diverse tips
                // Example: "Water deeply but infrequently, ensuring the soil remains moist but not waterlogged. Regular watering is key during flowering and fruiting stages."
                // Include a mix of tips covering different aspects:
                // - Watering best practices
                // - Fertilization strategies
                // - Pest and disease prevention
                // - Companion planting suggestions
                // - Harvesting techniques
                // - Season-specific advice for Indian climate
            ]
        }
    }
};
```

## Example Implementation (Tomatoes)
Here's a simplified example of how the template is implemented for tomatoes:

```javascript
const plant = {
    name: "Tomatoes",
    plural: "Tomatoes",
    singular: "Tomato",
    other_name: ["Tomato", "टमाटर"],
    path: "/how-to-grow/tomatoes",
    datePublished: "2024-10-10 09:00:00 AM",
    dateModified: "2024-10-10 09:00:00 AM",

    seo: {
        title: "How to Grow Tomatoes: Complete Guide & Care",
        description: "A full guide on growing tomatoes at home and garden. Learn about benefits, nutritional value, ecological impact, fertilisers and more.",
        keywords: ["grow tomato", "grow tomatoes", "how to grow tomatoes", "tomato growing tips", "tomato nutrition", "health benefits of tomatoes"]
    },

    hero: {
        heading: "Tomatoes (टमाटर)",
        sub_heading: "Solanum lycopersicum, Vegetable (Fruit)",
        eco_badge: {
            score: 4,
            information: "Tomatoes are relatively eco-friendly when grown in appropriate conditions. They have moderate water needs and, with proper mulching, irrigation, and organic practices, they can thrive with less water."
        },
        about_quick_list: [
            "One of the easiest vegetables to grow",
            "Fruiting within 60 to 85 days (depending on variety)",
            "Highly suitable for hydroponic cultivation"
        ],
        snippet: "Tomatoes are nutrient-packed and easy to grow, making them perfect for gardens, balconies, or even indoors. <br/> Rich in vitamins A and C, and loaded with lycopene, tomatoes offer numerous health benefits, including antioxidant properties that support heart health and may reduce cancer risks.",
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
            heading: "Tomatoes grow well in pots, raised beds, or directly in the ground. Choose a sunny spot with at least 6-8 hours of sunlight daily.",
            health_benefits: [
                {
                    heading: "Heart Health",
                    detail: "Tomatoes are rich in potassium and lycopene, which are known to reduce blood pressure and lower the risk of heart disease by improving circulation and reducing inflammation",
                    source: {
                        link: "https://pubmed.ncbi.nlm.nih.gov/12587984/",
                        title: "PubMed"
                    }
                }
                // Additional health benefits would be listed here
            ],
            nutrition: {
                top: "One whole raw tomato provides the following nutrients:",
                list: [
                    {name: "Calories", value: "22.5"},
                    {name: "Fat", value: "0.25g"},
                    {name: "Sodium", value: "6.25mg"},
                    {name: "Carbohydrates", value: "4.86g"},
                    {name: "Fiber", value: "1.5g"},
                    {name: "Protein", value: "1.1g"}
                ]
            }
            // Additional sections would be included here
        },

        how_to_grow: [
            {
                heading: "Step 1: Choose the Right Variety",
                steps: [
                    "Determinate varieties: Compact, bushy plants ideal for containers",
                    "Indeterminate varieties: Vining plants that continue growing, better for gardens with trellises",
                    "For beginners, choose disease-resistant varieties suited to your local climate conditions"
                ]
            },
            {
                heading: "Day 0: Seeding",
                steps: [
                    "Sow seeds at 0.5 - 2.5 cm depth, cover with a thin layer of soil and water them",
                    "If you are a beginner then use a seedling tray for easy movement",
                    "Keep in low sunlight or inside (not dark) if possible"
                ]
            }
            // Additional growing steps would be included here
        ],

        process: {
            quick_info: "Tomatoes grow well in pots, raised beds, or directly in the ground. Choose a sunny spot with at least 6-8 hours of sunlight daily.",
            quick_points: [
                "The Life of a tomato plant is 5-6 months.",
                "Tomatoes can be grown in spring (February), monsoon (July Mid) & Autumn (September end)."
            ],
            nutritional_requirements: [
                {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                {name: "Aids in root development and fruiting", value: "P (Phosphorus)"},
                {name: "Improving fruit & flower quality", value: "K (Potassium)"}
            ],
            // Additional process information would be included here
        }
    }
};
```

## Required Sections
Your response must include ALL of the following sections with detailed, accurate information specific to PLANT_NAME_GOES_HERE:

1. **Basic Plant Information**
   - Name (plural and singular forms)
   - Alternative names (including Hindi and regional Indian names)
   - URL path
   - Publication dates
   - Search keywords

2. **SEO Information**
   - Title (compelling, under 60 characters)
   - Meta description (150-160 characters)
   - Keywords (at least 10-15 relevant terms)

3. **Hero Section**
   - Heading with English and Hindi names
   - Scientific name and classification
   - Eco-friendliness score (1-5) with justification
   - 3 key points about the plant
   - Brief description (5-6 lines covering growing difficulty, nutritional benefits, culinary uses, Ayurvedic properties)
   - Growing conditions (temperature, pH, harvest time)
   - Soil requirements

4. **Social Sharing Information**
   - Sharing text (under 100 characters)
   - Email subject (40-60 characters)
   - Hashtags (4-6 relevant tags)

5. **Good to Know Section**
   - Health benefits (at least 5 with scientific sources)
   - Risks and precautions
   - Nutritional information (at least 5 nutrients with values)
   - Ecological effects (at least 5 distinct environmental impacts)

6. **How to Grow Section**
   - Detailed day-by-day or stage-by-stage growing instructions
   - At least 8-10 steps from seed to harvest
   - Include specific details for Indian growing conditions
   - Cover seeding, transplanting, care, and harvesting

7. **Process Section**
   - Growing overview
   - Key points about plant lifecycle
   - Nutritional requirements
   - Seeding process details
   - Germination stages
   - Factors affecting quality
   - Fertilizer requirements (organic and chemical)
   - Watering schedule
   - Common diseases and treatments
   - Weeding and caring instructions
   - Harvest readiness indicators
   - General growing tips

## Guidelines for Quality Content
1. Be specific and detailed - avoid vague or general statements
2. Include precise measurements, timings, and quantities
3. Provide plant-specific information based on scientific research
4. Adapt all growing instructions for Indian climate conditions
5. Include citations for health benefits and nutritional information
6. Focus on organic and sustainable growing practices when possible
7. Address common problems and solutions specific to PLANT_NAME_GOES_HERE
8. Use clear, actionable language that home gardeners can easily follow

## Important Notes
- The content must be factually accurate and based on horticultural best practices
- All growing instructions must be tailored to Indian climate conditions
- Include both traditional knowledge and modern scientific information
- Provide comprehensive information that covers the entire growing cycle
- Ensure all health claims are supported by credible sources
- The final output should be in valid JSON format that can be directly used without further editing

Please generate a comprehensive, accurate, and detailed JavaScript object for PLANT_NAME_GOES_HERE following all the requirements above.
