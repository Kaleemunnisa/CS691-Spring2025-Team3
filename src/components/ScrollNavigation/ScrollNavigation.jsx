import { useState, useEffect } from "react"
import "./ScrollNavigation.css"

const ScrollNavigation = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      const sectionElements = sections.map((section) => document.getElementById(section.id))
      const scrollPosition = window.scrollY + 100 

      sectionElements.forEach((element, index) => {
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (id, index) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: "smooth",
      })
      setActiveSection(index)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={`scroll-navigation ${isVisible ? "visible" : ""}`}>
      <div className="scroll-nav-links">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`scroll-nav-item ${activeSection === index ? "active" : ""}`}
            onClick={() => scrollToSection(section.id, index)}
            aria-label={`Scroll to ${section.label}`}
          >
            <span className="scroll-nav-dot"></span>
            <span className="scroll-nav-label">{section.label}</span>
          </button>
        ))}
      </div>
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
    </div>
  )
}

export default ScrollNavigation
