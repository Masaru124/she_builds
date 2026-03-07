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
  const isUpcoming = post.eventDate && eventDay && eventDay >= today;

  return (
    <div
      className="
      group bg-white  overflow-hidden
      border border-gray-200
      hover:border-purple-300
      
      transition-all duration-300
      flex flex-col
    "
    >
      {post.imageUrl && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={500}
            height={400}
            className="w-full h-full object-cover transition duration-500"
          />

          {post.eventDate && (
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium">
              {format(new Date(post.eventDate), "MMM d, yyyy")}
            </div>
          )}

          {isUpcoming && (
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              Upcoming
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col grow">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug">
          {post.title}
        </h2>

        <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed">
          {post.content}
        </p>

        <div className="mt-6 pt-5 flex gap-2 flex-wrap">
          {post.pdfUrl && (
            <a
              href={post.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-xs font-medium
              border border-gray-200
              px-3 py-2 
              hover:bg-gray-50
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
              text-xs font-semibold
              bg-purple-600 text-white
              px-4 py-2
              hover:bg-purple-700
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

  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-left">
        <h1 className="text-4xl md:text-5xl font-[new] font-semibold text-gray-900">
          Community Events
        </h1>

        <p className="text-gray-600 mt-4 mx-auto text">
          Workshops, hackathons, demo days and build sessions from the SheBuilds
          Bangalore community.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {loading && (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 rounded-full border-t-2 border-b-2 border-purple-600 animate-spin" />
          </div>
        )}

        {!loading && error && (
          <div className="text-center text-red-600 py-10">{error}</div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No events posted yet.
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id || post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PostsFeed;
