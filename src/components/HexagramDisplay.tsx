export function HexagramDisplay({ binary }: { binary: string }) {
    return (
      <div className="flex flex-col items-center space-y-4">
        {binary.split("").map((line, index) => (
          <div
            key={index}
            className={`w-64 h-4 flex ${line === "1" ? "justify-center" : "justify-between"}`}
          >
            <div className={`h-full bg-red-700 rounded-sm ${line === "1" ? "w-full" : "w-28"}`} />
            {line === "0" && <div className="w-28 h-full bg-red-700 rounded-sm" />}
          </div>
        ))}
      </div>
    )
  }