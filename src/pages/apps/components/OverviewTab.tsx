import { Building2, Briefcase } from 'lucide-react'
import type { App } from '../../../types'

function ProvisioningChip({ type }: { type: App['provisioning'] }) {
  const labels: Record<App['provisioning'], string> = {
    champion: 'Champion',
    automatic: 'Automatic',
    saml: 'SAML',
  }
  const colors: Record<App['provisioning'], string> = {
    champion: 'bg-amber-100 text-amber-700',
    automatic: 'bg-blue-100 text-blue-700',
    saml: 'bg-purple-100 text-purple-700',
  }
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[type]}`}>
      {labels[type]}
    </span>
  )
}

function EntityTag({ name, type }: { name: string; type: App['appliesTo'][0]['type'] }) {
  const Icon = type === 'organization' ? Building2 : Briefcase
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full text-sm text-[#202938] bg-[#f7f8fc]">
      <Icon size={14} className="text-[#616a7e]" strokeWidth={1.5} />
      {name}
    </span>
  )
}

function TaskBullet({ status }: { status: 'completed' | 'overdue' | 'pending' }) {
  const color =
    status === 'completed' ? 'bg-green-500' : status === 'overdue' ? 'bg-amber-500' : 'bg-gray-400'
  return <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${color}`} />
}

export default function OverviewTab({ app }: { app: App }) {
  return (
    <div className="flex flex-col gap-3">
      {/* How users are provisioned */}
      <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
        <h3 className="text-[#202938] font-semibold text-base mb-4">How users are provisioned</h3>
        <div className="flex items-center gap-3">
          <ProvisioningChip type={app.provisioning} />
          <span className="text-sm text-[#616a7e]">A champion is notified to add the user manually</span>
        </div>
      </div>

      {/* Who this app applies to */}
      <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
        <h3 className="text-[#202938] font-semibold text-base mb-4">Who this app applies to</h3>
        {app.appliesTo.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {app.appliesTo.map((item) => (
              <EntityTag key={item.id} name={item.name} type={item.type} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#616a7e]">No restrictions — applies to all users.</p>
        )}
      </div>

      {/* Recent champion tasks */}
      <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
        <h3 className="text-[#202938] font-semibold text-base mb-4">Recent champion tasks</h3>
        {app.recentTasks.length > 0 ? (
          <div className="flex flex-col">
            {app.recentTasks.map((task, i) => (
              <div
                key={task.id}
                className={`flex items-start justify-between py-3 ${
                  i < app.recentTasks.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <TaskBullet status={task.status} />
                  <span className="text-sm text-[#202938]">
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
                <span className="text-xs text-[#616a7e] shrink-0 ml-4">{task.date}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#616a7e]">No recent champion task activity.</p>
        )}
      </div>
    </div>
  )
}
