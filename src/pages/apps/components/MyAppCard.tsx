import { useNavigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import AppLogo from '../../../components/AppLogo'
import type { App } from '../../../types'

export default function MyAppCard({ app }: { app: App }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/my-apps/${app.id}`)}
      className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] p-5 flex flex-col gap-4 shadow-[0px_1px_3px_rgba(16,24,40,0.07),0px_1px_3.5px_rgba(16,24,40,0.04)] hover:shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-shadow duration-200 cursor-pointer group"
    >
      {/* Logo + name + hover Open button */}
      <div className="flex items-center gap-3">
        <AppLogo name={app.name} logoColor={app.logoColor} withBorder />
        <div className="flex-1 min-w-0">
          <p className="text-[var(--mui-palette-text-primary)] font-semibold text-base leading-7 tracking-[0.15px] truncate">{app.name}</p>
          <p className="text-[var(--mui-palette-text-secondary)] text-sm truncate">{app.vendor}</p>
        </div>
        <a
          href={app.appUrl ?? '#'}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-sm font-medium text-[var(--mui-palette-primary-main)] hover:bg-[var(--portal-elevation-1)] no-underline"
        >
          Open
          <ExternalLink size={14} strokeWidth={1.5} />
        </a>
      </div>

      {/* Description + divider + champion */}
      <div className="flex flex-col gap-2">
        <p className="text-[var(--mui-palette-text-primary)] text-sm truncate">{app.description ?? ''}</p>
        <div className="border-t border-[var(--mui-palette-divider)]" />
        <p className="text-[var(--mui-palette-text-secondary)] text-sm truncate">
          Champion: {app.primaryChampion}
        </p>
      </div>
    </div>
  )
}
