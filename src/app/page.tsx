import { Divination } from "@/components/Divination"
import { Hexagram } from "@/lib/types"
import path from "path"
import { promises as fs } from "fs"
import { parse } from "csv-parse/sync"

export default async function Home() {
  let hexagrams: Hexagram[] = []

  try {
    const csvFilePath = path.join(process.cwd(), "public", "iching_reference.csv")
    const fileContents = await fs.readFile(csvFilePath, "utf8")
    
    hexagrams = parse(fileContents, {
      columns: true,
      skip_empty_lines: true,
    })
  } catch (error) {
    console.error("Error reading or parsing CSV file:", error)
  }

  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen flex flex-col">
      <div className="flex-grow">
        {hexagrams.length > 0 ? (
          <Divination hexagrams={hexagrams} />
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="text-xl text-red-500">Error loading I Ching data. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  )
}