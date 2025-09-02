// components/ChatbotBar.tsx
import { Mic } from 'lucide-react';

export const ChatbotBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-2px_5px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto">
                <div className="flex items-center border rounded-full p-2 bg-gray-50">
                    <input
                        type="text"
                        placeholder="Ask Chatbot"
                        className="w-full bg-transparent border-none focus:ring-0 text-lg text-gray-700 pl-4"
                    />
                    <button className="text-gray-600 pr-2">
                        <Mic size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}