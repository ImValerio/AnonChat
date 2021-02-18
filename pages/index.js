import { useState, useEffect } from "react";
import { useRouter } from "next/router"


export default function Home() {
  const [room, setRoom] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.title = "AnonChat"
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/room/${room}`)
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900 ">
      <div className="m-5">
        <h1 className="text-5xl	 md:text-7xl  font-bold text-white tracking-wider ">AnonChat</h1>
      </div>

      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-grow-0 justify-center items-center w-full mt-5">
        <input className="sm:w-full sm:ml-5 md:w-auto rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white shadow-lg text-xl" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Room name..." required />

        <button className="px-8 sm:mr-5 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r shadow-lg text-xl">JOIN</button>
      </form>
      <div className="flex justify-center items-center mt-2">
        <h3 className="text-gray-700 text-xs stracking-wider">NO DATA STORAGE POLICY</h3>

      </div>
    </div>
  )
}
