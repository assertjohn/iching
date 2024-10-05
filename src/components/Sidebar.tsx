import { Header } from "@/components/Header";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Hexagram } from "@/lib/types";
import { useState } from "react";

interface SidebarProps {
  currentHexagram: Hexagram | null;
  onGenerateHexagram: (request: string) => void;
}

export function Sidebar({ currentHexagram, onGenerateHexagram }: SidebarProps) {
  const [request, setRequest] = useState("");
  const [currentRequest, setCurrentRequest] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request.trim() && !isGenerating) {
      setIsGenerating(true);
      setCurrentRequest(request);
      onGenerateHexagram(request);
      setRequest("");
      setTimeout(() => setIsGenerating(false), 1000); // Prevent rapid submissions
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full bg-neutral-900 p-6 flex flex-col shadow-lg border-r border-neutral-800">
      <Header />
      <div className="flex-grow overflow-y-auto mb-6 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900">
        <ResultDisplay hexagram={currentHexagram} userRequest={currentRequest} />
      </div>
      <form onSubmit={handleSubmit} className="mt-auto">
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your question or request here..."
          className="w-full p-3 border border-neutral-800 rounded-md mb-4 resize-none bg-neutral-800 text-neutral-200 placeholder-neutral-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
          rows={3}
        />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-red-800 text-neutral-100 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isGenerating || !request.trim()}
        >
          {isGenerating ? "Generating..." : "Generate Hexagram"}
        </button>
      </form>
    </div>
  );
}
