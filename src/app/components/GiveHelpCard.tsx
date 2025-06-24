'use client';
import React from 'react';

interface GiveHelpCardProps {
  name: string;
  help: string;
  contact: string;
}

export default function GiveHelpCard({ name, help, contact }: GiveHelpCardProps) {
  return (
    <div className="bg-blackGlass rounded-lg border border-purple-500 p-4">
      <h3 className="text-lg font-semibold text-purple-200">{name}</h3>
      <p className="text-sm text-purple-100 mt-1">{help}</p>
      <p className="text-sm text-purple-300 mt-1">Contact: {contact}</p>
    </div>
  );
}
