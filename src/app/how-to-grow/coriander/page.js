import app from "@/config/app";
import newDate from "@/lib/date";
import metaSEO from "@/service/meta";
import VegitableTemplate from "@/app/how-to-grow/template/vegitable-template";
import normalizePlant from "@/lib/plant-normalize";

// plant JSON
import rawPlant from "@/json/vegetable/coriander";

export function generateMetadata() {
    const plant = normalizePlant(rawPlant, {slug: "coriander"});
    return metaSEO(plant, {
        img_width: 1318,
        img_height: 661
    }, "article");
}

export default function Page() {
    const plant = normalizePlant(rawPlant, {slug: "coriander"});
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