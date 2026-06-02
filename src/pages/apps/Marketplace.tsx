import { useState } from 'react'
import { Search, SlidersHorizontal, Star, ChevronRight, X } from 'lucide-react'

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-[600px] shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pt-9 px-9 pb-6">
          <h2 className="text-[#202938] font-semibold text-xl leading-[1.6] tracking-[0.15px]">
            Request New App
          </h2>
          <button
            onClick={onClose}
            className="text-[#616a7e] hover:text-[#202938] transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="px-9 pb-5 flex flex-col gap-6">
          {/* Description row */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-[#202938] font-semibold text-base leading-[1.75] tracking-[0.15px]">
                Can't find the app you're looking for?
              </p>
              <p className="text-[#616a7e] text-sm leading-[1.43]">
                Don't worry, just tell us the name of the app and we'll do our best to get it working for you.
              </p>
            </div>
            <div className="shrink-0">
              <MagnifierIcon />
            </div>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#202938] font-semibold text-sm leading-[1.57] tracking-[0.1px]">
                App Name
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-3.5 py-2.5 border border-[#d0d5dd] rounded-lg text-base text-[#202938] placeholder:text-[#9aa2b2] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] outline-none focus:border-[#3a3e75] focus:ring-1 focus:ring-[#3a3e75]/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#202938] font-semibold text-sm leading-[1.57] tracking-[0.1px]">
                Link to app website
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-3.5 py-2.5 border border-[#d0d5dd] rounded-lg text-base text-[#202938] placeholder:text-[#9aa2b2] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] outline-none focus:border-[#3a3e75] focus:ring-1 focus:ring-[#3a3e75]/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#202938] font-semibold text-sm leading-[1.57] tracking-[0.1px]">
                Additional information (optional)
              </label>
              <textarea
                placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                rows={4}
                className="w-full px-3.5 py-2.5 border border-[#d0d5dd] rounded-lg text-base text-[#202938] placeholder:text-[#9aa2b2] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] outline-none focus:border-[#3a3e75] focus:ring-1 focus:ring-[#3a3e75]/20 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 px-9 pt-6 pb-9">
          <button
            onClick={onClose}
            className="px-4 py-1.5 border border-[rgba(50,55,103,0.3)] rounded-lg text-sm font-medium text-[#333764] hover:bg-gray-50 transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
          >
            Cancel
          </button>
          <button className="px-4 py-1.5 bg-[#3a3e75] rounded-lg text-sm font-medium text-white hover:bg-[#2f3260] transition-colors">
            Send Request
          </button>
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
  'All Apps',
  'Communication',
  'Collaboration',
  'Project Management',
  'CRM & Sales',
  'Design & Creative',
  'Productivity',
  'HR & People',
  'Finance & Accounting',
  'Security',
  'Analytics & BI',
  'DevOps',
  'Marketing',
  'Customer Support',
  'IT & Operations',
  'Document Management',
  'E-Signature',
  'Payroll',
  'Scheduling',
  'Video & Conferencing',
  'AI & Automation',
  'Data & Storage',
]

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All Apps')
  const [search, setSearch] = useState('')
  const [requestModalOpen, setRequestModalOpen] = useState(false)
  const navigate = useNavigate()

  const filtered = APPS.filter((app) => {
    const matchesSearch = !search || app.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All Apps' ||
      (app.categories ?? []).includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className="px-6 py-6 w-full">
        {/* Header */}
        <div className="mb-[26px]">
          <h1 className="text-[#202938] font-semibold text-2xl leading-tight mb-1">
            App Marketplace
          </h1>
          <p className="text-[#616a7e] text-sm">
            Browse and connect apps for your organization
          </p>
        </div>

        {/* Action bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 relative">
            <Search size={16} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da3b0] pointer-events-none" />
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-lg border border-gray-200 bg-white text-sm text-[#202938] placeholder:text-[#9da3b0] outline-none focus:border-[#d0d3e8] focus:ring-1 focus:ring-[#d0d3e8]"
            />
          </div>
          <button className="h-10 flex items-center gap-2 px-4 rounded-lg border border-gray-200 bg-white text-sm font-medium text-[#323767] hover:bg-gray-50 transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)] shrink-0">
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filters
          </button>
        </div>

        {/* Main content */}
        <div className="flex gap-6">
          {/* Categories sidebar */}
          <div className="w-[235px] shrink-0 flex flex-col">
            <p className="text-[#202938] font-semibold text-sm mb-2">Categories</p>
            <div className="flex flex-col overflow-y-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`h-[38px] flex items-center px-2 rounded-lg text-base text-left w-full transition-colors ${
                    selectedCategory === cat
                      ? 'font-semibold text-[#202938]'
                      : 'font-normal text-[#616a7e] hover:text-[#202938]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Missing app banner */}
            <div
              className="mt-4 relative rounded-xl p-4 flex flex-col gap-2 items-start"
              style={{
                background:
                  'linear-gradient(-69.04deg, rgba(255,255,255,0) 1.44%, rgba(255,255,255,0.1) 100%), linear-gradient(90deg, #b388ff 0%, #b388ff 100%)',
              }}
            >
              {/* Decorative magnifier icon */}
              <div className="absolute pointer-events-none" style={{ top: -22, right: -2 }}>
                <MagnifierIcon />
              </div>

              <p className="text-white font-bold text-base leading-[1.75] relative z-10">
                Are we missing an app?
              </p>
              <button
                onClick={() => setRequestModalOpen(true)}
                className="relative z-10 flex items-center gap-2 border border-white rounded-lg px-4 py-1.5 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Send us a request
                <ChevronRight size={14} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* App grid */}
          <div className="flex-1 min-w-0">
            {selectedCategory !== 'All Apps' && (
              <h2 className="text-[#202938] font-semibold text-xl mb-4">
                {selectedCategory} Apps
              </h2>
            )}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-4 gap-6">
                {filtered.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => navigate(`/marketplace/${app.id}`)}
                    className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4 shadow-[0px_1px_3px_rgba(16,24,40,0.07),0px_1px_3.5px_rgba(16,24,40,0.04)] hover:shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-shadow duration-200 cursor-pointer"
                  >
                    {/* Logo + Top Choice badge */}
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className="w-[60px] h-[60px] rounded-xl flex items-center justify-center font-bold text-white shrink-0 border border-[#eaecf0] text-sm"
                        style={{ backgroundColor: app.logoColor }}
                      >
                        {getInitials(app.name)}
                      </div>
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

                    {/* Name + description */}
                    <div className="flex flex-col gap-2">
                      <p className="text-[#202938] font-semibold text-base leading-[1.75] tracking-[0.15px]">
                        {app.name}
                      </p>
                      <p className="text-[#616a7e] text-sm leading-[1.43]">
                        {app.description ?? ''}
                      </p>
                    </div>

                    {/* Category chips */}
                    {(app.categories ?? []).length > 0 && (
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
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-48 text-[#616a7e]">
                No apps found
              </div>
            )}
          </div>
        </div>
      </div>

      {requestModalOpen && (
        <RequestAppModal onClose={() => setRequestModalOpen(false)} />
      )}
    </Layout>
  )
}
