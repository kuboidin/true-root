import Link from "next/link";
import Image from "next/image";
import app from "@/config/app";
import {getAllPosts} from "@/lib/markdown";

export const metadata = {
  title: `Blog | ${app.name}`,
  description: "Insights, tips, and how‑tos on home gardening, soil health, composting, pests, and sustainable growing in India.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${app.name}`,
    description: "Insights, tips, and how‑tos on home gardening, soil health, composting, pests, and sustainable growing in India.",
    url: `${app.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
      <section className="relative py-16">
      <div className="container">
          <header className="max-w-3xl mb-12">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">TrueRoot Blog</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">Ideas and practical guides for Indian home gardeners — from seed to plate.</p>
        </header>

        {posts.length === 0 && (
            <div className="bg-white rounded-2xl shadow p-8">
            <p className="text-center">No posts yet. Check back soon!</p>
          </div>
        )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
              <article key={i} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-black/5">
              {p.cover && (
                  <Link href={`/blog/${p.slug}`} className="block relative h-48 w-full overflow-hidden">
                      <Image src={p.cover} alt={p.title || p.slug} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-300"/>
                </Link>
              )}
                  <div className="p-6">
                      <div className="text-[10px] sm:text-xs text-primary/80 font-semibold uppercase tracking-wide mb-1.5">
                  {Array.isArray(p.tags) ? p.tags.join(" · ") : p.tags}
                </div>
                      <h2 className="mt-1.5 text-lg sm:text-xl font-bold leading-snug">
                  <Link href={`/blog/${p.slug}`} className="hover:text-primary">
                    {p.title || p.slug}
                  </Link>
                </h2>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.description || p.excerpt}</p>
                      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <time dateTime={p.date}>{p.date}</time>
                  <Link className="text-primary font-semibold" href={`/blog/${p.slug}`}>Read more →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
