import Link from "next/link";
import app from "@/config/app";
import Image from "next/image";
import {Search} from "lucide-react";
import Menu from "@/components/layout/menu";
import MobileMenu from "@/components/layout/mobile-menu";

export default function Header({}) {
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

                    <div className="flex">
                        <form className="h-[90px] w-full ml-[120px] max-xl:ml-14.5 items-center flex relative">
                            <div className="relative flex flex-wrap items-center bg-white rounded-xl py-1.1 w-full">
                                <div className="relative px-4">
                                    How to grow
                                </div>
                                <input type="text" className="py-2.5 px-5 text-2sm text-title outline-none flex-auto w-[1%] h-[45px]" aria-label="Search input" placeholder="Tamato (Search for any plants like vegitables, fruits, ornamental plants etc.)"/>
                                <button className="absolute right-0 size-12 justify-center inline-flex items-center" type="button" aria-label="Search">
                                    <Search className="text-secondary"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar relative after:block after:content-[''] after:clear-both">
                    <div className="container after:block after:content-[''] after:clear-both lg:flex block">
                        <Menu />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    </>;
}