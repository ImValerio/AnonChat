
function Message({ text, user, date }) {
    return (
        <div className="w-96 m-5 bg-gray-100 p-3 pb-5">
            <header className="w-full flex justify-start items-center">
                <h3 className="font-bold text-sm">{user}</h3>
            </header>
            <div>
                {text}
            </div>
            <footer className="flex justify-end italic text-xs">
                [{date}]
            </footer>
        </div>
    )
}

export default Message
