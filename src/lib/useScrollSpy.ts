import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offsetPx: number = 100) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          let current = sectionIds[0] ?? ''

          for (const id of sectionIds) {
            const el = document.getElementById(id)
            if (!el) continue
            const top = el.offsetTop - offsetPx
            if (scrollY >= top) {
              current = id
            } else {
              break
            }
          }

          if (current !== activeId) setActiveId(current)
          ticking = false
        })
        ticking = true
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(','), offsetPx])

  return activeId
} 