import app from "@/config/app";

/**
 * Normalize a plant JSON object to ensure required fields are present
 * and redundant pieces can be derived. Non-destructive: returns a new object.
 *
 * Derivations performed:
 * - path: derives from slug as `/how-to-grow/${slug}` when missing
 * - seo.thumbnail: falls back to media cover or first image, prefixed with app.url for absolute OG/Twitter URLs if needed by `metaSEO`
 * - seo.images: falls back to images list (array of src strings)
 * - dates: tries to keep as-is; no format enforcement here
 *
 * @param {object} plant Raw plant JSON (v1 or partially migrated)
 * @param {object} opts { slug?: string }
 * @returns {object} normalized plant object with safe defaults
 */
export default function normalizePlant(plant, opts = {}) {
    const {slug} = opts;
    const p = plant || {};

    // Images array in two possible shapes: [{src, alt}] or strings (older?)
    const images = Array.isArray(p.images) ? p.images : [];
    const imageSrcs = images
        .map((img) => (typeof img === "string" ? img : img?.src))
        .filter(Boolean);

    const cover = p.cover || imageSrcs[0] || "";
    const derivedPath = p.path || (slug ? `/how-to-grow/${slug}` : undefined);

    const seo = p.seo || {};
    const seoImages = Array.isArray(seo.images) && seo.images.length > 0 ? seo.images : imageSrcs;
    const seoThumbnail = seo.thumbnail || (cover ? `${app.url}${cover.startsWith("/") ? cover : `/${cover}`}` : undefined);

    return {
        ...p,
        path: derivedPath,
        seo: {
            ...seo,
            images: seoImages,
            thumbnail: seoThumbnail,
        },
        // Keep a non-breaking hint section for future adapters if needed
        __normalized: true,
    };
}
