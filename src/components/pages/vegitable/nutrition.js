import {cn} from "@/lib/utils";

export default function Nutrition({ heading, items = [] }) {
    return <div className={cn("grid grid-cols-3 grid-cols-5 grid-cols-7 grid-cols-9 grid-cols-11 grid-cols-13 grid-cols-15 grid-cols-17 grid-cols-19 grid-cols-21 grid-cols-23", `grid-cols-${items.length * 2 + 3}`)}>
        <div className="info-heading bg-lightGreen col-span-full md:col-span-3 py-2 px-2 md:py-8 md:px-8 text-center items-center content-center text-lg font-bold">{heading}</div>
        { items.length > 0 && items.map((i, j) =>
            <div key={j} className="col-span-full md:col-span-2 flex flex-col gap-2 bg-fadeGreen py-2 px-2 md:py-8 md:px-8 text-center items-center">
                <span className="text-base sm:text-lg font-bold">{i.value}</span>
                <span className="text-xs sm:text-sm">{i.name}</span>
            </div>
        )}
    </div>
}