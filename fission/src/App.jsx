import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import Admin from "./Pages/Admin/admin"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed top-5 right-5">
        <ModeToggle />
      </div>
      <div>
        <Admin/>
      </div>
    
    </ThemeProvider>
  )
}

export default App
