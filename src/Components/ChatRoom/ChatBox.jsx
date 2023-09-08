import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../Firebase/firebaseConfig";
import bg from "../../assets/Video/wallpaperflarecom_wallpaper.jpg"

const ChatBos = () => {
  const { user } = useContext(AuthContext)
  const [messages, setMassages] = useState([]);
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="pb-72 pt-10 max-w-3xl mx-auto p-8 rounded-xl space-y-3"style={{ backgroundImage: `url(${bg})` }}>
      {
        messages?.map(m => {
          return (
            <div  key={m.id}>
              <div className={`chat space-x-5 space-y-1 ${m.uid === user.uid ? "chat-end " : "chat-start"}`}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={m.avatar} />
                  </div>
                </div>
                <div className="chat-header text-white">
                  {m.name}
                </div>
                <div className="chat-bubble chat-bubble-warning">{m.text}</div>
              </div>
          </div>
            )
        })}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBos;