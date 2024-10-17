import app from "@/config/app";

export default function metaSEO(plant, {img_width = 1582, img_height = 718}, type = "article") {
    return {
        title: plant.seo.title,
        description: plant.seo.description,
        keywords:  plant.seo.keywords,
        openGraph: {
            title: plant.seo.title,
            description: plant.seo.description,
            images: [
                {
                    url: plant.seo.thumbnail,
                    width: img_width,
                    height: img_height,
                    alt: plant.seo.title,
                },
            ],
            url: `${app.url}${plant.path}`,
            type
        },
        twitter: {
            title: plant.seo.title,
            description: plant.seo.description,
            images: [
                {
                    url: plant.seo.thumbnail,
                    width: img_width,
                    height: img_height,
                    alt: plant.seo.title,
                },
            ],
        },
        alternates: {
            canonical: `${app.url}${plant.path}`,
        }
    }
}