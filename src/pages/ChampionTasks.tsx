import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import AppLogo from '../components/AppLogo'
import Avatar from '../components/Avatar'
import { APPS, CHAMPION_TASKS } from '../lib/mock-data'
import type { ChampionTaskItem } from '../types'

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const pct = total > 0 ? (completed / total) * 100 : 0
  return (
    <div className="w-[200px] h-2 rounded-full bg-[var(--portal-accent2)] overflow-hidden">
      <div
        className="h-full bg-[var(--mui-palette-success-main)] rounded-full"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

function TaskCard({ task }: { task: ChampionTaskItem }) {
  const app = APPS.find((a) => a.id === task.appId)
  const navigate = useNavigate()
  const completed = task.steps.filter((s) => s.completed).length
  const total = task.steps.length
  const label = task.taskType === 'onboarding' ? 'Give access to' : 'Remove access from'

  return (
    <div
      className="bg-[var(--mui-palette-background-paper)] border border-[var(--mui-palette-divider)] rounded-xl shadow-[0px_1px_3px_rgba(16,24,40,0.07),0px_1px_3.5px_rgba(16,24,40,0.04)] p-4 flex items-center gap-4 w-full cursor-pointer hover:shadow-[0px_4px_8px_rgba(16,24,40,0.08),0px_2px_4px_rgba(16,24,40,0.04)] transition-shadow"
      onClick={() => navigate(`/champion-tasks/${task.id}`)}
    >
      {/* App logo */}
      <AppLogo
        name={app?.name ?? task.appName}
        logoColor={app?.logoColor ?? '#616a7e'}
        withBorder
      />

      {/* Title + user */}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <p className="text-[var(--mui-palette-text-primary)] font-semibold text-sm leading-[1.57] tracking-[0.1px]">
          {label} {task.appName}
        </p>
        <div className="flex items-center gap-2">
          <Avatar name={task.userName} size="sm" />
          <span className="text-[var(--mui-palette-text-primary)] text-sm leading-[1.43]">{task.userName}</span>
        </div>
      </div>

      {/* Date + progress */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.43]">{task.dueDate}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Check size={18} strokeWidth={2} className="text-[var(--mui-palette-success-main)]" />
            <span className="text-[var(--mui-palette-text-primary)] font-semibold text-sm leading-[1.57] tracking-[0.1px]">
              {completed} of {total}
            </span>
          </div>
          <ProgressBar completed={completed} total={total} />
        </div>
      </div>
    </div>
  )
}

export default function ChampionTasks() {
  const openTasks = CHAMPION_TASKS.filter((t) => t.steps.some((s) => !s.completed))

  return (
    <Layout>
      <div className="px-6 py-6 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[var(--mui-palette-text-primary)] font-bold text-[34px] leading-[1.235] tracking-[0.25px]">
            Champion Tasks
          </h1>
          <p className="text-[var(--mui-palette-text-secondary)] text-sm leading-[1.43]">
            {openTasks.length} open {openTasks.length === 1 ? 'task' : 'tasks'}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {CHAMPION_TASKS.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
