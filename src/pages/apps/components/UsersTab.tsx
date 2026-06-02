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
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#616a7e]" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#202938] placeholder:text-[#9da3b0] focus:outline-none focus:ring-2 focus:ring-indigo-200 w-[220px] bg-white"
            />
          </div>
          <div className="relative">
            <select className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm text-[#202938] bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200 cursor-pointer">
              <option>All sites</option>
              <option>Monmouth Builders</option>
              <option>Tech Solutions Inc.</option>
              <option>Creative Studio</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#616a7e] pointer-events-none"
            />
            <span className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-[#616a7e]">
              Filter by sites
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#1B2454] text-white text-sm font-medium rounded-lg hover:bg-[#151c44] transition-colors"
        >
          <Plus size={15} />
          Add Users
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {filtered.length > 0 ? (
          <>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Name</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Site</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Job Title</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#616a7e] uppercase tracking-wide">Departments</th>
                  <th className="w-[72px]" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={user.name} size="sm" />
                        <div>
                          <div className="text-[#202938] font-medium text-sm">{user.name}</div>
                          <div className="text-[#616a7e] text-xs truncate max-w-[200px]">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[#202938] text-sm">{user.site}</td>
                    <td className="px-4 py-4 text-[#202938] text-sm">{user.jobTitle}</td>
                    <td className="px-4 py-4 text-[#202938] text-sm">
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
            <div className="flex items-center justify-end px-4 py-3 border-t border-gray-100">
              <span className="text-sm text-[#616a7e]">
                Rows per page: <span className="font-medium text-[#202938]">10 ▾</span>
                &nbsp;&nbsp;1–{filtered.length} of {app.users.length}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-[#616a7e]">
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
