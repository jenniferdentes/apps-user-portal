import { useParams, Link } from 'react-router-dom'
import { ChevronRight, ExternalLink, Settings, Key, Clock, Check, Star } from 'lucide-react'
import Layout from '../../components/Layout'
import { getInitials } from '../../lib/utils'
import { APPS } from '../../lib/mock-data'

function IntegrationRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-full bg-[var(--mui-palette-info-main)] flex items-center justify-center shrink-0">
        <Icon size={14} strokeWidth={1.5} className="text-white" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-[var(--mui-palette-text-primary)] font-semibold text-sm">{label}</p>
        <p className="text-[var(--mui-palette-text-secondary)] text-sm">{value}</p>
      </div>
    </div>
  )
}

export default function MarketplaceDetail() {
  const { appId } = useParams<{ appId: string }>()
  const app = APPS.find((a) => a.id === appId)

  if (!app) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64 text-[var(--mui-palette-text-secondary)]">App not found</div>
      </Layout>
    )
  }

  const integration = app.integration ?? {
    provisioning: app.provisioning === 'automatic' ? 'SCIM (Automatic)' : 'Champion Method',
    authentication: app.provisioning === 'saml' ? 'SSO Supported' : 'Username / Password',
    setupTime: '15 minutes',
    planRequired: 'Standard',
  }

  const howItWorks = app.howItWorks ?? [{
    type: 'champion' as const,
    label: 'Champion Method',
    description: 'For apps without API integration, your designated Champion will receive notifications to manually provision access.',
  }]

  const firstCategory = (app.categories ?? [])[0]

  return (
    <Layout>
      <div className="px-4 py-4 sm:px-6 sm:py-6 w-full">
        <nav className="flex items-center gap-1.5 text-sm mb-6 flex-wrap">
          <Link to="/marketplace" className="text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] transition-colors no-underline">App Marketplace</Link>
          {firstCategory && (<><span className="text-[var(--mui-palette-text-disabled)]">/</span><span className="text-[var(--mui-palette-text-secondary)]">{firstCategory}</span></>)}
          <span className="text-[var(--mui-palette-text-disabled)]">/</span>
          <span className="text-[var(--mui-palette-text-primary)] font-medium">{app.name}</span>
        </nav>

        {/* Header card */}
        <div className="bg-[var(--mui-palette-background-paper)] rounded-xl shadow-[0px_1px_1px_rgba(16,24,40,0.05)] border border-[var(--mui-palette-divider)] p-5 sm:p-9 mb-6 flex flex-col sm:flex-row items-start gap-5 sm:gap-9">
          <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-2xl border-2 border-[var(--mui-palette-divider)] flex items-center justify-center font-bold text-white shrink-0 text-lg"
            style={{ backgroundColor: app.logoColor }}
          >
            {getInitials(app.name)}
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl sm:text-2xl leading-tight">{app.name}</h1>
                {app.isTopChoice && (
                  <span className="flex items-center gap-1 bg-[#fce4ec] pl-0.5 pr-1.5 py-0.5 rounded-full shrink-0">
                    <span className="w-4 h-4 rounded-full bg-[#f06292] flex items-center justify-center shrink-0">
                      <Star size={9} fill="white" className="text-white" />
                    </span>
                    <span className="text-[#e91e63] text-[11px] font-medium leading-5 whitespace-nowrap">Top Choice</span>
                  </span>
                )}
              </div>
              <p className="text-[var(--mui-palette-text-secondary)] text-sm sm:text-base">{app.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(app.categories ?? []).map((cat) => (
                <span key={cat} className="flex items-center h-6 px-1.5 rounded-full bg-[rgba(179,157,219,0.4)] text-[var(--mui-palette-text-primary)] text-[13px] font-medium leading-[22px]">{cat}</span>
              ))}
            </div>
          </div>

          <button className="shrink-0 px-5 py-2.5 bg-[var(--mui-palette-primary-main)] text-white font-medium text-sm sm:text-[15px] rounded-lg hover:bg-[var(--mui-palette-primary-dark)] transition-colors">
            Connect
          </button>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Carousel */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="shrink-0 w-[240px] sm:w-[350px] h-[160px] sm:h-[240px] rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${app.logoColor}22 0%, ${app.logoColor}11 100%)`, border: `1px solid ${app.logoColor}33` }}
                  >
                    <span className="text-[var(--mui-palette-text-disabled)] text-sm">Screenshot {i}</span>
                  </div>
                ))}
              </div>
              <button className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--mui-palette-background-paper)] shadow-[0px_24px_48px_0px_rgba(16,24,40,0.18)] items-center justify-center text-[var(--mui-palette-text-primary)] hover:bg-[var(--portal-primary-states-hover)] transition-colors">
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl">Overview</h3>
              <p className="text-[var(--mui-palette-text-secondary)] text-sm sm:text-[15px] leading-[1.57]">
                {app.overviewText ?? `${app.name} is a business application available to your organization.`}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl">How it works</h3>
              <div className="flex flex-col gap-4">
                {howItWorks.map((item) => (
                  <div key={item.label} className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] p-4 flex flex-col gap-3">
                    <span className={`self-start inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-semibold leading-[18px] ${
                      item.type === 'scim' ? 'bg-[var(--portal-accent3)] text-[var(--mui-palette-info-main)]' : 'bg-[var(--portal-accent4)] text-[var(--portal-accent1-dark)]'
                    }`}>
                      {item.label}
                    </span>
                    <p className="text-[var(--mui-palette-text-secondary)] text-sm sm:text-base leading-[1.5]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-[var(--mui-palette-text-primary)] font-semibold text-base">Integration</h4>
              <div className="flex flex-col gap-4">
                <IntegrationRow icon={Settings} label="Provisioning" value={integration.provisioning} />
                <IntegrationRow icon={Key} label="Authentication" value={integration.authentication} />
                <IntegrationRow icon={Clock} label="Setup Time" value={integration.setupTime} />
                <IntegrationRow icon={Check} label="Plan Required" value={integration.planRequired} />
              </div>
            </div>

            <div className="border-t border-[var(--mui-palette-divider)]" />

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
              {app.supportUrl && (
                <div className="flex flex-col gap-1">
                  <p className="text-[var(--mui-palette-text-primary)] text-sm font-semibold">Support</p>
                  <a href={app.supportUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--mui-palette-primary-main)] no-underline hover:opacity-75 transition-opacity">
                    Support site <ExternalLink size={13} strokeWidth={1.5} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
