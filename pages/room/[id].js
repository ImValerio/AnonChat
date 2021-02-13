import { useRouter } from 'next/router'
import Chat from "../../components/Chat"
const Room = () => {
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    return (
        <div className="flex flex-col w-full h-full bg-gray-900">
            <Chat room={id+""}></Chat>
        </div>
    )
}

export default Room
