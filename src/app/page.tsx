"use client"
import React, { useState } from 'react';

const CopyButton = ({ title, content }: { title: string, content: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg text-center bg-white hover:bg-gray-100 transition duration-300">
      <div className='flex justify-between'>
        <div className='flex'>
          <h3
            onClick={handleCopy}
            className="text-lg font-semibold cursor-pointer text-blue-600 hover:text-blue-800 transition duration-300 flex items-center justify-center"
          >
            {title}

          </h3>
        </div>
        <div>
          {copied && (
            <svg
              className="w-6 h-6 text-green-500 ml-2 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const items = [
    { title: 'Title 11111111111111', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' },
    { title: 'Title 4', content: 'Content 4' },
    { title: 'Title 5', content: 'Content 5' },
    { title: 'Title 6', content: 'Content 6' },
  ];

  return (
    <div className="container mx-auto p-4 w-full gap-4 flex items-center justify-center">
      <div className='w-1/2 flex flex-col space-y-1'>
        {items.map((item, index) => (
          <CopyButton key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Page;