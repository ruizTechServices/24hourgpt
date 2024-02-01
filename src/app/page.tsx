'use client';

import { Button } from '@/components/ui/button';
import PricingTable from "@/components/gptPricingTable";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChat } from 'ai/react';
import GPTLogo from '@/components/GPTLogo';
import SideNav from '@/components/sideNav';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  let name = "Giovanni";


  return (
    <div className="container-fluid mx-auto flex h-full">
      <SideNav name={name} />

      <ScrollArea className="container mx-auto h-screen">
        <div className="flex flex-col items-center">
          {messages.length === 0 && (
            <h1 className="lg:text-5xl md:text-4xl sm:text-2xl sm:m-10 font-bold m-5">
              Welcome to 24-hour GPT!
            </h1>
          )}
          {/*Remove this and place it in a dropdown*/}
          <div className="w-3/5 border rounded-lg hidden">
            <div className='p-5 bg-white text-black rounded-lg text-center'>
              <PricingTable />
            </div>
          </div>
          {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}
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
        <div className="absolute w-max h-100 text-center bottom-10 left-5">
          <form
            className="flex flex-row items-center lg:w-[900px] md:w-[500px] sm:w-[600px] w-full"
            onSubmit={handleSubmit}
          >
            <div>
              <Button className='text-red-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              </Button>
            </div>
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
