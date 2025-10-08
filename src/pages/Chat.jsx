import { useState } from "react";
import TypingAnimation from "../components/TypingAnimation";
import { GoogleGenAI } from "@google/genai";
import { useFile } from "../context/FileContext";
import { marked } from "marked"; // optional, if you want Markdown parsing for Gemini responses

export default function Chat() {
  const { uploadedFile, fileContent } = useFile();
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([
    { type: "user", message: "Hello!" },
    {
      type: "bot",
      message:
        "Hi! I’m DocMind. Ask me anything related to the uploaded PDF document.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: "user", message: inputValue };
    setChatLog((prev) => [...prev, userMessage]);
    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = async (message) => {
    if (!fileContent) {
      alert("Please upload a PDF file first.");
      return;
    }

    setIsLoading(true);

    try {
      // Build the conversation context
      const history = chatLog
        .map((m) => `${m.type === "user" ? "User" : "Bot"}: ${m.message}`)
        .join("\n");

      const prompt = `
You are a helpful assistant named DocMind.
You must answer ONLY based on the content of the uploaded PDF document below.
If the answer is not found in the document, respond with: "Sorry, I couldn’t find that information in the document."

--- PDF CONTENT START ---
${fileContent.slice(0, 15000)} 
--- PDF CONTENT END ---

Chat so far:
${history}

User's question: ${message}
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash", // more capable for reasoning over text
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 750,
          temperature: 0.3,
        },
      });

      const botReply = response.text || "No response.";
      setChatLog((prev) => [...prev, { type: "bot", message: botReply }]);
    } catch (error) {
      console.error("Error generating response:", error);
      setChatLog((prev) => [
        ...prev,
        {
          type: "bot",
          message: "An error occurred while processing your query.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative container mx-auto h-[calc(100vh-theme(spacing.16)-theme(spacing.20))]">
      <div className="flex flex-col h-full w-[100%] lg:w-[70%] mx-auto">
        <div className="flex-grow overflow-y-auto p-6">
          <div className="flex flex-col space-y-4">
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-br-lg rounded-bl-lg ${
                    msg.type === "user"
                      ? "bg-blue-600 rounded-tl-lg"
                      : "dark:border dark:border-gray-700 bg-gray-800 rounded-tr-lg"
                  } p-4 text-white max-w-lg whitespace-pre-wrap`}
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(msg.message),
                  }}
                />
              </div>
            ))}

            {isLoading && (
              <div key={chatLog.length} className="flex justify-start">
                <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex-none p-6 z-10">
          <div className="mx-auto flex rounded-lg border border-gray-700 bg-gray-800 md:w-[80%]">
            <input
              type="text"
              className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none"
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
