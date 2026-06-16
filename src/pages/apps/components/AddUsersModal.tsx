import { useState } from 'react'
import { X, Search, ChevronDown } from 'lucide-react'

interface AvailableUser {
  id: string
  name: string
  initials: string
  avatarBg: string
  avatarText: string
  jobTitle: string
  site: string
}

const AVAILABLE_USERS: AvailableUser[] = [
  { id: '1', name: 'Hiro Joyce',        initials: 'HJ', avatarBg: '#f8e5cc', avatarText: '#dd7b00', jobTitle: 'Nurse Manager',      site: 'Maplewood Assisted Living' },
  { id: '2', name: 'Alice Smith',       initials: 'AS', avatarBg: '#f9d6d8', avatarText: '#e2333c', jobTitle: 'Senior Nurse',        site: 'Green Valley Hospital' },
  { id: '3', name: 'Mark Brown',        initials: 'MB', avatarBg: '#fccce4', avatarText: '#ef0078', jobTitle: 'Clinical Supervisor',  site: 'Sunnydale Clinic' },
  { id: '4', name: 'Jessica Taylor',    initials: 'JT', avatarBg: '#f6d4ed', avatarText: '#d129a3', jobTitle: 'Pediatric Nurse',      site: "Children's Health Center" },
  { id: '5', name: 'Robert Perez',      initials: 'RP', avatarBg: '#e0e1fa', avatarText: '#6267e6', jobTitle: 'Emergency Nurse',      site: 'City General Hospital' },
  { id: '6', name: 'Laura Davis',       initials: 'LD', avatarBg: '#cce3f1', avatarText: '#0071ba', jobTitle: 'Nurse Practitioner',   site: 'Wellness Family Practice' },
  { id: '7', name: 'Charles Thompson',  initials: 'CT', avatarBg: '#cce6e9', avatarText: '#008491', jobTitle: 'ICU Nurse',            site: 'Riverbend Medical Center' },
  { id: '8', name: 'Samantha Miller',   initials: 'SM', avatarBg: '#e3eccc', avatarText: '#73a200', jobTitle: 'Oncology Nurse',       site: 'Hope Cancer Institute' },
]

interface Props {
  onClose: () => void
  onSubmit: (ids: string[]) => void
}

export default function AddUsersModal({ onClose, onSubmit }: Props) {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [site, setSite] = useState('All sites')
  const [jobTitle, setJobTitle] = useState('All Job Titles')

  const filtered = AVAILABLE_USERS.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.jobTitle.toLowerCase().includes(search.toLowerCase()),
  )

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(16,24,40,0.4)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-[var(--mui-palette-background-paper)] rounded-xl w-full max-w-[717px] flex flex-col overflow-hidden"
        style={{ boxShadow: '0px 8px 8px -4px rgba(16,24,40,0.03), 0px 20px 24px -4px rgba(16,24,40,0.08)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-9 pt-9 pb-6">
          <h2 className="text-[var(--mui-palette-text-primary)] font-semibold text-xl leading-[1.6] tracking-[0.15px]">
            Request access for a user
          </h2>
          <button
            onClick={onClose}
            className="text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] transition-colors p-0.5 -mt-0.5"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="px-9 pb-5 flex flex-col gap-4">
          <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.43]">
            Select users to request provision access
          </p>

          {/* Filters */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)]" />
              <input
                type="text"
                placeholder="Search users"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-[var(--portal-divider-dark)] rounded-lg text-base text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] bg-[var(--mui-palette-background-paper)]"
              />
            </div>

            {/* Site filter */}
            <div className="relative flex-1">
              <label className="absolute -top-2 left-3 bg-[var(--mui-palette-background-paper)] px-1 text-xs text-[var(--mui-palette-text-secondary)] z-10">
                Filter by
              </label>
              <select
                value={site}
                onChange={(e) => setSite(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2.5 border border-[var(--portal-divider-dark)] rounded-lg text-base text-[var(--mui-palette-text-primary)] bg-[var(--mui-palette-background-paper)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] cursor-pointer"
              >
                <option>All sites</option>
                <option>Maplewood Assisted Living</option>
                <option>Green Valley Hospital</option>
                <option>Sunnydale Clinic</option>
                <option>City General Hospital</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)] pointer-events-none" />
            </div>

            {/* Job title filter */}
            <div className="relative flex-1">
              <label className="absolute -top-2 left-3 bg-[var(--mui-palette-background-paper)] px-1 text-xs text-[var(--mui-palette-text-secondary)] z-10">
                Filter by
              </label>
              <select
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full appearance-none pl-3 pr-8 py-2.5 border border-[var(--portal-divider-dark)] rounded-lg text-base text-[var(--mui-palette-text-primary)] bg-[var(--mui-palette-background-paper)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] cursor-pointer"
              >
                <option>All Job Titles</option>
                <option>Nurse Manager</option>
                <option>Senior Nurse</option>
                <option>Clinical Supervisor</option>
                <option>Pediatric Nurse</option>
                <option>Emergency Nurse</option>
                <option>Nurse Practitioner</option>
                <option>ICU Nurse</option>
                <option>Oncology Nurse</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)] pointer-events-none" />
            </div>
          </div>

          {/* User list */}
          <div className="border border-[var(--mui-palette-divider)] rounded-xl overflow-hidden max-h-[420px] overflow-y-auto">
            {filtered.map((user, i) => (
              <label
                key={user.id}
                className={`flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-[var(--portal-elevation-1)] transition-colors ${
                  i < filtered.length - 1 ? 'border-b border-[var(--mui-palette-divider)]' : ''
                }`}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selected.has(user.id)}
                  onChange={() => toggle(user.id)}
                  className="w-4 h-4 rounded border-[var(--portal-divider-dark)] cursor-pointer shrink-0"
                  style={{ accentColor: 'var(--mui-palette-primary-main)' }}
                />

                {/* Avatar */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0"
                  style={{ backgroundColor: user.avatarBg, color: user.avatarText }}
                >
                  {user.initials}
                </div>

                {/* Info */}
                <div className="flex flex-col min-w-0">
                  <span className="text-[var(--mui-palette-text-primary)] font-semibold text-sm leading-[1.57] tracking-[0.1px] whitespace-nowrap">
                    {user.name}
                  </span>
                  <span className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.43] flex items-center gap-2">
                    {user.jobTitle}
                    <span className="text-[var(--mui-palette-text-disabled)]">•</span>
                    {user.site}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-9 pt-6 pb-9">
          <button
            onClick={onClose}
            className="px-4 py-1.5 border border-[var(--portal-primary-states-outlined-border)] rounded-lg text-sm font-medium text-[var(--mui-palette-secondary-main)] bg-[var(--mui-palette-background-paper)] hover:bg-[var(--portal-primary-states-hover)] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
          >
            Cancel
          </button>
          <button
            onClick={() => { onSubmit([...selected]); onClose() }}
            disabled={selected.size === 0}
            className="px-4 py-1.5 bg-[var(--mui-palette-primary-main)] text-white text-sm font-medium rounded-lg hover:bg-[var(--mui-palette-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  )
}
