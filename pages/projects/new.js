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
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Protected>
  );
};

export {NewProject as default};