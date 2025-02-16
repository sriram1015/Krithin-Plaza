import React from 'react';
import Data from './Data';

const userdata = [
  { id: 1, name: 'sriram', email: 'email.com', image: 'image.jpg',price:56 },
  { id: 2, name: 'sri', email: 'email.com', image: 'image.jpg' },
  { id: 3, name: 'ram', email: 'email.com', image: 'image.jpg' },
  { id: 1, name: 'sriram', email: 'email.com', image: 'image.jpg' },
  { id: 2, name: 'sri', email: 'email.com', image: 'image.jpg' },
  { id: 3, name: 'ram', email: 'email.com', image: 'image.jpg' },
  { id: 1, name: 'sriram', email: 'email.com', image: 'image.jpg' },
  { id: 2, name: 'sri', email: 'email.com', image: 'image.jpg' },
  { id: 3, name: 'ram', email: 'email.com', image: 'image.jpg' },
  { id: 1, name: 'sriram', email: 'email.com', image: 'image.jpg' },
  { id: 2, name: 'sri', email: 'email.com', image: 'image.jpg' },
  { id: 3, name: 'ram', email: 'email.com', image: 'image.jpg' },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Shop Now</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        {userdata.map((user) => (
          <Data key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;