import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();
  const [userId, setUserId] = useState(''); // State to store user ID

  // Manual configuration for the API port
  const apiPort = 3000; 

  const handleLogin = async (role) => {
    try {
      if (!userId) {
        // Handle the case where userId is not defined
        alert('User ID is missing. Please log in.'); 
        return; 
      }

      // Send a GET request with query parameters
      const response = await fetch(`http://localhost:${apiPort}/${role}/${userId}`);
      const data = await response.json(); // Use response.json()

      if (data.message === 'You are authorized!') {
        // User is authorized
        router.push(`/${role}`); 
      } else {
        // User is not authorized
        router.push('/error'); 
      }
    } catch (error) {
      console.error('Error during login:', error);
      router.push('/error');
    }
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <input type="text" placeholder="Enter User ID" value={userId} onChange={handleUserIdChange} />
      <button onClick={() => handleLogin('admin')}>Login to Dashboard</button>
      <button onClick={() => handleLogin('member')}>Login to Member Page</button>
      <button onClick={() => handleLogin('manager')}>Login to Manager Page</button>
    </div>
  );
}