import React from 'react';

export default function Data({ user }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 m-4 transform transition duration-300 hover:scale-105">
      <img src={user.image} alt={user.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.price}</p>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-600 text-white rounded-lg px-4 py-1 hover:bg-blue-700 transition">+</button>
          <button className="bg-blue-600 text-white rounded-lg px-3 py-1 hover:bg-blue-700 transition">Add to Cart</button>
          <button className='bg-blue-600 text-white rounded-lg px-3 py-1 hover:bg-blue-700 transition' >details</button>
        </div>
      </div>
    </div>
  );
}