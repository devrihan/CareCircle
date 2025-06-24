'use client';
import React from 'react';

interface RequestHelpCardProps {
  name: string;
  request: string;
  contact: string;
}

export default function RequestHelpCard({ name, request, contact }: RequestHelpCardProps) {
  return (
    <div className="bg-blackGlass rounded-lg border border-indigo-500 p-4">
      <h3 className="text-lg font-semibold text-indigo-200">{name}</h3>
      <p className="text-sm text-indigo-100 mt-1">{request}</p>
      <p className="text-sm text-indigo-300 mt-1">Contact: {contact}</p>
    </div>
  );
}
