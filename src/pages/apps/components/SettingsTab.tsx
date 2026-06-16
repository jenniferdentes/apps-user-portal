import { Trophy, Pencil } from 'lucide-react'
import Avatar from '../../../components/Avatar'
import type { App, Champion } from '../../../types'

function ChampionCard({ champion }: { champion: Champion }) {
  const isPrimary = champion.role === 'primary'
  return (
    <div className="flex-1 border border-[var(--mui-palette-divider)] rounded-xl p-4">
      <span
        className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-4"
        style={
          isPrimary
            ? { color: 'var(--portal-accent1-dark)', backgroundColor: 'var(--portal-accent1-light)' }
            : { color: 'var(--portal-accent6-dark)', backgroundColor: 'var(--portal-accent6-light)' }
        }
      >
        {isPrimary ? 'Primary Champion' : 'Backup Champion'}
      </span>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar name={champion.name} />
          <div>
            <div className="text-[var(--mui-palette-text-primary)] font-medium text-sm">{champion.name}</div>
            <div className="text-[var(--mui-palette-text-secondary)] text-xs">{champion.email}</div>
          </div>
        </div>
        <button className="p-1.5 text-[var(--mui-palette-text-secondary)] hover:text-[var(--mui-palette-text-primary)] hover:bg-[var(--portal-primary-states-hover)] rounded-lg transition-colors">
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
    <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-6 py-5">
      <h3 className="flex items-center gap-2 text-[var(--mui-palette-text-primary)] font-semibold text-base mb-5">
        <Trophy size={18} className="text-[var(--mui-palette-text-secondary)]" strokeWidth={1.5} />
        Champion Assignment
      </h3>
      <div className="flex gap-4">
        {primary && <ChampionCard champion={primary} />}
        {backup ? (
          <ChampionCard champion={backup} />
        ) : (
          <div className="flex-1 border border-dashed border-[var(--portal-divider-dark)] rounded-xl p-4 flex items-center justify-center text-sm text-[var(--mui-palette-text-secondary)]">
            No backup champion assigned
          </div>
        )}
      </div>
    </div>
  )
}
