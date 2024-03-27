import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Docs from "./pages/Docs"
import Tools from "./pages/Tools"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="pt-16 w-full h-screen flex flex-col bg-emerald-100 items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App