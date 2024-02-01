import React, { useState } from 'react';

type SideNavProps = {
    name: string;
};

const SideNav: React.FC<SideNavProps> = ({ name }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            {/* Mobile Hamburger Menu Icon */}
            <div className='absolute left-5 top-3 z-20 md:hidden'>
                <div onClick={toggleMenu} className="cursor-pointer">
                    <div className={`w-9 h-1 bg-white my-1.5 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></div>
                    <div className={`w-9 h-1 bg-white my-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-9 h-1 bg-white my-1.5 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></div>
                </div>
            </div>

            {/* Sidebar for both Mobile and Desktop */}
            <div className={`fixed top-0 left-0 bg-slate-500 h-screen z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:static md:w-60`}>
                <div className="flex flex-row items-end m-3 justify-evenly">
                    <h5 className="mt-10 font-bold text-white">Hello, {name}</h5>
                    <div className="md:hidden" onClick={toggleMenu}>
                        <div className={`w-6 h-6 text-white rotate-45`}> &times; </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-white">Chat History</h2>
                    {/* Placeholder for chat history. You might want to map through your chat history state here. */}
                </div>
            </div>
            <div className={`fixed inset-0 bg-black opacity-50 z-10 ${isOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleMenu}></div> {/* Overlay when menu is open */}
        </div>
    );
};

export default SideNav;
