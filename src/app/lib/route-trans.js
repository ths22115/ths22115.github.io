const FILE_PATH_PATTERN = /\.[a-z0-9]+$/i

export function getInternalNavigationHref(anchor, currentUrl) {
  if (!anchor || anchor.hasAttribute('download')) return null

  const target = anchor.getAttribute('target')
  if (target && target !== '_self') return null

  const hrefAttr = anchor.getAttribute('href')
  if (!hrefAttr || hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) return null

  let nextUrl
  try {
    nextUrl = new URL(anchor.href, currentUrl)
  } catch {
    return null
  }

  if (nextUrl.origin !== currentUrl.origin) return null
  if (FILE_PATH_PATTERN.test(nextUrl.pathname)) return null
  if (nextUrl.pathname === currentUrl.pathname && nextUrl.search === currentUrl.search) return null

  return nextUrl.pathname + nextUrl.search + nextUrl.hash
}