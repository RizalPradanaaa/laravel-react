import { useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
export default function Create() {
  const { errors } = usePage().props;
  const [value, setValue] = useState({
    body: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setValue({
      body: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.post("/posts", value);
  }
  return (
    <>
      <Head title="Create">
        <meta
          head-key="description"
          name="description"
          content="This is the default description"
        />
      </Head>
      <h1 className="title">Create Post</h1>
      <div className="w-2/3 mx-auto">
        <form onSubmit={handleSubmit}>
          <textarea
            value={value.body}
            onChange={handleChange}
            rows={10}
            className={`w-full rounded-md border-0 p-2 text-slate-900 shadow-sm ring-1 ring-inset  placeholder:text-slate-500 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm bg-white mb-2 ${
              errors.body ? "ring-red-500" : "ring-blue-400"
            }`}
          ></textarea>
          {errors.body && (
            <div className="mb-2 text-red-500">{errors.body}</div>
          )}
          <button className="primary-btn">Submit Post</button>
        </form>
      </div>
    </>
  );
}
