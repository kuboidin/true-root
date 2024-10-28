import {category as c} from '@/config/plant';

// ref
import tomato from "@/json/vegetable/tomatoes";
import coriander from "@/json/vegetable/coriander";

const gc = [
    {
        name: 'Tomatoes',
        created_on: "2024-10-10 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.VEGETABLE ],
        ref: tomato,
        trending: 10
    },
    {
        name: 'Coriander',
        created_on: "2024-10-11 09:00:00 AM",
        category: [ c.GROW, c.PLANT, c.GUIDE, c.SPICE ],
        ref: coriander,
        trending: 9
    }
];

export default gc;