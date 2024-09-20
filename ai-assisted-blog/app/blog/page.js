import React from 'react';

const blogs = [
  {
    title: 'First Blog',
    description: 'This is the description for the first blog.',
    link: '/first-blog',
    date: '2023-10-01',
    author: 'John Doe',
    image: 'https://images.pexels.com/photos/5717041/pexels-photo-5717041.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Second Blog',
    description: 'This is the description for the second blog.',
    link: '/second-blog',
    date: '2023-10-02',
    author: 'Jane Smith',
    image: 'https://images.pexels.com/photos/5685770/pexels-photo-5685770.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Second Blog',
    description: 'This is the description for the second blog.',
    link: '/second-blog',
    date: '2023-10-02',
    author: 'Jane Smith',
    image: 'https://images.pexels.com/photos/5716018/pexels-photo-5716018.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'First Blog',
    description: 'This is the description for the first blog.',
    link: '/first-blog',
    date: '2023-10-01',
    author: 'John Doe',
    image: 'https://images.pexels.com/photos/5125251/pexels-photo-5125251.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Second Blog',
    description: 'This is the description for the second blog.',
    link: '/second-blog',
    date: '2023-10-02',
    author: 'Jane Smith',
    image: 'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Second Blog',
    description: 'This is the description for the second blog.',
    link: '/second-blog',
    date: '2023-10-02',
    author: 'Jane Smith',
    image: 'https://images.pexels.com/photos/5467596/pexels-photo-5467596.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  // Add more blog objects as needed
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8"> My Blog </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="  shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-68 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className=" mb-4">{blog.description}</p>
              <p className=" text-sm mb-2">By {blog.author} on {blog.date}</p>
              <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;