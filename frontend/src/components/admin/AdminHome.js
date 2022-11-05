import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri"
import Menus from './sidebarItems'

const AdminHome = () => {
  const [open, setOpen] = useState(true);
  const Menu = Menus

  const navigate = useNavigate()

  const logout=()=>{
    localStorage.removeItem("adminInfo");
    navigate(`/admin/login`);
  }

  return (
    <div className="flex ">
      <div className={` ${open ? "w-64" : "w-24 "} bg-purple-400 h-screen p-5  pt-8 relative duration-300`}>
        <span onClick={()=>{setOpen(!open)}} className={`absolute cursor-pointer -right-3 top-9 w-12 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}>
          <BsFillArrowLeftCircleFill size={30} />

        </span>
        <div className="flex gap-x-4 items-center">
          <span className={`cursor-pointer ${open && "rotate-[360deg]"}`}>
            <RiAdminFill color="blue" size={40} />
          </span>
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
            ADMIN
          </h1>
        </div>
        <ul className="pt-6">
          {Menu.map((Menu, index) => (
            <NavLink key={index} to={Menu.Path}>
              <li
                key={index}
                className={`flex space-y-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-3"} ${index === 0 && "bg-light-red"} `}  >
                <span >{Menu.src}</span>
                <span className={`${!open && "hidden"} origin-left duration-200 font-bold `}>
                  {Menu.title}
                </span>
              </li>
            </NavLink>
          ))}
          <li
            className={`flex pt-6 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}  >
            <span ><BiLogOut size={30} color="black" /> </span>
            <span onClick={logout} className={`${!open && "hidden"} origin-left duration-200 font-bold `}>
              LOGOUT
            </span>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-8 bg-red-200">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminHome;