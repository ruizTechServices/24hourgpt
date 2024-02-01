import React, { useState } from 'react';
import { ModeToggle } from './mode-toggle';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { ScrollArea } from "@/components/ui/scroll-area";


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
                    <div className={`w-9 h-1 bg-black text-black dark:bg-white dark:text-white my-1.5 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></div>
                    <div className={`w-9 h-1 bg-black text-black dark:bg-white dark:text-white my-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-9 h-1 bg-black text-black dark:bg-white dark:text-white my-1.5 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></div>
                </div>
            </div>

            {/* Sidebar for both Mobile and Desktop */}
            <div className={`fixed bg-slate-500 h-screen z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 md:translate-x-0 md:static w-60`}>
                <div className="flex flex-row items-end justify-evenly">
                    <h5 className="mt-10 font-bold text-white dark:text-black">Hello, {name}</h5>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-white dark:text-black">Chat History</h2>
                    <ScrollArea className="max-h-[250px] max-w-[50px] text-white dark:text-black">
                        {/* Placeholder for chat history. You might want to map through your chat history state here. */}
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                        <h5>hello</h5>
                    </ScrollArea>
                </div>
                <div className="absolute left-10 flex flex-col items-center text-center bottom-10 mt-20">
                    <ModeToggle />
                    <Separator className="mt-10" />
                    <span className='text-xs'>©2024 ruizTechServices <span className="blink">|</span></span>
                </div>
            </div>
            <div className={`fixed inset-0 bg-black opacity-50 z-10 ${isOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleMenu}></div> {/* Overlay when menu is open */}
        </div>
    );
};

export default SideNav;
