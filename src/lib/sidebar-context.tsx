import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface SidebarCtx {
  expanded: boolean
  toggle: () => void
  mobileOpen: boolean
  toggleMobile: () => void
}

const SidebarContext = createContext<SidebarCtx>({
  expanded: true,
  toggle: () => {},
  mobileOpen: false,
  toggleMobile: () => {},
})

export const useSidebar = () => useContext(SidebarContext)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <SidebarContext.Provider value={{
      expanded,
      toggle: () => setExpanded((v) => !v),
      mobileOpen,
      toggleMobile: () => setMobileOpen((v) => !v),
    }}>
      {children}
    </SidebarContext.Provider>
  )
}
