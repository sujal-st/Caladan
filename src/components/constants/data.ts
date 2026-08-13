import type { resort } from "../page_components/home/ReefSection";
import type { blog } from "./types";

export const resorts: resort[] = [
    {
        id: '1',
        slug: 'lagoon-harmony-bungalow',
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b049a16076b1b2188d012d_rumman-amin-s3o2rkTkF7I-unsplash.avif',
        title: 'Lagoon Harmony Bungalow',
        cat: 'Overwater Bungalow',
        size: '90 ft2',
        beds: 2,
        guests: 6,
    },
    {
        id: '2',
        slug: 'coral-breach-studio',
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b037b7b9f0bc0f27d8889d_dinuka-lankaloka-HKr5cn6S0q0-unsplash.avif',
        title: 'Coral Breath Studio',
        cat: 'Overwater Studio',
        size: '156 ft2',
        beds: 2,
        guests: 4,
    },
    {
        id: '3',
        slug: 'tide-song-villa',
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69b03783cb355b95794c522e_pexels-roman-odintsov-5667901.avif',
        title: 'Tide Song Villa',
        cat: 'Overwater Villa',
        size: '320 ft2',
        beds: 4,
        guests: 12,
    },
    {
        id: '4',
        slug: 'reef-whisper-suite',
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69aff4da51c27aa9c99aba98_pexels-keeganjchecks-14524361.avif',
        title: 'Reef Whisper Suite',
        cat: 'Overwater bungalow',
        size: '248 ft2',
        beds: 3,
        guests: 8,
    },
]


export const reviews = [
    {
        id: '1', name: 'Daniel Novak', profession: 'Adventure Seeker', review: {
            title: 'The lagoon reset we needed',
            description: "Our family actually unplugged here. The kids loved the sound bath and we all left lighter, calmer, and more connected than we've felt in years."
        },
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac6f71e2f6cf6c0843aa68_pexels-julia-volk-7292958.avif'
    },
    {
        id: '2', name: 'Lea Martinez', profession: 'Family Traveler', review: {
            title: 'Finally, wellness that feels natural',
            description: "Caladan is pure paradise. Every sunrise felt like a painting, and the staff made us feel at home from the first moment."
        },
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac691927961ac98c560fe2_pexels-stephanlouis-19119918.avif'
    },
    {
        id: '3', name: 'Hana Saito', profession: 'Solo Retreat Guest', review: {
            title: 'A sanctuary above the reef',
            description: "I arrived exhausted and left renewed. The lomilomi massage and sunrise sessions over the lagoon helped me release stress I'd carried for months."
        },
        img: 'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012/69ac6f718869ff1791ce4e94_pexels-aymannouas-12935961.avif'
    },
]

export const tabData = [
    {
        id: '1', title: 'Software', list: [
            { id: "1", title: "What makes Caladan different from other beach resorts?", description: "Add answer here." },
            { id: "2", title: "Do you offer all-inclusive vacation packages?", description: "Add answer here." },
            { id: "3", title: "What activities are available at the resort?", description: "Add answer here." },
            { id: "4", title: "Do you accommodate special dietary needs?", description: "Add answer here." },
            { id: "5", title: "Can I host events or weddings at Caladan?", description: "Add answer here." },
            { id: "6", title: "What payment methods do you accept?", description: "Add answer here." },
            { id: "7", title: "Is there free Wi-Fi at Caladan?", description: "Add answer here." },
        ]
    },
    {
        id: '2', title: 'Integration', list: [
            { id: "1", title: "What makes Caladan different from other beach resorts?", description: "Add answer here." },
            { id: "2", title: "Do you offer all-inclusive vacation packages?", description: "Add answer here." },
            { id: "3", title: "What activities are available at the resort?", description: "Add answer here." },
            { id: "4", title: "Do you accommodate special dietary needs?", description: "Add answer here." },
            { id: "5", title: "Can I host events or weddings at Caladan?", description: "Add answer here." },
            { id: "6", title: "What payment methods do you accept?", description: "Add answer here." },
            { id: "7", title: "Is there free Wi-Fi at Caladan?", description: "Add answer here." },
        ]
    },
    {
        id: '3', title: 'Pricing', list: [
            { id: "1", title: "What makes Caladan different from other beach resorts?", description: "Add answer here." },
            { id: "2", title: "Do you offer all-inclusive vacation packages?", description: "Add answer here." },
            { id: "3", title: "What activities are available at the resort?", description: "Add answer here." },
            { id: "4", title: "Do you accommodate special dietary needs?", description: "Add answer here." },
            { id: "5", title: "Can I host events or weddings at Caladan?", description: "Add answer here." },
            { id: "6", title: "What payment methods do you accept?", description: "Add answer here." },
            { id: "7", title: "Is there free Wi-Fi at Caladan?", description: "Add answer here." },
        ]
    },
]

export const blogs: blog[] = [
    {
        id: "1",
        slug: "packing-for-tahiti-the-smart-list",
        date: "March 12, 2026",
        time: "6 min read",
        title: "Packing for Tahiti: The Smart List",
        subtitle: "12 essentials (and 5 things NOT to pack) for your French Polynesia adventure.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a5725487307243a72031_pexels-adriendrj-33980501.avif",
        cat: "TAHITI INSIDER"
    },
    {
        id: "2",
        slug: "shark-feeding-safe-and-thrilling",
        date: "March 12, 2026",
        time: "8 min read",
        title: "Shark Feeding: Safe & Thrilling",
        subtitle: "Blacktip reef sharks up close, what to expect, and exclusive Caladan feeding tours.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a51013e52d8aa1532730_pexels-alohaphotostudio-6961666.avif",
        cat: "ISLAND ADVENTURES"
    },
    {
        id: "3",
        slug: "best-honeymoon-packages-in-tahiti",
        date: "March 12, 2026",
        time: "11 min read",
        title: "Best Honeymoon Packages in Tahiti",
        subtitle: "Private sandbank dinners, couples' spa rituals, and sunset vow renewals.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a43eeca7b6045e93b8cd_pexels-freestockpro-1007657.avif",
        cat: "TAHITI INSIDER"
    }
    ,
    {
        id: "4",
        slug: "chef-lucas-coconut-curry-recipe",
        date: "March 12, 2026",
        time: "8 min read",
        title: "Chef Luca's Coconut Curry Recipe",
        subtitle: "Recreate Caladan's signature dish at home using 7 simple ingredients.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a3f79f4956225122393e_pexels-shameel-mukkath-3421394-15059057%20(1).avif",
        cat: "RESORT LIFE"
    },
    {
        id: "5",
        slug: "polynesian-tattoo-traditions",
        date: "March 12, 2026",
        time: "7 min read",
        title: "Polynesian Tattoo Traditions",
        subtitle: "Modern vs. ancient meanings, where locals get inked, and temporary designs for tourists.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a296fd1002040c1e9240_pexels-brett-sayles-2126124.avif",
        cat: "TAHITI INSIDER"
    },
    {
        id: "6",
        slug: "sunrise-yoga-over-the-lagoon",
        date: "March 12, 2026",
        time: "8 min read",
        title: "Sunrise Yoga Over the Lagoon",
        subtitle: "Breathwork with dolphins, perfect poses for beginners, and post-class tropical smoothies.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a1ee7506720691b0a6a6_pexels-jonathanborba-13911220%20(1).avif",
        cat: "ISLAND ADVENTURES"
    },
    {
        id: "7",
        slug: "tahitis-secret-fruit-markets",
        date: "March 12, 2026",
        time: "5 min read",
        title: "Tahiti's Secret Fruit Markets",
        subtitle: "Best stalls for exotic mangoes, bargaining tips, and Caladan chef's favorite local recipes.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a0b403ecc88f55bf84f1_pexels-myatezhny39-2927518.avif",
        cat: "TAHITI INSIDER"
    },
    {
        id: "8",
        slug: "overwater-bungalow-secrets-revealed",
        date: "March 12, 2026",
        time: "10 min read",
        title: "Overwater Bungalow Secrets Revealed",
        subtitle: "Glass-floor fish-watching, private deck dinners, and 5 must-pack items for bungalow bliss.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a9a01bdb6ad07ce787019a_pexels-slimmars-13-197677686-13801311.avif",
        cat: "RESORT LIFE"
    },
    {
        id: "9",
        slug: "the-magic-of-night-snorkeling-in-tahiti",
        date: "March 12, 2026",
        time: "14 min read",
        title: "The Magic of Night Snorkeling in Tahiti",
        subtitle: "Discover Tahiti's underwater nightlife, glowing corals, playful reef sharks, and tips for your unforgettable Caladan night snorkel experience.",
        img: "https://cdn.prod.website-files.com/69833b76e5b4bee55e87302b/69a98f244c87f2c006f75c74_pexels-walter-torres-198852755-11533702.avif",
        cat: "ISLAND ADVENTURES"
    }

];

