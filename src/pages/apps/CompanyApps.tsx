import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, SlidersHorizontal, LayoutGrid, List, Plus } from 'lucide-react'
import Layout from '../../components/Layout'
import AppLogo from '../../components/AppLogo'
import StatusBadge from '../../components/StatusBadge'
import AppCard from './components/AppCard'
import { APPS } from '../../lib/mock-data'
import type { ViewMode } from '../../types'

export default function CompanyApps() {
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  const filtered = APPS.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.vendor.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Layout>
      <div className="px-4 py-4 sm:px-6 sm:py-6 w-full">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
          <div>
            <h1 className="text-[var(--mui-palette-text-primary)] text-2xl sm:text-3xl font-bold leading-tight">Company Apps</h1>
            <p className="text-[var(--mui-palette-text-secondary)] text-sm mt-1">Quick access to all your business applications</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[var(--mui-palette-primary-main)] text-white text-sm font-medium rounded-lg hover:bg-[var(--mui-palette-primary-dark)] transition-colors shrink-0">
            <Plus size={16} />
            <span className="hidden sm:inline">Get More Apps</span>
            <span className="sm:hidden">More</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-3 flex-1 min-w-0">
            <div className="relative flex-1 min-w-[180px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)]" />
              <input
                type="text"
                placeholder="Search for an app"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[var(--portal-divider-dark)] rounded-lg text-sm text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] bg-[var(--mui-palette-background-paper)]"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-[var(--portal-divider-dark)] rounded-lg text-sm font-medium text-[var(--mui-palette-text-primary)] bg-[var(--mui-palette-background-paper)] hover:bg-[var(--portal-primary-states-hover)] transition-colors shrink-0">
              <SlidersHorizontal size={15} className="text-[var(--mui-palette-text-secondary)]" />
              Filters
            </button>
          </div>

          <div className="flex rounded-lg border border-[var(--portal-divider-dark)] overflow-hidden bg-[var(--mui-palette-background-paper)] shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center justify-center w-10 h-9 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[var(--mui-palette-primary-main)] text-white'
                  : 'text-[var(--mui-palette-text-secondary)] hover:bg-[var(--portal-primary-states-hover)]'
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center justify-center w-10 h-9 border-l border-[var(--portal-divider-dark)] transition-colors ${
                viewMode === 'list'
                  ? 'bg-[var(--mui-palette-primary-main)] text-white'
                  : 'text-[var(--mui-palette-text-secondary)] hover:bg-[var(--portal-primary-states-hover)]'
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-[var(--mui-palette-divider)]">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)]">App Name</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)] hidden sm:table-cell">Champion</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)] hidden sm:table-cell">Users</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((app) => (
                    <tr
                      key={app.id}
                      className="border-b border-[var(--mui-palette-divider)] last:border-0 hover:bg-[var(--portal-primary-states-hover)] transition-colors"
                    >
                      <td className="px-4 py-4">
                        <Link to={`/apps/${app.id}`} className="flex items-center gap-3 no-underline group">
                          <AppLogo name={app.name} logoColor={app.logoColor} size="sm" />
                          <div>
                            <div className="text-[var(--mui-palette-text-primary)] font-medium text-sm group-hover:text-[var(--mui-palette-primary-main)] transition-colors">
                              {app.name}
                            </div>
                            <div className="text-[var(--mui-palette-text-secondary)] text-xs">{app.vendor}</div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-[var(--mui-palette-text-primary)] text-sm hidden sm:table-cell">{app.primaryChampion}</td>
                      <td className="px-4 py-4 text-[var(--mui-palette-text-secondary)] text-sm hidden sm:table-cell">{app.userCount} users</td>
                      <td className="px-4 py-4">
                        <StatusBadge status={app.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end px-4 py-3 border-t border-[var(--mui-palette-divider)]">
              <span className="text-sm text-[var(--mui-palette-text-secondary)]">
                Rows per page: <span className="font-medium text-[var(--mui-palette-text-primary)]">10 ▾</span>
                &nbsp;&nbsp;1–{Math.min(10, filtered.length)} of {filtered.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
