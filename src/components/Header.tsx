import { Ticket, Users, Menu } from 'lucide-react'
import { useMediaQuery } from '@mui/material'
import { useSidebar } from '../lib/sidebar-context'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
  const { expanded, toggleMobile } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header
      className="fixed top-0 right-0 h-[60px] md:h-[80px] bg-[var(--mui-palette-background-paper)] border-b border-[var(--mui-palette-divider)] flex items-center justify-between md:justify-end px-4 md:px-6 gap-2 md:gap-3 z-20 transition-[left] duration-300 ease-in-out"
      style={{ left: isDesktop ? (expanded ? 238 : 68) : 0 }}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={toggleMobile}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-[var(--portal-primary-states-hover)] transition-colors text-[var(--mui-palette-text-secondary)]"
        aria-label="Open menu"
      >
        <Menu size={20} strokeWidth={1.5} />
      </button>

      {/* Right side actions */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        <ThemeToggle />

        <button className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg border border-[var(--portal-divider-dark)] text-sm font-medium text-[var(--mui-palette-text-primary)] hover:bg-[var(--portal-primary-states-hover)] transition-colors">
          <Ticket size={16} className="text-[var(--mui-palette-text-secondary)]" />
          <span className="hidden md:inline">Submit a Ticket</span>
        </button>

        <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--mui-palette-divider)] text-sm font-medium text-[var(--mui-palette-text-primary)] hover:bg-[var(--portal-primary-states-hover)] transition-colors">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
            <Users size={12} className="text-purple-600" />
          </div>
          <span className="hidden lg:inline">RiverStone Insurance</span>
        </button>

        <button className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-white text-sm font-bold hover:bg-amber-500 transition-colors shrink-0">
          GH
        </button>
      </div>
    </header>
  )
}
