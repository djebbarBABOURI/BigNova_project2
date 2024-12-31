"use client"
import React from 'react';

const ErrorPage = ({ message }) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-semibold text-red-600">Oops! Something went wrong.</h1>
                <p className="mt-2 text-gray-600">Error: {message || "An unknown error occurred."}</p>
            </div>
        </div>
    );
};

export default ErrorPage;
