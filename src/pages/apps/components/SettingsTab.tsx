import { Trophy, Pencil } from 'lucide-react'
import Avatar from '../../../components/Avatar'
import type { App, Champion } from '../../../types'

function ChampionCard({ champion }: { champion: Champion }) {
  const isPrimary = champion.role === 'primary'
  return (
    <div className="flex-1 border border-gray-200 rounded-xl p-4">
      <span
        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-4 ${
          isPrimary ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
        }`}
      >
        {isPrimary ? 'Primary Champion' : 'Backup Champion'}
      </span>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={champion.name} />
          <div>
            <div className="text-[#202938] font-medium text-sm">{champion.name}</div>
            <div className="text-[#616a7e] text-xs">{champion.email}</div>
          </div>
        </div>
        <button className="p-1.5 text-[#616a7e] hover:text-[#202938] hover:bg-gray-100 rounded-lg transition-colors">
          <Pencil size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

export default function SettingsTab({ app }: { app: App }) {
  const primary = app.champions.find((c) => c.role === 'primary')
  const backup = app.champions.find((c) => c.role === 'backup')

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
      <h3 className="flex items-center gap-2 text-[#202938] font-semibold text-base mb-5">
        <Trophy size={18} className="text-[#616a7e]" strokeWidth={1.5} />
        Champion Assignment
      </h3>
      <div className="flex gap-4">
        {primary && <ChampionCard champion={primary} />}
        {backup ? (
          <ChampionCard champion={backup} />
        ) : (
          <div className="flex-1 border border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center text-sm text-[#616a7e]">
            No backup champion assigned
          </div>
        )}
      </div>
    </div>
  )
}
