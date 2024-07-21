"use client";

import { useState } from 'react';
import ItemForm from '../../components/shared/ItemForm';
import ItemList from '../../components/shared/ItemList';

export default function EcoSwap() {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">EcoSwap</h1>
      <button
        onClick={handleOpenForm}
        className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
      >
        Sell an Item
      </button>
      <div className="mt-8 w-full max-w-7xl">
        <ItemList />
      </div>
      {isFormOpen && <ItemForm onClose={handleCloseForm} />}
    </div>
  );
}
