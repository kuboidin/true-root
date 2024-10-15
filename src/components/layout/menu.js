import Link from "next/link";
import Image from "next/image";
import menuList from "@/components/layout/MenuList";
import {cn} from "@/lib/utils";

export default function Menu() {
    return <>
        <div className="header-nav w3menu navbar-collapse justify-start">
            <ul className="nav navbar-nav">
                <li className="has-mega-menu sub-menu-down">
                    <Link href="/"><span>Home</span><i className="fas fa-chevron-down tabindex"></i></Link>
                </li>

                {menuList.map((menu, i) => (<li className="has-mega-menu sub-menu-down" key={i}>
                    <Link href={menu.href}><span>{menu.heading}</span><i className="fas fa-chevron-down tabindex"></i></Link>
                    <div className="mega-menu shop-menu">
                        <div className="grid grid-cols-3 gap-4">
                            <div className={cn("grid grid-cols-3 justify-between gap-4 col-span-2 col-span-full", (menu.featured && menu.featured.image) ? "col-span-2" : "col-span-full" )}>
                                {menu.sub_headings.map((sub, j) => (<div key={j}>
                                    <Link href={sub.href} className="menu-title">{sub.name}</Link>
                                    <ul>
                                        {sub.items.map((m, k) => <li key={k}><Link href={m.href}>{m.name}</Link></li>)}
                                    </ul>
                                </div>))}
                            </div>
                            {(menu.featured && menu.featured.image) && <div>
                                <div className="adv-media">
                                    <Link href={menu.featured.href}><Image width={300} height={420} src={menu.featured.image} alt={menu.featured.title}/></Link>
                                </div>
                            </div>}
                        </div>
                    </div>
                </li>))}
            </ul>
        </div>
    </>;
}