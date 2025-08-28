import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-zinc-100">Blog<span className="text-zinc-400">App</span></h2>
            <p className="mt-2 text-sm">
              Sharing stories, tutorials, and insights. Stay inspired.
            </p>
          </div>

          
            <ul className="space-y-2 flex gap-8">
              <li>
                <NavLink  to="/" className={({isActive}) => (isActive ? 'border-b text-amber-500 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}
                >Home</NavLink>
              </li>
              <li>
                <NavLink to="/create" className={({isActive}) => (isActive ? 'border-b text-amber-500 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}>Create</NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={({isActive}) => (isActive ? 'border-b text-amber-500 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")}>Profile</NavLink>
              </li>  
            </ul>
         
        </div>

        <div className="border-t border-zinc-700 mt-8 pt-4 text-center text-sm text-zinc-500">
          Blogify © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
