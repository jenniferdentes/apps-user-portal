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
      <div className="px-6 py-6 w-full">
        {/* Page header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-[#202938] text-3xl font-bold leading-tight">Company Apps</h1>
            <p className="text-[#616a7e] text-sm mt-1">Quick access to all your business applications</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1B2454] text-white text-sm font-medium rounded-lg hover:bg-[#151c44] transition-colors">
            <Plus size={16} />
            Get More Apps
          </button>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#616a7e]" />
              <input
                type="text"
                placeholder="Search for an app"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#202938] placeholder:text-[#9da3b0] focus:outline-none focus:ring-2 focus:ring-indigo-200 w-[260px] bg-white"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-[#202938] bg-white hover:bg-gray-50 transition-colors">
              <SlidersHorizontal size={15} className="text-[#616a7e]" />
              Filters
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Grid / List icon toggle */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center justify-center w-10 h-9 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#1B2454] text-white'
                    : 'text-[#616a7e] hover:bg-gray-50'
                }`}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center justify-center w-10 h-9 border-l border-gray-300 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#1B2454] text-white'
                    : 'text-[#616a7e] hover:bg-gray-50'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">App Name</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Champion</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Users</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((app) => (
                  <tr
                    key={app.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <Link to={`/apps/${app.id}`} className="flex items-center gap-3 no-underline group">
                        <AppLogo name={app.name} logoColor={app.logoColor} size="sm" />
                        <div>
                          <div className="text-[#202938] font-medium text-sm group-hover:text-indigo-700 transition-colors">
                            {app.name}
                          </div>
                          <div className="text-[#616a7e] text-xs">{app.vendor}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-[#202938] text-sm">{app.primaryChampion}</td>
                    <td className="px-4 py-4 text-[#616a7e] text-sm">{app.userCount} users</td>
                    <td className="px-4 py-4">
                      <StatusBadge status={app.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-end px-4 py-3 border-t border-gray-100">
              <span className="text-sm text-[#616a7e]">
                Rows per page: <span className="font-medium text-[#202938]">10 ▾</span>
                &nbsp;&nbsp;1–{Math.min(10, filtered.length)} of {filtered.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
