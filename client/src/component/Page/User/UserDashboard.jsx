import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";

const UserDashboard = ({ children }) => {
    const menu = [
        { name: 'Home', link: '/', icon: IoIosHome },
        { name: 'Cart', link: '/adminsignup', icon: GiShoppingCart },
        { name: 'About', link: '/about', icon: FcAbout },
        { name: 'Setting', link: '/setting', icon: IoSettings },
        { name: 'Profile', link: '/profile', icon: CgProfile },
        { name: 'Logout', link: '/admin', icon: IoLogOut, margin: true }
    ];

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='App'>
            <section className="flex gap-6">
                {/* Sidebar */}
                <div className={`bg-[#0e0e0e] min-h-screen ${isOpen ? 'w-32' : 'w-16'} duration-500 text-gray-100 fixed left-0 top-0`}>
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={toggleSidebar} />
                    </div>
                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {menu?.map((menu, i) => (
                            <Link to={menu?.link} onClick={toggleSidebar} key={i} className={` ${menu?.margin && "mt-30"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                <div>{React.createElement(menu?.icon, { size: '30' })}</div>
                                <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                                <h2 className={`${isOpen && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-black rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main content area */}
                <div className={`flex-1 bg-white min-h-screen pl-16 m-[5vh] ${isOpen ? 'pl-32' : 'pl-16'}`}> {/* Adjust padding based on sidebar width */}
                    {children}
                </div>
            </section>
        </div>
    );
};

export default UserDashboard;
