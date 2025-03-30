import React from 'react';

const PermissionDeniedBanner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {/* Animated Lock Icon */}
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-red-500 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11V7m0 0a4 4 0 00-4 4v4m4-8a4 4 0 014 4v4m-8 0h8m-8 0a2 2 0 01-2-2v-2a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-500 mb-6">
          You don’t have the necessary permissions to view this page.
        </p>
      </div>
    </div>
  );
};

export default PermissionDeniedBanner;