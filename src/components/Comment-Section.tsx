"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommentSection = () => {
  interface Comment {
    name: string;
    email: string;
    website?: string;
    comment: string;
  }
  
  const [comments, setComments] = useState<Comment[]>([]); // To store comments
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });
  const [rememberMe, setRememberMe] = useState(false); // Checkbox state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentData.name || !commentData.email || !commentData.comment) {
      alert("Please fill all required fields.");
      return;
    }

    setComments((prev) => [...prev, commentData]); // Add comment
    setCommentData({ name: "", email: "", website: "", comment: "" }); // Reset form
  };

  return (
    <div className="max-w-[800px] mx-auto  p-4 mt-12">
      <Card className="border-[#4b0005]">
        <CardContent>
          <h2 className="text-2xl font-bold my-6">Leave a Comment</h2>
          <p className="text-sm text-gray-600 mb-2">
            Your email address will not be published. Required fields are marked *
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              name="comment"
              placeholder="Type here.."
              value={commentData.comment}
              onChange={handleInputChange}
              className="w-full h-24 border border-[#4b0005] bg-[#fff8fc] p-2 rounded focus:ring focus:ring-[#ff4d6d]"
              required
            ></textarea>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={commentData.name}
                onChange={handleInputChange}
                className="border border-[#4b0005] p-2 rounded bg-[#fff8fc] focus:ring focus:ring-[#ff4d6d]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={commentData.email}
                onChange={handleInputChange}
                className="border border-[#4b0005] p-2 rounded bg-[#fff8fc] focus:ring focus:ring-[#ff4d6d]"
                required
              />
              <input
                type="url"
                name="website"
                placeholder="Website"
                value={commentData.website}
                onChange={handleInputChange}
                className="border border-[#4b0005] p-2 rounded bg-[#fff8fc] focus:ring focus:ring-[#ff4d6d]"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-[#4b0005] rounded focus:ring focus:ring-[#ff4d6d]"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <Button
              type="submit"
              className=" text-white py-2 px-4 rounded font-bold text-lg bg-[#ff4d6d] hover:bg-[#c9184a]"
            >
              Post Comment
            </Button>
          </form>

          {comments.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Comments</h3>
              <ul className="space-y-4">
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="border border-gray-200 p-4 rounded shadow-sm"
                  >
                    <p className="font-semibold text-[#ff4d6d]">
                      {comment.name}
                    </p>
                    <p className="text-gray-700">{comment.comment}</p>
                    {comment.website && (
                      <a
                        href={comment.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#ff4d6d] underline"
                      >
                        {comment.website}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentSection;
