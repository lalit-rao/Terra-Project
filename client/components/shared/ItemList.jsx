"use client";

import useSWR from 'swr';
import { useState } from 'react';

const fetcher = url => fetch(url).then(res => res.json());

export default function ItemList() {
  const { data, error } = useSWR('/api/items', fetcher);
  const [selectedItem, setSelectedItem] = useState(null);

  if (error) return <div>Failed to load items</div>;
  if (!data) return <div>Loading...</div>;

  const handleBuyClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {data.map(item => (
            <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div
                  className="h-full border border-gray-200 rounded-xl shadow-lg bg-white flex flex-col gap-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div className="h-48 overflow-hidden mb-4 flex items-center justify-center bg-gray-100 rounded-lg">
                  <img
                      src={item.imageUrl}
                      alt={item.itemName}
                      className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">{item.itemName}</h3>
                  <p className="text-lg font-medium text-blue-600">&#x20B9;{item.price}</p>
                  <p className="text-gray-600 text-sm truncate">{item.description}</p>
                </div>
                <button
                    onClick={() => handleBuyClick(item)}
                    className="self-center mb-4 py-2 px-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  Buy
                </button>
              </div>
            </div>

        ))}
      </div>
      {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl mb-4">{selectedItem.itemName}</h2>
              <div className="h-48 overflow-hidden mb-4">
                <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.itemName}
                    className="w-full h-full object-contain"
                    style={{objectPosition: 'center'}}
                />
              </div>
              <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Item Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <strong className="w-24 text-gray-700">Description:</strong>
                    <p className="text-gray-900">{selectedItem.description}</p>
                  </div>
                  <div className="flex items-center">
                    <strong className="w-24 text-gray-700">Price:</strong>
                    <p className="text-gray-900">&#x20B9;{selectedItem.price}</p>
                  </div>
                  <div className="flex items-center">
                    <strong className="w-24 text-gray-700">Seller:</strong>
                    <p className="text-gray-900">{selectedItem.name}</p>
                  </div>
                  <div className="flex items-center">
                    <strong className="w-24 text-gray-700">Phone:</strong>
                    <p className="text-gray-900">{selectedItem.phoneNumber}</p>
                  </div>
                  <div className="flex items-center">
                    <strong className="w-24 text-gray-700">Email:</strong>
                    <p className="text-gray-900">{selectedItem.email}</p>
                  </div>
                </div>
                <button
                    onClick={handleClosePopup}
                    className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
      )}
    </div>
  );
}
