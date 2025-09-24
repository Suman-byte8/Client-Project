import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { UserContext } from '../../../context/UserContext';

const SemiNavbar = () => {
    const { user } = useContext(UserContext);

    const navLinks = [

        { name: 'Meeting', path: '/banquet-page' },
        { name: 'Weddings', path: '/wedding-page' },
        { name: 'Sleep Bounqute', path: '/sleep-boutique' },

        { name: 'Contacts', path: '/contact' },
        { name: user ? 'Profile' : 'LogIn', path: user ? '/profile' : '/log-in' }
    ];

    return (
        <div className='w-full absolute top-0 right-0 z-20 bg-transparent p-3 hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out'>
            <div className='flex flex-wrap items-center justify-center md:justify-end gap-4'>
                <ul className='flex flex-wrap items-center justify-center gap-4 md:gap-6'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path} className='hover:text-gray-400 transition-colors text-sm lg:text-base'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default SemiNavbar;
