import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ExternalLink, Play } from 'lucide-react'
import Layout from '../components/Layout'
import AppLogo from '../components/AppLogo'
import Avatar from '../components/Avatar'
import { APPS, CHAMPION_TASKS } from '../lib/mock-data'

function StepCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
      aria-label={checked ? 'Mark incomplete' : 'Mark complete'}
    >
      <div
        className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${
          checked ? 'bg-[#4338CA] border-[#4338CA]' : 'bg-white border-[#d0d5dd]'
        }`}
      >
        {checked && (
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  )
}

export default function ChampionTaskDetail() {
  const { taskId } = useParams<{ taskId: string }>()
  const [tasks, setTasks] = useState(CHAMPION_TASKS)
  const [activeTab, setActiveTab] = useState<'checklist' | 'instructions'>('checklist')

  const task = tasks.find((t) => t.id === taskId)

  if (!task) {
    return (
      <Layout>
        <div className="px-6 py-6">
          <p className="text-[#616a7e]">Task not found.</p>
          <Link to="/champion-tasks" className="mt-4 text-[#4338CA] text-sm font-medium no-underline block">
            ← Back to Champion Tasks
          </Link>
        </div>
      </Layout>
    )
  }

  const app = APPS.find((a) => a.id === task.appId)
  const taskLabel = task.taskType === 'onboarding' ? 'Give access to' : 'Remove access from'
  const completed = task.steps.filter((s) => s.completed).length
  const total = task.steps.length
  const pct = total > 0 ? (completed / total) * 100 : 0

  function toggleStep(stepId: string) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? { ...t, steps: t.steps.map((s) => (s.id === stepId ? { ...s, completed: !s.completed } : s)) }
          : t
      )
    )
  }

  return (
    <Layout>
      <div className="px-6 py-5 w-full flex flex-col gap-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#616a7e]">
          <Link to="/champion-tasks" className="no-underline text-[#616a7e] hover:text-[#202938] transition-colors">
            Champion Tasks
          </Link>
          <span className="text-[#d0d5dd]">/</span>
          <span className="text-[#202938]">{taskLabel} {task.appName}</span>
        </nav>

        {/* Header card */}
        <div className="bg-white border border-[#eaecf0] rounded-xl shadow-[0px_1px_1px_rgba(16,24,40,0.05)] px-4 py-3 flex items-center gap-4">
          <AppLogo name={app?.name ?? task.appName} logoColor={app?.logoColor ?? '#616a7e'} withBorder />
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-semibold text-[#202938] leading-[1.5] tracking-[0.1px]">
              {taskLabel} {task.appName}
            </h1>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-xs text-[#616a7e]">{task.dueDate}</span>
              <span className="text-[#d0d5dd]">·</span>
              <div className="flex items-center gap-1.5">
                <Avatar name={task.userName} size="sm" />
                <span className="text-xs text-[#616a7e]">{task.userName}</span>
              </div>
            </div>
          </div>
          <button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 border border-[#d0d3e8] bg-[#f7f8fc] rounded-lg text-sm font-medium text-[#323767] hover:bg-[#eef0f9] transition-colors">
            Open App
            <ExternalLink size={14} strokeWidth={1.8} />
          </button>
        </div>

        {/* Two-column body */}
        <div className="flex gap-4 items-start">
          {/* Left: tabbed card */}
          <div className="flex-1 min-w-0 bg-white border border-[#eaecf0] rounded-xl shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex flex-col">
            {/* Tab bar */}
            <div className="flex border-b border-[#eaecf0] px-5">
              {(['checklist', 'instructions'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 mr-6 text-sm font-medium border-b-2 -mb-px transition-colors capitalize ${
                    activeTab === tab
                      ? 'border-[#4338CA] text-[#4338CA]'
                      : 'border-transparent text-[#616a7e] hover:text-[#202938]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-5">
              {activeTab === 'checklist' && (
                <div className="flex flex-col gap-4">
                  {/* Progress */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full bg-[#f2f4f7] overflow-hidden">
                      <div
                        className="h-full bg-[#16b364] rounded-full transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#616a7e] shrink-0">{completed}/{total} done</span>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col divide-y divide-[#f2f4f7]">
                    {task.steps.map((step) => (
                      <div key={step.id} className="flex items-center gap-2 py-2 first:pt-0 last:pb-0">
                        <StepCheckbox checked={step.completed} onChange={() => toggleStep(step.id)} />
                        <span
                          className={`flex-1 text-sm leading-[1.5] ${
                            step.completed ? 'text-[#98a2b3] line-through' : 'text-[#202938] font-medium'
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'instructions' && (
                <div className="flex flex-col gap-4">
                  {/* Video */}
                  <div className="flex justify-center">
                    <div className="relative w-[190px] h-[130px] rounded-lg border-2 border-[#eaecf0] overflow-hidden bg-gradient-to-br from-[#c084fc] to-[#818cf8] flex items-center justify-center shadow-[0px_4px_8px_rgba(16,24,40,0.1)]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="relative bg-black/60 rounded-full p-2.5 flex items-center justify-center">
                        <Play size={28} strokeWidth={0} fill="white" className="ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Numbered steps */}
                  <div className="flex flex-col gap-3">
                    {task.instructions.map((step, i) => (
                      <div key={step.id} className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-[18px] h-[18px] bg-[#0288d1] rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0 leading-none">
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-[#202938] leading-[1.57]">
                            {step.title}
                          </span>
                        </div>
                        <ol className="list-decimal ml-[26px] flex flex-col gap-0.5 text-sm text-[#616a7e] leading-[1.5]">
                          {step.subSteps.map((sub, j) => (
                            <li key={j}>{sub}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>

                </div>
              )}
            </div>
          </div>

          {/* Right: Task Info */}
          <div className="w-[300px] shrink-0 bg-white border border-[#eaecf0] rounded-xl shadow-[0px_1px_1px_rgba(16,24,40,0.05)] p-4 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-sm font-semibold text-[#202938] tracking-[0.1px]">Task Info</h2>
              <AppLogo name={app?.name ?? task.appName} logoColor={app?.logoColor ?? '#616a7e'} size="sm" withBorder />
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold text-[#98a2b3] uppercase tracking-wider">Task</span>
                <span className="text-[#202938] leading-[1.43]">{taskLabel} {task.appName}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold text-[#98a2b3] uppercase tracking-wider">Date</span>
                <span className="text-[#616a7e] leading-[1.43]">{task.dueDate}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold text-[#98a2b3] uppercase tracking-wider">User</span>
                <div className="flex items-center gap-1.5">
                  <Avatar name={task.userName} size="sm" />
                  <span className="text-[#202938] leading-[1.43] truncate">{task.userName}</span>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold text-[#98a2b3] uppercase tracking-wider">Email</span>
                <span className="text-[#616a7e] leading-[1.43] break-all">{task.userEmail}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold text-[#98a2b3] uppercase tracking-wider">Link to App</span>
                <a
                  href={app?.appUrl ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline inline-flex items-center gap-1 font-medium text-[#3a3e75] hover:opacity-75 transition-opacity"
                >
                  {task.appName}
                  <ExternalLink size={12} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
