/**
 * Scroll Animation Composable
 * Provides intersection observer functionality for fade-in animations
 */
export const useScrollAnimation = () => {
  const { $refs } = getCurrentInstance() || {}

  const setupScrollAnimation = (options = {}) => {
    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      once = true
    } = options

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
            
            // Remove observer after first intersection if once is true
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            // Remove visible class when element goes out of view
            entry.target.classList.remove('fade-in-visible')
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    return observer
  }

  const observeElements = (selector, options = {}) => {
    const observer = setupScrollAnimation(options)
    
    // Wait for DOM to be ready
    nextTick(() => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element) => {
        observer.observe(element)
      })
    })

    return observer
  }

  const observeRefs = (refs, options = {}) => {
    const observer = setupScrollAnimation(options)
    
    nextTick(() => {
      refs.forEach((ref) => {
        if (ref && ref.$el) {
          observer.observe(ref.$el)
        } else if (ref) {
          observer.observe(ref)
        }
      })
    })

    return observer
  }

  return {
    setupScrollAnimation,
    observeElements,
    observeRefs
  }
}


