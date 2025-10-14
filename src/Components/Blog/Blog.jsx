import React, { useEffect, useState } from "react";
import api from "../../api";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/blog/")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching blog posts:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 py-8">Loading blog posts...</div>;
  }

  // import a single image (you can change this path to your actual asset)
  const blogImage = "/assets/wizrd blogs.png";

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        Blog
      </h1>

      {/* Single Header Image */}
      <img
        src={blogImage}
        alt="Blog Banner"
        className="w-full h-auto rounded-2xl shadow-md object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="space-y-8 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 shadow hover:shadow-lg transition duration-300 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">
              Posted on {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
