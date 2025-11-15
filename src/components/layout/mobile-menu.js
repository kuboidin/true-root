"use client";

import * as React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Menu} from "lucide-react";
import app from "@/config/app";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import menuList from "@/components/layout/menuList";
import {Separator} from "@/components/ui/separator";


export default function MobileMenu({topPosts = []}) {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="w-12 h-12 border-0 rounded-none my-3 text-base bg-black text-white focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden float-right" aria-label="Toggle Menu">
                    <Menu size={30} className="w-8 h-8"/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 z-[9999] bg-[#fffaf3]">
                <ScrollArea className="my-4 h-[calc(100vh-6rem)] pb-10 overflow-hidden">
                    <div className="container flex flex-col space-y-2">
                        <MobileLink href="/" className="flex flex-row items-center gap-2" onOpenChange={setOpen}>
                            <Image src={app.logo.default} alt={app.name} title={app.name} width={48} height={48}/>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-xl">{app.name}</span>
                                <span className="text-base text-emerald-800">A Kuboid Product</span>
                            </div>
                        </MobileLink>

                        <Separator/>

                        <div className="flex flex-col gap-4 mt-4">
                            <MobileLink onOpenChange={setOpen} href="/"><h5 className="font-bold text-xl">Home</h5></MobileLink>

                            {/* Blog with dynamic Top 10 */}
                            <div className="flex flex-col gap-2">
                                <MobileLink onOpenChange={setOpen} href="/blog"><h5 className="font-bold text-xl">Blog</h5></MobileLink>
                                {topPosts && topPosts.length > 0 && (
                                    <div className="mx-3 flex flex-col gap-1">
                                        {topPosts.map((p, i) => (
                                            <MobileLink key={i} onOpenChange={setOpen} href={`/blog/${p.slug}`} className="underline truncate">{p.title || p.slug}</MobileLink>
                                        ))}
                                        <div className="mt-2">
                                            <MobileLink onOpenChange={setOpen} href="/blog" className="font-semibold">Browse all →</MobileLink>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Separator/>
                            {menuList.map((menu, i) => (
                                <div className="flex flex-col gap-2" key={i}>
                                    <MobileLink onOpenChange={setOpen} href={menu.href}><h5 className="font-bold text-xl">{menu.heading}</h5></MobileLink>

                                    <div className="grid grid-cols-2 justify-between gap-4">
                                        {menu.sub_headings.map((sub, j) => (
                                            <div className="mx-3" key={j}>
                                                <MobileLink onOpenChange={setOpen} href={sub.href}><h5 className="font-bold text-base mb-1.5">{sub.name}</h5></MobileLink>

                                                <div className="flex flex-col gap-1">
                                                    {sub.items.map((m, k) => <div key={k}><MobileLink onOpenChange={setOpen} href={m.href} className="underline">{m.name}</MobileLink></div>)}
                                                </div>
                                            </div>

                                        ))}
                                    </div>

                                    <Separator className="my-4"/>
                                </div>
                            ))}

                            <Separator/>
                            <div className="flex flex-col gap-2">
                                <MobileLink onOpenChange={setOpen} href="/support"><h5 className="font-bold text-xl">Support</h5></MobileLink>

                                <div className="grid grid-cols-1 justify-between gap-4">
                                    <div className="mx-3">
                                        <MobileLink onOpenChange={setOpen} href="/support"><h5 className="font-bold text-base mb-1.5">Contact us</h5></MobileLink>
                                        <MobileLink onOpenChange={setOpen} href="/about"><h5 className="font-bold text-base mb-1.5">About us</h5></MobileLink>
                                        <MobileLink onOpenChange={setOpen} href="/privacy"><h5 className="font-bold text-base mb-1.5">Privacy Policy</h5></MobileLink>
                                        <MobileLink onOpenChange={setOpen} href="/terms-of-service"><h5 className="font-bold text-base mb-1.5">Terms of Service</h5></MobileLink>
                                    </div>
                                </div>

                                <Separator className="my-4"/>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}


function MobileLink({href, onOpenChange, className, children, ...props}) {
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
