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
} from 'lucide-react'
import cubxWordmark from '../assets/cubx-wordmark.png'
import { useSidebar } from '../lib/sidebar-context'


interface NavItemProps {
  label: string
  icon: React.ElementType
  to: string
  active: boolean
  expanded: boolean
}

function NavItem({ label, icon: Icon, to, active, expanded }: NavItemProps) {
  return (
    <Link to={to} className="no-underline block w-full">
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
          active ? 'bg-[#e8e9f2]' : 'hover:bg-gray-100'
        }`}
      >
        <Icon
          size={22}
          strokeWidth={1.8}
          className={`shrink-0 ${active ? 'text-[#4338CA]' : 'text-[#616a7e]'}`}
        />
        {expanded && (
          <span
            className={`text-base font-semibold leading-7 tracking-[0.15px] whitespace-nowrap ${
              active ? 'text-[#202938]' : 'text-[#616a7e]'
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </Link>
  )
}

export default function Sidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { expanded, toggle } = useSidebar()
  const [appsOpen, setAppsOpen] = useState(true)

  const isAppsActive = pathname.startsWith('/apps') || pathname.startsWith('/my-apps') || pathname.startsWith('/marketplace')
  const isMyAppsActive = pathname.startsWith('/my-apps')
  const isCompanyAppsActive = pathname.startsWith('/apps')
  const isMarketplaceActive = pathname.startsWith('/marketplace')

  return (
    <aside
      className="fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex flex-col z-30 overflow-hidden transition-[width] duration-300 ease-in-out"
      style={{ width: expanded ? 238 : 68 }}
    >
      {/* Header */}
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
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors text-[#616a7e] shrink-0"
            >
              <PanelLeftClose size={20} strokeWidth={1.5} />
            </button>
          </>
        ) : (
          <button
            onClick={toggle}
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors text-[#616a7e]"
          >
            <PanelLeftOpen size={20} strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-6 overflow-y-auto px-4 pb-6">
        {/* Primary nav */}
        <div className="flex flex-col gap-2">
          <NavItem label="Home" icon={Home} to="/" active={pathname === '/'} expanded={expanded} />
          <NavItem label="Quarantine" icon={ShieldAlert} to="/quarantine" active={pathname === '/quarantine'} expanded={expanded} />
          <NavItem label="Directory" icon={BookOpen} to="/directory" active={pathname === '/directory'} expanded={expanded} />
          <NavItem label="Security Center" icon={Lock} to="/security" active={pathname === '/security'} expanded={expanded} />

          {/* Apps tree item */}
          {expanded ? (
            <div>
              <button
                onClick={() => setAppsOpen((v) => !v)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isAppsActive ? 'bg-[#e8e9f2]' : 'hover:bg-gray-100'
                }`}
              >
                <LayoutDashboard
                  size={22}
                  strokeWidth={1.8}
                  className={`shrink-0 ${isAppsActive ? 'text-[#4338CA]' : 'text-[#616a7e]'}`}
                />
                <span
                  className={`flex-1 text-base font-semibold leading-7 tracking-[0.15px] text-left whitespace-nowrap ${
                    isAppsActive ? 'text-[#202938]' : 'text-[#616a7e]'
                  }`}
                >
                  Apps
                </span>
                {appsOpen ? (
                  <ChevronUp size={16} strokeWidth={2} className="text-[#616a7e] shrink-0" />
                ) : (
                  <ChevronDown size={16} strokeWidth={2} className="text-[#616a7e] shrink-0" />
                )}
              </button>

              {appsOpen && (
                <div className="mt-1 ml-[19px] border-l border-[#eaecf0] flex flex-col">
                  <Link
                    to="/my-apps"
                    className={`no-underline flex items-center h-[42px] px-3 rounded-lg transition-colors text-base ${
                      isMyAppsActive
                        ? 'text-[#202938] font-semibold bg-[#f7f8fc]'
                        : 'text-[#616a7e] font-normal hover:bg-gray-50'
                    }`}
                  >
                    My Apps
                  </Link>
                  <Link
                    to="/apps"
                    className={`no-underline flex items-center h-[42px] px-3 rounded-lg transition-colors text-base ${
                      isCompanyAppsActive
                        ? 'text-[#202938] font-semibold bg-[#f7f8fc]'
                        : 'text-[#616a7e] font-normal hover:bg-gray-50'
                    }`}
                  >
                    Company Apps
                  </Link>
                  <Link
                    to="/marketplace"
                    className={`no-underline flex items-center h-[42px] px-3 rounded-lg transition-colors text-base ${
                      isMarketplaceActive
                        ? 'text-[#202938] font-semibold bg-[#f7f8fc]'
                        : 'text-[#616a7e] font-normal hover:bg-gray-50'
                    }`}
                  >
                    Marketplace
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/my-apps')}
              className={`flex items-center justify-center gap-3 px-3 py-2 rounded-md transition-colors w-full ${
                isAppsActive ? 'bg-[#e8e9f2]' : 'hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard
                size={22}
                strokeWidth={1.8}
                className={`shrink-0 ${isAppsActive ? 'text-[#4338CA]' : 'text-[#616a7e]'}`}
              />
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 -mx-4" />

        {/* Company Tools */}
        <div className="flex flex-col gap-4">
          {expanded && (
            <span className="text-[11px] font-semibold text-[#475467] uppercase tracking-wider leading-[18px] px-1">
              Company Tools
            </span>
          )}
          <div className="flex flex-col gap-2">
            <NavItem label="Manage Users" icon={Users} to="/users" active={pathname === '/users'} expanded={expanded} />
            <NavItem label="Requests" icon={CheckCircle} to="/requests" active={pathname === '/requests'} expanded={expanded} />
            <NavItem label="Champion Tasks" icon={ListChecks} to="/champion-tasks" active={pathname === '/champion-tasks'} expanded={expanded} />
          </div>
        </div>
      </nav>
    </aside>
  )
}
