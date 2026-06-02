import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface SidebarCtx {
  expanded: boolean
  toggle: () => void
}

const SidebarContext = createContext<SidebarCtx>({ expanded: true, toggle: () => {} })

export const useSidebar = () => useContext(SidebarContext)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <SidebarContext.Provider value={{ expanded, toggle: () => setExpanded((v) => !v) }}>
      {children}
    </SidebarContext.Provider>
  )
}
