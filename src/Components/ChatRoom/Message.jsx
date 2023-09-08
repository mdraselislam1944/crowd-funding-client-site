import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import Swal from "sweetalert2";

const Message = () => {
  const [value, setValue] = useState('')
  const {user}=useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      Swal.fire("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = user;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  }

  return (
    <div className="bg-black fixed bottom-0 w-full py-10 shadow-lg">
      <form className="flex px-2 max-w-4xl mx-auto" onSubmit={handleSubmit}>

        <input className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" value={value} onChange={e => setValue(e.target.value)} />
        
        <button type="submit" className="w-auto bg-[#F99F24] text-white rounded-r-lg px-5 text-sm font-semibold">Send</button>
      </form>
    </div>
  );
};

export default Message;