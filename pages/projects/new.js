import Head from "next/head";

import {Protected} from "../../components";

const NewProject = () => {
  return (
    <Protected>
      <Head>
        <title>New Project</title>
      </Head>
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">New Project</h1>
        </div>
      </div>
      <div className="container mx-auto p-5">
        <form>
          <div className="my-2">
            <label>Name</label>
            <input type="text" autoFocus className="p-2 border border-blue-700 rounded w-full" />
          </div>
          <div className="my-4">
            <label>Description</label>
            <textarea className="p-2 border border-blue-700 rounded w-full" rows={4} />
          </div>
        </form>
      </div>
    </Protected>
  );
};

export {NewProject as default}