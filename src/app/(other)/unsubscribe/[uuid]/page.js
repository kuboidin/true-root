import Image from "next/image";
import bgImage from "@/public/assets/img/balls.jpg";
import React from "react";
import app from '@/config/app';
import {unsubscribe} from "@/service/unsubscribe";
import {b64d} from "@/lib/utils";

export const metadata = {
    title: `Congratulations, You are unsubscribed - ${app.name}`,
    description: `Your email is now unsubscribed, you will not receive emails from us anymore`,
};

export default async function Page({params}) {
    const uuid = params.uuid;
    await unsubscribe(b64d(uuid));

    return <main className="grid min-h-full w-full place-items-center place-content-center px-6 py-24 sm:py-32 lg:px-8 justify-center">
        <div className="text-center">
            <Image src={bgImage} alt="Congratulations" title="Congratulations" className="rounded w-[400px] ml-[40px]"/>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-900 sm:text-5xl">Congratulations!!!</h1>
            <p className="mt-6 text-base leading-7 text-600">Your email is now unsubscribed!</p>
        </div>
    </main>;
}