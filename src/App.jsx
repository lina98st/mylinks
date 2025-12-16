import { useState } from "react"
import Header from "./components/Header"
import ProfilePhoto from "./components/ProfilePhoto"
import ThemeToggle from "./components/ThemeToggle"
import LinksList from "./components/LinksList"
import "./App.css"

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <Header />
      <ProfilePhoto />
      <ThemeToggle onToggle={toggleDarkMode} />
      <LinksList />
    </div>
  )
}

export default App
