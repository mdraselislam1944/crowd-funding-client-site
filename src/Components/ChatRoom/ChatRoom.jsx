import ChatBox from "./ChatBox";
import Message from "./Message";

const ChatRoom = () => {
  return (
    <div className="min-h-screen w-5xl mx-auto pt-28 bg-black">
       <h2 className="text-3xl font-bold text-white text-center">Lets Chat</h2>
                    <hr className="border-b-[3px] w-[106px] mt-1 mb-5 border-[#F99F24] mx-auto" />
      <ChatBox />
      <hr />
      <Message />
    </div>
  );
};

export default ChatRoom;