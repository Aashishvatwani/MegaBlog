import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts([]);
        if (response) {
          setPosts(response.documents);
        }
      } catch (err) {
        setError("Failed to fetch posts. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full py-8 bg-gray-100 min-h-screen">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-8">All Posts</h1>
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <p className="text-gray-500 text-lg">Loading posts...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.$id}>
                <Postcard {...post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>No posts available.</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPost;
