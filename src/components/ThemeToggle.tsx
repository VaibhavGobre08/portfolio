import { useEffect, useState } from 'react'
import { applyTheme, getInitialTheme, type ThemeMode } from '../lib/theme'

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const initial = getInitialTheme()
    setMode(initial)
    applyTheme(initial)
  }, [])

  function toggle() {
    const next: ThemeMode = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    applyTheme(next)
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="px-3 py-2 rounded-md border border-neutral-700 text-sm"
    >
      {mode === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
} 