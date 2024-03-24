import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";

const Navber = () => {

  const [open , setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="text-black bg-yellow-200 ">
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {
          open === true?
          <AiOutlineClose></AiOutlineClose>
          :<AiOutlineMenu ></AiOutlineMenu>
        }
        
      </div>

      <ul className = {`md:flex duration-1000 p-6 absolute md:static ${open ? 'top-16':'-top-60'} px-7 bg-yellow-500
        
      `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
