import { useState } from 'react'
import { Search, SlidersHorizontal, Star, ChevronRight, X, ChevronDown } from 'lucide-react'

function MagnifierIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
      <path d="M24.3024 42.9128C34.5453 42.9128 42.8489 34.6093 42.8489 24.3663C42.8489 14.1234 34.5453 5.81982 24.3024 5.81982C14.0594 5.81982 5.75586 14.1234 5.75586 24.3663C5.75586 34.6093 14.0594 42.9128 24.3024 42.9128Z" fill="#81D4FA"/>
      <g opacity="0.5" style={{ mixBlendMode: 'multiply' }}>
        <path d="M37.9801 36.8919C35.128 38.6806 31.7546 39.7149 28.1396 39.7149C17.8967 39.7149 9.59307 31.4114 9.59307 21.1684C9.59307 16.34 11.4383 11.9425 14.4618 8.64258C9.23263 11.9222 5.75586 17.7382 5.75586 24.3662C5.75586 34.6092 14.0595 42.9127 24.3024 42.9127C29.7169 42.9127 34.5895 40.5923 37.9801 36.8919Z" fill="#81D4FA"/>
      </g>
      <path d="M24.3025 41.9537C34.0157 41.9537 41.8898 34.0797 41.8898 24.3665C41.8898 14.6534 34.0157 6.7793 24.3025 6.7793C14.5894 6.7793 6.71533 14.6534 6.71533 24.3665C6.71533 34.0797 14.5894 41.9537 24.3025 41.9537Z" stroke="#EBE6EF" strokeWidth="4.46512"/>
      <path d="M24.3024 42.9128C34.5453 42.9128 42.8489 34.6093 42.8489 24.3663C42.8489 14.1234 34.5453 5.81982 24.3024 5.81982C14.0594 5.81982 5.75586 14.1234 5.75586 24.3663C5.75586 34.6093 14.0594 42.9128 24.3024 42.9128Z" stroke="#121331" strokeWidth="2.08372"/>
      <path d="M37.4771 37.6685L47.6457 47.8371" stroke="#121331" strokeWidth="2.08372" strokeLinecap="round"/>
      <path d="M41.4057 39.7881L39.5968 41.597C39.0973 42.0965 39.0973 42.9064 39.5968 43.4059L45.4757 49.2848C45.9752 49.7843 46.785 49.7843 47.2846 49.2848L49.0934 47.4759C49.5929 46.9764 49.5929 46.1665 49.0934 45.667L43.2146 39.7881C42.7151 39.2886 41.9052 39.2886 41.4057 39.7881Z" fill="#B26836"/>
      <path d="M41.4057 39.7881L39.5968 41.597C39.0973 42.0965 39.0973 42.9064 39.5968 43.4059L45.4757 49.2848C45.9752 49.7843 46.785 49.7843 47.2846 49.2848L49.0934 47.4759C49.5929 46.9764 49.5929 46.1665 49.0934 45.667L43.2146 39.7881C42.7151 39.2886 41.9052 39.2886 41.4057 39.7881Z" stroke="#121331" strokeWidth="2.08372"/>
    </svg>
  )
}

function RequestAppModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div
        className="bg-[var(--mui-palette-background-paper)] rounded-xl w-full max-w-[600px] shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pt-6 px-6 sm:pt-9 sm:px-9 pb-6">
          <h2 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl leading-[1.6] tracking-[0.15px]">Request New App</h2>
          <button onClick={onClose} className="text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] transition-colors">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <div className="px-6 sm:px-9 pb-5 flex flex-col gap-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-[var(--mui-palette-text-primary)] font-semibold text-base leading-[1.75]">Can't find the app you're looking for?</p>
              <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.43]">Don't worry, just tell us the name of the app and we'll do our best to get it working for you.</p>
            </div>
            <div className="shrink-0 hidden sm:block"><MagnifierIcon /></div>
          </div>
          <div className="flex flex-col gap-4">
            {['App Name', 'Link to app website'].map((label) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="text-[var(--mui-palette-text-primary)] font-semibold text-sm leading-[1.57] tracking-[0.1px]">{label}</label>
                <input type="text" placeholder="Placeholder"
                  className="w-full px-3.5 py-2.5 border border-[var(--portal-divider-dark)] rounded-lg text-base text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] outline-none focus:border-[var(--mui-palette-primary-main)] focus:ring-1 focus:ring-[var(--portal-primary-states-focus)] bg-[var(--mui-palette-background-paper)]"
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="text-[var(--mui-palette-text-primary)] font-semibold text-sm leading-[1.57] tracking-[0.1px]">Additional information (optional)</label>
              <textarea rows={4} placeholder="Tell us more..."
                className="w-full px-3.5 py-2.5 border border-[var(--portal-divider-dark)] rounded-lg text-base text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] outline-none focus:border-[var(--mui-palette-primary-main)] focus:ring-1 focus:ring-[var(--portal-primary-states-focus)] resize-none bg-[var(--mui-palette-background-paper)]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 px-6 sm:px-9 pt-6 pb-6 sm:pb-9">
          <button onClick={onClose} className="px-4 py-1.5 border border-[var(--portal-primary-states-outlined-border)] rounded-lg text-sm font-medium text-[var(--mui-palette-secondary-main)] hover:bg-[var(--portal-primary-states-hover)] transition-colors">Cancel</button>
          <button className="px-4 py-1.5 bg-[var(--mui-palette-primary-main)] rounded-lg text-sm font-medium text-white hover:bg-[var(--mui-palette-primary-dark)] transition-colors">Send Request</button>
        </div>
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import { getInitials } from '../../lib/utils'
import { APPS } from '../../lib/mock-data'

const CATEGORIES = [
  'All Apps','Communication','Collaboration','Project Management','CRM & Sales',
  'Design & Creative','Productivity','HR & People','Finance & Accounting','Security',
  'Analytics & BI','DevOps','Marketing','Customer Support','IT & Operations',
  'Document Management','E-Signature','Payroll','Scheduling','Video & Conferencing',
  'AI & Automation','Data & Storage',
]

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All Apps')
  const [search, setSearch] = useState('')
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const [mobileCatOpen, setMobileCatOpen] = useState(false)
  const navigate = useNavigate()

  const filtered = APPS.filter((app) => {
    const matchesSearch = !search || app.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All Apps' || (app.categories ?? []).includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className="px-4 py-4 sm:px-6 sm:py-6 w-full">
        <div className="mb-5 sm:mb-[26px]">
          <h1 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl sm:text-2xl leading-tight mb-1">App Marketplace</h1>
          <p className="text-[var(--mui-palette-text-secondary)] text-sm">Browse and connect apps for your organization</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={16} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-disabled)] pointer-events-none" />
            <input type="text" placeholder="Search apps..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-[var(--mui-palette-divider)] bg-[var(--mui-palette-background-paper)] text-sm text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] outline-none focus:border-[var(--portal-secondary-outlined-border)] focus:ring-1 focus:ring-[var(--portal-primary-states-focus)]"
            />
          </div>
          <button className="h-10 flex items-center gap-2 px-4 rounded-lg border border-[var(--mui-palette-divider)] bg-[var(--mui-palette-background-paper)] text-sm font-medium text-[var(--mui-palette-secondary-main)] hover:bg-[var(--portal-primary-states-hover)] transition-colors shrink-0">
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Mobile category toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setMobileCatOpen((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-[var(--mui-palette-divider)] bg-[var(--mui-palette-background-paper)] text-sm font-medium text-[var(--mui-palette-text-primary)]"
          >
            <span>Category: {selectedCategory}</span>
            <ChevronDown size={16} className={`transition-transform ${mobileCatOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileCatOpen && (
            <div className="mt-1 border border-[var(--mui-palette-divider)] rounded-xl bg-[var(--mui-palette-background-paper)] overflow-hidden max-h-60 overflow-y-auto">
              {CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => { setSelectedCategory(cat); setMobileCatOpen(false) }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors border-b border-[var(--mui-palette-divider)] last:border-0 ${
                    selectedCategory === cat
                      ? 'font-semibold text-[var(--mui-palette-text-primary)] bg-[var(--portal-primary-states-selected)]'
                      : 'text-[var(--mui-palette-text-secondary)] hover:bg-[var(--portal-primary-states-hover)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-6">
          {/* Desktop categories sidebar */}
          <div className="hidden md:flex w-[235px] shrink-0 flex-col">
            <p className="text-[var(--mui-palette-text-primary)] font-semibold text-sm mb-2">Categories</p>
            <div className="flex flex-col overflow-y-auto">
              {CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`h-[38px] flex items-center px-2 rounded-lg text-base text-left w-full transition-colors ${
                    selectedCategory === cat
                      ? 'font-semibold text-[var(--mui-palette-text-primary)]'
                      : 'font-normal text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="mt-4 relative rounded-xl p-4 flex flex-col gap-2 items-start"
              style={{ background: 'linear-gradient(-69.04deg, rgba(255,255,255,0) 1.44%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, #b388ff 0%, #b388ff 100%)' }}
            >
              <div className="absolute pointer-events-none" style={{ top: -22, right: -2 }}><MagnifierIcon /></div>
              <p className="text-white font-bold text-base leading-[1.75] relative z-10">Are we missing an app?</p>
              <button onClick={() => setRequestModalOpen(true)}
                className="relative z-10 flex items-center gap-2 border border-white rounded-lg px-4 py-1.5 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Send us a request <ChevronRight size={14} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* App grid */}
          <div className="flex-1 min-w-0">
            {selectedCategory !== 'All Apps' && (
              <h2 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl mb-4">{selectedCategory} Apps</h2>
            )}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                {filtered.map((app) => (
                  <div key={app.id} onClick={() => navigate(`/marketplace/${app.id}`)}
                    className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] p-3 sm:p-5 flex flex-col gap-3 sm:gap-4 shadow-[0px_1px_3px_rgba(16,24,40,0.07),0px_1px_3.5px_rgba(16,24,40,0.04)] hover:shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-xl flex items-center justify-center font-bold text-white shrink-0 border border-[var(--mui-palette-divider)] text-sm"
                        style={{ backgroundColor: app.logoColor }}
                      >
                        {getInitials(app.name)}
                      </div>
                      {app.isTopChoice && (
                        <span className="hidden sm:flex items-center gap-1 bg-[#fce4ec] pl-0.5 pr-1.5 py-0.5 rounded-full shrink-0">
                          <span className="w-4 h-4 rounded-full bg-[#f06292] flex items-center justify-center shrink-0">
                            <Star size={9} fill="white" className="text-white" />
                          </span>
                          <span className="text-[#e91e63] text-[11px] font-medium leading-5 whitespace-nowrap">Top Choice</span>
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <p className="text-[var(--mui-palette-text-primary)] font-semibold text-sm sm:text-base leading-[1.75] tracking-[0.15px]">{app.name}</p>
                      <p className="text-[var(--mui-palette-text-secondary)] text-xs sm:text-sm leading-[1.43] line-clamp-2">{app.description ?? ''}</p>
                    </div>
                    {(app.categories ?? []).length > 0 && (
                      <div className="hidden sm:flex flex-wrap gap-2">
                        {(app.categories ?? []).slice(0, 2).map((cat) => (
                          <span key={cat} className="flex items-center h-6 px-1.5 rounded-full bg-[rgba(179,157,219,0.4)] text-[var(--mui-palette-text-primary)] text-[13px] font-medium leading-[22px]">
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 text-[var(--mui-palette-text-secondary)]">No apps found</div>
            )}
          </div>
        </div>
      </div>

      {requestModalOpen && <RequestAppModal onClose={() => setRequestModalOpen(false)} />}
    </Layout>
  )
}
