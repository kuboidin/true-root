import {cn} from "@/lib/utils";

export default function Nutrition({ heading, items = [] }) {
    return <div className={cn("grid grid-cols-3 grid-cols-5 grid-cols-7 grid-cols-9 grid-cols-11 grid-cols-13 grid-cols-15 grid-cols-17 grid-cols-19 grid-cols-21 grid-cols-23", `grid-cols-${items.length * 2 + 3}`)}>
        <div className="info-heading bg-lightGreen col-span-3 py-8 px-8 text-center items-center content-center text-lg font-bold">{heading}</div>
        { items.length > 0 && items.map((i, j) =>
            <div key={j} className="col-span-2 flex flex-col gap-2 bg-fadeGreen py-8 px-8 text-center items-center">
                <span className="text-lg font-bold">{i.value}</span>
                <span className="text-sm">{i.name}</span>
            </div>
        )}
    </div>
}