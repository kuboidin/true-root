import Link from "next/link";
import Image from "next/image";
import menuList from "@/components/layout/menuList";
import {cn} from "@/lib/utils";
import {Mail} from "lucide-react";
import SubscriptionForm from "@/components/layout/subscription-form";

export default function Menu() {
    return <>
        <div className="header-nav w3menu navbar-collapse justify-start">
            <ul className="nav navbar-nav">
                <li className="has-mega-menu sub-menu-down">
                    <Link href="/"><span>Home</span><i className="fas fa-chevron-down tabindex"></i></Link>
                </li>
                <li className="has-mega-menu sub-menu-down">
                    <Link href="/blog"><span>Blog</span><i className="fas fa-chevron-down tabindex"></i></Link>
                </li>

                {menuList.map((menu, i) => (<li className="has-mega-menu sub-menu-down" key={i}>
                    <Link href={menu.href}><span>{menu.heading}</span><i className="fas fa-chevron-down tabindex"></i></Link>
                    <div className="mega-menu shop-menu">
                        <div className="grid grid-cols-3 gap-4">
                            <div className={cn("grid grid-cols-3 justify-between gap-4 col-span-2 col-span-full", (menu.featured && menu.featured.image) ? "col-span-2" : "col-span-full")}>
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

                <li className="has-mega-menu sub-menu-down">
                    <Link href="/support"><span>Support</span><i className="fas fa-chevron-down tabindex"></i></Link>
                    <div className="mega-menu shop-menu">
                        <div className="grid grid-cols-2 justify-between gap-4">
                            <div>
                                <ul><li><Link href="/support">Contact us</Link></li></ul>
                                <ul><li><Link href="/about">About us</Link></li></ul>
                                <ul><li><Link href="/privacy">Privacy Policy</Link></li></ul>
                                <ul><li><Link href="/terms-of-service">Terms of Service</Link></li></ul>
                            </div>
                            <div className="text-center xxl:ml-[1.5rem] xxl:mr-[1.5rem] mt-[20px] p-[65px_10px_45px] bg-white lg:p-[40px_15px_30px] md:p-[40px_15px_30px] sm:p-[40px_15px_30px] xsm:p-[40px_15px_30px] wow fadeInUp">
                                <div className="icon h-10 flex items-end justify-center">
                                    <Mail size={40}/>
                                </div>
                                <div className="text">
                                    <h5 className="title text-black mt-[25px]  mb-[10px] text-[26px] lg:text-[22px] md:text-[22px] sm:text-[22px] xsm:text-[22px]">Subscribe to Our Newsletter</h5>
                                    <p className=" text-[18px] leading-8 text-[#878787]  lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] mb-2">🤝 that&apos;s it, we only need you email, no spam! I Promise! 🤞</p>
                                    <SubscriptionForm />
                                </div>
                            </div>
                        </div>+
                    </div>
                </li>

            </ul>
        </div>
    </>;
}