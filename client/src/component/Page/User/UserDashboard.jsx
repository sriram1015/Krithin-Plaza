import React, { useState, useEffect } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { auth } from "../../auth/Firebase";

const UserDashboard = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user); // Set `isLoggedIn` to true if user exists, otherwise false
        });

        return () => unsubscribe(); // Cleanup the listener on component unmount
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Sign out the user
            setIsLoggedIn(false); // Update the state
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    const menu = [
        { name: 'Home', link: '/', icon: IoIosHome },
        { name: 'Cart', link: '/cart', icon: GiShoppingCart },
        { name: 'About', link: '/about', icon: FcAbout },
        { name: 'Setting', link: '/setting', icon: IoSettings },
        { name: 'Profile', link: '/profile', icon: CgProfile },
        {
            name: isLoggedIn ? 'Logout' : 'Login',
            link: isLoggedIn ? '#' : '/login', // Use '#' for Logout since it doesn't navigate
            icon: isLoggedIn ? IoLogOut : IoLogIn,
            action: isLoggedIn ? handleLogout : null, // Call `handleLogout` for Logout
        },
    ];

    return (
        <div className="App">
            <section className="flex">
                {/* Sidebar */}
                <div className="bg-gray-800 text-white min-h-screen w-40 fixed">
                    <div className="p-4">
                        <HiMenuAlt3 size={28} className="cursor-pointer" />
                    </div>
                    <div className="mt-6 space-y-6">
                        {menu.map((item, index) => (
                            <Link
                                to={item.link}
                                key={index}
                                className="flex items-center gap-6 p-3 hover:bg-gray-700 rounded-md"
                                onClick={item.action ? item.action : null} // Handle login/logout action
                            >
                                <item.icon size={32} />
                                <span className="text-lg">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 bg-white min-h-screen ml-40">
                    {children}
                </div>
            </section>
        </div>
    );
};

export default UserDashboard;