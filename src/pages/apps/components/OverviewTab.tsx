import { Building2, Briefcase } from 'lucide-react'
import type { App } from '../../../types'

function ProvisioningChip({ type }: { type: App['provisioning'] }) {
  const labels: Record<App['provisioning'], string> = {
    champion: 'Champion',
    automatic: 'Automatic',
    saml: 'SAML',
  }
  const styles: Record<App['provisioning'], React.CSSProperties> = {
    champion: { color: 'var(--portal-accent1-dark)', backgroundColor: 'var(--portal-accent1-light)' },
    automatic: { color: 'var(--portal-accent6-dark)', backgroundColor: 'var(--portal-accent6-light)' },
    saml:      { color: 'var(--portal-accent9-dark)', backgroundColor: 'var(--portal-accent9-light)' },
  }
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={styles[type]}
    >
      {labels[type]}
    </span>
  )
}

function EntityTag({ name, type }: { name: string; type: App['appliesTo'][0]['type'] }) {
  const Icon = type === 'organization' ? Building2 : Briefcase
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--mui-palette-divider)] rounded-full text-sm text-[var(--mui-palette-text-primary)] bg-[var(--portal-elevation-1)]">
      <Icon size={14} className="text-[var(--mui-palette-text-secondary)]" strokeWidth={1.5} />
      {name}
    </span>
  )
}

function TaskBullet({ status }: { status: 'completed' | 'overdue' | 'pending' }) {
  const color =
    status === 'completed'
      ? 'bg-[var(--mui-palette-success-main)]'
      : status === 'overdue'
      ? 'bg-[var(--mui-palette-warning-main)]'
      : 'bg-[var(--portal-icon-subtle)]'
  return <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${color}`} />
}

export default function OverviewTab({ app }: { app: App }) {
  return (
    <div className="flex flex-col gap-3">
      {/* How users are provisioned */}
      <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-6 py-5">
        <h3 className="text-[var(--mui-palette-text-primary)] font-semibold text-base mb-4">How users are provisioned</h3>
        <div className="flex items-center gap-3">
          <ProvisioningChip type={app.provisioning} />
          <span className="text-sm text-[var(--mui-palette-text-secondary)]">A champion is notified to add the user manually</span>
        </div>
      </div>

      {/* Who this app applies to */}
      <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-6 py-5">
        <h3 className="text-[var(--mui-palette-text-primary)] font-semibold text-base mb-4">Who this app applies to</h3>
        {app.appliesTo.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {app.appliesTo.map((item) => (
              <EntityTag key={item.id} name={item.name} type={item.type} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--mui-palette-text-secondary)]">No restrictions — applies to all users.</p>
        )}
      </div>

      {/* Recent champion tasks */}
      <div className="bg-[var(--mui-palette-background-paper)] rounded-xl border border-[var(--mui-palette-divider)] px-6 py-5">
        <h3 className="text-[var(--mui-palette-text-primary)] font-semibold text-base mb-4">Recent champion tasks</h3>
        {app.recentTasks.length > 0 ? (
          <div className="flex flex-col">
            {app.recentTasks.map((task, i) => (
              <div
                key={task.id}
                className={`flex items-start justify-between py-3 ${
                  i < app.recentTasks.length - 1 ? 'border-b border-[var(--mui-palette-divider)]' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <TaskBullet status={task.status} />
                  <span className="text-sm text-[var(--mui-palette-text-primary)]">
                    {task.status === 'overdue' ? (
                      <>
                        {task.type.charAt(0).toUpperCase() + task.type.slice(1)} for{' '}
                        <strong>{task.userName}</strong> is overdue
                      </>
                    ) : (
                      <>
                        <strong>{task.championName}</strong> completed {task.type} for{' '}
                        <strong>{task.userName}</strong>
                      </>
                    )}
                  </span>
                </div>
                <span className="text-xs text-[var(--mui-palette-text-secondary)] shrink-0 ml-4">{task.date}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--mui-palette-text-secondary)]">No recent champion task activity.</p>
        )}
      </div>
    </div>
  )
}
