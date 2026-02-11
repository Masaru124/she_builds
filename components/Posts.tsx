"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import Image from "next/image";

interface Post {
  _id: string;
  id: string;
  title: string;
  imageUrl?: string;
  pdfUrl?: string;
  content: string;
  createdAt: string;
  registrationUrl?: string;
  customButtonLabel?: string;
  eventDate?: string;
  author: {
    name: string;
    email: string;
  };
}

const PostCard = ({ post }: { post: Post }) => {
  const today = new Date().toISOString().split("T")[0];
  const eventDay = post.eventDate?.split("T")[0];
  const isUpcoming = post.eventDate && eventDay >= today;

  return (
    <div
      className="
    group relative flex flex-col overflow-hidden
    rounded-xl bg-white
    border border-dashed border-black/20
    transition-all duration-300
    hover:-translate-y-1 hover:border-black/30
  "
    >
      {post.imageUrl && (
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            width={400}
            height={400}
            loading="lazy"
          />

          {/* soft fade */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/0" />

          {isUpcoming && (
            <span
              className="
            absolute top-3 left-3
            rounded-full
            border border-white/30
            bg-white/15 backdrop-blur-md
            px-3 py-1 text-xs font-semibold text-white
          "
            >
              Upcoming
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-neutral-900 leading-snug">
          {post.title}
        </h2>

        {post.eventDate && (
          <p className="mt-2 text-sm font-medium text-neutral-700">
            📅 {format(new Date(post.eventDate), "MMM d, yyyy")}
          </p>
        )}

        <p className="mt-4 text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {post.content}
        </p>

        {/* footer */}
        <div className="mt-6 pt-5 border-t border-dashed border-black/10 flex flex-wrap gap-2">
          {post.pdfUrl && (
            <a
              href={post.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
            inline-flex items-center justify-center
            rounded-lg
            border border-black/15
            bg-white
            px-3 py-2 text-xs font-semibold text-neutral-900
            hover:bg-neutral-50
            transition
          "
            >
              View PDF
            </a>
          )}

          {post.registrationUrl && (
            <a
              href={post.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
            inline-flex items-center justify-center
            rounded-lg
            bg-neutral-900
            px-4 py-2 text-xs font-semibold text-white
            hover:bg-neutral-800
            transition
          "
            >
              {post.customButtonLabel || "Register"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PostsFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();

        if (response.ok) {
          const sorted = [...data.posts].sort(
            (a: Post, b: Post) =>
              new Date(b.createdAt.replace(" ", "T")).getTime() -
              new Date(a.createdAt.replace(" ", "T")).getTime(),
          );

          setPosts(sorted);
        } else {
          setError(data.error || "Failed to fetch posts");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-white px-2">
      <div className="max-w-6xl mx-auto px-6 py-12 border-x border-b border-dashed border-black/20">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 text-center">
          Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id || post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsFeed;
