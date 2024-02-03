"use client";
import React from 'react';
import SideNav from '@/components/sideNav';
import ChatArea from '@/components/chatArea';
import { useChat } from 'ai/react'; 

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  let name = "user's name goes here";

  return (
    <div className="container-fluid mx-auto flex h-full">
      <SideNav name={name} />
      <ChatArea
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
