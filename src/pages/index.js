import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();
  const [userId, setUserId] = useState(''); 

  // Manual configuration for the API port
  const apiPort = 3000; 

  const handleLogin = async (role) => {
    try {
      if (!userId) {
        alert('User ID is missing. Please enter your User ID.'); 
        return; 
      }
      // send the role and userId to the backend for permission check
      const response = await fetch(`http://localhost:${apiPort}/${role}/${userId}`);  
      const data = await response.json();

      if (data.message === 'You are authorized!') {
        router.push(`/${role}`); // sends the authorized user to the authorized role page
      } else {
        router.push('/error'); // sends unauthorized user to an error page.
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg shadow-blue-500/50"> 
        <div className="text-center mb-6"> {/* Add text-center for center alignment and mb-6 for bottom margin */}
          <h2 className="text-2xl font-semibold text-gray-900">Welcome User! Please Login</h2> {/* Add heading styles */}
        </div>

        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Enter Your User ID" 
            value={userId} 
            onChange={handleUserIdChange} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-gray-900" // Add text-gray-900 for black text
          />
        </div>

        <div className="flex justify-between space-x-2"> {/* Add space-x-2 for spacing between buttons */}
          <button 
            onClick={() => handleLogin('admin')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 text-sm" // Reduce text size
          >
            Admin Login
          </button>
          <button 
            onClick={() => handleLogin('member')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 text-sm" // Reduce text size
          >
            Member Login
          </button>
          <button 
            onClick={() => handleLogin('manager')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 text-sm" // Reduce text size
          >
            Manager Login
          </button>
        </div>
      </div>
    </div>
  );
}