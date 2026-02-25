"use client";

import { useState, useEffect } from "react";
import { IPost } from "@/models/post.model";
import Link from "next/link";

const PostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        setError("Failed to fetch posts");
      }
    } catch {
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Posts
          </h1>

          <Link
            href="/posts/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Post
          </Link>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-neutral-900" />
          </div>
        )}

        {!loading && error && (
          <div className="text-center text-red-600 py-10 text-sm sm:text-base">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-base sm:text-lg">
                  No posts yet.
                </p>
                <Link
                  href="/posts/create"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                >
                  Create the first post
                </Link>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <div className="p-5 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.content}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="text-xs sm:text-sm text-gray-500">
                          <div>By {post.author?.name || "Unknown"}</div>
                          <div>
                            {new Date(post.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        <Link
                          href={`/posts/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostsList;
