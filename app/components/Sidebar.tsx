"use client";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(prev=>!prev)
  }

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px]">
      <div>
        <Image
          className="block ml-[15px] cursor-pointer"
          height={20}
          width={20}
          src="/assets/menu_icon.png"
          alt="menu"
          onClick={toggleMenu}
        />
        <div className="mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[grey]">
          <Image
            height={20}
            width={20}
            src="/assets/plus_icon.png"
            alt="new chat"
          />
          {open && <p>New Chat</p>}
        </div>
        {open && (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            <div className="flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <Image
                height={20}
                width={20}
                src="/assets/message_icon.png"
                alt="message"
              />
              <p>What is React?</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className={`flex items-center gap-[10px] p-[10px] h-12 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] ${!open && 'justify-center'}`}>
          <Image
            height={20}
            width={20}
            src="/assets/question_icon.png"
            alt="question"
          />
          {open && <p>Help</p>}
        </div>
        <div className={`flex items-center gap-[10px] p-[10px] h-12 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] ${!open && 'justify-center'}`}>
          <Image
            height={20}
            width={20}
            src="/assets/history_icon.png"
            alt="history"
          />
          {open && <p>Activity</p>}
        </div>
        <div className={`flex items-center gap-[10px] p-[10px] h-12 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] ${!open && 'justify-center'}`}>
          <Image
            height={20}
            width={20}
            src="/assets/setting_icon.png"
            alt="Settings"
          />
          {open && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
