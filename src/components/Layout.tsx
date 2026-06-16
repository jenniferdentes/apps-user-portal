import type { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSidebar } from '../lib/sidebar-context'

export default function Layout({ children }: { children: ReactNode }) {
  const { expanded } = useSidebar()

  return (
    <div className="min-h-screen bg-[var(--portal-bg-strong)]">
      <Sidebar />
      <Header />
      <main
        className="pt-[80px] min-h-screen transition-[margin-left] duration-300 ease-in-out"
        style={{ marginLeft: expanded ? 238 : 68 }}
      >
        {children}
      </main>
    </div>
  )
}
