import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex gap-2 p-2 ">
      <div>
        <Button
          variant="secondary"
          size="sm">
          Click Me
        </Button>
      </div>
      <div>
        <Button
          className="bg-purple-600"
          variant="default"
          size="lg">
          Click Me
        </Button>
      </div>
      <div>
        <Button
          variant="default"
          size="lg">
          Click Me
        </Button>
      </div>
      <div>
        <Button
          variant="default"
          size="lg">
          Click Me
        </Button>
      </div>
    </div>
  )
}
