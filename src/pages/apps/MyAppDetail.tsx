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
          <Link to="/my-apps" className="text-[#616a7e] hover:text-[#202938] transition-colors no-underline">
            Apps
          </Link>
          <span className="text-[#9da3b0]">/</span>
          <span className="text-[#202938] font-medium">{app.name}</span>
        </nav>

        {/* App header card */}
        <div className="bg-white rounded-xl border border-gray-200 px-9 py-9 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-9">
              <AppLogo name={app.name} logoColor={app.logoColor} size="lg" />
              <div>
                <h1 className="text-[#202938] font-semibold text-2xl leading-tight mb-1">{app.name}</h1>
                <p className="text-[#616a7e] text-sm mb-4">{app.description}</p>
                <div className="flex items-center gap-2">
                  {(app.categories ?? []).map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-0.5 bg-gray-100 text-[#616a7e] text-xs font-medium rounded-full border border-gray-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={app.appUrl ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#1B2454] text-white text-sm font-medium rounded-lg hover:bg-[#151c44] transition-colors no-underline shrink-0"
            >
              Open
              <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Main content: left + right sidebar */}
        <div className="flex gap-6">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            {/* Carousel */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 overflow-hidden relative">
              <div className="flex gap-4 overflow-hidden">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="shrink-0 w-[350px] h-[240px] rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${app.logoColor}22 0%, ${app.logoColor}11 100%)`,
                      border: `1px solid ${app.logoColor}33`,
                    }}
                  >
                    <span className="text-[#9da3b0] text-sm">Screenshot {i}</span>
                  </div>
                ))}
              </div>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] flex items-center justify-center text-[#202938] hover:bg-gray-50 transition-colors">
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
              <h3 className="text-[#202938] font-semibold text-lg mb-3">Overview</h3>
              <p className="text-[#616a7e] text-sm leading-relaxed whitespace-pre-line">
                {app.overviewText ?? `${app.name} is a business application available to your team. It helps streamline workflows and improve collaboration across departments.\n\nAccess is managed by your IT team and provisioned based on your role. If you have questions about how to use the app or need additional permissions, reach out to your App Manager above.`}
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-[300px] shrink-0 flex flex-col gap-6">
            {/* App Manager */}
            <div className="bg-white rounded-xl border border-gray-200 px-4 py-4">
              <h4 className="text-[#202938] font-semibold text-base mb-4">App Manager</h4>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar name={app.primaryChampion} size="sm" />
                    <span className="text-[#202938] font-medium text-sm">{app.primaryChampion}</span>
                  </div>
                  <p className="text-[#616a7e] text-sm leading-[1.57]">
                    For access issues or questions about this app, reach out to your App Manager.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-1.5 bg-[#f7f8fc] border border-[#d0d3e8] rounded-lg text-sm font-medium text-[#323767] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] hover:bg-[#eef0fa] transition-colors">
                    <Mail size={14} strokeWidth={1.5} />
                    Email
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-1.5 bg-[#f7f8fc] border border-[#d0d3e8] rounded-lg text-sm font-medium text-[#323767] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] hover:bg-[#eef0fa] transition-colors">
                    <Users size={14} strokeWidth={1.5} />
                    Teams
                  </button>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-xl border border-gray-200 px-4 py-4">
              <h4 className="text-[#202938] font-semibold text-base mb-4">Need help?</h4>
              <p className="text-[#616a7e] text-sm leading-[1.57] mb-4">
                Contact {app.name} support directly for technical issues with the app itself.
              </p>
              {app.supportUrl && (
                <a
                  href={app.supportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#3a3e75] hover:text-[#2f3260] no-underline transition-colors"
                >
                  Support site
                  <ExternalLink size={12} strokeWidth={1.5} />
                </a>
              )}
            </div>

            {/* Pricing / Built by / Resources */}
            <div className="flex flex-col gap-6 px-1">
                {app.pricing && (
                  <div className="flex flex-col gap-1">
                    <p className="text-[#202938] text-sm font-semibold leading-[1.57] tracking-[0.1px]">Pricing</p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#3a3e75] no-underline hover:text-[#2f3260] transition-colors"
                    >
                      Learn More
                      <ExternalLink size={13} strokeWidth={1.5} />
                    </a>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <p className="text-[#202938] text-sm font-semibold leading-[1.57] tracking-[0.1px]">Built by</p>
                  <p className="text-[#616a7e] text-sm leading-[1.43]">{app.builtBy ?? app.vendor}</p>
                </div>

                {app.resources && app.resources.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <p className="text-[#202938] text-sm font-semibold leading-[1.57] tracking-[0.1px]">Resources</p>
                    {app.resources.map((r) => (
                      <a
                        key={r.label}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#3a3e75] no-underline hover:text-[#2f3260] transition-colors leading-[24px]"
                      >
                        {r.label}
                        <ExternalLink size={13} strokeWidth={1.5} />
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
