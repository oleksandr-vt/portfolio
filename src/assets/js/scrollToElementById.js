export const scrollToElementById = (id) => {
  const element = document.getElementById(id)

  if (!element) return

  const { top } = element.getBoundingClientRect()
  window.scrollBy(0, top)
}