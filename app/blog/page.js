import Link from "next/link";
import { getBlogs } from "../lib/api";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Cleaning Blog Kuwait | Al Nawras Plus",
  description:
    "Read cleaning tips, service guides, and local updates from Al Nawras Plus cleaning company in Kuwait.",
};

async function loadBlogs() {
  try {
    return await getBlogs();
  } catch (error) {
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await loadBlogs();

  return (
    <main className="min-h-screen bg-white text-[#0d274d]" dir="ltr">
      <SiteHeader active="blog" />

      <section className="bg-[#fff4d8] px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#1d6a29]">
            Cleaning Blog
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight">
            Cleaning tips and service updates for Kuwait homes and offices
          </h1>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {blogs.length ? (
            blogs.map((blog) => (
              <Link
                className="border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(13,39,77,.08)] transition hover:-translate-y-1"
                href={`/blog/${blog.slug}`}
                key={blog.id}
              >
                {blog.image ? (
                  <img
                    alt={blog.title}
                    className="mb-5 h-44 w-full object-cover"
                    src={blog.image}
                  />
                ) : null}
                <h2 className="text-2xl font-black">{blog.title}</h2>
                <p className="mt-4 text-sm font-bold leading-7 text-[#687486]">
                  {blog.excerpt || blog.metaDescription}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-base font-bold text-[#687486]">
              No blog posts published yet.
            </p>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
