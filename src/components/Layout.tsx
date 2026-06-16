import type { ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSidebar } from '../lib/sidebar-context'

export default function Layout({ children }: { children: ReactNode }) {
  const { expanded } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div className="min-h-screen bg-[var(--portal-bg-strong)]">
      <Sidebar />
      <Header />
      <main
        className="pt-[60px] md:pt-[80px] min-h-screen transition-[margin-left] duration-300 ease-in-out"
        style={{ marginLeft: isDesktop ? (expanded ? 238 : 68) : 0 }}
      >
        {children}
      </main>
    </div>
  )
}
