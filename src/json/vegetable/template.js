/**
 * PLANT TEMPLATE FOR LLM GENERATION
 * 
 * This template provides the structure for creating JSON data for plant profiles.
 * Follow the instructions and descriptions for each field to generate accurate and comprehensive plant data.
 * Replace all placeholder values with actual data for the specific plant.
 */

const plant = {
    // Basic plant information
    name: "", // The common name of the plant in plural form (e.g., "Tomatoes")
    plural: "", // The plural form of the plant name (e.g., "Tomatoes")
    singular: "", // The singular form of the plant name (e.g., "Tomato")
    other_name: [], // Array of alternative names, including translations (e.g., ["Tomato", "टमाटर"])
    path: "", // URL path for the plant page (e.g., "/how-to-grow/tomatoes")
    datePublished: "", // Publication date in format "YYYY-MM-DD HH:MM:SS AM/PM"
    dateModified: "", // Last modification date in format "YYYY-MM-DD HH:MM:SS AM/PM"
    cover: "", // Skip this - Path to the main cover image (e.g., "/assets/plants/vegetable/tomato/t4.webp")
    search: "", // Keywords for search functionality, including translations (e.g., "Tomato, टमाटर, Tomatoes")

    // Skip this - Image gallery for the plant
    images: [
        // Array of image objects with src and alt text
        // {src: "/assets/plants/vegetable/plant-name/image1.jpeg", alt: "Description of the plant - ${app.name}" },
    ],

    // SEO-related information
    seo: {
        images: [ // Skip this -
            // Array of image paths for structured markup (article)
            // "/assets/plants/vegetable/plant-name/image1.jpeg",
        ],
        title: "", // SEO title (e.g., "How to Grow Plant: Complete Guide & Care - ${app.name}")
        description: "", // Meta description summarizing the plant guide
        keywords: [], // Array of keywords related to the plant, include ...app.meta.keywords at the end
        thumbnail: "", // Skip this - Path to the OG image (e.g., "${app.url}/assets/og/how-to-grow/plant-name.png")
    },

    // Hero section information
    hero: {
        heading: "", // Main heading with local name (e.g., "Tomatoes (टमाटर)")
        sub_heading: "", // Scientific name and category (e.g., "Solanum lycopersicum, Vegetable (Fruit)")
        eco_badge: {
            score: 0, // Eco-friendliness score from 1-5 (5 being most eco-friendly)
            information: "" // Description of the plant's environmental impact
        },
        about_quick_list: [ // Maximum 3 key points about the plant
            // "One of the easiest vegetables to grow",
            // "Fruiting within X to Y days (depending on variety)",
            // "Suitability for hydroponic cultivation"
        ],
        snippet: "", // Brief description of the plant, its benefits and uses (use JSX with <br/> tags for formatting)
        growing_condition: [
            // Array of key growing conditions (typically 3)
            // {name: 'Temperature', value: "18°C - 30°C"},
            // {name: 'pH', value: '6.0 - 6.8'},
            // {name: 'Fruiting', value: '60 to 85 days'}
        ],
        more_info: {
            heading: "", // Additional information heading (e.g., "Soil Conditions: ")
            items: [
                // Array of additional information points
                // "Soil type: Well-drained loamy or sandy soil",
                // "Soil must be rich in organic matter, with good aeration and drainage to avoid water logging."
            ]
        }
    },

    // Social sharing information
    share: {
        text: "", // Text for social sharing (e.g., "Learn how to grow tomatoes at home")
        subject: "", // Email subject for sharing (e.g., "Learn how to grow tomatoes at home")
        tags: "" // Hashtags for social media (e.g., "#grow #tomatoes #garden #plant")
    },

    // Tab content sections
    tabs: {
        // Good to know section
        good_to_know: {
            heading: "", // Introductory text for the good to know section

            // Health benefits section
            health_benefits: [
                // Array of health benefit objects (provide at least 5)
                // {
                //     heading: "Heart Health", // Benefit name
                //     detail: "Description of how the plant benefits heart health", // Detailed explanation
                //     source: {
                //         link: "https://pubmed.ncbi.nlm.nih.gov/12345678/", // Scientific source URL
                //         title: "Source Name" // Name of the source (e.g., "PubMed")
                //     }
                // },
            ],

            // Risks section
            right_section: {
                heading: "Risks and Things to Consider", // Section heading
                information: "", // HTML content describing risks with source citation (use JSX)
                content: "", // HTML content with list of risk factors (use JSX)
                footer_info: "" // Additional risk information (use JSX)
            },

            // Nutritional information
            nutrition: {
                top: "", // Introduction to nutritional content with source (use JSX)
                list: [
                    // Array of nutritional values (provide at least 5)
                    // {name: "Calories", value: "X"},
                    // {name: "Fat", value: "Xg"},
                    // {name: "Sodium", value: "Xmg"},
                    // {name: "Carbohydrates", value: "Xg"},
                    // {name: "Fiber", value: "Xg"},
                    // {name: "Protein", value: "Xg"},
                ],
                bottom: "" // Additional nutritional information (use JSX)
            },

            // Ecological effects
            ecological_effects: [
                // Array of ecological effect objects (provide at least 5)
                // {
                //     icon: <GiBee className="text-yellow-400 -mt-2 mr-2" size={30}/>, // React icon component
                //     title: "Biodiversity Support", // Effect title
                //     description: "Description of how the plant supports biodiversity" // Detailed explanation
                // },
                // Available icons: GiBee, GiPlantRoots, GiFarmTractor, GiWaterDrop, GiFootprint
            ]
        },

        // How to grow section - step by step guide
        how_to_grow: [
            // Array of growing step objects
            // {
            //     heading: "Step 1: Choose the Right Variety", // Step title
            //     title: "Optional subtitle or additional information", // Optional subtitle
            //     steps: [
            //         // Array of instructions for this step (can include HTML with <strong> tags for emphasis)
            //         "<strong>Determinate: </strong> Stay short, Dwarf, Good for pots and balcony",
            //         "Additional instruction",
            //     ]
            // },
        ],

        // Process section - detailed growing information
        process: {
            quick_info: "", // Brief overview of growing process
            quick_points: [
                // Array of key points about growing the plant
                // "The Life of the plant is X-Y months.",
                // "Best growing seasons",
                // "Climate considerations"
            ],

            // Nutritional requirements for the plant
            nutritional_requirements: [
                // Array of nutrient objects
                // {name: "Promotes leafy growth", value: "N (Nitrogen)"},
                // {name: "Aids in root development and fruiting", value: "P (Phosphorus)"},
            ],

            // Seeding process information
            seeding_process: "", // Description of the seeding process (use JSX for formatting)

            // Additional seeding information
            more_info: [
                // Array of information objects
                // {
                //     heading: "Seed Selection", // Information category
                //     info: "Description of seed selection process" // Detailed explanation
                // },
            ],

            // Germination stages
            germination_stage: [
                // Array of germination stage objects
                // { heading: "Radicle Emergence", info: "Description of this stage" },
            ],

            // Factors affecting quality
            what_affect_quality: [
                // Array of quality factor objects
                // { heading: "Sunlight", info: "How sunlight affects quality" },
            ],

            // Fertilizer requirements
            fertilizer_requirements: {
                organic: [
                    // Array of organic fertilizer recommendations
                    // "Use compost, aged manure, bone meal, or worm castings.",
                ],
                chemical: [
                    // Array of chemical fertilizer recommendations
                    // "A balanced NPK fertilizer such as 10:10:10 at planting, followed by a 5:10:10 fertilizer during flowering and fruiting stages."
                ],
                how_to: [
                    // Array of fertilizer application instructions
                    // "Application frequency and timing",
                ],
                tips: [
                    // Array of fertilizer tips
                    // "Best practices for fertilizer application",
                ]
            },

            // Watering schedule
            watering_schedule: [
                // Array of watering instruction objects
                // {
                //     heading: "Early Stage", // Growth stage
                //     info: "Watering instructions for early stage" // Detailed explanation
                // },
            ],

            // Common diseases and treatments
            diseases: [
                // Array of disease objects
                // {
                //     heading: "Disease Name", // Disease name
                //     info: [
                //         // Array of disease information objects
                //         { label: "Sign", detail: "Symptoms to look for" },
                //         { label: "When", detail: "When the disease typically occurs" },
                //         { label: "Treatment", detail: "How to treat the disease" },
                //         { label: "Note", detail: "Additional information" }
                //     ]
                // },
            ],

            // Weeding and caring instructions
            weeding_caring: [
                // Array of care instruction objects
                // { heading: "Care instruction", info: "Detailed explanation" },
            ],

            // Harvest readiness indicators
            good_for_cultivation: [
                // Array of harvest readiness indicators
                // "Description of when the plant is ready for harvest",
            ],

            // General growing tips
            tips: [
                // Array of general tips for growing the plant
                // "Watering tip",
                // "Fertilizer tip",
                // "Pest control tip",
            ]
        }
    }
};

export default plant;
