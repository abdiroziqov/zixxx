import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) return

  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  })

  nuxtApp.hook('page:finish', () => {
    AOS.refresh()
  })
})
