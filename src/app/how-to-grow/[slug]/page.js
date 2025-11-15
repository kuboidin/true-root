import app from "@/config/app";
import newDate from "@/lib/date";
import metaSEO from "@/service/meta";
import gc from "@/json/global";
import {notFound} from "next/navigation";
import VegitableTemplate from "@/app/how-to-grow/template/vegitable-template";
import normalizePlant from "@/lib/plant-normalize";

export async function generateMetadata({params}) {
    const {slug} = await params;
    const crop = gc.find(c => c.slug === slug);
    if (!crop) {
        return {
            title: app.seo_title,
            description: app.meta.description,
        }
    }
    const plant = normalizePlant(crop.ref, {slug});
    return metaSEO(plant, {
        img_width: 1582,
        img_height: 718
    }, "article");
}

export default async function Page({ params }) {
    const {slug} = await params;
    const crop = gc.find(c => c.slug === slug);
    if (!crop) {
        notFound();
    }
    const plant = normalizePlant(crop.ref, {slug});
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": plant.seo.title,
        "description": plant.seo.description,
        "image": plant.seo.images,
        "datePublished": newDate(plant.datePublished).toString(),
        "dateModified": newDate(plant.dateModified).toString(),
        "author": {
            "@type": "Organization",
            "name": app.og.author
        }
    };

    return <>
        {/* Add JSON-LD to your page */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
        {/* ... */}
        <VegitableTemplate plant={plant}/>
    </>;
}