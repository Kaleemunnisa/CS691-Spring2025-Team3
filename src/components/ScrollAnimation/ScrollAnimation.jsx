import { useEffect, useRef, useState } from "react"

function ScrollAnimation({ children, animationType = "fade-in", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1, 
      },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay])

  const animationClass = `scroll-${animationType} ${isVisible ? "visible" : ""}`

  return (
    <div ref={elementRef} className={animationClass}>
      {children}
    </div>
  )
}

export default ScrollAnimation

