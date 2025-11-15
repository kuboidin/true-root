import gc from "@/json/global";
import {category as c} from "@/config/plant";

// Build the "How to Grow" menu dynamically from global content (gc)
// Group items by supported categories and auto-generate links.
const SUPPORTED_GROUPS = [
    {key: c.VEGETABLE, name: "Vegetables", href: "/how-to-grow/vegetables"},
    {key: c.SPICE, name: "Spices", href: "/how-to-grow/spices"},
    // Add more groups when their listing pages are created, e.g. FRUIT, FLOWER
];

// Sort by trending desc, then by created_on desc (as elsewhere in the app)
const sorted = [...gc]
    .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
    .sort((a, b) => (b.trending ?? 0) - (a.trending ?? 0));

// Only include items that are marked as GROW guides
const growItems = sorted.filter(item => item.category?.includes(c.GROW));

// Determine a featured item (highest trending grow item)
const featuredItem = growItems[0];

const dynamicHowToGrow = {
    heading: 'How to Grow',
    href: "/how-to-grow",
    featured: featuredItem && featuredItem.ref ? {
        image: featuredItem.ref.cover,
        href: featuredItem.ref.path,
        title: `Grow ${featuredItem.name}`
    } : undefined,
    sub_headings: SUPPORTED_GROUPS.map(group => {
        const items = growItems
            .filter(item => item.category?.includes(group.key))
            .map(item => ({name: item.name, href: item.ref?.path ?? `/how-to-grow/${item.slug}`}));
        return {
            name: group.name,
            href: group.href,
            items
        };
    }).filter(sh => sh.items.length > 0)
};

const menuList = [
    dynamicHowToGrow, 
    // {
    //     heading: 'DIY Natural Products',
    //     href: "/how-to-grow",
    //     featured: {
    //         image: "/assets/theme/images/adv-1.png",
    //         href: "/how-to-grow/tomatoes",
    //         title: "Grow Tomatoes"
    //     },
    //     sub_headings: [
    //         {
    //             name: "Home made organic fertilizers",
    //             href: "/how-to-make/fertilizers",
    //             items: [
    //                 {
    //                     name: 'Onion Leaves',
    //                     href: '/how-to-make/onion-leaves-fertilizer'
    //                 },
    //                 {
    //                     name: "Potato",
    //                     href: '/how-to-grow/tomatoes'
    //                 },
    //                 {
    //                     name: "Onion",
    //                     href: '/how-to-grow/onion'
    //                 },
    //             ]
    //         },
    //         {
    //             name: "Self Sustainable",
    //             href: "/how-to-make/self-sustainable",
    //             items: [
    //                 {
    //                     name: 'Bio Enzyme',
    //                     href: '/how-to-make/bio-enzyme'
    //                 },
    //                 {
    //                     name: "Green Chilli",
    //                     href: '/how-to-grow/green-chilli'
    //                 },
    //                 {
    //                     name: "Turmeric",
    //                     href: '/how-to-grow/turmeric'
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     heading: 'Do you know?',
    //     href: "/how-to-grow",
    //     featured: {
    //         image: "/assets/theme/images/adv-1.png",
    //         href: "/how-to-grow/tomato",
    //         title: "Grow Tomatoes"
    //     },
    //     sub_headings: [
    //         {
    //             name: "Home made organic fertilizers",
    //             href: "/how-to-make/fertilizers",
    //             items: [
    //                 {
    //                     name: 'Onion Leaves',
    //                     href: '/how-to-make/onion-leaves-fertilizer'
    //                 },
    //                 {
    //                     name: "Potato",
    //                     href: '/how-to-grow/tomato'
    //                 },
    //                 {
    //                     name: "Onion",
    //                     href: '/how-to-grow/onion'
    //                 },
    //             ]
    //         },
    //         {
    //             name: "Self Sustainable",
    //             href: "/how-to-make/self-sustainable",
    //             items: [
    //                 {
    //                     name: 'Bio Enzyme',
    //                     href: '/how-to-make/bio-enzyme'
    //                 },
    //                 {
    //                     name: "Green Chilli",
    //                     href: '/how-to-grow/green-chilli'
    //                 },
    //                 {
    //                     name: "Turmeric",
    //                     href: '/how-to-grow/turmeric'
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     heading: 'Wiki',
    //     href: "/how-to-grow",
    //     featured: {
    //         image: "/assets/theme/images/adv-1.png",
    //         href: "/how-to-grow/tomato",
    //         title: "Grow Tomatoes"
    //     },
    //     sub_headings: [
    //         {
    //             name: "Home made organic fertilizers",
    //             href: "/how-to-make/fertilizers",
    //             items: [
    //                 {
    //                     name: 'Onion Leaves',
    //                     href: '/how-to-make/onion-leaves-fertilizer'
    //                 },
    //                 {
    //                     name: "Potato",
    //                     href: '/how-to-grow/tomato'
    //                 },
    //                 {
    //                     name: "Onion",
    //                     href: '/how-to-grow/onion'
    //                 },
    //             ]
    //         },
    //         {
    //             name: "Self Sustainable",
    //             href: "/how-to-make/self-sustainable",
    //             items: [
    //                 {
    //                     name: 'Bio Enzyme',
    //                     href: '/how-to-make/bio-enzyme'
    //                 },
    //                 {
    //                     name: "Green Chilli",
    //                     href: '/how-to-grow/green-chilli'
    //                 },
    //                 {
    //                     name: "Turmeric",
    //                     href: '/how-to-grow/turmeric'
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // {
    //     heading: 'Blog',
    //     href: "/how-to-grow",
    //     sub_headings: [
    //         {
    //             name: "Home made organic fertilizers",
    //             href: "/how-to-make/fertilizers",
    //             items: [
    //                 {
    //                     name: 'Onion Leaves',
    //                     href: '/how-to-make/onion-leaves-fertilizer'
    //                 },
    //                 {
    //                     name: "Potato",
    //                     href: '/how-to-grow/tomatoes'
    //                 },
    //                 {
    //                     name: "Onion",
    //                     href: '/how-to-grow/onion'
    //                 },
    //             ]
    //         },
    //         {
    //             name: "Self Sustainable",
    //             href: "/how-to-make/self-sustainable",
    //             items: [
    //                 {
    //                     name: 'Bio Enzyme',
    //                     href: '/how-to-make/bio-enzyme'
    //                 },
    //                 {
    //                     name: "Green Chilli",
    //                     href: '/how-to-grow/green-chilli'
    //                 },
    //                 {
    //                     name: "Turmeric",
    //                     href: '/how-to-grow/turmeric'
    //                 },
    //             ]
    //         }
    //     ]
    // },
];

export default menuList;
