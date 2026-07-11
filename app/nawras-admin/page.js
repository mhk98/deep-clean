"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_BASE_URL } from "../lib/api";

const emptyService = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  image: "",
  metaTitle: "",
  metaDescription: "",
  keywords: "",
  benefits: "",
  status: "published",
};

const emptyBlog = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  image: "",
  metaTitle: "",
  metaDescription: "",
  keywords: "",
  status: "published",
};

async function postResource(path, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || "Save failed");
  }
  return payload.data;
}

async function loadResource(path) {
  const response = await fetch(`${API_BASE_URL}${path}?all=true`, {
    cache: "no-store",
  });
  if (!response.ok) return [];
  const payload = await response.json();
  return payload.data || [];
}

function Field({ label, name, value, onChange, textarea = false }) {
  const className =
    "mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#0d274d]";

  return (
    <label className="block text-sm font-black text-[#0d274d]">
      {label}
      {textarea ? (
        <textarea
          className={`${className} min-h-32`}
          name={name}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input className={className} name={name} onChange={onChange} value={value} />
      )}
    </label>
  );
}

export default function NawrasAdminPage() {
  const [tab, setTab] = useState("service");
  const [service, setService] = useState(emptyService);
  const [blog, setBlog] = useState(emptyBlog);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");

  const refresh = async () => {
    const [serviceItems, blogItems] = await Promise.all([
      loadResource("/services"),
      loadResource("/blogs"),
    ]);
    setServices(serviceItems);
    setBlogs(blogItems);
  };

  useEffect(() => {
    let isMounted = true;

    Promise.all([loadResource("/services"), loadResource("/blogs")]).then(
      ([serviceItems, blogItems]) => {
        if (!isMounted) return;
        setServices(serviceItems);
        setBlogs(blogItems);
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  const updateService = (event) =>
    setService((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

  const updateBlog = (event) =>
    setBlog((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));

  const saveService = async (event) => {
    event.preventDefault();
    setMessage("Saving service...");
    try {
      await postResource("/services", service);
      setService(emptyService);
      setMessage("Service saved");
      refresh();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const saveBlog = async (event) => {
    event.preventDefault();
    setMessage("Saving blog...");
    try {
      await postResource("/blogs", blog);
      setBlog(emptyBlog);
      setMessage("Blog saved");
      refresh();
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-[#0d274d]" dir="ltr">
      <header className="border-b border-slate-200 bg-white px-5 py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1d6a29]">
              Nawras Admin
            </p>
            <h1 className="mt-1 text-2xl font-black">Content Manager</h1>
          </div>
          <Link className="text-sm font-black" href="/">
            View site
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_360px]">
        <div className="bg-white p-6 shadow-[0_8px_24px_rgba(13,39,77,.08)]">
          <div className="mb-6 flex gap-3">
            {[
              ["service", "Add Service"],
              ["blog", "Add Blog"],
            ].map(([id, label]) => (
              <button
                className={`px-5 py-3 text-sm font-black ${
                  tab === id
                    ? "bg-[#0d274d] text-[#ffd366]"
                    : "bg-[#fff4d8] text-[#0d274d]"
                }`}
                key={id}
                onClick={() => setTab(id)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "service" ? (
            <form className="grid gap-5" onSubmit={saveService}>
              <Field label="Service Title" name="title" onChange={updateService} value={service.title} />
              <Field label="Slug" name="slug" onChange={updateService} value={service.slug} />
              <Field label="Excerpt" name="excerpt" onChange={updateService} textarea value={service.excerpt} />
              <Field label="Content" name="content" onChange={updateService} textarea value={service.content} />
              <Field label="Image URL" name="image" onChange={updateService} value={service.image} />
              <Field label="Meta Title" name="metaTitle" onChange={updateService} value={service.metaTitle} />
              <Field label="Meta Description" name="metaDescription" onChange={updateService} textarea value={service.metaDescription} />
              <Field label="Keywords, comma separated" name="keywords" onChange={updateService} value={service.keywords} />
              <Field label="Benefits, one per line" name="benefits" onChange={updateService} textarea value={service.benefits} />
              <button className="h-12 bg-[#ffd366] px-6 text-sm font-black text-[#092346]" type="submit">
                Save Service
              </button>
            </form>
          ) : (
            <form className="grid gap-5" onSubmit={saveBlog}>
              <Field label="Blog Title" name="title" onChange={updateBlog} value={blog.title} />
              <Field label="Slug" name="slug" onChange={updateBlog} value={blog.slug} />
              <Field label="Excerpt" name="excerpt" onChange={updateBlog} textarea value={blog.excerpt} />
              <Field label="Content" name="content" onChange={updateBlog} textarea value={blog.content} />
              <Field label="Image URL" name="image" onChange={updateBlog} value={blog.image} />
              <Field label="Meta Title" name="metaTitle" onChange={updateBlog} value={blog.metaTitle} />
              <Field label="Meta Description" name="metaDescription" onChange={updateBlog} textarea value={blog.metaDescription} />
              <Field label="Keywords, comma separated" name="keywords" onChange={updateBlog} value={blog.keywords} />
              <button className="h-12 bg-[#ffd366] px-6 text-sm font-black text-[#092346]" type="submit">
                Save Blog
              </button>
            </form>
          )}

          {message ? <p className="mt-5 text-sm font-black text-[#1d6a29]">{message}</p> : null}
        </div>

        <aside className="space-y-6">
          <div className="bg-white p-5 shadow-[0_8px_24px_rgba(13,39,77,.08)]">
            <h2 className="text-xl font-black">Services</h2>
            <div className="mt-4 space-y-3">
              {services.map((item) => (
                <Link className="block text-sm font-bold hover:text-[#c72424]" href={`/services/${item.slug}`} key={item.id}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-white p-5 shadow-[0_8px_24px_rgba(13,39,77,.08)]">
            <h2 className="text-xl font-black">Blogs</h2>
            <div className="mt-4 space-y-3">
              {blogs.map((item) => (
                <Link className="block text-sm font-bold hover:text-[#c72424]" href={`/blog/${item.slug}`} key={item.id}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
