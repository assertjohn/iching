import { Hexagram } from "@/lib/types";

interface ResultDisplayProps {
  hexagram: Hexagram | null;
  userRequest: string;
}

export function ResultDisplay({ hexagram, userRequest }: ResultDisplayProps) {
  if (!hexagram) {
    return (
      <div className="bg-neutral-900 rounded-lg p-6 mb-6 border border-neutral-800">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Get started</h2>
        <ol className="list-decimal list-inside text-neutral-300 space-y-2">
          <li>Clear your mind and focus on your request</li>
          <li>Type your request in below.</li>
          <li>Click the Generate Hexagram button.</li>
          <li>Reflect on the wisdom provided.</li>
        </ol>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 rounded-lg p-6 mb-6 border border-neutral-800">
      <h2 className="text-2xl font-bold text-red-500 mb-2">{hexagram.english_name}</h2>
      <p className="text-lg text-neutral-300 mb-4">
        {hexagram.chinese_name} - {hexagram.chinese_name_symbols}
      </p>
      <p className="text-neutral-500 mb-4 text-sm">
        {hexagram.trigram_above} over {hexagram.trigram_below}
      </p>
      <h3 className="text-xl font-semibold text-red-400 mb-2">Judgment</h3>
      <p className="text-base text-neutral-300 leading-relaxed">{hexagram.judgement}</p>
        
      {userRequest && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-red-400 mb-2">Your Question:</h3>
          <p className="text-neutral-300 italic">{userRequest}</p>
        </div>
      )}
    </div>
  );
}
