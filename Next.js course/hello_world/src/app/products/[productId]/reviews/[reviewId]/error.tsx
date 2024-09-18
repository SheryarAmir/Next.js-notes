"use client";

import React from 'react';

const ErrorBoundary = ({
  error, 
  reset
}: {
  error: Error;
  reset: () => void; // Define reset as a function with no arguments
}) => {
  return (
    <div>
      <h1>
        {error.message} 
        <button onClick={reset}>Try Again</button>
      </h1>
    </div>
  );
}

export default ErrorBoundary;
