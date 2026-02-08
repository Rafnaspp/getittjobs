'use client'

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const ReportViewer = () => {
  const params = useParams();
  const reportId = params?.reportId as string;
  const googleDriveFileId = "1EH2c8dosAKpJiOHE1tIeUF-3V2YFqT5l";
  const embedUrl = `https://docs.google.com/viewer?url=https://drive.google.com/uc?export=download%26id=${googleDriveFileId}&embedded=true`;

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              {reportId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
          </div>
          
          <div className="w-full h-[800px]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              allow="autoplay"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;