import { useSession } from "next-auth/client";
import {Protected} from "../components";

import {Projects} from "../components";

const ProjectsPage = () => {
  return (
    <Protected>
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Projects</h1>
        </div>
      </div>
      <Projects />
    </Protected>
  );
};

export {ProjectsPage as default};