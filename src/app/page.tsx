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
import SideNav from '@/components/sideNav';

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
      <SideNav name={'name'} />

      <ScrollArea className="container mx-auto h-screen">
        <div className="flex flex-col items-center">
          {messages.length === 0 && (
            <h1 className="lg:text-5xl md:text-4xl sm:text-2xl sm:m-10 font-bold m-5">
              Welcome to 24-hour GPT!
            </h1>
          )}
          <div className="w-3/5 border rounded-lg hidden">
            <div className='p-5 bg-white text-black rounded-lg text-center'>
              <PricingTable />
            </div>
          </div>
        </div>
        <div className="pt-4 pb-32 h-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`border-t ${message.role === "assistant"
                ? "bg-white text-black"
                : "bg-black text-white"
                } ${message.role === "user"
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
        <div className="absolute w-max h-100 text-center bottom-10 left-10">
          <form
            className="flex flex-row items-center lg:w-[700px] md:w-[500px] sm:w-[500px] w-full"
            onSubmit={handleSubmit}
          >
            <input
              value={input}
              type="text"
              onChange={handleInputChange}
              className="p-2 border rounded-lg w-full"
              placeholder="Talk to 24-hour GPT..."
            />
            <Button className="bg-green-400">{'->'}</Button>
          </form>
        </div>
      </ScrollArea>
    </div>
  );
}
