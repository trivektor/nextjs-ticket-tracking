import { Fragment } from "react";
import { 
  getSession,
  signIn, 
  useSession
} from "next-auth/client";

import Navbar from "./navbar";

const Protected = ({ children }) => {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading....</div>
  }

  if (!session) {
    return (
      <Fragment>
        You need to login to see this page.
        <button onClick={signIn}>Sign in</button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export {Protected as default};
