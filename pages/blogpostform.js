import Image from "next/image";
import React, { useState } from "react";

export default function BlogPostForm({ textColor, bgColor }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !image) {
      alert("All fields including image are required!");
      return;
    }
    
    alert("Blog submitted! (Demo only)");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-8 px-2 mt-8 ${bgColor} ${textColor}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col gap-6 border ${bgColor} ${textColor}`}
      >
        <h2 className="text-3xl font-bold mb-2 text-center">
          Submit a Blog Post
        </h2>

        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-md p-2 ${textColor}`}
            required
            placeholder="Enter blog title"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-semibold">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={`w-full border rounded-md p-2 min-h-[120px] ${textColor}`}
            required
            placeholder="Write your blog content here..."
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-semibold">
            Featured Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full file:bg-blue-600 file:border-0 file:rounded-full file:p-2 file:mr-6 file:text-white"
            required
          />
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              className="mt-4 w-full h-60 object-cover rounded-md border"
              width={500}
              height={500}
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
}
