import Link from "next/link";
import Image from "next/image";
import {cn, randomItem} from "@/lib/utils";

const order = [
    ['col-span-3', 'col-span-2', 'col-span-4'],
    ['col-span-3', 'col-span-4', 'col-span-2'],
    ['col-span-2', 'col-span-3', 'col-span-4'],
    ['col-span-2', 'col-span-4', 'col-span-3'],
    ['col-span-4', 'col-span-3', 'col-span-2'],
    ['col-span-4', 'col-span-2', 'col-span-3']
];
const imgs = [ImgSE, ImgEE, ImgSS, ImgTR, ImgSE, ImgEE, ImgSS, ImgTR, ImgSE, ImgEE, ImgSS, ImgTR];
let row = order[0];
export default function PlantsTile({ plants = []}) {
    return <>
        { plants.map((plant, i) => {
            const col = i % 3;
            if (col === 0) {
                row = randomItem(order);
            }

            const Elm = randomItem(imgs);

            return <div key={i} className={cn("col-span-3 col-span-2 col-span-4", row[col])}>
                <div className="group relative z-1 mb-13.5 max-lg:mb-0 pl-10 max-lg:pl-0">
                    <Link href={plant.ref.path}>
                        {/*<Image width={400} height={300} src={plant.ref.cover} alt={plant.ref.seo.title} className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ee-7xl max-md:rounded-ee-4xl group-hover:rounded-ee-3xl duration-500"/>*/}
                        <Elm cover={plant.ref.cover} title={plant.ref.seo.title} />
                        <div className="absolute left-0 max-lg:left-[-15px] max-sm:!-left-2.5 bg-white border-4 border-white font-Lufga text-xxl max-lg:text-sm max-sm:!text-xs py-2 px-5 max-lg:py-1.1 max-lg:px-2.5 max-sm:!py-1 max-sm:!px-1.5 bottom-7.5 max-lg:bottom-3.6 max-sm:!bottom-2 capitalize rounded-3xl max-sm:rounded-lg shadow-[0px_15px_30px_0px_rgba(0,0,0,0.1)] duration-500 group-hover:bg-primary group-hover:text-white">
                            {plant.name}
                        </div>
                    </Link>
                </div>
            </div>
        }) }
    </>;
}

function ImgSE({ cover, title }) {
    return <Image width={400} height={300} src={cover} alt={title} className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3xl rounded-se-7xl max-md:rounded-se-4xl group-hover:rounded-se-3xl duration-500"/>
}

function ImgEE({ cover, title }) {
    return <Image width={400} height={300} src={cover} alt={title} className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ee-7xl max-md:rounded-ee-4xl group-hover:rounded-ee-3xl duration-500"/>
}

function ImgSS({ cover, title }) {
    return <Image width={400} height={300} src={cover} alt={title} className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3xl rounded-ss-7xl max-md:rounded-ss-4xl group-hover:rounded-ss-3xl duration-500"/>
}

function ImgTR({ cover, title }) {
    return <Image width={400} height={300} src={cover} alt={title} className="w-full h-[300px] max-sm:h-[150px] object-cover border-4 border-white rounded-3xl rounded-tr-7xl max-md:rounded-tr-4xl group-hover:rounded-tr-3xl duration-500"/>
}