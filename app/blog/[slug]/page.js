import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlog } from "../../lib/api";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const dynamic = "force-dynamic";

async function loadBlog(slug) {
  try {
    return await getBlog(slug);
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await loadBlog(slug);

  if (!blog) return {};

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.keywords || [],
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await loadBlog(slug);

  if (!blog) notFound();

  return (
    <main className="min-h-screen bg-white text-[#0d274d]" dir="ltr">
      <SiteHeader active="blog" />

      <article className="mx-auto max-w-4xl px-5 py-16">
        <Link className="text-sm font-black text-[#c72424]" href="/blog">
          Back to blog
        </Link>
        <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
          {blog.title}
        </h1>
        {blog.image ? (
          <img
            alt={blog.title}
            className="mt-10 max-h-[460px] w-full object-cover"
            src={blog.image}
          />
        ) : null}
        <div className="mt-10 whitespace-pre-line text-lg leading-9 text-[#40536f]">
          {blog.content}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
