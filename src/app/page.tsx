'use client';

import { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import PricingTable from "@/components/gptPricingTable";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChat } from 'ai/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GPTLogo from '@/components/GPTLogo';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu icon

  // Toggles the isOpen state between true and false
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect to load the username prompt once on component mount
  // useState(() => {
  //   const userName = window.prompt('Please enter your name:');
  //   if (userName) {
  //     setName(userName);
  //   }
  // }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="container-fluid mx-auto flex h-full">
      <div className={`w-60 bg-slate-500 h-screen ${messages.length > 0 ? 'hidden md:block' : ''}`}>{/*I want to hide this div when on mobile devices, and show it on the left side of the screen when on desktop. I want the hamburger menu to be able to open/close this side menu on mobile devices*/}
        <div className="flex flex-row items-end m-3 justify-evenly">
          <h5 className="font-bold">Hello, {name}</h5>
          <DropdownMenu>{/*I want to hide this menu and only show this icon when the user is on mobile devices*/}
            <DropdownMenuTrigger onClick={toggleMenu} className="cursor-pointer">
              <div className={`w-9 h-1 bg-black my-1.5 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></div>
              <div className={`w-9 h-1 bg-black my-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-9 h-1 bg-black my-1.5 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator className='my-4' />
        <div className="flex flex-col items-center">
          <h2 className="font-bold">Chat History</h2>
          {/* Placeholder for chat history. You might want to map through your chat history state here. */}
        </div>
      </div>
      <ScrollArea className="container h-screen">
        <div className="flex flex-col items-center">
          {messages.length === 0 && (
            <h1 className="lg:text-5xl md:text-4xl sm:text-2xl font-bold m-5">
              Welcome to 24-hour GPT!
            </h1>
          )}
          <div className="w-3/5 border rounded-lg hidden">
            <div className='p-5 bg-white text-black rounded-lg text-center'>
              <PricingTable />
            </div>
          </div>
        </div>
        <div className="pt-4 pb-32">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`border-t ${
                message.role === "assistant"
                  ? "bg-white text-black"
                  : "bg-black text-white" 
              } ${
                message.role === "user"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className='max-w-3xl mx-auto py-6 flex'>
                {message.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full flex justify-center items-center mr-3">
                    <GPTLogo />
                  </div>
                )}
                <span className='ml-3 '>{message.content}</span>
              </div>
            </div>
          ))}
        </div>
        <form
          className="absolute bottom-10 lg:left-1/4 input-area w-3/5 flex flex-row"
          onSubmit={handleSubmit}
        >
          <input
            value={input}
            type="text"
            onChange={handleInputChange}
            className="p-2 border rounded-lg w-full"
            placeholder="Talk to 24-hour GPT..."
          />
          <Button>{'->'}</Button>
        </form>
      </ScrollArea>
    </div>
  );
}
