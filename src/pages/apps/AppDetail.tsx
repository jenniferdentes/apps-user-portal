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
        <div className="flex items-center justify-center h-64 text-[#616a7e]">
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
          <Link to="/apps" className="text-[#616a7e] hover:text-[#202938] transition-colors no-underline">
            Apps
          </Link>
          <span className="text-[#9da3b0]">/</span>
          <Link to="/apps" className="text-[#616a7e] hover:text-[#202938] transition-colors no-underline">
            Company Apps
          </Link>
          <span className="text-[#9da3b0]">/</span>
          <span className="text-[#202938] font-medium">{app.name}</span>
        </nav>

        {/* App header card */}
        <div className="bg-white rounded-xl border border-gray-200 px-6 py-5 mb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <AppLogo name={app.name} logoColor={app.logoColor} />
              <div>
                <h1 className="text-[#202938] font-semibold text-xl leading-tight">{app.name}</h1>
                <p className="text-[#616a7e] text-sm">{app.vendor}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="flex items-center gap-1.5 text-[#616a7e] text-xs">
                <RefreshCw size={14} strokeWidth={1.5} />
                {app.lastSync}
              </span>
              <StatusBadge status={app.status} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-0">
            {(['overview', 'users', 'settings'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                  tab === t
                    ? 'border-[#1B2454] text-[#1B2454]'
                    : 'border-transparent text-[#616a7e] hover:text-[#202938]'
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
