import Image from "next/image";
import { Context } from "../context/context";
import { useContext } from "react";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
        <p>Gemini</p>
        <Image
          className="rounded-full"
          height={40}
          width={40}
          src="/assets/user_icon.png"
          alt="user icon"
        />
      </div>
      <div className="max-w-[900px] m-auto">
        <div className="my-[10px] text-[56px] text-[#c4c7c5] font-[500] p-[20px]">
          <p>
            <span className="gradient">Hello, Visitor.</span>
          </p>
          <p>How can I help you?</p>
        </div>
        {!showResult ? (
          <>
            <div className="grid grid-cols-4 gap-[15px] p-[20px]">
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <Image
                  className="absolute rounded-[20px] bottom-[10px] right-[10px]"
                  height={25}
                  width={25}
                  src="/assets/compass_icon.png"
                  alt="compass icon"
                />
              </div>
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  Briefly summarize this concept: Photosynthesis
                </p>
                <Image
                  className="absolute rounded-[20px] bottom-[10px] right-[10px]"
                  height={25}
                  width={25}
                  src="/assets/bulb_icon.png"
                  alt="bulb icon"
                />
              </div>
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <Image
                  className="absolute rounded-[20px] bottom-[10px] right-[10px]"
                  height={30}
                  width={30}
                  src="/assets/message_icon.png"
                  alt="message icon"
                />
              </div>
              <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] text-[17px]">
                  Improve the readability of the following code
                </p>
                <Image
                  className="absolute rounded-[20px] bottom-[10px] right-[10px]"
                  height={30}
                  width={30}
                  src="/assets/code_icon.png"
                  alt="code icon"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div>
                <Image src='/assets/user_icon.png' />
                <p>{recentPrompt}</p>
              </div>
              <div>
                <Image src='/assets/gemini_icon.png' />
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              </div>
            </div>
          </>
        )}

        <div className="absolute bottom-4 w-full max-w-[900px] px-[20px] m-auto">
          <div className="flex items-center justify-between gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
            <input
              className="flex-1 bg-transparent border-none outline-none p-[5px] text-[18px]"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex gap-3">
              <Image
                className="cursor-pointer"
                width={20}
                height={20}
                src="/assets/gallery_icon.png"
                alt="gallery icon"
              />
              <Image
                className="cursor-pointer"
                width={20}
                height={20}
                src="/assets/mic_icon.png"
                alt="mic icon"
              />
              <Image
                className="cursor-pointer"
                width={20}
                height={20}
                src="/assets/send_icon.png"
                alt="send icon"
                onClick={() => onSent(input)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
