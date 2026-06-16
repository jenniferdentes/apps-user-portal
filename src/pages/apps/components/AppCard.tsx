import { Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppLogo from '../../../components/AppLogo'
import StatusBadge from '../../../components/StatusBadge'
import type { App } from '../../../types'

export default function AppCard({ app }: { app: App }) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="bg-[var(--mui-palette-background-paper)] rounded-xl p-5 flex flex-col gap-4 cursor-pointer no-underline block shadow-[0px_1px_3px_rgba(16,24,40,0.07),0px_1px_3.5px_rgba(16,24,40,0.04)] hover:shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-shadow duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <AppLogo name={app.name} logoColor={app.logoColor} />
          <div className="flex flex-col min-w-0">
            <span className="text-[var(--mui-palette-text-primary)] font-semibold text-base leading-[1.75] tracking-[0.15px] truncate">
              {app.name}
            </span>
            <span className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.43] truncate">
              {app.vendor}
            </span>
          </div>
        </div>
        <StatusBadge status={app.status} />
      </div>

      <div className="flex items-center gap-3 text-sm text-[var(--mui-palette-text-secondary)]">
        <span>Champion: {app.primaryChampion}</span>
        <span className="w-px h-4 bg-[var(--mui-palette-divider)]" />
        <span className="flex items-center gap-1">
          <Users size={16} strokeWidth={1.5} />
          {app.userCount} users
        </span>
      </div>
    </Link>
  )
}
