export function getPageFromPathname(pathname) {
  if (pathname === "/") {
    return "landing";
  }

  if (pathname.startsWith("/port/piece/")) {
    return "port-details";
  }

  return pathname.split("/")[1] || "landing";
}
