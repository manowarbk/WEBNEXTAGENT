'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { useLanguage } from './ClientLayout';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function FloatingChatbot() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBusy, setIsBusy] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change or chat is opened
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isBusy) return;
    
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setIsBusy(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: Message = { 
        role: 'assistant', 
        content: data.content || data.message || 'Xin lỗi, tôi không thể trả lời lúc này.' 
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: lang === 'vi' 
          ? 'Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại sau.' 
          : 'Sorry, an error occurred. Please try again later.'
      }]);
    } finally {
      setIsBusy(false);
    }
  }, [messages, isBusy, lang]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isBusy) return;
    const message = input;
    setInput('');
    await sendMessage(message);
  };

  const handleSuggestionClick = async (suggestion: string) => {
    await sendMessage(suggestion);
  };

  const suggestions = lang === 'vi' 
    ? [
        'Mendix Low-Code là gì?',
        'NextAgent cung cấp dịch vụ gì?',
        'Làm sao liên hệ NextAgent?'
      ]
    : [
        'What is Mendix Low-Code?',
        'What services does NextAgent provide?',
        'How to contact NextAgent?'
      ];

  const translations = {
    title: lang === 'vi' ? 'Trợ lý ảo NextAgent' : 'NextAgent AI Assistant',
    subtitle: lang === 'vi' ? 'Giải đáp về Mendix & AI Agent' : 'Q&A about Mendix & AI Agents',
    placeholder: lang === 'vi' ? 'Nhập tin nhắn...' : 'Type your message...',
    welcome: lang === 'vi' 
      ? 'Xin chào! Tôi có thể giúp gì cho bạn về các dịch vụ Mendix Low-Code, AI Agent và Chuyển đổi số của NextAgent?' 
      : 'Hello! How can I help you with Mendix Low-Code, AI Agents, and Digital Transformation services at NextAgent?',
    thinking: lang === 'vi' ? 'Đang suy nghĩ...' : 'Thinking...'
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '24px',
              width: '380px',
              height: '550px',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 9999,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px',
              background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  position: 'relative',
                  padding: '8px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                }}>
                  <Bot size={20} color="white" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: '14px', margin: 0, letterSpacing: '0.025em' }}>
                    {translations.title}
                  </h3>
                  <p style={{ fontSize: '10px', color: '#bfdbfe', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={12} color="#fde68a" />
                    Powered by GLM 5.2
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '4px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <X size={20} color="white" />
              </button>
            </div>

            {/* Messages body */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {/* Welcome message */}
              <div style={{ display: 'flex', gap: '12px', maxWidth: '85%' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid #bfdbfe',
                }}>
                  <Bot size={16} color="#2563eb" />
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: '#f4f4f5',
                  color: '#27272a',
                  borderRadius: '16px',
                  borderTopLeftRadius: '4px',
                  fontSize: '12px',
                  lineHeight: '1.6',
                }}>
                  {translations.welcome}
                </div>
              </div>

              {/* Message history */}
              {messages.map((message, i) => {
                const isUser = message.role === 'user';
                return (
                  <div key={i} style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    maxWidth: '85%',
                    marginLeft: isUser ? 'auto' : undefined,
                    flexDirection: isUser ? 'row-reverse' : 'row',
                  }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isUser ? '#e0e7ff' : '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: `1px solid ${isUser ? '#c7d2fe' : '#bfdbfe'}`,
                    }}>
                      {isUser ? (
                        <User size={16} color="#4f46e5" />
                      ) : (
                        <Bot size={16} color="#2563eb" />
                      )}
                    </div>
                    <div style={{
                      padding: '12px',
                      borderRadius: '16px',
                      fontSize: '12px',
                      lineHeight: '1.6',
                      whiteSpace: 'pre-wrap',
                      ...(isUser ? {
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        color: 'white',
                        borderTopRightRadius: '4px',
                      } : {
                        backgroundColor: '#f4f4f5',
                        color: '#27272a',
                        borderTopLeftRadius: '4px',
                      }),
                    }}>
                      {message.content}
                    </div>
                  </div>
                );
              })}

              {/* Loading / Thinking State */}
              {isBusy && (
                <div style={{ display: 'flex', gap: '12px', maxWidth: '85%' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#dbeafe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid #bfdbfe',
                  }}>
                    <Bot size={16} color="#2563eb" />
                  </div>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#f4f4f5',
                    color: '#71717a',
                    borderRadius: '16px',
                    borderTopLeftRadius: '4px',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <Loader2 size={14} color="#2563eb" className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>{translations.thinking}</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 0 && !isBusy && (
              <div style={{ padding: '0 16px 8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{
                      textAlign: 'left',
                      width: '100%',
                      padding: '8px 12px',
                      backgroundColor: '#fafafa',
                      border: '1px solid #e4e4e7',
                      borderRadius: '12px',
                      fontSize: '11px',
                      color: '#52525b',
                      cursor: 'pointer',
                      transition: 'background-color 0.15s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f4f4f5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} style={{
              padding: '12px',
              backgroundColor: '#fafafa',
              borderTop: '1px solid #f4f4f5',
              display: 'flex',
              gap: '8px',
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={translations.placeholder}
                disabled={isBusy}
                style={{
                  flex: 1,
                  padding: '8px 14px',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  border: '1px solid #e4e4e7',
                  borderRadius: '12px',
                  color: '#27272a',
                  outline: 'none',
                  opacity: isBusy ? 0.5 : 1,
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e4e4e7'}
              />
              <button
                type="submit"
                disabled={!input.trim() || isBusy}
                style={{
                  padding: '10px',
                  backgroundColor: (!input.trim() || isBusy) ? '#d4d4d8' : '#2563eb',
                  color: 'white',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: (!input.trim() || isBusy) ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.15s',
                }}
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.3), 0 8px 10px -6px rgba(37, 99, 235, 0.2)',
          zIndex: 9999,
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Spin animation for loader */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
