import type { AppStatus } from '../types'

const STATUS_CONFIG: Record<AppStatus, { dot: string; text: string; bg: string; label: string }> = {
  active: {
    dot: 'bg-green-500',
    text: 'text-green-800',
    bg: 'bg-[#edfcf2]',
    label: 'Active',
  },
  configuring: {
    dot: 'bg-amber-500',
    text: 'text-amber-700',
    bg: 'bg-amber-50',
    label: 'Configuring',
  },
  inactive: {
    dot: 'bg-gray-400',
    text: 'text-gray-600',
    bg: 'bg-gray-100',
    label: 'Inactive',
  },
}

export default function StatusBadge({ status }: { status: AppStatus }) {
  const { dot, text, bg, label } = STATUS_CONFIG[status]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${bg} ${text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  )
}
