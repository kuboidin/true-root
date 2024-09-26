import Link from "next/link";
import {ChevronRight} from "lucide-react";

export default function Breadcrumbs({ crumbs = [] }) {
    return <>
        <div className="sm:flex justify-between container-fluid py-4">
            <nav>
                <ul>
                    { crumbs.map((c, i) => <li key={i} className="mr-[3px] inline-block text-base font-medium">
                        { c.link ? <Link href={c.link}> {c.name} </Link> : c.name }
                        {i !== crumbs.length - 1 ? <ChevronRight size={16} className="inline-block -mt-[6px]"/> : null}
                    </li>)}
                </ul>
            </nav>
        </div>
    </>;
}