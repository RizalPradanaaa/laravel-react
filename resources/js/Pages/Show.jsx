import React from "react";
import { Link, router } from "@inertiajs/react";
export default function Show({ post }) {
  function handleSubmit(e) {
    e.preventDefault();
    router.delete(`/posts/${post.id}`);
  }
  return (
    <>
      <h1 className="title">Detail Post</h1>
      <div className="w-2/3 mx-auto">
        <div key={post.id} className="p-4 border-b-2 flex justify-between">
          <div>
            <div className="text-sm text-slate-500">
              <span>Post on : </span>
              <span>{post.created_at.slice(0, 10)}</span>
            </div>
            <p className="font-medium">{post.body}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <button className="bg-red-500 px-3 py-2 text-white rounded-md">
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
