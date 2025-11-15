import app from "@/config/app";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/markdown";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: app.seo_title, description: app.meta.description };
  const { meta } = post;
  const title = meta.title ? `${meta.title} | ${app.name}` : app.seo_title;
  const description = meta.description || app.meta.description;
  const url = `${app.url}/blog/${slug}`;
  const image = meta.cover || app.og.image;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const { meta, html } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    image: meta.cover || app.og.image,
    datePublished: meta.date,
    dateModified: meta.updated || meta.date,
    author: {
      "@type": "Organization",
      name: app.og.author,
    },
    mainEntityOfPage: `${app.url}/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="relative py-10">
        <div className="container max-w-3xl">
          <header className="mb-6">
            {meta.tags && (
              <div className="text-xs text-primary/80 font-semibold uppercase tracking-wide mb-2">
                {Array.isArray(meta.tags) ? meta.tags.join(" · ") : meta.tags}
              </div>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">{meta.title || slug}</h1>
            <p className="text-muted-foreground">{meta.description}</p>
            <div className="mt-3 text-xs text-muted-foreground">
              <time dateTime={meta.date}>{meta.date}</time>
            </div>
          </header>
          {meta.cover && (
            <div className="relative w-full h-[260px] sm:h-[360px] mb-6 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={meta.cover} alt={meta.title} className="object-cover w-full h-full" />
            </div>
          )}
          <div className="prose prose-neutral max-w-none prose-h2:mt-8 prose-h3:mt-6 prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </>
  );
}
