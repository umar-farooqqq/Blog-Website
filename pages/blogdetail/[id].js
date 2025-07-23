import { useRouter } from "next/router";
import { workData } from "@/assets/assets";

export default function BlogDetail({ textColor, bgColor }) {
  const router = useRouter();
  const { id } = router.query;

  const blog = workData.find((item) => item.id == id);

  if (!blog) {
    return (
      <div
        className={`w-full min-h-screen flex items-center justify-center ${textColor}`}
      >
        <h1 className="text-2xl">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen pt-24 mt-16 p-4 ${textColor}`}>
      <div className="max-w-4xl mx-auto">
        {/* Featured Image */}
        <img
          src={blog.bgImage}
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

        {/* Blog Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-justify">{blog.content}</p>
        </div>

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className={`mt-8 px-6 py-3 ${bgColor} rounded-lg hover:opacity-80 transition-opacity`}
        >
          ← Back to Blogs
        </button>
      </div>
    </div>
  );
}
