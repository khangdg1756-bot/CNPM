import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const QUICK_QUESTIONS = [
  "Tìm việc phù hợp với tôi",
  "Phân tích CV của tôi",
  "Lộ trình nghề nghiệp",
  "Chuẩn bị phỏng vấn",
  "Kỹ năng cần học",
];

const AI_RESPONSES = [
  "Tôi có thể giúp bạn về: tìm việc làm, phân tích CV, lộ trình nghề nghiệp, chuẩn bị phỏng vấn, và kỹ năng cần học. Bạn quan tâm điều gì nhất?",
  "Dựa trên profile của bạn, có vẻ bạn đang tìm kiếm cơ hội mới! Tôi có thể giúp phân tích kỹ năng và gợi ý công việc phù hợp.",
  "Để tôi hỗ trợ tốt hơn, bạn có thể cho biết bạn đang quan tâm đến lĩnh vực nào không?",
];

export default function AIChatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là AI Career Advisor của CareerMate. Tôi có thể giúp gì cho bạn hôm nay? 🚀',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('việc làm') || lowerMessage.includes('tìm việc') || lowerMessage.includes('job')) {
      return "Tôi tìm thấy 15+ công việc phù hợp với profile của bạn! 🎯\n\nCác vị trí hàng đầu:\n• Frontend Developer - TechCorp (15-25M VND)\n• Full-stack Developer - StartupX (18-30M VND)\n• React Developer - InnovateLab (20-28M VND)\n\nBạn muốn xem chi tiết các vị trí này không?";
    }
    
    if (lowerMessage.includes('cv') || lowerMessage.includes('phân tích') || lowerMessage.includes('resume')) {
      return "Sau khi phân tích CV của bạn, đây là đánh giá:\n\n✅ Điểm mạnh:\n• Kinh nghiệm React/TypeScript tốt\n• Projects đa dạng và ấn tượng\n• Soft skills rõ ràng\n\n⚠️ Cần cải thiện:\n• Thiếu certifications\n• Format cần chỉnh sửa nhẹ\n\n📈 Overall Score: 75/100\n\nBạn có muốn tôi gợi ý cách cải thiện CV không?";
    }
    
    if (lowerMessage.includes('lộ trình') || lowerMessage.includes('roadmap') || lowerMessage.includes('career path')) {
      return "Dựa trên profile của bạn, đây là career roadmap được đề xuất:\n\n📍 Hiện tại: Junior Frontend Developer\n⬆️ 1-2 năm: Mid-level Frontend Developer\n⬆️ 3-4 năm: Senior Frontend Developer\n⬆️ 5+ năm: Tech Lead / Engineering Manager\n\nMỗi bước cần tập trung vào kỹ năng cụ thể. Bạn muốn biết chi tiết không?";
    }
    
    if (lowerMessage.includes('phỏng vấn') || lowerMessage.includes('interview')) {
      return "Tôi có thể giúp bạn chuẩn bị phỏng vấn! 💪\n\n📚 Các chủ đề nên ôn:\n• Technical: React hooks, State management, Performance\n• Behavioral: STAR method, Leadership examples\n• System Design: Component architecture\n\nBạn muốn thực hành mock interview không?";
    }
    
    if (lowerMessage.includes('kỹ năng') || lowerMessage.includes('skill') || lowerMessage.includes('học')) {
      return "Dựa trên phân tích skill gap, bạn nên học thêm:\n\n🎯 Ưu tiên cao:\n• TypeScript Advanced (đang thiếu 30%)\n• Next.js Framework (đang thiếu 45%)\n• Testing (Jest/RTL) (đang thiếu 60%)\n\n📚 Tôi có thể gợi ý các khóa học phù hợp!";
    }
    
    if (lowerMessage.includes('lương') || lowerMessage.includes('salary')) {
      return "Dựa trên vị trí và kinh nghiệm của bạn:\n\n💰 Mức lương trung bình:\n• Junior: 10-15M VND/tháng\n• Mid-level: 15-25M VND/tháng  \n• Senior: 25-40M VND/tháng\n\n📊 Bạn đang ở mức: Mid-level (18-23M recommended)";
    }

    const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
    return randomResponse
      .replace('{skill}', 'React, TypeScript')
      .replace('{position}', 'Frontend Developer, Full-stack Developer')
      .replace('{salary}', '15-25 triệu')
      .replace('{number}', '12')
      .replace('{role}', 'Frontend Developer');
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(text),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Open AI Chat</span>
            </Button>
            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold"
            >
              1
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Career Advisor</h3>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/90">Online</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-white/20 text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-4" ref={scrollRef}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.sender === 'ai' && (
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="h-3 w-3 text-purple-600" />
                            <span className="text-xs font-semibold text-purple-600">AI</span>
                          </div>
                        )}
                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                        <span className={`text-[10px] mt-1 block ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[80%]">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Câu hỏi gợi ý:</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_QUESTIONS.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn..."
                  className="flex-1 bg-white"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
