// import AnimatedCursor from "react-animated-cursor";
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';
import dynamic from 'next/dynamic';

import { Toaster } from "@/components/ui/toaster";
import "@/style/globals.css";
import 'animate.css';
import "@/style/custom.css";
import lufga from "@/app/lufga";
import Header from "@/components/layout/header";
import app from "@/config/app";
import Footer from "@/components/layout/footer";
import constant from "@/config/constant";

export const metadata = {
    // title: app.title,
    description: app.meta.description,
    keywords: app.meta.keywords,
    author: app.og.author,
    icons: {
        icon: app.logo.default,
        shortcut: app.logo.default,
        apple: app.logo.default,
    },
    metadataBase: new URL(app.url),
    openGraph: {
        title: app.og.title,
        description: app.og.description,
        siteName: app.name,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
        url: app.url,
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: app.og.twitter_card,
        domain: app.domain,
        title: app.og.title,
        description: app.og.description,
        creator: '@Kuboid4',
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
    },
    bookmarks: [app.url],
    category: 'saas',
};

const AnalyticsLazy = dynamic(() => import("@vercel/analytics/react").then((lib) => lib.Analytics));
const SpeedInsightsLazy = dynamic(() => import("@vercel/speed-insights/next").then((lib) => lib.SpeedInsights));
const AnimatedCursorLazy = dynamic(() => import("react-animated-cursor"));

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${lufga.className} antialiased selection:bg-primary selection:text-white`}>
    <div className="page-wraper">
        <Header />
        <div className="page-content bg-light overflow-hidden">
            {children}
        </div>
        <Footer />
        <Toaster />
    </div>
    {/* TODO */}
    {process.env.NEXT_PUBLIC_APP_ENV === constant.ENV.PRODUCTION && <AnimatedCursorLazy
        innerSize={10}
        outerSize={34}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
            backgroundColor: 'var(--cursor-black-color)',
            zIndex: 999999
        }}
        outerStyle={{
            border: '2px solid var(--cursor-color)',
            zIndex: 999999
        }}
    /> }

    {process.env.NEXT_PUBLIC_APP_ENV === constant.ENV.PRODUCTION && <AnalyticsLazy />}
    {process.env.NEXT_PUBLIC_APP_ENV === constant.ENV.PRODUCTION && <SpeedInsightsLazy />}
    {process.env.NEXT_PUBLIC_APP_ENV === constant.ENV.PRODUCTION ? <GoogleAnalytics gaId="G-T9LXE33ZEW"/> : null}

    </body>
    </html>
);
}
