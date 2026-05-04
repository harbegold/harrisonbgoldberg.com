import React, { useState, useRef, useEffect } from 'react';
import { sendChat, formatRetryAfter, type ChatTurn } from '../services/chatService';

type Message = { role: 'user' | 'ai'; content: string; isError?: boolean };

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'ai',
    content:
      "Hi! I'm Harrison's portfolio assistant. Ask me anything about his projects, stack, or what he's building right now.",
  },
];

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState<{ until: number; window?: 'hour' | 'day' } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Build the chat history we send to the server (skip the canned greeting + any errors).
  const buildHistory = (): ChatTurn[] => {
    return messages
      .filter(m => !m.isError && m !== INITIAL_MESSAGES[0])
      .map(m => ({ role: m.role === 'ai' ? ('assistant' as const) : ('user' as const), content: m.content }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMsg = input.trim();
    if (!userMsg || isLoading) return;

    if (rateLimited && Date.now() < rateLimited.until) {
      return;
    }

    setInput('');
    const history = buildHistory();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const result = await sendChat(userMsg, history);
    setIsLoading(false);

    if (result.ok) {
      setMessages(prev => [...prev, { role: 'ai', content: result.reply }]);
      setRateLimited(null);
      return;
    }

    if (result.reason === 'rate_limited') {
      const wait = formatRetryAfter(result.retryAfter);
      setRateLimited({
        until: Date.now() + result.retryAfter * 1000,
        window: result.window,
      });
      setMessages(prev => [
        ...prev,
        {
          role: 'ai',
          isError: true,
          content: `You've hit the chat limit — try again in ${wait}, or just email Harry@harbegold.com.`,
        },
      ]);
      return;
    }

    if (result.reason === 'too_long') {
      setMessages(prev => [
        ...prev,
        { role: 'ai', isError: true, content: 'That message is a bit long — can you trim it under 1000 characters?' },
      ]);
      return;
    }

    setMessages(prev => [
      ...prev,
      {
        role: 'ai',
        isError: true,
        content:
          result.reason === 'network'
            ? "Couldn't reach the server. Check your connection and try again."
            : "Something went wrong on my end. Please reach out via the contact form below.",
      },
    ]);
  };

  const isRateLimited = rateLimited && Date.now() < rateLimited.until;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[450px] rounded-2xl flex flex-col shadow-2xl border border-black/[0.08] overflow-hidden">
          <div className="p-4 border-b border-black/[0.06] flex justify-between items-center bg-[#fbfbfd]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#007aff] rounded-full animate-pulse" />
              <span className="font-semibold text-sm text-[#1d1d1f]">Harrison AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#6e6e73] hover:text-[#1d1d1f]" aria-label="Close chat">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-[#007aff] text-white rounded-br-md'
                      : msg.isError
                        ? 'bg-[#fff5f5] text-[#c53030] border border-[#feb2b2] rounded-bl-md'
                        : 'bg-[#f5f5f7] text-[#1d1d1f] rounded-bl-md'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#f5f5f7] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#6e6e73] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#6e6e73] rounded-full animate-bounce [animation-delay:0.15s]" />
                  <div className="w-1.5 h-1.5 bg-[#6e6e73] rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-black/[0.06] bg-[#fbfbfd]">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={isRateLimited ? 'Chat limit reached — try later' : 'Ask about my work…'}
                maxLength={1000}
                disabled={Boolean(isRateLimited)}
                className="w-full bg-white border border-black/[0.08] rounded-full px-4 py-2.5 pr-10 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#007aff]/30 focus:border-[#007aff]/50 placeholder-[#6e6e73] disabled:bg-[#f5f5f7] disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isLoading || Boolean(isRateLimited) || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#007aff] hover:text-[#0051d5] disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1d1d1f] hover:bg-[#007aff] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIChat;
