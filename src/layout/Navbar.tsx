import {Link, useLocation} from 'react-router-dom';

const Navbar=()=>{
    const location = useLocation();
    const links=[
        {to:"/",label:"To Do"},
        {to:"/news", label:"News Fetcher"},
        {to:"/auth", label:"Auth App"},
        {to:"/weather", label:"Weather Dashboard"},
        {to:"/shoppingCart", label:"Shopping Cart"}
    ]
    return(
        <nav className="flex gap-6 p-4 bg-gray-200 dark:bg-gray-800 justify-center">
            {links.map((link)=>
            <Link 
            key={link.to}
            to={link.to}
            className={`px-3 py-1 rounded-md font-semibold ${
            location.pathname === link.to
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-300 dark:hover:bg-gray-700"
          }`}
            >
                {link.label}
            </Link>)}
        </nav>
    )
}
export default Navbar;