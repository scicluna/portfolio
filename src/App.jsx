import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contacts from "./components/Contacts"

function App() {
  const [page, setPage] = useState('about')
  const [blur, setBlur] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setBlur(true);
    const timer = setTimeout(() => {
      setBlur(false);
    }, 200); // Adjust the delay to match the animation duration
    return () => clearTimeout(timer);
  }, [page])

  function pickPage() {
    switch (page) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contacts />
      case 'resume':
        return <Resume />
      default:
        return <h1>404</h1>
    }
  }

  function handlePage(e, page) {
    e.preventDefault()
    setPage(page)
  }

  function handleDark() {
    setDark(dark ? false : true)
  }

  return (
    <main className={`${dark ? "dark" : "light"}`}>
      <Navbar handlePage={handlePage} page={page} />
      <section className={`bg-indigo-50 dark:bg-indigo-500 pt-10 pb-10 w-screen h-screen transition-all ease-out duration-200 ${blur ? "blur-sm" : ""} `}>
        {pickPage()}
      </section>
      <Footer dark={dark} handleDark={handleDark} />
    </main>
  )
}

export default App
