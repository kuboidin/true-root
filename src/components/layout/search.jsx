"use client";

import {Input} from "@/components/ui/input";
import {Search as SearchIcon} from "lucide-react";
import {useEffect, useState} from "react";
import gc from "@/json/global";
import newDate, {dateFormat} from "@/lib/date";
import {category} from "@/config/plant";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import common from "@/config/common";
import {useRouter} from "next/navigation";
import * as React from "react";

gc.sort((a, b) => newDate(b.created_on).toMillis() - newDate(a.created_on).toMillis());
gc.sort((a, b) => (b.trending ?? 0) - (a.trending ?? 0));
// const plants = gc.filter(g => g.category.includes(category.PLANT));
const plants = [...gc];

export default function Search() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [searchItems, setSearchItems] = useState([]);

    useEffect(() => {
        if (search.trim().length > 2) {
            searchFn(search.trim());
        } else {
            setSearchItems([]);
            setOpen(false);
        }
    }, [search]);

    function searchFn(txt) {
        setOpen(true);
        const filtered = plants.filter(p => p.ref.search.toLowerCase().includes(txt));
        setSearchItems(filtered ?? []);
    }

    return <div className="flex">
        <div className="h-[90px] w-full ml-[120px] max-xl:ml-14.5 items-center flex relative">
            <div className="relative flex flex-wrap items-center bg-white rounded-xl py-1.1 w-full">
                <div className="relative px-4">How to grow</div>
                <Input onChange={(e) => setSearch(e.target.value)} type="text" className="py-2.5 px-5 text-2sm text-title outline-none flex-auto w-[1%] h-[45px] bg-white border-none" aria-label="Search input" placeholder="Tomato (Search for any plants like vegitables, fruits, ornamental plants etc.)"/>
                <button className="absolute right-0 size-12 justify-center inline-flex items-center" type="button" aria-label="Search">
                    <SearchIcon className="text-secondary"/>
                </button>
            </div>
            <div className={cn("absolute top-20 bg-white w-full h-auto rounded-2xl border-2 px-4 py-4 flex-col gap-2", (open && searchItems.length > 0) ? "flex" : "hidden")}>
                {searchItems.slice(0, 6).map((plant, i) => <div key={i} className="flex items-center mb-4 border-b-2">
                    <div className="size-14.5 min-w-14.5 mr-3.6 items-center content-center justify-center">
                        <Image width={100} height={100} src={plant.ref.cover} alt={plant.ref.seo.title} className="rounded-xl w-full"/>
                    </div>
                    <div>
                        <h6><CLink onOpenChange={setOpen} href={plant.ref.path}>How to grow {plant.ref.hero.heading}?</CLink></h6>
                        <span className="text-2xs">{dateFormat(plant.ref.datePublished, common.format.longDate)}</span>
                    </div>
                </div>)}

                <div className="flex items-center content-center justify-center mb-4">
                    <CLink onOpenChange={setOpen} href={{pathname: '/search', query: { q: search }}} className="underline">more...</CLink>
                </div>
            </div>
        </div>
    </div>;
}

function CLink({href, onOpenChange, className, children, ...props}) {
    const router = useRouter();
    return (
        <Link href={href} onClick={() => {
            router.push(href.toString());
            onOpenChange?.(false);
        }} className={cn(className)}{...props}>
            {children}
        </Link>
    );
}