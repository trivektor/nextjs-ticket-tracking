import { useSession, signOut } from "next-auth/client";

const Navbar = () => {
  const [session] = useSession();
  const {user} = session;

  return (
    <nav className="bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
            <div>
              <a className="text-white text-xl font-bold md:text-2xl hover:text-gray-700" href="#">
                Ticket Tracker
              </a>
            </div>
        </div>

        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <span className="my-1 text-sm text-white md:mx-4 md:my-0">{user.name}</span>
            <a className="my-1 text-sm text-white md:mx-4 md:my-0" onClick={signOut}>Sign out</a>
          </div>
        </div>
      </div>
    </nav>    
  );
};

export {Navbar as default};