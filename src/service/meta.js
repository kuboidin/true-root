import app from "@/config/app";

export default function metaSEO(plant, {img_width = 1582, img_height = 718}, type = "article") {
    const seo = plant?.seo || {};
    const title = seo.title || app.seo_title;
    const description = seo.description || app.meta.description;
    const keywords = seo.keywords || app.meta.keywords;

    // Derive a safe image URL
    const firstImage = Array.isArray(seo.images) && seo.images.length > 0 ? seo.images[0] : undefined;
    const cover = plant?.cover || (Array.isArray(plant?.images) && plant.images[0]?.src);
    const fallbackThumb = cover ? `${app.url}${cover.startsWith('/') ? cover : `/${cover}`}` : undefined;
    const imageUrl = seo.thumbnail || (typeof firstImage === 'string' ? `${app.url}${firstImage.startsWith('/') ? firstImage : `/${firstImage}`}` : fallbackThumb) || `${app.url}/assets/og/default.png`;

    const path = plant?.path || "";
    const canonicalUrl = `${app.url}${path}`;

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: img_width,
                    height: img_height,
                    alt: title,
                },
            ],
            url: canonicalUrl,
            type
        },
        twitter: {
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    width: img_width,
                    height: img_height,
                    alt: title,
                },
            ],
        },
        alternates: {
            canonical: canonicalUrl,
        }
    }
}