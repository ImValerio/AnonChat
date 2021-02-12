import { useEffect } from "react"
import { Router, useRouter } from "next/router"

const FourOhFour = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 1650)
    }, [])
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bold">
            <h1 className="text-5xl m-3">404 page not found...</h1>
            <h3 className="text-xl">(redirecting to home)</h3>
        </div>
    )
}

export default FourOhFour
