import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="fixed top-4 right-4 z-50 p-2 rounded-full border transition-colors bg-background text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      style={{ transition: "background 0.35s, color 0.35s" }}
    >
      <span className="block transition-transform duration-300 ease-in-out">
        {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </span>
    </button>
  )
}

export default ThemeToggle
