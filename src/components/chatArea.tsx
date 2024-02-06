// C:\Users\NEWOWNER\OneDrive\Desktop\ruizTechServices\24hourgpt\24hourgpt\src\components\chatArea.tsx
"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import GPTLogo from '@/components/GPTLogo';


// Update the Message type to include all possible 'role' values
type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool';
};
  
  // Define a type for the props
  interface ChatAreaProps {
    messages: Message[];
    input: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }

const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  input,
  handleInputChange,
  handleSubmit
}) => {
  return (
    <ScrollArea className="container mx-auto h-screen">
      <div className="flex flex-col items-center">
        {messages.length === 0 && (
          <h1 className="lg:text-5xl md:text-4xl sm:text-2xl sm:m-10 font-bold m-5">
            Welcome to 24-hour GPT!
          </h1>
        )}
      </div>
      <div className="pt-4 pb-32 h-auto">
        {messages.map((message: Message) => (
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
      <div className="fixed inset-x-0 bottom-0 z-30 p-4 justify-center">
        <form
          className="flex flex-row items-center justify-center w-1/2 mx-auto space-x-2 shadow-lg rounded-lg p-4"
          onSubmit={handleSubmit}
        >
          <Button className='text-red-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </Button>
          <input
            value={input}
            type="text"
            onChange={handleInputChange}
            className="flex-1 p-2 border border-gray-300 rounded-lg"
            placeholder="Talk to 24-hour GPT..."
          />
          <Button className="bg-green-400">{'->'}</Button>
        </form>
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
          {messages.length === 0 && (
            <p className='md:text-xs text-[12px] text-center'>ChatGPT can make mistakes. Consider checking important information.</p>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ChatArea;
