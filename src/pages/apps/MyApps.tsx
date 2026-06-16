import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import Layout from '../../components/Layout'
import MyAppCard from './components/MyAppCard'
import { APPS } from '../../lib/mock-data'

export default function MyApps() {
  const [search, setSearch] = useState('')

  const filtered = APPS.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.vendor.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Layout>
      <div className="px-6 py-6 w-full">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-[var(--mui-palette-text-primary)] text-3xl font-bold leading-tight">My Apps</h1>
          <p className="text-[var(--mui-palette-text-secondary)] text-sm mt-1">Quick access to all your applications</p>
        </div>

        {/* Action bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)]" />
            <input
              type="text"
              placeholder="Search for an app"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-[var(--portal-divider-dark)] rounded-lg text-sm text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] w-[320px] bg-[var(--mui-palette-background-paper)] shadow-[0px_1px_1px_rgba(16,24,40,0.05)]"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-[var(--portal-primary-states-outlined-border)] rounded-lg text-sm font-medium text-[var(--mui-palette-secondary-main)] bg-[var(--mui-palette-background-paper)] hover:bg-[var(--portal-primary-states-hover)] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
            <SlidersHorizontal size={15} className="text-[var(--mui-palette-text-secondary)]" />
            Filters
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {filtered.map((app) => (
            <MyAppCard key={app.id} app={app} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex items-center justify-center h-48 text-[var(--mui-palette-text-secondary)] text-sm">
            No apps found.
          </div>
        )}
      </div>
    </Layout>
  )
}
