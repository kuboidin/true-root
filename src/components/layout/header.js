import Link from "next/link";
import app from "@/config/app";
import Image from "next/image";

import Menu from "@/components/layout/menu";
import MobileMenu from "@/components/layout/mobile-menu";
import Search from "@/components/layout/search";
import {getAllPosts} from "@/lib/markdown";

export default function Header({}) {
    const topPosts = getAllPosts().slice(0, 10);
    return <>
        <header className="site-header mo-left header style-2">
            <div className="bg-light2 relative z-99 max-lg:hidden">
                <div className="container relative">
                    <div className="flex align-middle float-left items-center relative py-3">
                        <Link href="/" className="mr-6 flex flex-row items-center gap-2 w-fit">
                            <Image src={app.logo.default} alt={app.name} title={app.name} width={64} height={64}/>
                            <div className="flex flex-col gap-1">
                                <span className="hidden font-bold sm:inline-block text-3xl">{app.name}</span>
                                <span className="text-xs text-primary">A Kuboid Product</span>
                            </div>
                        </Link>
                    </div>

                    <Search />
                </div>
            </div>

            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar relative after:block after:content-[''] after:clear-both">
                    <div className="container after:block after:content-[''] after:clear-both lg:flex block">
                        <Menu />
                        <MobileMenu topPosts={topPosts}/>
                    </div>
                </div>
            </div>
        </header>
    </>;
}