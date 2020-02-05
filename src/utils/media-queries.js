/**
 * Check if a specific media query match with the current viewport
 * @param mq
 * @return Boolean
 */
const matchMQ = mq => window.matchMedia(mq).matches

export const isMobile = () => matchMQ('(max-width: 639px)')

export const isTablet = () => matchMQ('(max-width: 995px)')

export const isDesktop = () => matchMQ('(min-width: 996px)')
