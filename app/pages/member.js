import React from 'react';
import { useState, useEffect } from 'react';

function MemberPage() {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch or simulate data for posts and profile
    const fetchDemoData = async () => {
      // Replace this with your actual data fetching logic
      const demoPosts = [
        {
          image: 'https://picsum.photos/600/400', 
          caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          image: 'https://picsum.photos/600/400', 
          caption: 'Nulla facilisi. Donec pulvinar, justo sit amet scelerisque bibendum, quam libero condimentum elit.'
        },
        {
          image: 'https://picsum.photos/600/400', 
          caption: 'Nulla facilisi. Donec pulvinar, justo sit amet scelerisque bibendum, quam libero condimentum elit.'
        },
        {
          image: 'https://picsum.photos/600/400', 
          caption: 'Nulla facilisi. Donec pulvinar, justo sit amet scelerisque bibendum, quam libero condimentum elit.'
        }
        // ... add more posts
      ];

      const demoProfile = {
        name: 'John Doe',
        username: '@johndoe',
        profileImage: 'https://picsum.photos/200/200',
        bio: 'Hello! Welcome to the member page.',
        bannerImage: 'https://picsum.photos/1200/400' 
      };

      setPosts(demoPosts);
      setProfile(demoProfile);
    };

    fetchDemoData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {profile && (
        <div className="container mx-auto">
          {/* Banner Image */}
          <div className="relative">
            <img
              src={profile.bannerImage}
              alt="Banner"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold text-black">{profile.name}</h2>
                <p className="text-black">{profile.username}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-white rounded-md shadow-md p-4 mt-4">
            <p className="text-gray-900 text-center mb-2">{profile.bio}</p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {posts.map((post) => (
              <div key={post.image} className="bg-white rounded-md shadow-md p-2">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-gray-600 mt-2">{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberPage;