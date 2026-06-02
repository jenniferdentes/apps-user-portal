import { useParams, Link } from 'react-router-dom'
import { ChevronRight, ExternalLink, Settings, Key, Clock, Check, Star } from 'lucide-react'
import Layout from '../../components/Layout'
import { getInitials } from '../../lib/utils'
import { APPS } from '../../lib/mock-data'

function IntegrationRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-7 h-7 rounded-full bg-[#64b5f6] flex items-center justify-center shrink-0">
        <Icon size={14} strokeWidth={1.5} className="text-white" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-[#202938] font-semibold text-sm leading-[1.57] tracking-[0.1px]">{label}</p>
        <p className="text-[#616a7e] text-sm leading-[1.43]">{value}</p>
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
        <div className="flex items-center justify-center h-64 text-[#616a7e]">
          App not found
        </div>
      </Layout>
    )
  }

  const integration = app.integration ?? {
    provisioning: app.provisioning === 'automatic' ? 'SCIM (Automatic)' : 'Champion Method',
    authentication: app.provisioning === 'saml' ? 'SSO Supported' : 'Username / Password',
    setupTime: '15 minutes',
    planRequired: 'Standard',
  }

  const howItWorks = app.howItWorks ?? [
    {
      type: 'champion' as const,
      label: 'Champion Method',
      description:
        'For apps without API integration, your designated Champion will receive notifications to manually provision access. This ensures all apps can be managed through CubX, even those without automation.',
    },
  ]

  const firstCategory = (app.categories ?? [])[0]

  return (
    <Layout>
      <div className="px-6 py-6 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm mb-6">
          <Link
            to="/marketplace"
            className="text-[#616a7e] hover:text-[#202938] transition-colors no-underline"
          >
            App Marketplace
          </Link>
          {firstCategory && (
            <>
              <span className="text-[#9da3b0]">/</span>
              <span className="text-[#616a7e]">{firstCategory}</span>
            </>
          )}
          <span className="text-[#9da3b0]">/</span>
          <span className="text-[#202938] font-medium">{app.name}</span>
        </nav>

        {/* Header card */}
        <div className="bg-white rounded-xl shadow-[0px_1px_1px_rgba(16,24,40,0.05)] p-9 mb-6 flex items-start gap-9">
          <div
            className="w-[72px] h-[72px] rounded-2xl border-2 border-[#eaecf0] flex items-center justify-center font-bold text-white shrink-0 text-lg"
            style={{ backgroundColor: app.logoColor }}
          >
            {getInitials(app.name)}
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <h1 className="text-[#202938] font-semibold text-2xl leading-tight">{app.name}</h1>
                {app.isTopChoice && (
                  <span className="flex items-center gap-1 bg-[#fce4ec] pl-0.5 pr-1.5 py-0.5 rounded-full shrink-0">
                    <span className="w-4 h-4 rounded-full bg-[#f06292] flex items-center justify-center shrink-0">
                      <Star size={9} fill="white" className="text-white" />
                    </span>
                    <span className="text-[#e91e63] text-[11px] font-medium leading-5 tracking-[0.14px] whitespace-nowrap">
                      Top Choice
                    </span>
                  </span>
                )}
              </div>
              <p className="text-[#616a7e] text-base">{app.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(app.categories ?? []).map((cat) => (
                <span
                  key={cat}
                  className="flex items-center h-6 px-1.5 rounded-full bg-[rgba(179,157,219,0.4)] text-[#202938] text-[13px] font-medium leading-[22px]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <button className="shrink-0 px-[22px] py-[9px] bg-[#3a3e75] text-white font-medium text-[15px] rounded-lg hover:bg-[#2f3260] transition-colors">
            Connect
          </button>
        </div>

        {/* Main content */}
        <div className="flex gap-12 items-start">
          {/* Left content */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Carousel */}
            <div className="relative overflow-hidden">
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
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0px_24px_48px_0px_rgba(16,24,40,0.18)] flex items-center justify-center text-[#202938] hover:bg-gray-50 transition-colors">
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Overview */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#202938] font-semibold text-xl leading-[1.6] tracking-[0.15px]">
                Overview
              </h3>
              <p className="text-[#616a7e] text-[15px] leading-[1.57]">
                {app.overviewText ??
                  `${app.name} is a business application available to your organization. It helps streamline workflows and improve collaboration across departments.\n\nIntegration with CubX allows you to automatically provision accounts for new employees, manage user access, and ensure seamless onboarding and offboarding processes across your organization.`}
              </p>
            </div>

            {/* How it works */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#202938] font-semibold text-xl leading-[1.6] tracking-[0.15px]">
                How it works
              </h3>
              <div className="flex flex-col gap-4">
                {howItWorks.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl shadow-[0px_1px_1px_rgba(16,24,40,0.05)] p-4 flex flex-col gap-3"
                  >
                    <span
                      className={`self-start inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-semibold leading-[18px] ${
                        item.type === 'scim'
                          ? 'bg-[#e3f2fd] text-[#1976d2]'
                          : 'bg-[#fff3e0] text-[#f57c00]'
                      }`}
                    >
                      {item.label}
                    </span>
                    <p className="text-[#616a7e] text-base leading-[1.5]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-[300px] shrink-0 flex flex-col gap-6">
            {/* Integration */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[#202938] font-semibold text-base leading-[1.75] tracking-[0.15px]">
                Integration
              </h4>
              <div className="flex flex-col gap-4">
                <IntegrationRow icon={Settings} label="Provisioning" value={integration.provisioning} />
                <IntegrationRow icon={Key} label="Authentication" value={integration.authentication} />
                <IntegrationRow icon={Clock} label="Setup Time" value={integration.setupTime} />
                <IntegrationRow icon={Check} label="Plan Required" value={integration.planRequired} />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#eaecf0]" />

            {/* Details */}
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

              {app.supportUrl && (
                <div className="flex flex-col gap-1">
                  <p className="text-[#202938] text-sm font-semibold leading-[1.57] tracking-[0.1px]">Support</p>
                  <a
                    href={app.supportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#3a3e75] no-underline hover:text-[#2f3260] transition-colors"
                  >
                    Support site
                    <ExternalLink size={13} strokeWidth={1.5} />
                  </a>
                </div>
              )}

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
