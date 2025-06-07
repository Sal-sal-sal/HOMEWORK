import { useState, useRef,useEffect } from "react";
import { themeClasses } from "./theme";
import { useParams } from "react-router";
import { Ai } from "./ai";
interface Message {
  text: string;
  sender: "me" | "other";
}


export default function Chat() {
    const id = useParams().id ; 
    const [message, setMessage] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hey there!", sender: "other" },
        { text: "How are you?", sender: "other" },
        { text: "I'm good, thanks! How about you?", sender: "me" },
    ]);
    const [read, setRead] = useState(false);
    
    useEffect (() => {

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        
    }, [messages]);

    useEffect(() => {
        setRead(true);  
        setMessages(JSON.parse(localStorage.getItem(id) || '[]'))
        
    }, [id]);
    
    const handleSend = () => {
        if (message.trim() === "") return;
        localStorage.clear()
        localStorage.setItem( id ,JSON.stringify(messages))
        setMessages(JSON.parse(localStorage.getItem(id) || '[]'))
        setMessages(prev => [...prev, { text: message, sender: "me" }]);
        if (id === "ai") {
            Ai(message).then(text => {
                console.log(text);
                setMessages(prev => [...prev, { text: text, sender: "other" }]);
                console.log(messages, id );
            })
        }

        else {
            setTimeout(() => {
                setMessages(prev => [...prev, { text: message, sender: "other" }]);
            }, 5);
        }
        
        setMessage("");
        console.log(messages, id );
        

    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
             handleSend() 
             
        };
    };

    // const reply = () =>{
    //     if (message.trim() === "") return;
    //     setMessages([...messages, {text: message, sender: "other"}]);
    //     setMessage("");

    // };


    return (
     <div className="flex flex-col min-h-screen relative bg-bg-secondary">
        <header className={`${themeClasses.chatHeader}  justify-between`}>
            <div className="flex items-center">
                <div className="relative">
                    <img
                        src="https://tse3.mm.bing.net/th/id/OIP.RjRTe6VeBPgiXibb6ZtKMAHaE6?r=0&rs=1&pid=ImgDetMain"
                        alt="head"
                        className="h-14 w-14 rounded-full border-2 border-light-blue z-1"
                    />
                    <div className={`${themeClasses.onlineIndicator} absolute bottom-0 right-0`}></div>
                </div>
                <h1 className="text-xl font-semibold mr-4 p-2 text-[#000000]">shoqqan</h1>
            </div>
            <div className="flex items-center" >
                <button className="flex items-center justify-center text-text-primary">
                    <svg width="100" height="24" viewBox="0 0 24 24" fill="none" color="black">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                        <path d="m21 21-5-4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>    
                <button className="flex items-center justify-center ml-2 text-[#000000]">
                    {/* Вертикальное троеточие */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" color="currentColor">
                        <circle cx="12" cy="5" r="2" fill="currentColor"/>
                        <circle cx="12" cy="12" r="2" fill="currentColor"/>
                        <circle cx="12" cy="19" r="2" fill="currentColor"/>
                    </svg>
                </button>
            </div>        
        </header>   

        <img src="https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png" alt="sd" className="flex-1 object-cover w-full" />

        {/* Сообщения */}
        <div>
            <div className="absolute left-1/2" style={{ bottom: "15%", transform: "translateX(-50%)", width: "90%" }}>
                <div
                    className="flex flex-col gap-2 max-h-167 overflow-y-auto scrollbar-hide"
                    style={{
                        scrollbarWidth: "none",        // Firefox
                        msOverflowStyle: "none"        // IE/Edge
                    }}
                >   
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-2 items-start  ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`} ref={bottomRef}>
                        {msg.sender !== 'me' && (
                            <img
                            src="https://tse3.mm.bing.net/th/id/OIP.RjRTe6VeBPgiXibb6ZtKMAHaE6?r=0&rs=1&pid=ImgDetMain"
                            alt="head"
                            className="h-9 w-9 rounded-full border-2 border-light-blue"
                            />
                        )}
                        <div
                            className={`p-2 max-w-[80%] ${
                            msg.sender === 'me' ? themeClasses.messageOut : themeClasses.messageIn
                            } rounded-xl`}
                        >
                            <p className="whitespace-pre-line">{msg.text}</p>
                            <p className="text-xs text-gray-900 mt-1">readed</p>
                            
                            
                        </div>
                        </div>
                    ))}
                </div>
            </div>    
            <style>
                {`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                `}
            </style>
        </div>

        {/* Чат-инпут */}
        <div
            className="absolute left-1/2 "
            style={{ bottom: "5%", transform: "translateX(-50%)", width: "90%",  }}
        >
            <div className={`${themeClasses.inputArea} flex items-center bg-opacity-95 rounded-2xl px-4 py-2 w-full shadow-lg bg-[#000000]`}>
                <button className="mr-2 text-[#000000] hover:text-[#707579]">
                    {/* Emoji icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
                        <circle cx="9" cy="10" r="1" fill="black"/>
                        <circle cx="15" cy="10" r="1" fill="black"/>
                        <path d="M9 15c.667.667 2.333.667 3 0" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                <textarea
                    type="text"
                    className={`${themeClasses.inputArea} flex-1 bg-transparent outline-none text-[#7a3c3c] placeholder-[#707579] px-2`}
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="ml-2 text-[#000000] hover:text-[#707579]">
                    {/* Attach icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M17 13V7a5 5 0 0 0-10 0v8a5 5 0 0 0 10 0V8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button
                    className="ml-2 flex items-center justify-center bg-[#0088cc] hover:bg-dark-blue text-[#000000] rounded-full w-12 h-12 transition-colors duration-200"
                    type="button"
                    onClick={handleSend}
                >
                    {/* Mic icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="2"/>
                        <path d="M5 10v2a7 7 0 0 0 14 0v-2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 22v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
     </div>
    )
}

