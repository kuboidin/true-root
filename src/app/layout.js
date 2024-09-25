import AnimatedCursor from "react-animated-cursor";
import "@/style/globals.css";
import lufga from "@/app/lufga";
import Header from "@/components/layout/header";
import app from "@/config/app";

export const metadata = {
    title: app.title,
    description: app.meta.description,
    keywords: app.meta.keywords,
    author: app.kuboid.name,
    icons: {
        icon: app.logo.default,
        shortcut: app.logo.default,
        apple: app.logo.default,
    },
    metadataBase: new URL(app.url),
    openGraph: {
        title: app.title,
        description: app.meta.description,
        siteName: app.name,
        images: [
            {
                url: `${app.url}/assets/logo/logo.png`,
                width: 1869,
                height: 678,
                alt: `${app.name}`,
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        domain: app.domain,
        title: app.title,
        description: app.meta.description,
        creator: '@Kuboid4',
        images: [`${app.url}/assets/logo/logo.png`],
    },
    bookmarks: [app.url],
    category: 'saas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${lufga.className} antialiased selection:bg-primary selection:text-white`}>
    <div className="page-wraper">
        <Header />
        <div className="page-content bg-light overflow-hidden">
            {children}
        </div>
    </div>
    <AnimatedCursor
        innerSize={10}
        outerSize={34}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
            backgroundColor: 'var(--cursor-black-color)',
            zIndex: 999999
        }}
        outerStyle={{
            border: '2px solid var(--cursor-color)',
            zIndex: 999999
        }}
    />
    </body>
    </html>
);
}
