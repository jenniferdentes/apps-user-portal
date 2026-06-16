import { useState } from 'react'
import { Search, ChevronDown, Plus, Trash2 } from 'lucide-react'
import Avatar from '../../../components/Avatar'
import AddUsersModal from './AddUsersModal'
import type { App } from '../../../types'

export default function UsersTab({ app }: { app: App }) {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = app.users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      {/* Action bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)]" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-[var(--portal-divider-dark)] rounded-lg text-sm text-[var(--mui-palette-text-primary)] placeholder:text-[var(--mui-palette-text-disabled)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] w-[220px] bg-[var(--mui-palette-background-paper)]"
            />
          </div>
          <div className="relative">
            <select className="appearance-none pl-3 pr-8 py-2 border border-[var(--portal-divider-dark)] rounded-lg text-sm text-[var(--mui-palette-text-primary)] bg-[var(--mui-palette-background-paper)] focus:outline-none focus:ring-2 focus:ring-[var(--portal-primary-states-focus-visible)] cursor-pointer">
              <option>All sites</option>
              <option>Monmouth Builders</option>
              <option>Tech Solutions Inc.</option>
              <option>Creative Studio</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--mui-palette-text-secondary)] pointer-events-none"
            />
            <span className="absolute -top-2.5 left-2.5 bg-[var(--mui-palette-background-paper)] px-1 text-xs text-[var(--mui-palette-text-secondary)]">
              Filter by sites
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--mui-palette-primary-main)] text-white text-sm font-medium rounded-lg hover:bg-[var(--mui-palette-primary-dark)] transition-colors"
        >
          <Plus size={15} />
          Add Users
        </button>
      </div>

      {/* Table */}
      <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] overflow-hidden">
        {filtered.length > 0 ? (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--mui-palette-divider)]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)]">Name</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)]">Site</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)]">Job Title</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--mui-palette-text-secondary)] uppercase tracking-wide bg-[var(--portal-elevation-1)]">Departments</th>
                  <th className="w-[72px] bg-[var(--portal-elevation-1)]" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-[var(--mui-palette-divider)] last:border-0 hover:bg-[var(--portal-primary-states-hover)] transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={user.name} size="sm" />
                        <div>
                          <div className="text-[var(--mui-palette-text-primary)] font-medium text-sm">{user.name}</div>
                          <div className="text-[var(--mui-palette-text-secondary)] text-xs truncate max-w-[200px]">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[var(--mui-palette-text-primary)] text-sm">{user.site}</td>
                    <td className="px-4 py-4 text-[var(--mui-palette-text-primary)] text-sm">{user.jobTitle}</td>
                    <td className="px-4 py-4 text-[var(--mui-palette-text-primary)] text-sm">
                      {user.departments.join(', ')}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="text-red-400 hover:text-red-600 transition-colors p-1">
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-end px-4 py-3 border-t border-[var(--mui-palette-divider)]">
              <span className="text-sm text-[var(--mui-palette-text-secondary)]">
                Rows per page: <span className="font-medium text-[var(--mui-palette-text-primary)]">10 ▾</span>
                &nbsp;&nbsp;1–{filtered.length} of {app.users.length}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-[var(--mui-palette-text-secondary)]">
            <p className="text-sm">No users found.</p>
          </div>
        )}
      </div>

      {showModal && (
        <AddUsersModal
          onClose={() => setShowModal(false)}
          onSubmit={(ids) => console.log('Request access for:', ids)}
        />
      )}
    </div>
  )
}
