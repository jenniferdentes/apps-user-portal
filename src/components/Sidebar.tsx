import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Home,
  ShieldAlert,
  BookOpen,
  Lock,
  LayoutDashboard,
  Users,
  CheckCircle,
  ListChecks,
  ChevronDown,
  ChevronUp,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from 'lucide-react'
import Drawer from '@mui/material/Drawer'
import cubxWordmark from '../assets/cubx-wordmark.png'
import { useSidebar } from '../lib/sidebar-context'

interface NavItemProps {
  label: string
  icon: React.ElementType
  to: string
  active: boolean
  expanded: boolean
  onLinkClick?: () => void
}

function NavItem({ label, icon: Icon, to, active, expanded, onLinkClick }: NavItemProps) {
  return (
    <Link to={to} className="no-underline block w-full" onClick={onLinkClick}>
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
          active
            ? 'bg-[var(--portal-primary-states-selected)]'
            : 'hover:bg-[var(--portal-primary-states-hover)]'
        }`}
      >
        <Icon
          size={22}
          strokeWidth={1.8}
          className={`shrink-0 ${active ? 'text-[var(--mui-palette-primary-main)]' : 'text-[var(--mui-palette-text-secondary)]'}`}
        />
        {expanded && (
          <span
            className={`text-base font-semibold leading-7 tracking-[0.15px] whitespace-nowrap ${
              active ? 'text-[var(--mui-palette-text-primary)]' : 'text-[var(--mui-palette-text-secondary)]'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </Link>
  )
}

function NavContent({ expanded, onLinkClick }: { expanded: boolean; onLinkClick?: () => void }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [appsOpen, setAppsOpen] = useState(true)

  const isAppsActive = pathname.startsWith('/apps') || pathname.startsWith('/my-apps') || pathname.startsWith('/marketplace')
  const isMyAppsActive = pathname.startsWith('/my-apps')
  const isCompanyAppsActive = pathname.startsWith('/apps')
  const isMarketplaceActive = pathname.startsWith('/marketplace')

  return (
    <nav className="flex-1 flex flex-col gap-6 overflow-y-auto px-4 pb-6">
      <div className="flex flex-col gap-2">
        <NavItem label="Home" icon={Home} to="/" active={pathname === '/'} expanded={expanded} onLinkClick={onLinkClick} />
        <NavItem label="Quarantine" icon={ShieldAlert} to="/quarantine" active={pathname === '/quarantine'} expanded={expanded} onLinkClick={onLinkClick} />
        <NavItem label="Directory" icon={BookOpen} to="/directory" active={pathname === '/directory'} expanded={expanded} onLinkClick={onLinkClick} />
        <NavItem label="Security Center" icon={Lock} to="/security" active={pathname === '/security'} expanded={expanded} onLinkClick={onLinkClick} />

        {expanded ? (
          <div>
            <button
              onClick={() => setAppsOpen((v) => !v)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isAppsActive
                  ? 'bg-[var(--portal-primary-states-selected)]'
                  : 'hover:bg-[var(--portal-primary-states-hover)]'
              }`}
            >
              <LayoutDashboard
                size={22}
                strokeWidth={1.8}
                className={`shrink-0 ${isAppsActive ? 'text-[var(--mui-palette-primary-main)]' : 'text-[var(--mui-palette-text-secondary)]'}`}
              />
              <span
                className={`flex-1 text-base font-semibold leading-7 tracking-[0.15px] text-left whitespace-nowrap ${
                  isAppsActive ? 'text-[var(--mui-palette-text-primary)]' : 'text-[var(--mui-palette-text-secondary)]'
                }`}
              >
                Apps
              </span>
              {appsOpen
                ? <ChevronUp size={16} strokeWidth={2} className="text-[var(--mui-palette-text-secondary)] shrink-0" />
                : <ChevronDown size={16} strokeWidth={2} className="text-[var(--mui-palette-text-secondary)] shrink-0" />
              }
            </button>

            {appsOpen && (
              <div className="mt-1 ml-[19px] border-l border-[var(--mui-palette-divider)] flex flex-col">
                <Link to="/my-apps" onClick={onLinkClick}
                  className={`no-underline flex items-center h-[42px] px-3 rounded-lg transition-colors text-base ${
                    isMyAppsActive
                      ? 'text-[var(--mui-palette-text-primary)] font-semibold bg-[var(--portal-elevation-1)]'
                      : 'text-[var(--mui-palette-text-secondary)] font-normal hover:bg-[var(--portal-primary-states-hover)]'
                  }`}
                >
                  My Apps
                </Link>
                <Link to="/apps" onClick={onLinkClick}
                  className={`no-underline flex items-center h-[42px] px-3 rounded-lg transition-colors text-base ${
                    isCompanyAppsActive
                      ? 'text-[var(--mui-palette-text-primary)] font-semibold bg-[var(--portal-elevation-1)]'
                      : 'text-[var(--mui-palette-text-secondary)] font-normal hover:bg-[var(--portal-primary-states-hover)]'
                  }`}
                >
                  Company Apps
                </Link>
                <Link to="/marketplace" onClick={onLinkClick}
                  className={`no-underline flex items-center h-[42px] px-3 rounded-lg transition-colors text-base ${
                    isMarketplaceActive
                      ? 'text-[var(--mui-palette-text-primary)] font-semibold bg-[var(--portal-elevation-1)]'
                      : 'text-[var(--mui-palette-text-secondary)] font-normal hover:bg-[var(--portal-primary-states-hover)]'
                  }`}
                >
                  Marketplace
                </Link>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => { navigate('/my-apps'); onLinkClick?.() }}
            className={`flex items-center justify-center gap-3 px-3 py-2 rounded-md transition-colors w-full ${
              isAppsActive
                ? 'bg-[var(--portal-primary-states-selected)]'
                : 'hover:bg-[var(--portal-primary-states-hover)]'
            }`}
          >
            <LayoutDashboard
              size={22}
              strokeWidth={1.8}
              className={`shrink-0 ${isAppsActive ? 'text-[var(--mui-palette-primary-main)]' : 'text-[var(--mui-palette-text-secondary)]'}`}
            />
          </button>
        )}
      </div>

      <div className="border-t border-[var(--mui-palette-divider)] -mx-4" />

      <div className="flex flex-col gap-4">
        {expanded && (
          <span className="text-[11px] font-semibold text-[var(--portal-icon-base)] uppercase tracking-wider leading-[18px] px-1">
            Company Tools
          </span>
        )}
        <div className="flex flex-col gap-2">
          <NavItem label="Manage Users" icon={Users} to="/users" active={pathname === '/users'} expanded={expanded} onLinkClick={onLinkClick} />
          <NavItem label="Requests" icon={CheckCircle} to="/requests" active={pathname === '/requests'} expanded={expanded} onLinkClick={onLinkClick} />
          <NavItem label="Champion Tasks" icon={ListChecks} to="/champion-tasks" active={pathname === '/champion-tasks'} expanded={expanded} onLinkClick={onLinkClick} />
        </div>
      </div>
    </nav>
  )
}

export default function Sidebar() {
  const { expanded, toggle, mobileOpen, toggleMobile } = useSidebar()

  return (
    <>
      {/* Desktop sidebar — hidden on mobile */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen bg-[var(--portal-bg-paper)] border-r border-[var(--portal-divider)] flex-col z-30 overflow-hidden transition-[width] duration-300 ease-in-out"
        style={{ width: expanded ? 238 : 68 }}
      >
        <div
          className={`flex items-center h-[72px] shrink-0 px-4 ${
            expanded ? 'justify-between' : 'justify-center'
          }`}
        >
          {expanded ? (
            <>
              <img src={cubxWordmark} alt="CubX" className="h-8 object-contain" />
              <button
                onClick={toggle}
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[var(--portal-primary-states-hover)] transition-colors text-[var(--mui-palette-text-secondary)] shrink-0"
              >
                <PanelLeftClose size={20} strokeWidth={1.5} />
              </button>
            </>
          ) : (
            <button
              onClick={toggle}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[var(--portal-primary-states-hover)] transition-colors text-[var(--mui-palette-text-secondary)]"
            >
              <PanelLeftOpen size={20} strokeWidth={1.5} />
            </button>
          )}
        </div>
        <NavContent expanded={expanded} />
      </aside>

      {/* Mobile drawer */}
      <Drawer
        open={mobileOpen}
        onClose={toggleMobile}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              bgcolor: 'var(--mui-palette-background-paper)',
              borderRight: '1px solid var(--mui-palette-divider)',
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        <div className="flex items-center justify-between h-[72px] shrink-0 px-4">
          <img src={cubxWordmark} alt="CubX" className="h-8 object-contain" />
          <button
            onClick={toggleMobile}
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-[var(--portal-primary-states-hover)] transition-colors text-[var(--mui-palette-text-secondary)]"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <NavContent expanded={true} onLinkClick={toggleMobile} />
      </Drawer>
    </>
  )
}
