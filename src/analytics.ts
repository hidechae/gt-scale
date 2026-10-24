const measurementId = 'G-ZE73KTQ33W'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Keep development, previews, and other sites on this Pages origin out of GA4.
if (import.meta.env.PROD
  && window.location.origin === 'https://hidechae.github.io'
  && /^\/gt-scale(?:\/|$)/.test(window.location.pathname)) {
  const dataLayer = window.dataLayer = window.dataLayer || []
  window.gtag = function (..._args: unknown[]) {
    dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export {}
