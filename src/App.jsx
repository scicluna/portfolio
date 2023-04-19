import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contacts from "./components/Contacts"

function App() {
  const [page, setPage] = useState('about')

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

  return (
    <>
      <Navbar handlePage={handlePage} page={page} />
      <main className="bg-indigo-50 pt-10 pb-10 h-screen">
        {pickPage()}
      </main>
      <Footer />
    </>
  )
}

export default App
