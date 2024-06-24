import React from 'react';

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg shadow-blue-500/50">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
          <p className="text-gray-600 text-lg">Sorry, you do not have access to the requested page.</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/300/200"
            alt="Error Illustration"
            className="rounded-md w-48 h-48 mb-4"
          />
        </div>

        <div className="text-center">
          <a href="/" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">
            Go Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}