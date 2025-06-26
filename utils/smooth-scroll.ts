export function smoothScrollTo(elementId: string, offset = 0) {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (prefersReducedMotion) {
    window.scrollTo({
      top: offsetPosition,
      behavior: "auto",
    })
  } else {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
