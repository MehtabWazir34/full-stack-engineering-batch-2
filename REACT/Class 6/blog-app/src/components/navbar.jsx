import { NavLink } from "react-router-dom"

function Navbar () {

        return (
            <nav className="w-4xl py-4  mx-auto flex items-center justify-between bg-zinc-800 shadow-md sticky top-0 z-50">
                <h2 className="text-2xl font-bold text-zinc-100 tracking-wide">
            Blog<span className="text-zinc-400">ify</span> </h2>
                <ul className="flex items-center gap-10 text-lg ">
                    <NavLink className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")} to={"/"} >Home</NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")} to={"/create"} >Create</NavLink>
                    <NavLink className={({isActive}) => (isActive ? 'border-b-2 text-amber-300 font-semibold border-amber-300 pb-1' : " hover:text-zinc-200")} to={"/profile"} >Profile</NavLink>
                </ul>
            </nav>
        )
}

export default Navbar
