import {category as c} from '@/config/plant';

// ref
import tomato from "@/json/vegetable/tomatoes";
import coriander from "@/json/vegetable/coriander";
import cucumbers from "@/json/vegetable/cucumbers";
import brinjal from "@/json/vegetable/brinjal";
import bottleGuard from "@/json/vegetable/bottle-guard";
import spinach from "@/json/vegetable/spinach";

const gc = [
    {
        name: 'Tomatoes',
        slug: 'tomatoes',
        created_on: "2025-05-02 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.VEGETABLE ],
        ref: tomato,
        trending: 10
    },
    {
        name: 'Coriander',
        slug: 'coriander',
        created_on: "2025-05-04 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.SPICE ],
        ref: coriander,
        trending: 9
    },
    {
        name: 'Cucumber',
        slug: 'cucumber',
        created_on: "2025-05-05 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.VEGETABLE ],
        ref: cucumbers,
        trending: 9
    },
    {
        name: 'Brinjal',
        slug: 'brinjal',
        created_on: "2025-05-10 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.VEGETABLE ],
        ref: brinjal,
        trending: 9
    },
    {
        name: 'Bottle Gourd',
        slug: 'bottle-guard',
        created_on: "2025-05-11 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.VEGETABLE ],
        ref: bottleGuard,
        trending: 9
    },
    {
        name: 'Spinach',
        slug: 'spinach',
        created_on: "2025-11-16 10:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.VEGETABLE ],
        ref: spinach,
        trending: 10
    }
];

export default gc;