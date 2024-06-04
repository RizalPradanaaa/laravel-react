import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
function Home({ posts }) {
  const { flash } = usePage().props;
  const [flashMsg, setFlashMsg] = useState(flash.message);
  setTimeout(() => {
    setFlashMsg(null);
  }, 2000);
  return (
    <>
      <h1 className="title">List Posts</h1>
      <div className="w-2/3 mx-auto">
        {flashMsg && (
          <div className="bg-red-500 text-white px-3 py-2 rounded-md w-1/4 text-center">
            {flashMsg}
          </div>
        )}
        {posts.data.map((post) => (
          <div key={post.id} className="p-4 border-b-2">
            <div className="text-sm text-slate-500">
              <span>Post on : </span>
              <span>{post.created_at.slice(0, 10)}</span>
            </div>
            <p className="font-medium">{post.body}</p>
          </div>
        ))}

        <div className="py-12">
          {posts.links.map((link) =>
            link.url ? (
              <Link
                key={link.label}
                href={link.url}
                dangerouslySetInnerHTML={{ __html: link.label }}
                className={`${
                  link.active ? "text-blue-900" : "text-slate-400"
                } px-3 py-1`}
              />
            ) : (
              <Link
                key={link.label}
                dangerouslySetInnerHTML={{ __html: link.label }}
                className="text-slate-400 px-3 py-1"
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

// Persistent layouts
// Home.layout = (page) => <Layout children={page} title="Welcome" />;

export default Home;
