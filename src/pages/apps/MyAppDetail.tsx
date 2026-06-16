import { useParams, Link } from 'react-router-dom'
import { ChevronRight, ExternalLink, Mail, Users } from 'lucide-react'
import Layout from '../../components/Layout'
import AppLogo from '../../components/AppLogo'
import Avatar from '../../components/Avatar'
import { APPS } from '../../lib/mock-data'

export default function MyAppDetail() {
  const { appId } = useParams<{ appId: string }>()
  const app = APPS.find((a) => a.id === appId)

  if (!app) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64 text-[var(--mui-palette-text-secondary)]">App not found</div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="px-4 py-4 sm:px-6 sm:py-6 w-full">
        <nav className="flex items-center gap-1.5 text-sm mb-6 flex-wrap">
          <Link to="/my-apps" className="text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] transition-colors no-underline">Apps</Link>
          <span className="text-[var(--mui-palette-text-disabled)]">/</span>
          <span className="text-[var(--mui-palette-text-primary)] font-medium">{app.name}</span>
        </nav>

        {/* App header card */}
        <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-4 sm:px-9 py-5 sm:py-9 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-9">
            <div className="flex items-start gap-4 sm:gap-9 flex-1 min-w-0">
              <AppLogo name={app.name} logoColor={app.logoColor} size="lg" />
              <div className="min-w-0">
                <h1 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl sm:text-2xl leading-tight mb-1">{app.name}</h1>
                <p className="text-[var(--mui-palette-text-secondary)] text-sm mb-4">{app.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {(app.categories ?? []).map((cat) => (
                    <span key={cat} className="px-3 py-0.5 bg-[var(--portal-primary-states-hover)] text-[var(--mui-palette-text-secondary)] text-xs font-medium rounded-full border border-[var(--mui-palette-divider)]">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a href={app.appUrl ?? '#'} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[var(--mui-palette-primary-main)] text-white text-sm font-medium rounded-lg hover:bg-[var(--mui-palette-primary-dark)] transition-colors no-underline shrink-0"
            >
              Open <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            {/* Carousel */}
            <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] p-4 sm:p-6 overflow-hidden relative">
              <div className="flex gap-4 overflow-x-auto pb-2 sm:pb-0 sm:overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="shrink-0 w-[240px] sm:w-[350px] h-[160px] sm:h-[240px] rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${app.logoColor}22 0%, ${app.logoColor}11 100%)`, border: `1px solid ${app.logoColor}33` }}
                  >
                    <span className="text-[var(--mui-palette-text-disabled)] text-sm">Screenshot {i}</span>
                  </div>
                ))}
              </div>
              <button className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--mui-palette-background-paper)] border border-[var(--mui-palette-divider)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] items-center justify-center text-[var(--mui-palette-text-primary)] hover:bg-[var(--portal-primary-states-hover)] transition-colors">
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Overview */}
            <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-4 sm:px-6 py-5">
              <h3 className="text-[var(--mui-palette-text-primary)] font-semibold text-lg mb-3">Overview</h3>
              <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-relaxed whitespace-pre-line">
                {app.overviewText ?? `${app.name} is a business application available to your team.`}
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-6">
            <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-4 py-4">
              <h4 className="text-[var(--mui-palette-text-primary)] font-semibold text-base mb-4">App Manager</h4>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar name={app.primaryChampion} size="sm" />
                    <span className="text-[var(--mui-palette-text-primary)] font-medium text-sm">{app.primaryChampion}</span>
                  </div>
                  <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.57]">For access issues or questions about this app, reach out to your App Manager.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-1.5 bg-[var(--portal-elevation-1)] border border-[var(--portal-secondary-outlined-border)] rounded-lg text-sm font-medium text-[var(--mui-palette-secondary-main)] hover:bg-[var(--portal-primary-states-selected)] transition-colors">
                    <Mail size={14} strokeWidth={1.5} /> Email
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-1.5 bg-[var(--portal-elevation-1)] border border-[var(--portal-secondary-outlined-border)] rounded-lg text-sm font-medium text-[var(--mui-palette-secondary-main)] hover:bg-[var(--portal-primary-states-selected)] transition-colors">
                    <Users size={14} strokeWidth={1.5} /> Teams
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-4 py-4">
              <h4 className="text-[var(--mui-palette-text-primary)] font-semibold text-base mb-4">Need help?</h4>
              <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.57] mb-4">Contact {app.name} support directly for technical issues.</p>
              {app.supportUrl && (
                <a href={app.supportUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--mui-palette-primary-main)] hover:opacity-75 no-underline transition-opacity">
                  Support site <ExternalLink size={12} strokeWidth={1.5} />
                </a>
              )}
            </div>

            <div className="flex flex-col gap-6 px-1">
              {app.pricing && (
                <div className="flex flex-col gap-1">
                  <p className="text-[var(--mui-palette-text-primary)] text-sm font-semibold">Pricing</p>
                  <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mui-palette-primary-main)] no-underline hover:opacity-75 transition-opacity">
                    Learn More <ExternalLink size={13} strokeWidth={1.5} />
                  </a>
                </div>
              )}
              <div className="flex flex-col gap-1">
                <p className="text-[var(--mui-palette-text-primary)] text-sm font-semibold">Built by</p>
                <p className="text-[var(--mui-palette-text-secondary)] text-sm">{app.builtBy ?? app.vendor}</p>
              </div>
              {app.resources && app.resources.length > 0 && (
                <div className="flex flex-col gap-1">
                  <p className="text-[var(--mui-palette-text-primary)] text-sm font-semibold">Resources</p>
                  {app.resources.map((r) => (
                    <a key={r.label} href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mui-palette-primary-main)] no-underline hover:opacity-75 transition-opacity leading-[24px]">
                      {r.label} <ExternalLink size={13} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
