import { Text } from "lucide-react";
import React from "react";

interface BlogPost {
  image: string;
  title: string;
  date: string;
  link: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      image: "./blog.png",
      title: "The Ultimate Guide to SaaS Marketing",
      date: "Mar 23, 2025",
      link: "#",
    },
    {
      image: "./blog.png",
      title: "5 Key Trends in SaaS Growth for 2025",
      date: "Mar 16, 2025",
      link: "#",
    },
    {
      image: "./blog.png",
      title: "How Data-Driven Strategies Are Important",
      date: "Feb 16, 2025",
      link: "#",
    },
  ];

  return (
    <section className="bg-lightBg py-16 px-4 md:px-8 text-darkText">
      <div className="text-start mb-10 max-w-6xl mx-auto">
        <div className="inline-flex justify-between items-center gap-2 bg-white px-2 py-1 rounded-full text-sm font-medium mb-4">
          <div className="flex justify-center items-center bg-[#B4ff8B] h-10 w-10 rounded-full">
            <Text />
          </div>
          <h2 className="text-lg">Blog</h2>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">
          <div>Latest Blog & Insights</div>
        </h2>
      </div>
      <div></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            className="bg-white rounded-lg overflow-hidden block"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
