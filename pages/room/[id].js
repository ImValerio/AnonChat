import { useRouter } from 'next/router'
import Chat from "../../components/Chat"
const Room = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className="flex flex-col w-full h-full">
            <Chat room={id+""}></Chat>
        </div>
    )
}

export default Room
