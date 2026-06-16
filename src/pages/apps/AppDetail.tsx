import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { RefreshCw } from 'lucide-react'
import Layout from '../../components/Layout'
import StatusBadge from '../../components/StatusBadge'
import AppLogo from '../../components/AppLogo'
import { APPS } from '../../lib/mock-data'
import OverviewTab from './components/OverviewTab'
import UsersTab from './components/UsersTab'
import SettingsTab from './components/SettingsTab'

type Tab = 'overview' | 'users' | 'settings'

export default function AppDetail() {
  const { appId } = useParams<{ appId: string }>()
  const [tab, setTab] = useState<Tab>('overview')

  const app = APPS.find((a) => a.id === appId)

  if (!app) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64 text-[var(--mui-palette-text-secondary)]">
          App not found
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="px-6 py-6 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm mb-6">
          <Link to="/apps" className="text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] transition-colors no-underline">
            Apps
          </Link>
          <span className="text-[var(--mui-palette-text-disabled)]">/</span>
          <Link to="/apps" className="text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] transition-colors no-underline">
            Company Apps
          </Link>
          <span className="text-[var(--mui-palette-text-disabled)]">/</span>
          <span className="text-[var(--mui-palette-text-primary)] font-medium">{app.name}</span>
        </nav>

        {/* App header card */}
        <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-6 py-5 mb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <AppLogo name={app.name} logoColor={app.logoColor} />
              <div>
                <h1 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl leading-tight">{app.name}</h1>
                <p className="text-[var(--mui-palette-text-secondary)] text-sm">{app.vendor}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="flex items-center gap-1.5 text-[var(--mui-palette-text-secondary)] text-xs">
                <RefreshCw size={14} strokeWidth={1.5} />
                {app.lastSync}
              </span>
              <StatusBadge status={app.status} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[var(--mui-palette-divider)] mb-6">
          <div className="flex gap-0">
            {(['overview', 'users', 'settings'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                  tab === t
                    ? 'border-[var(--mui-palette-primary-main)] text-[var(--mui-palette-primary-main)]'
                    : 'border-transparent text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)]'
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        {tab === 'overview' && <OverviewTab app={app} />}
        {tab === 'users' && <UsersTab app={app} />}
        {tab === 'settings' && <SettingsTab app={app} />}
      </div>
    </Layout>
  )
}
