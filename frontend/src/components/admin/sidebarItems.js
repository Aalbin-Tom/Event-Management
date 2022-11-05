import { FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";

const Menus = [
    { title: "Dashboard", src: <MdDashboard size={30} color="black" />, Path: '/admin/dashboard' },
    { title: "Users", src: <FaUserAlt size={30} color="black" />, Path: '/admin/users' },
    { title: "Business", src: <FcBusinessman size={30} />, Path: '/admin/business' },
    // { title: "Logout ", src: <BiLogOut size={30} color="black" /> },
  
];

// module.exports  = Menus
export default Menus